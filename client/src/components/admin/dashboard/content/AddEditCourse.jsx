import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";

const AddEditCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const handleCourseTitleChange = (e) => {
    // Directly set the value from the input field
    setCourseTitle(e.target.value);
  };

  const handleEditorChange = (content) => {
    setCourseDescription(content);
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        {courseTitle ? "Edit Course" : "Add New Course"}
      </Typography>

      <Grid container spacing={3}>
        {/* Course Title */}
        <Grid item xs={12}>
          <TextField
            label="Course Title"
            variant="outlined"
            fullWidth
            value={courseTitle}
            onChange={handleCourseTitleChange}
            placeholder="Enter the course title here"
          />
        </Grid>

        {/* Course Description */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Course Description
          </Typography>
          <Editor
            apiKey="57ke804uzikwhfcd1xy6qjkpp90qy918so2yup5u194e825h"
            initialValue={courseDescription}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
                "image imagetools media emoticons template codesample",
              ],
              toolbar:
                `undo redo | formatselect | bold italic underline strikethrough | \
                forecolor backcolor | alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | image media link | \
                table emoticons | codesample fullscreen preview`,
            }}
            onEditorChange={handleEditorChange}
          />
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Box sx={{ marginTop: 3, textAlign: "right" }}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ marginRight: 2 }}
        >
          Save as Draft
        </Button>
        <Button variant="contained" color="primary">
          Publish
        </Button>
      </Box>
    </Box>
  );
};

export default AddEditCourse;
