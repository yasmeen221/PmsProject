import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState, lazy, Suspense, useCallback } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import ProtectedRouting from "./ProtectedRouting";
import Icons from "./themes/icons";
import { useRefreshTokenMutation } from "./features/LogIn/slices/apis/apiLoginSlice";
import { useSelector } from "react-redux";
import Learnings from "./pages/Learnings";
import { Surveys } from "./assets/icons/icons";
import Compensations from "./pages/Compensations";
import Goals from "./pages/Goals";
import Settings from "./pages/Settings";

// Lazy-loaded components
const ResetPassword = lazy(
  () => import("./features/ResetPassword/pages/ResetPassword"),
);
const Competencies = lazy(
  () => import("./features/Competencies/pages/Competencies"),
);
const FeedBack = lazy(() => import("./features/FeedBack/pages/FeedBack"));
const Users = lazy(() => import("./features/User&Teams/pages/Users"));
const LogInPage = lazy(() => import("./features/LogIn/pages/LogInPage"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  const [refreshToken, { }] = useRefreshTokenMutation(); //to   refresh token when the time of access token ended
  const accessToken = useSelector(
    (state) => state.persistantReducer.userDataReducer.userData,
  ); //get access token (stored )from global state
  const role = accessToken.length > 0 ? jwtDecode(accessToken).role : ""; //to don't decode if the data is removed from global state
  const cookie = new Cookies();

  useEffect(() => {

    const refreshTokenValue = cookie.get("refreshToken");
    console.log("Refresh Token:", refreshTokenValue);

    if (accessToken && refreshTokenValue && jwtDecode(accessToken)?.exp < Date.now() / 1000) {
      refreshToken(refreshTokenValue)
        .unwrap()
        .then((res) => {
          console.log("Refresh Token Response:", res);
          if (res.status === "success" && res.data.accessToken) {
            const decodedAccessToken = jwtDecode(res.data.accessToken);
            const accessTokenExpiry = decodedAccessToken.exp * 1000;

            cookie.remove("userToken");
            cookie.set('userToken', res.data.accessToken, { expires: new Date(accessTokenExpiry) });


            console.log("Access token refreshed successfully.");
          } else {
            console.error("Failed to refresh access token:", res.error);
            cookie.remove("userToken");
            cookie.remove("refreshToken");
            Navigate('/')
          }
        })
        .catch((error) => {
          console.error("Error refreshing access token:", error);
          cookie.remove("userToken");
          cookie.remove("refreshToken");
          Navigate('/')
        });
    }


  }, [cookie, accessToken, refreshToken]);
  return (
    <Router>
      <Suspense
        fallback={
          <div className=" w-full h-full inline-flex  items-center justify-center">
            <Icons.Loading />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/setpassword/:token" element={<ResetPassword />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouting>
                <Dashboard />
              </ProtectedRouting>
            }
          >
            <Route
              path="competencies"
              element={
                <ProtectedRouting>
                  <Competencies />{" "}
                </ProtectedRouting>
              }
            />
            <Route
              path="feedback"
              element={
                <ProtectedRouting>
                  <FeedBack />
                </ProtectedRouting>
              }
            />
            <Route
              path="learnings"
              element={
                <ProtectedRouting>
                  <Learnings />
                </ProtectedRouting>
              }
            ></Route>
            <Route
              path="surveys"
              element={
                <ProtectedRouting>
                  <Surveys />
                </ProtectedRouting>
              }
            ></Route>
            <Route
              path="compensations"
              element={
                <ProtectedRouting>
                  <Compensations />
                </ProtectedRouting>
              }
            ></Route>
            <Route
              path="goals"
              element={
                <ProtectedRouting>
                  <Goals />
                </ProtectedRouting>
              }
            ></Route>
            <Route
              path="settings"
              element={
                <ProtectedRouting>
                  <Settings />
                </ProtectedRouting>
              }
            ></Route>
            <Route
              path={
                role == "superAdmin" || role == "admin"
                  ? "users&teams"
                  : "notfound"
              } //notfound will go to * so that it will render not found page
              element={
                <ProtectedRouting role={role}>
                  <Users />
                </ProtectedRouting>
              }
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
