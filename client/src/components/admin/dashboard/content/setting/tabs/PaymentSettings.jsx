import React from "react";
import { Card, CardContent, Button, TextField, Typography } from "@mui/material";

const PaymentSettings = () => {
  const handleSubmit = () => {
    alert("Payment settings saved!");
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Payment Settings
        </Typography>
        <TextField label="Payment Method" fullWidth margin="normal" />
        <TextField label="Currency" fullWidth margin="normal" />
        <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Save Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default PaymentSettings;
