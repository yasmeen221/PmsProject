import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import ProtectedRouting from "./ProtectedRouting";
import Icons from "./themes/icons";

// Lazy-loaded components
const ResetPassword = lazy(
  () => import("./features/ResetPassword/pages/ResetPassword"),
);
const Competencies = lazy(
  () => import("./features/Competencies/pages/Competencies"),
);
const FeedBack = lazy(() => import("./features/FeedBack/pages/FeedBack"));
const Users = lazy(() => import("./features/User&Teams/pages/Users"));
const LogInPage=lazy(()=>import("./features/LogIn/pages/LogInPage"))
const Dashboard=lazy(()=>import("./components/Dashboard"))
const NotFound=lazy(()=>import("./components/NotFound"))

function App() {
  const [userData, setUserData] = useState(null);

  const saveUserData = (data) => {
    setUserData(data);
  };
  useEffect(() => {
    const cookie = new Cookies();
    let token = cookie.get("userToken");
    if (token) {
      const decodedUserToken = jwtDecode(token);
      saveUserData(decodedUserToken);
      console.log("nnnnnnn", decodedUserToken);
      console.log(token);
    }
  }, [new Cookies().get("userToken")]); //to ensure ypu get the updated role of user

  return (
    <Router>
      <Suspense fallback={<div className=" w-full h-full inline-flex  items-center justify-center"><Icons.Loading/></div>}>
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
              path={userData?.role=="superAdmin"||userData?.role=="admin"?"users&teams":"notfound"} //notfound will go to * so that it will render not found page
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
