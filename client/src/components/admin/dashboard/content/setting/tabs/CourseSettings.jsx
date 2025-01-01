import React from "react";
import { Card, CardContent, Button, TextField, Typography } from "@mui/material";

const CourseSettings = () => {
  const handleSubmit = () => {
    alert("Course settings saved!");
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Course Settings
        </Typography>
        <TextField label="Course Title" fullWidth margin="normal" />
        <TextField label="Course Description" fullWidth margin="normal" />
        <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Save Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseSettings;
