import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" sx={{ height: 64 }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            LMS
          </Link>
        </Typography>
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
        <Button component={Link} to="/register" color="inherit">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
