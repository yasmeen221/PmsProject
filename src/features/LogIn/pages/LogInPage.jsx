import React from "react";
import LoginForm from "../components/LoginForm";

const LogInPage = ({saveUserData}) => {
  return <LoginForm saveUserData={saveUserData}/>;
};

export default LogInPage;
