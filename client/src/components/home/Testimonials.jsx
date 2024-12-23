import React from "react";
import { Grid, Paper, Typography, Avatar } from "@mui/material";

const Testimonials = () => {
  const reviews = [
    {
      name: "John Doe",
      review: "This platform changed my career! The courses are amazing.",
      avatar: "/path/to/avatar1.jpg",
    },
    {
      name: "Jane Smith",
      review: "The instructors are very knowledgeable and engaging. Highly recommend!",
      avatar: "/path/to/avatar2.jpg",
    },
    {
      name: "David Lee",
      review: "I gained so much practical knowledge. Great courses for career growth.",
      avatar: "/path/to/avatar3.jpg",
    },
  ];

  return (
    <Grid container spacing={4} justifyContent="center">
      {reviews.map((testimonial, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper
            sx={{
              p: 4,
              textAlign: "center",
              boxShadow: 3,
              backgroundColor: "#f9f9f9",
            }}
          >
            <Avatar
              src={testimonial.avatar}
              alt={testimonial.name}
              sx={{ width: 60, height: 60, mx: "auto", mb: 2 }}
            />
            <Typography variant="body1" sx={{ mb: 2 }}>
              "{testimonial.review}"
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              - {testimonial.name}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Testimonials;
