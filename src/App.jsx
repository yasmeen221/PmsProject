import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import { contextProvider } from "./components/Auth/auth";

import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
function App() {
  const [userData, setUserData] = useState(null);
  const saveData = (decodedData) => {
    setUserData(decodedData);
  };

  useEffect(() => {
    const cookie = new Cookies();
    let token = cookie.get("userToken");
    if (token) {
      const decodedUserToken = jwtDecode(token);
      saveData(decodedUserToken);
      console.log(decodedUserToken);
      console.log(token);
    }
  }, []);

  return (
    <>
      <contextProvider>
        <RouterProvider router={router} saveData={saveData} />
      </contextProvider>
    </>
  );
}

export default App;
