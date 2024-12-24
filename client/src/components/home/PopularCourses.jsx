import React from "react";
import {
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  Typography,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PopularCourses = ({ courses }) => {
  return (
    <Box sx={{ backgroundColor: "#f2f2f3", py: 10}}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    alt={course.title}
                    height="200"
                    image={course.image}
                  />
                  <CardContent>
                    <Typography variant="h6">{course.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {course.description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                      <Rating value={course.rating} readOnly size="small" />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 1 }}
                      >
                        ({course.rating} / 5)
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      Instructor: {course.instructor}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", pb: 2 }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      component={Link}
                      to="/register"
                      sx={{ borderRadius: 0 }}
                    >
                      Enroll Now
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularCourses;
