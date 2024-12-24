import React from "react";
import { Paper, Typography } from "@mui/material";

const TestimonialCard = ({ testimonial, name, profession }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        "{testimonial}"
      </Typography>
      <Typography>- {name}, {profession}</Typography>
    </Paper>
  );
};

export default TestimonialCard;
