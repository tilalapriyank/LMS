import React, { useState, useEffect } from "react";
import Title from "../../common/Title";
import Content from "../../common/Content";
import Settings from "../../common/Settings";
import Image from "../../common/Image";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { courseSettings } from "../../../../../utils/courseSetting";


const AddEditLessonPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const defaultLessonData = {
    title: "",
    content: "",
    settings: {
      isActive: false,
      duration: "",
    },
    image: null,
  };
  
  const [lessonData, setLessonData] = useState(defaultLessonData);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (lessonId) {
      setIsEditMode(true);
      const fetchedLessonData = {
        title: "Existing Lesson Title",
        content: "This is the existing lesson content.",
        settings: { isActive: true, duration: "2 hours" },
        image: null,
      };
      setLessonData(fetchedLessonData);
    } else {
      setIsEditMode(false);
    }
  }, [lessonId]);

  const handleLessonDataChange = (field, value) => {
    if (field === "isActive" || field === "duration") {
      setLessonData({
        ...lessonData,
        settings: {
          ...lessonData.settings,
          [field]: value,
        },
      });
    } else {
      setLessonData({
        ...lessonData,
        [field]: value,
      });
    }
  };

  const handleSaveLesson = () => {
    console.log(lessonData);
    if (!isEditMode) {
      navigate("/dashboard/lesson");
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {isEditMode ? "Edit Lesson" : "Add New Lesson"}
      </Typography>

      <Grid container spacing={2}>
        {/* Main Content - 8 columns */}
        <Grid item xs={12} md={8}>
          <Title
            title={lessonData.title}
            onChange={(value) => handleLessonDataChange("title", value)}
          />
          <Content
            content={lessonData.content}
            onChange={(value) => handleLessonDataChange("content", value)}
          />
          <Settings settings={courseSettings} onChange={handleLessonDataChange} />
        </Grid>

        <Grid item xs={12} md={4}>
          <Image
            image={lessonData.image}
            onChange={(file) => handleLessonDataChange("image", file)}
          />
        </Grid>
      </Grid>

      <Button variant="contained" onClick={handleSaveLesson} sx={{ mt: 2 }}>
        {isEditMode ? "Update" : "Publish"}
      </Button>
    </Box>
  );
};

export default AddEditLessonPage;
