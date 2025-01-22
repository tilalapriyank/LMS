import React, { createContext, useState, useEffect, useMemo } from "react";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserID] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken);
        const { exp, role, userId } = decodedToken; 

        if (Date.now() >= exp * 1000) {
          logout(); 
        } else {
          setToken(storedToken);
          setRole(role);
          setUserID(userId); 
        }
      } catch (error) {
        console.error("Invalid token:", error);
        logout();
      }
    }
  }, []);

  const login = (userRole, authToken, userId) => {
    setRole(userRole);
    setToken(authToken);
    setUserID(userId); 
    localStorage.setItem("authToken", authToken);
  };

  const logout = () => {
    setRole(null);
    setToken(null);
    setUserID(null); 
    localStorage.removeItem("authToken");
  };

  const isAuthenticated = useMemo(() => !!token, [token]);

  const contextValue = useMemo(
    () => ({ role, token, userId, isAuthenticated, login, logout }), 
    [role, token, userId, isAuthenticated]
  );

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
