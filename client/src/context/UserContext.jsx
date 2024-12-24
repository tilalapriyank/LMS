import React, { createContext, useState } from "react";

// Create the Context object
const UserContext = createContext();

// Provider component
const UserProvider = ({ children }) => {
  const [role, setRole] = useState('admin'); // Default role is null or you can set a default role

  const login = (userRole) => {
    setRole(userRole); // Set the role when the user logs in
  };

  const logout = () => {
    setRole(null); // Clear the role on logout
  };

  return (
    <UserContext.Provider value={{ role, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
