import React from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";

const CourseSettings = ({ activeTab, onTabChange }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Course Settings
      </Typography>
      <Tabs value={activeTab} onChange={onTabChange}>
        <Tab label="General Settings" />
        <Tab label="Pricing" />
        <Tab label="Course Access" />
      </Tabs>
      <Box sx={{ marginTop: 2 }}>
        {activeTab === 0 && <Typography>General Settings Content</Typography>}
        {activeTab === 1 && <Typography>Pricing Content</Typography>}
        {activeTab === 2 && <Typography>Course Access Content</Typography>}
      </Box>
    </Box>
  );
};

export default CourseSettings;
