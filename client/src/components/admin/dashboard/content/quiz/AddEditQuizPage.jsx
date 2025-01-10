import React, { useState, useEffect } from "react";
import Title from "../../common/Title";
import Content from "../../common/Content";
import Settings from "../../common/Settings";
import Image from "../../common/Image";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { courseSettings } from "../../../../../utils/courseSetting";

const AddEditQuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const defaultQuizData = {
    title: "",
    content: "",
    settings: {
      isActive: false,
      duration: "",
    },
    image: null,
  };

  const [quizData, setQuizData] = useState(defaultQuizData);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (quizId) {
      setIsEditMode(true);
      const fetchedQuizData = {
        title: "Existing Quiz Title",
        content: "This is the existing quiz content.",
        settings: { isActive: true, duration: "30 minutes" },
        image: null,
      };
      setQuizData(fetchedQuizData);
    } else {
      setIsEditMode(false);
    }
  }, [quizId]);

  const handleQuizDataChange = (field, value) => {
    if (field === "isActive" || field === "duration") {
      setQuizData({
        ...quizData,
        settings: {
          ...quizData.settings,
          [field]: value,
        },
      });
    } else {
      setQuizData({
        ...quizData,
        [field]: value,
      });
    }
  };

  const handleSaveQuiz = () => {
    console.log(quizData);
    if (!isEditMode) {
      navigate("/dashboard/quiz");
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {isEditMode ? "Edit Quiz" : "Add New Quiz"}
      </Typography>

      <Grid container spacing={2}>
        {/* Main Content - 8 columns */}
        <Grid item xs={12} md={8}>
          <Title
            title={quizData.title}
            onChange={(value) => handleQuizDataChange("title", value)}
          />
          <Content
            content={quizData.content}
            onChange={(value) => handleQuizDataChange("content", value)}
          />
          <Settings settings={courseSettings} onChange={handleQuizDataChange} />
        </Grid>

        <Grid item xs={12} md={4}>
          <Image
            image={quizData.image}
            onChange={(file) => handleQuizDataChange("image", file)}
          />
        </Grid>
      </Grid>

      <Button variant="contained" onClick={handleSaveQuiz} sx={{ mt: 2 }}>
        {isEditMode ? "Update" : "Publish"}
      </Button>
    </Box>
  );
};

export default AddEditQuizPage;
