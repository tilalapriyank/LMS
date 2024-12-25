import React, { useState, useContext } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        // mode: "cors",
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      login(data.role, data.token);
      console.log("Login successful");
      navigate('/dashboard');
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
          Login
        </Typography>

        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth 
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Login
        </Button>

        <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
