import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import LogInPage from "./features/LogIn/pages/LogInPage";
import ProtectedRouting from "./ProtectedRouting";

// Lazy-loaded components
const ResetPassword = lazy(() => import("./features/ResetPassword/pages/ResetPassword"));
const Competencies = lazy(() => import("./features/Competencies/pages/Competencies"));
const FeedBack = lazy(() => import("./features/FeedBack/pages/FeedBack"));
const Users = lazy(() => import("./features/User&Teams/pages/Users"));

function App() {
  const [userData, setUserData] = useState(null);

  const saveUserData =(data)=>{
    setUserData(data)
  }
  useEffect(() => {
    const cookie = new Cookies();
    let token = cookie.get("userToken");
    if (token) {
      const decodedUserToken = jwtDecode(token);
      saveUserData(decodedUserToken);
      console.log("nnnnnnn", decodedUserToken);
      console.log(token);
    }
  }, []);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route  path="/"   element={<LogInPage saveUserData={saveUserData} />} />
          <Route path="/setpassword/:token" element={<ResetPassword />} />
          <Route path="/dashboard" element={ <ProtectedRouting><Dashboard /></ProtectedRouting> }>
            <Route path="competencies" element={ <ProtectedRouting><Competencies /> </ProtectedRouting> } />
            <Route path="feedback" element={<ProtectedRouting><FeedBack /></ProtectedRouting>} />
            <Route path="users&teams" element={<ProtectedRouting><Users /></ProtectedRouting>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
