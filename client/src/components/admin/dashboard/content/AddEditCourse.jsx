import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";

const AddEditCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const handleCourseTitleChange = (e) => setCourseTitle(e.target.value);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        {courseTitle ? "Edit Course" : "Add New Course"}
      </Typography>

      {/* Course Title */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Course Title"
            variant="outlined"
            fullWidth
            value={courseTitle}
            onChange={handleCourseTitleChange}
          />
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Box sx={{ marginTop: 3, textAlign: "right" }}>
        <Button variant="outlined" color="secondary" sx={{ marginRight: 2 }}>
          Draft
        </Button>
        <Button variant="contained" color="primary">
          Publish
        </Button>
      </Box>
    </Box>
  );
};

export default AddEditCourse;
