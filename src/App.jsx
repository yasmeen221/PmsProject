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
  const [refreshToken, {}] = useRefreshTokenMutation(); //to   refresh token when the time of access token ended
  const accessToken = useSelector(
    (state) => state.persistantReducer.userDataReducer.userData,
  ); //get access token (stored )from global state
  const role = accessToken.length > 0 ? jwtDecode(accessToken).role : ""; //to don't decode if the data is removed from global state
  const cookie = new Cookies();

  useEffect(() => {
    // let refreshTokenValue = cookie.get("refreshToken")

    if (accessToken && jwtDecode(accessToken)?.exp > Date.now() / 1000) {
      const decodedUserToken = jwtDecode(accessToken);
      console.log("nnnnnnn", decodedUserToken);
      console.log(accessToken);
    }
    //TRUE
    // const interval = setInterval(() => {
    //   const refreshTokenValue = cookie.get("refreshToken");
    //   console.log("rrr", refreshTokenValue)
    //   if (accessToken && jwtDecode(accessToken)?.exp < Date.now() / 1000) {
    //     refreshToken(refreshTokenValue).unwrap().then((res) => {
    //       console.log("ressssssssssssss",res)

    //       cookie.update('refreshToken', res.data.accessToken, { expires: new Date(jwtDecode(accessToken).exp * 1000) });
    //       console.log("refresh token done")
    //       console.log("ressssssssssssss",res)
    //       clearInterval(interval)
    //     });

    //   }
    // }, 60000) //EVERY 1 MINUTE
    // return (() => {
    //   clearInterval(interval)
    // })
    //END TRUE
  }, []); //to ensure ypu get the updated role of user
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
