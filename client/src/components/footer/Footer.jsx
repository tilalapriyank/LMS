import React from "react";
import { Box, Typography, Container, Link, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: "#2c3e50",
      color: "white",
      py: 4,
    }}>
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Quick Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>Quick Links</Typography>
            <Box>
              <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>About Us</Link>
              <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>Contact Us</Link>
              <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>FAQ</Link>
              <Link href="#" color="inherit" sx={{ display: "block" }}>Privacy Policy</Link>
            </Box>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>Contact Information</Typography>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Email: <Link href="mailto:support@lmsplatform.com" color="inherit">support@lmsplatform.com</Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Phone: +1 (800) 123-4567
              </Typography>
              <Typography variant="body2">
                Address: 123 Learning Street, Knowledge City, 45678
              </Typography>
            </Box>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="flex-end">
            <Typography variant="h6" sx={{ mb: 2 }}>Follow Us</Typography>
            <Box>
              <IconButton href="#" color="inherit" sx={{ mr: 1 }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ mr: 1 }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ mr: 1 }}>
                <Instagram />
              </IconButton>
              <IconButton href="#" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          &copy; {new Date().getFullYear()} LMS Platform. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
