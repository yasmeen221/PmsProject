import React from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

const requireAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return { children };
};

export default requireAuth;
