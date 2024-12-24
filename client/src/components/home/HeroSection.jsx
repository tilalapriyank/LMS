import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Box sx={{ backgroundColor: "#2c3e50", color: "white", py: 10, textAlign: "center" }}>
      <Container>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
          Unlock Your Potential with Our Courses
        </Typography>
        <Typography variant="h5" paragraph>
          Join thousands of learners around the world and take your career to new heights with industry-recognized courses.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                borderRadius: "50px",
                padding: "12px 25px",
                fontWeight: "bold",
                boxShadow: 3,
                "&:hover": { boxShadow: 6 },
              }}
              component={Link}
              to="/login"
            >
              Start Learning
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="fff"
              size="large"
              sx={{
                borderRadius: "50px",
                padding: "12px 25px",
                fontWeight: "bold",
                borderColor: "#fff",
                "&:hover": { borderColor: "#1976d2", color: "#1976d2" },
              }}
              component={Link}
              to="/register"
            >
              Create Account
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
