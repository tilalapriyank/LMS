import React from "react";
import { Box, Typography, Button } from "@mui/material";

const CourseImage = ({ courseImage, setCourseImage }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCourseImage(URL.createObjectURL(file));
    }
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Course Image
      </Typography>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {courseImage && (
          <Box
            component="img"
            src={courseImage}
            alt="Course Preview"
            sx={{ width: 150, height: 150, objectFit: "cover", borderRadius: 2 }}
          />
        )}
        <Button variant="contained" component="label">
          Upload Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleFileUpload}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default CourseImage;
