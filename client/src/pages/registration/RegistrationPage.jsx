import React from 'react';
import { Container } from '@mui/material';
import RegistrationForm from '../../components/registration/RegistrationForm';

const RegistrationPage = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <RegistrationForm />
    </Container>
  );
};

export default RegistrationPage;
