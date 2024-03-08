import { jwtDecode } from "jwt-decode";
import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function ProtectedRouting(props) {
  const { role } = props;

  const cookie = new Cookies();
  let token = cookie.get("userToken");
  if (token) {
    const decodedUserToken = jwtDecode(token);
    // console.log("nnjjnjnjjnj", decodedUserToken.role);
    if (role) {

      if (role == "superAdmin" || role == "admin") {
        return props.children;
      }
    } else {
      return props.children;
    }
  } else {
    return <Navigate to="/" />; // Added return statement here

  }
}
