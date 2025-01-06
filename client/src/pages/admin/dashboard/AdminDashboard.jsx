import React, { useState } from "react";
import { CssBaseline, Box } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";  // Import useNavigate
import DashboardAppBar from "../../../components/admin/dashboard/AppBar";
import DashboardDrawer from "../../../components/admin/dashboard/Drawer";

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (menu, route) => {
    setSelectedMenu(menu);
    navigate(route);  // Navigate to the route when menu is clicked
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DashboardAppBar handleDrawerToggle={handleDrawerToggle} />
      <DashboardDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        onMenuClick={handleMenuClick}
        selectedMenu={selectedMenu}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
        }}
      >
        {/* Render nested routes */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
