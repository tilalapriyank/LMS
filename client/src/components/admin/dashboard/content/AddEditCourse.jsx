import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Editor } from "@tinymce/tinymce-react";

const AddEditCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [curriculum, setCurriculum] = useState([]);

  const handleCourseTitleChange = (e) => {
    setCourseTitle(e.target.value);
  };

  const handleEditorChange = (content) => {
    setCourseDescription(content);
  };

  const addSection = () => {
    setCurriculum([
      ...curriculum,
      { id: Date.now(), title: "", description: "", lessons: [] },
    ]);
  };

  const updateSection = (id, field, value) => {
    setCurriculum((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  const addLessonOrQuiz = (id) => {
    setCurriculum((prev) =>
      prev.map((section) =>
        section.id === id
          ? {
              ...section,
              lessons: [
                ...section.lessons,
                { id: Date.now(), title: "", type: "lesson" },
              ],
            }
          : section
      )
    );
  };

  const removeSection = (id) => {
    setCurriculum((prev) => prev.filter((section) => section.id !== id));
  };

  const removeLessonOrQuiz = (sectionId, lessonId) => {
    setCurriculum((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              lessons: section.lessons.filter(
                (lesson) => lesson.id !== lessonId
              ),
            }
          : section
      )
    );
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

      {/* Curriculum Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Curriculum
        </Typography>
        {curriculum.map((section) => (
          <Accordion key={section.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${section.id}-content`}
              id={`panel-${section.id}-header`}
            >
              <TextField
                label="Section Title"
                variant="outlined"
                value={section.title}
                onChange={(e) =>
                  updateSection(section.id, "title", e.target.value)
                }
                placeholder="Enter section title"
                sx={{ flexGrow: 1 }}
              />
              <IconButton
                color="error"
                onClick={() => removeSection(section.id)}
              >
                <DeleteIcon />
              </IconButton>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                label="Section Description"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={section.description}
                onChange={(e) =>
                  updateSection(section.id, "description", e.target.value)
                }
                placeholder="Enter section description"
                sx={{ marginBottom: 2 }}
              />
              {section.lessons.map((lesson) => (
                <Box
                  key={lesson.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 1,
                  }}
                >
                  <TextField
                    label="Lesson/Quiz Title"
                    variant="outlined"
                    value={lesson.title}
                    onChange={(e) =>
                      updateSection(section.id, "lessons", [
                        ...section.lessons.map((l) =>
                          l.id === lesson.id
                            ? { ...l, title: e.target.value }
                            : l
                        ),
                      ])
                    }
                    placeholder="Enter lesson/quiz title"
                    sx={{ flexGrow: 1 }}
                  />
                  <IconButton
                    color="error"
                    onClick={() => removeLessonOrQuiz(section.id, lesson.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={() => addLessonOrQuiz(section.id)}
              >
                Add Lesson/Quiz
              </Button>
            </AccordionDetails>
          </Accordion>
        ))}
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={addSection}
        >
          Add Section
        </Button>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ marginTop: 3, textAlign: "right" }}>
        <Button variant="outlined" color="secondary" sx={{ marginRight: 2 }}>
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
