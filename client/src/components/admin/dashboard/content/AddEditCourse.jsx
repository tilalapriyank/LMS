import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddEditCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseContent, setCourseContent] = useState("");

  const handleCourseTitleChange = (e) => setCourseTitle(e.target.value);
  const handleCourseContentChange = (event, editor) => {
    setCourseContent(editor.getData());
  };

  const editorConfig = {
    licenseKey: 'YOUR_LICENSE_KEY', // Add your CKEditor license key here
    ckfinder: {
      uploadUrl: "https://your-upload-endpoint.com/upload", // Your backend URL
      options: {
        headers: {
          "Authorization": `Bearer YOUR_API_KEY`, // Optional API key for upload service
        },
      },
    },
  };

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

      {/* Course Content with CKEditor */}
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        <Grid item xs={12}>
          <CKEditor
            editor={ClassicEditor}
            data={courseContent}
            onChange={handleCourseContentChange}
            config={editorConfig}  // Applying the configuration here
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
