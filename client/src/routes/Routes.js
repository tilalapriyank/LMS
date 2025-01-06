import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import InstructorPage from "../pages/InstructorPage";
import StudentPage from "../pages/StudentPage";
import Login from "../pages/login/Login";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import RegistrationPage from "../pages/registration/RegistrationPage";
import Home from "../pages/home/Home";
import AdminDashboard from "../pages/admin/dashboard/AdminDashboard";
import CoursesList from "../pages/Course";
import DashboardContent from "../components/admin/dashboard/content/main";
import CourseList from "../components/admin/dashboard/content/course/Course";
import Setting from "../components/admin/dashboard/content/setting/Setting";
import { Box, Typography } from "@mui/material";

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

          {/* Admin Dashboard Route */}
          <Route
            path="/dashboard/*"
            element={
              isAuthenticated ? (
                <AdminDashboard /> // Use the Dashboard layout
              ) : role === "instructor" ? (
                <InstructorPage />
              ) : (
                <AdminDashboard />
              )
            }
          >
            {/* Nested routes for dashboard */}
            <Route path="" element={<DashboardContent />} />
            <Route path="course" element={<CourseList />} />
            <Route
              path="lesson"
              element={<Typography>Create and edit Lessons.</Typography>}
            />
            <Route
              path="quiz"
              element={<Typography>Build engaging Quizzes.</Typography>}
            />
            <Route
              path="question"
              element={
                <Typography>Manage Questions for your Quizzes.</Typography>
              }
            />
            <Route
              path="category"
              element={
                <Typography>Organize content using Categories.</Typography>
              }
            />
            <Route
              path="tags"
              element={
                <Typography>
                  Tag your content for better searchability.
                </Typography>
              }
            />
            <Route path="settings" element={<Setting />} />
            <Route
              path="users"
              element={<Typography>Manage Users and their roles.</Typography>}
            />
          </Route>

          {/* Other routes */}
          <Route path="/course" element={<CoursesList />} />
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
