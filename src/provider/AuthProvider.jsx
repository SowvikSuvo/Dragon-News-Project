import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Sowvik Suvo",
    email: "skarmoker44@gmail.com",
  });
  const authdata = {
    user,
    setUser,
  };

  return <AuthContext value={authdata}>{children}</AuthContext>;
};

export default AuthProvider;
