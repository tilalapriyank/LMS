import React, { createContext, useState, useEffect, useMemo } from "react";
import {jwtDecode} from "jwt-decode";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken); // Decode the JWT
        const { exp, role } = decodedToken;

        if (Date.now() >= exp * 1000) {
          logout(); // Token expired
        } else {
          setToken(storedToken);
          setRole(role);
        }
      } catch (error) {
        console.error("Invalid token:", error);
        logout();
      }
    }
  }, []);

  const login = (userRole, authToken) => {
    setRole(userRole);
    setToken(authToken);
    localStorage.setItem("authToken", authToken);
  };

  const logout = () => {
    setRole(null);
    setToken(null);
    localStorage.removeItem("authToken");
  };

  const isAuthenticated = useMemo(() => !!token, [token]);

  const contextValue = useMemo(
    () => ({ role, token, isAuthenticated, login, logout }),
    [role, token, isAuthenticated]
  );

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
