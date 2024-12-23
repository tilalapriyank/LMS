import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import RegistrationPage from './pages/registration/RegistrationPage';

const App = () => {
  return (
    <Router>
    <CssBaseline /> {/* This provides a consistent base styling */}
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      {/* Main content area */}
      <Box sx={{ flexGrow: 1, bgcolor: 'background.default', py: 4 }}>
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  </Router>
  );
};

export default App;
