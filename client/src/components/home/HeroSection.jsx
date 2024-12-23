import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ backgroundColor: '#1976d2', color: 'white', py: 8 }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to the LMS Platform
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          Discover top-quality courses to enhance your skills. Join now or explore as a guest.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" color="secondary" sx={{ mx: 2 }}>
            Explore Courses
          </Button>
          <Button variant="outlined" color="inherit" sx={{ mx: 2 }}>
            Become an Instructor
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
