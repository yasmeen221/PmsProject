import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function ProtectedRouting(props) {
  const { role } = props;

  const cookie = new Cookies();
  const accessToken = cookie.get("userToken");
  const refreshToken = cookie.get("refreshToken")
  if (accessToken&&refreshToken) {
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
