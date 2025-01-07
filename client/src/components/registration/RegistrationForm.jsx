import React, { useState } from 'react';
import { Box, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/registrationUser';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';

const RegistrationForm = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    const userData = { name, email, password, role };

    try {
      const response = await registerUser(userData);
      if (response.success) {
        alert('Registration successful');
        navigate('/login');
      } else {
        alert(response.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while registering');
    }
  };

  const handleGoogleSuccess = (response) => {
    const { credential } = response;
    // Process the Google credential, e.g., send it to your backend for registration
    alert(`Google login successful: ${credential}`);
    navigate('/dashboard'); // Redirect to your desired page
  };

  const handleFacebookResponse = (response) => {
    if (response.status === 'unknown') {
      alert('Facebook login failed');
    } else {
      alert(`Facebook login successful: ${response.name}`);
      navigate('/dashboard'); // Redirect to your desired page
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
        Register
      </Typography>

      <TextField
        label="Username"
        fullWidth
        variant="outlined"
        margin="normal"
        value={name}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        variant="outlined"
        margin="normal"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="role-label">Role</InputLabel>
        <Select labelId="role-label" value={role} onChange={(e) => setRole(e.target.value)} label="Role">
          <MenuItem value="student">Student</MenuItem>
          <MenuItem value="instructor">Instructor</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} sx={{ mt: 2 }}>
        Register
      </Button>

      {/* Google Login */}
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={(error) => console.error('Google login failed', error)}
        useOneTap
        shape="rectangular"
        width="100%"
        theme="outline"
        text="signup_with"
        size="large"
        sx={{ mt: 2 }}
      />

      {/* Facebook Login */}
      <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookResponse}
        cssClass="facebook-btn"
        icon="fa-facebook"
        textButton="Sign up with Facebook"
        style={{ marginTop: '16px' }}
      />
    </Box>
  );
};

export default RegistrationForm;
