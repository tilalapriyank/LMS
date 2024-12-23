import React from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import HeroSection from "../../components/home/HeroSection";
import FeaturedCourses from "../../components/home/FeaturedCourses";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Courses */}
      <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Featured Courses
          </Typography>
          <FeaturedCourses />
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 8, backgroundColor: "#fff" }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            What Our Students Say
          </Typography>
          <Testimonials />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
