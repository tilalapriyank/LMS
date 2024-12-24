import React from 'react';
import { Box, Typography, Grid, Paper, Divider, Button } from '@mui/material';
import { School, MenuBook, Quiz as QuizIcon, AccountCircle, Group } from '@mui/icons-material';

// Dashboard Content Component
const DashboardContent = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Your Admin Dashboard
      </Typography>

      {/* Dashboard Metrics Section */}
      <Grid container spacing={3}>
        {/* Total Students, Instructors, Courses, Lessons */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6">Total Students</Typography>
              <Typography variant="h4">400</Typography>
            </Box>
            <School sx={{ fontSize: 40, color: '#1976d2' }} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6">Total Instructors</Typography>
              <Typography variant="h4">100</Typography>
            </Box>
            <MenuBook sx={{ fontSize: 40, color: '#1976d2' }} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6">Total Courses</Typography>
              <Typography variant="h4">25</Typography>
            </Box>
            <School sx={{ fontSize: 40, color: '#1976d2' }} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6">Total Lessons</Typography>
              <Typography variant="h4">120</Typography>
            </Box>
            <MenuBook sx={{ fontSize: 40, color: '#1976d2' }} />
          </Paper>
        </Grid>

        {/* Total Quizzes, Categories, Tags, and New Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6">Total Quizzes</Typography>
              <Typography variant="h4">35</Typography>
            </Box>
            <QuizIcon sx={{ fontSize: 40, color: '#1976d2' }} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6">Total Categories</Typography>
              <Typography variant="h4">10</Typography>
            </Box>
            <Group sx={{ fontSize: 40, color: '#1976d2' }} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6">Total Tags</Typography>
              <Typography variant="h4">25</Typography>
            </Box>
            <AccountCircle sx={{ fontSize: 40, color: '#1976d2' }} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">500</Typography>
            </Box>
            <Group sx={{ fontSize: 40, color: '#1976d2' }} />
          </Paper>
        </Grid>
      </Grid>

      {/* Quick Actions */}
      <Divider sx={{ my: 3 }} />
      <Typography variant="h5" gutterBottom>
        Quick Actions
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary">
            Create New Course
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Add New Lesson
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="success">
            View Reports
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent;
