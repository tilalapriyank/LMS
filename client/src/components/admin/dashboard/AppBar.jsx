import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

const DashboardAppBar = ({ handleDrawerToggle }) => (
  <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - 240px)` },
      ml: { sm: `240px` },
    }}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <Menu />
      </IconButton>
      <Typography variant="h6" noWrap>
        Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
);

export default DashboardAppBar;
