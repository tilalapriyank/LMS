import React from "react";
import { Card, CardContent, Button, TextField, Typography } from "@mui/material";

const QuizSettings = () => {
  const handleSubmit = () => {
    alert("Quiz settings saved!");
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Quiz Settings
        </Typography>
        <TextField label="Quiz Title" fullWidth margin="normal" />
        <TextField label="Quiz Duration (minutes)" fullWidth margin="normal" />
        <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Save Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuizSettings;
