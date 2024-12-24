import React from "react";
import { Paper, Typography } from "@mui/material";

const FeatureCard = ({ title, description }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Paper>
  );
};

export default FeatureCard;
