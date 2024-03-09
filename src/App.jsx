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
  const [userData, setUserData] = useState(null);
  const [refreshToken, { }] = useRefreshTokenMutation()
  const accessToken=useSelector(state=>state.persistantReducer.userDataReducer.userData)
  const role=accessToken.length>0?jwtDecode(accessToken).role:"" ; //to dont decode if the data is removed from global state
  const saveUserData = (data) => {
    setUserData(data);
  };
  const cookie = new Cookies();
  // const checkTokenExpiration = () => {
  //   const token = cookie.get("userToken");
  //   const refreshTokenValue = cookie.get("refreshToken");
  //   console.log("rrr", refreshTokenValue)

  //   if (token && jwtDecode(token)?.exp < Date.now() / 1000) {
  //     refreshToken(refreshTokenValue).unwrap().then(() => {
  //       cookie.remove("userToken")
  //       console.log("will redirect to login")
  //     });

  //   }
  // };
  useEffect(() => {
    let token = cookie.get("userToken");
    // let refreshTokenValue = cookie.get("refreshToken")

    if (token && jwtDecode(token)?.exp > Date.now() / 1000) {
      const decodedUserToken = jwtDecode(token);
      saveUserData(decodedUserToken);
      console.log("nnnnnnn", decodedUserToken);
      console.log(token);
    }
    // checkTokenExpiration();
    //TRUE
    // const interval = setInterval(() => {
    //   const token = cookie.get("userToken");
    //   const refreshTokenValue = cookie.get("refreshToken");
    //   console.log("rrr", refreshTokenValue)

    //   if (token && jwtDecode(token)?.exp < Date.now() / 1000) {
    //     refreshToken(refreshTokenValue).unwrap().then(() => {
    //       cookie.remove("userToken")
    //       console.log("will redirect to login")
    //       clearInterval(interval)
    //     });

    //   }
    // }, 60000) //EVERY 1 MINUTE
    // return(()=>{clearInterval(interval)
    // })
    //END TRUE
  }, [new Cookies().get("userToken")]); //to ensure ypu get the updated role of user
  //jwtDecode(cookie.get("userToken")).exp < Date.now() / 1000
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
          <Route path="/" element={<LogInPage saveUserData={saveUserData} />} />
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
              path={
                (role!=""&&role||userData?.role) == "superAdmin" || (role!=""&&role||userData?.role) == "admin"
                  ? "users&teams"
                  : "notfound"
              } //notfound will go to * so that it will render not found page
              element={
                <ProtectedRouting role={userData?.role}>
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
