import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/path/to/your/image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to Our Learning Platform
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Enhance your skills with our top-rated online courses. Learn from experts and become proficient in your field.
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" size="large">
              Explore Courses
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary" size="large">
              Become an Instructor
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
