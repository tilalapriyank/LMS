import React, { useContext } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import { UserContext } from '../context/UserContext';
import AdminPage from '../pages/AdminPage';
import InstructorPage from '../pages/InstructorPage';
import StudentPage from '../pages/StudentPage';
import Login from '../pages/login/Login';

const RoutesComponent = () => {
  const { role } = useContext(UserContext); // Get the user role

  return (
    <Router>
      <Routes>  {/* Replace Switch with Routes */}
        {role === 'admin' && <Route path="/admin" element={<AdminPage />} />} {/* Use element prop instead of component */}
        {role === 'instructor' && <Route path="/instructor" element={<InstructorPage />} />}
        {role === 'student' && <Route path="/student" element={<StudentPage />} />}
        {!role && <Route path="/" element={<Login />} />}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
