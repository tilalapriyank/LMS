import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center', mt: 'auto' }}>
      <Typography variant="body2">
        &copy; 2024 LMS Platform. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
