import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const CurriculumSection = ({ section, setCurriculum }) => {
  const updateSection = (field, value) => {
    setCurriculum((prev) =>
      prev.map((s) =>
        s.id === section.id ? { ...s, [field]: value } : s
      )
    );
  };

  const addLessonOrQuiz = () => {
    updateSection("lessons", [
      ...section.lessons,
      { id: Date.now(), title: "", type: "lesson" },
    ]);
  };

  const removeLessonOrQuiz = (lessonId) => {
    updateSection(
      "lessons",
      section.lessons.filter((lesson) => lesson.id !== lessonId)
    );
  };

  return (
    <Card>
      <CardContent>
        <TextField
          label="Section Title"
          fullWidth
          variant="outlined"
          value={section.title}
          onChange={(e) => updateSection("title", e.target.value)}
          placeholder="Enter section title"
        />
        <TextField
          label="Section Description"
          fullWidth
          variant="outlined"
          multiline
          rows={3}
          value={section.description}
          onChange={(e) => updateSection("description", e.target.value)}
          sx={{ marginTop: 2 }}
        />
        {section.lessons.map((lesson) => (
          <Box key={lesson.id} sx={{ display: "flex", marginTop: 2 }}>
            <TextField
              label="Lesson/Quiz Title"
              variant="outlined"
              fullWidth
              value={lesson.title}
              onChange={(e) =>
                updateSection("lessons", [
                  ...section.lessons.map((l) =>
                    l.id === lesson.id
                      ? { ...l, title: e.target.value }
                      : l
                  ),
                ])
              }
            />
            <IconButton
              color="error"
              onClick={() => removeLessonOrQuiz(lesson.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{ marginTop: 2 }}
          onClick={addLessonOrQuiz}
        >
          Add Lesson/Quiz
        </Button>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="error"
          onClick={() =>
            setCurriculum((prev) =>
              prev.filter((s) => s.id !== section.id)
            )
          }
        >
          Remove Section
        </Button>
      </CardActions>
    </Card>
  );
};

export default CurriculumSection;
