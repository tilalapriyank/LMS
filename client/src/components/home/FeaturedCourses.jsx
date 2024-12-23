import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const FeaturedCourses = () => {
  const courses = [
    {
      title: "React for Beginners",
      description: "Learn React from scratch.",
      image: "/path/to/image1.jpg",
    },
    {
      title: "Advanced Node.js",
      description: "Master Node.js with advanced techniques.",
      image: "/path/to/image2.jpg",
    },
    {
      title: "Data Science with Python",
      description: "Dive into data analysis with Python.",
      image: "/path/to/image3.jpg",
    },
  ];

  return (
    <Grid container spacing={4} justifyContent="center">
      {courses.map((course, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card sx={{ maxWidth: 345, boxShadow: 3, transition: "0.3s" }}>
            <CardMedia
              component="img"
              height="200"
              image={course.image}
              alt={course.title}
            />
            <CardContent>
              <Typography variant="h6">{course.title}</Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                {course.description}
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                View Course
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedCourses;
