import React from 'react';
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Book as CourseIcon,
  MenuBook as LessonIcon,
  Quiz as QuizIcon,
  QuestionAnswer as QuestionIcon,
  Category as CategoryIcon,
  Tag as TagsIcon,
  Settings as SettingsIcon,
  People as UsersIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const DashboardDrawer = ({ mobileOpen, handleDrawerToggle, onMenuClick }) => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Course', icon: <CourseIcon /> },
    { text: 'Lesson', icon: <LessonIcon /> },
    { text: 'Quiz', icon: <QuizIcon /> },
    { text: 'Question', icon: <QuestionIcon /> },
    { text: 'Category', icon: <CategoryIcon /> },
    { text: 'Tags', icon: <TagsIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'Users', icon: <UsersIcon /> },
  ];

  const drawerContent = (
    <div>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1976d2',
          color: '#fff',
        }}
      >
        <Typography variant="h6" noWrap>
          My Dashboard
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => onMenuClick(item.text)} // Trigger onMenuClick
            sx={{
              '&:hover': {
                backgroundColor: '#f4f4f4',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#1976d2' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        backgroundColor: '#f8f9fa',
      }}
      aria-label="dashboard folders"
    >
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>
      {/* Permanent Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default DashboardDrawer;
