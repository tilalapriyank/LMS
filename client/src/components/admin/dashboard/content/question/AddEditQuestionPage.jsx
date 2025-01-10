import React, { useState, useEffect } from "react";
import Title from "../../common/Title";
import Content from "../../common/Content";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const AddEditQuestionPage = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const defaultQuestionData = {
    questionText: "",
    options: [{ id: 1, text: "" }, { id: 2, text: "" }],
    correctAnswer: "",
    settings: {
      isActive: false,
    },
  };

  const [questionData, setQuestionData] = useState(defaultQuestionData);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (questionId) {
      setIsEditMode(true);
      const fetchedQuestionData = {
        questionText: "Existing Question Text",
        options: [
          { id: 1, text: "Option 1" },
          { id: 2, text: "Option 2" },
        ],
        correctAnswer: "Option 1",
        settings: { isActive: true },
      };
      setQuestionData(fetchedQuestionData);
    } else {
      setIsEditMode(false);
    }
  }, [questionId]);

  const handleQuestionDataChange = (field, value) => {
    if (field === "options") {
      setQuestionData({
        ...questionData,
        [field]: value,
      });
    } else if (field === "settings") {
      setQuestionData({
        ...questionData,
        settings: { ...questionData.settings, ...value },
      });
    } else {
      setQuestionData({
        ...questionData,
        [field]: value,
      });
    }
  };

  const handleSaveQuestion = () => {
    console.log(questionData);
    if (!isEditMode) {
      navigate("/dashboard/question");
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {isEditMode ? "Edit Question" : "Add New Question"}
      </Typography>

      <Grid container spacing={2}>
        {/* Main Content - 8 columns */}
        <Grid item xs={12} md={8}>
          <Title
            title={questionData.questionText}
            onChange={(value) => handleQuestionDataChange("questionText", value)}
          />
          <Content
            // content={JSON.stringify(questionData.options)}
            onChange={(value) => handleQuestionDataChange("options", JSON.parse(value))}
          />
        </Grid>
      </Grid>

      <Button variant="contained" onClick={handleSaveQuestion} sx={{ mt: 2 }}>
        {isEditMode ? "Update" : "Add Question"}
      </Button>
    </Box>
  );
};

export default AddEditQuestionPage;
