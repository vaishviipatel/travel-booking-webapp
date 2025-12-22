// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsed = JSON.parse(stored);
      const role = parsed.email === "vishubpatel102@gmail.com" ? "admin" : "user";
      setUser({ ...parsed, role });
    }
  }, []);

  const login = (userData) => {
    const role = userData.email === "vishubpatel102@gmail.com" ? "admin" : "user";
    const userWithRole = { ...userData, role };
    localStorage.setItem("user", JSON.stringify(userWithRole));
    setUser(userWithRole);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};