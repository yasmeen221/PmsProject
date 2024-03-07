import { jwtDecode } from "jwt-decode";
import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { changeUserDataValue } from "./features/LogIn/slices/login";
import { useDispatch } from "react-redux";

export default function ProtectedRouting(props) {
  const dispatch = useDispatch()
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
    dispatch(changeUserDataValue(""))
    return <Navigate to="/" />; // Added return statement here

  }
}
