import React from "react";
import { Card, CardContent, Button, TextField, Typography } from "@mui/material";

const LessonSettings = () => {
  const handleSubmit = () => {
    alert("Lesson settings saved!");
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Lesson Settings
        </Typography>
        <TextField label="Lesson Title" fullWidth margin="normal" />
        <TextField label="Lesson Description" fullWidth margin="normal" />
        <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Save Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default LessonSettings;
