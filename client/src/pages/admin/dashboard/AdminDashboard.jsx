import React, { useState } from 'react';
import { CssBaseline, Box } from '@mui/material';
import DashboardAppBar from '../../../components/admin/dashboard/AppBar';
import DashboardDrawer from '../../../components/admin/dashboard/Drawer';
import MainContent from '../../../components/admin/dashboard/MainContent';

const Dashboard = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('Home'); // State for selected menu
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const handleMenuClick = (menu) => {
      setSelectedMenu(menu);
    };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <DashboardAppBar handleDrawerToggle={handleDrawerToggle} />
        <DashboardDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          onMenuClick={handleMenuClick}
        />
        <MainContent selectedMenu={selectedMenu} />
      </Box>
    );
  };
  
  export default Dashboard;