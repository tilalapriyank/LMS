import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { UserContext } from "../context/UserContext";
import InstructorPage from "../pages/InstructorPage";
import StudentPage from "../pages/StudentPage";
import Login from "../pages/login/Login";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import RegistrationPage from "../pages/registration/RegistrationPage";
import Home from "../pages/home/Home";
import AdminDashboard from "../pages/admin/dashboard/AdminDashboard";
import { Box } from "@mui/material";


const RoutesComponent = () => {
  const { role, isAuthenticated } = useContext(UserContext); // Get user role and authentication status
  return (
    <Router>
      <Box
        component="header"
        sx={{
          backgroundColor: "#f8f9fa",
        }}
      >
        <Header />
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          backgroundColor: "#ffffff",
          minHeight: "calc(100vh - 160px)",
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ?  (
                  <AdminDashboard />
                ) : role === "instructor" ? (
                  <InstructorPage />
                ) : (
                  <StudentPage />
                )
              
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#f8f9fa",
          textAlign: "center",
        }}
      >
        <Footer />
      </Box>
    </Router>
  );
};

export default RoutesComponent;
