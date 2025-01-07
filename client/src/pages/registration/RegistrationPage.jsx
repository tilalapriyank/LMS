import React from "react";
import { Container } from "@mui/material";
import { GoogleOAuthProvider } from '@react-oauth/google';
import RegistrationForm from "../../components/registration/RegistrationForm";

const RegistrationPage = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <RegistrationForm />
      </GoogleOAuthProvider>
    </Container>
  );
};

export default RegistrationPage;
