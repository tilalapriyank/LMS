import React from "react";
import { Card, CardContent, Button, TextField, Typography } from "@mui/material";

const ProfileSettings = () => {
  const handleSubmit = () => {
    alert("Profile settings saved!");
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Profile Settings
        </Typography>
        <TextField label="Username" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Save Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileSettings;
