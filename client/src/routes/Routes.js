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
import LessonList from "../components/admin/dashboard/content/lesson/Lesson";
import Setting from "../components/admin/dashboard/content/setting/Setting";
import { Box, Typography } from "@mui/material";
import Quiz from "../components/admin/dashboard/content/quiz/Quiz";
import Question from "../components/admin/dashboard/content/question/Question";
import Taxonomy from "../components/admin/dashboard/content/taxonomy/Taxonomy";
import UserList from "../components/admin/dashboard/content/users/User";

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
            <Route path="lesson" element={<LessonList />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="question" element={<Question />} />
            <Route path="taxonomy" element={<Taxonomy />} />
            <Route path="settings" element={<Setting />} />
            <Route path="users" element={<UserList />} />
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
