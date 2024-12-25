import React from 'react';
import { Box, Typography } from '@mui/material';
import DashboardContent from './content/main';
// import Course from "./content/Course";
import AddEditCourse from "./content/AddEditCourse";
const MainContent = ({ selectedMenu }) => {
  const getContent = () => {
    switch (selectedMenu) {
      case 'Dashboard':
        return <DashboardContent />;
      case 'Course':
        return <AddEditCourse />;
      case 'Lesson':
        return <Typography>Create and edit Lessons.</Typography>;
      case 'Quiz':
        return <Typography>Build engaging Quizzes.</Typography>;
      case 'Question':
        return <Typography>Manage Questions for your Quizzes.</Typography>;
      case 'Category':
        return <Typography>Organize content using Categories.</Typography>;
      case 'Tags':
        return <Typography>Tag your content for better searchability.</Typography>;
      case 'Settings':
        return <Typography>Adjust application settings here.</Typography>;
      case 'Users':
        return <Typography>Manage Users and their roles.</Typography>;
      default:
        return <Typography>Select a menu item to view content.</Typography>;
    }
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - 240px)` },
      }}
    >
      {getContent()}
    </Box>
  );
};

export default MainContent;
