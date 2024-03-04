import { createContext, useContext, useState } from "react";

const AuthContext = createContext(false);

export const contextProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = (data) => {
    setLoggedIn(data);
  };
  const logout = () => {
    setLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
