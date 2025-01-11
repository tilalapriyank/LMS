import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Avatar,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { userDetails } from "../../../../../api/user";

const UserEditPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    name: "",
    email: "",
    password: "",
    profilePhoto: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await userDetails(userId);
        if (response) {
          setUser(response);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser({ ...user, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://192.168.1.19:5000/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: user.first_name,
            lastName: user.last_name,
            displayName: user.name,
            email: user.email,
            password: user.password,
            profilePhoto: user.profilePhoto,
          }),
        }
      );

      if (response.ok) {
        console.log("User updated successfully");
        navigate("/dashboard/users");
      } else {
        console.error("Error updating user");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Edit User
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {/* Profile Photo */}
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Avatar
                alt={user.displayName || "User"}
                src={user.profilePhoto}
                sx={{ width: 80, height: 80, margin: "auto" }}
              />
              <input
                accept="image/*"
                id="upload-photo"
                type="file"
                style={{ display: "none" }}
                onChange={handlePhotoChange}
              />
              <label htmlFor="upload-photo">
                <IconButton color="primary" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </Grid>

            {/* First Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="First Name"
                fullWidth
                value={user.first_name}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Last Name"
                fullWidth
                value={user.last_name}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Display Name */}
            <Grid item xs={12}>
              <TextField
                name="displayName"
                label="Display Name"
                fullWidth
                value={user.name}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                type="email"
                fullWidth
                value={user.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Password */}
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                type="password"
                fullWidth
                value={user.password}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update User
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UserEditPage;
