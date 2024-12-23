import React from "react";
import { Box, Typography, Container, Link, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1976d2", color: "white", py: 4 }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Typography variant="h6">Quick Links</Typography>
            <Box sx={{ mt: 2 }}>
              <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
                About Us
              </Link>
              <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
                Contact Us
              </Link>
              <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
                FAQ
              </Link>
              <Link href="#" color="inherit" sx={{ display: "block" }}>
                Privacy Policy
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          &copy; {new Date().getFullYear()} LMS Platform. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
