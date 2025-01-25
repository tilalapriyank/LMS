import React, { useState, useEffect, useCallback, useContext } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Alert,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Title from "../../common/Title";
import Content from "../../common/Content";
import Settings from "../../common/Settings";
import Options from "./Options";
import { questionSettings } from "../../../../../utils/questionSetting";
import { useParams, useNavigate } from "react-router-dom";
import QuestionCategory from "./QuestionCategory ";
import { UserContext } from "../../../../../context/UserContext";

const AddEditQuestionPage = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const { userId } = useContext(UserContext);

  const defaultQuestionData = {
    userId: userId,
    title: "",
    content: "",
    options: {
      type: "true-false",
      options: [
        {
          correct: true,
          value: "True",
        },
        {
          correct: false,
          value: "False",
        },
      ],
    },
    settings: {},
    questioncategory: [],
  };

  const [questionData, setQuestionData] = useState(defaultQuestionData);
  const [isEditMode, setIsEditMode] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (questionId) {
      setIsEditMode(true);
      const fetchedQuestionData = {
        title: "",
        content: "",
        options: {
          type: "true-false",
          options: [
            {
              correct: true,
              value: "True",
            },
            {
              correct: false,
              value: "False",
            },
          ],
        },
        settings: {},
        questioncategory: [],
      };
      setQuestionData(fetchedQuestionData);
    } else {
      setIsEditMode(false);
    }
  }, [questionId]);

  const handleQuestionDataChange = useCallback((field, value) => {
    setQuestionData((prevState) => ({
      ...prevState,
      [field]:
        field === "settings" ? { ...prevState.settings, ...value } : value,
    }));
    setValidationErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  }, []);

  const validateFields = () => {
    const errors = {};
    if (!questionData.title) errors.title = "Title is required.";
    if (!questionData.content) errors.content = "Content is required.";
    if (!questionData.options.type)
      errors.options = "At least one option is required.";

    if (!Object.keys(questionData.settings).length)
      errors.settings = "Settings are required.";
    if (
      Object.keys(questionData.settings).length !==
      Object.keys(questionSettings).length
    ) {
      errors.settings = "All settings must be filled.";
    }

    if (!questionData.questioncategory)
      errors.categories = "Category is required.";
    return errors;
  };

  const handleSaveQuestion = (status) => {
    const errors = validateFields();
    console.log(errors);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    const mode = isEditMode ? "edit" : "create";
    const updatedQuestionData = { ...questionData, status };
    console.log(mode, updatedQuestionData);
    navigate("/dashboard/question");
  };

  const handleDismissError = (field) => {
    setValidationErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {isEditMode ? "Edit Question" : "Add New Question"}
      </Typography>

      {Object.keys(validationErrors).map(
        (key) =>
          validationErrors[key] && (
            <Alert
              key={key}
              sx={{ mb: 2 }}
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => handleDismissError(key)}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {validationErrors[key]}
            </Alert>
          )
      )}

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Title
            title={questionData.title}
            onChange={(value) => handleQuestionDataChange("title", value)}
          />

          <Content
            content={questionData.content}
            onChange={(value) => handleQuestionDataChange("content", value)}
          />

          <Settings
            settings={questionSettings}
            onChange={(field, value) =>
              handleQuestionDataChange("settings", { [field]: value })
            }
          />

          <Options
            options={questionData.options}
            onChange={(value) => handleQuestionDataChange("options", value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <QuestionCategory
            questioncategory={questionData.questioncategory}
            onChange={(value) =>
              handleQuestionDataChange("questioncategory", value)
            }
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3, width: 300 }}
        onClick={() => handleSaveQuestion("published")}
      >
        {isEditMode ? "Update" : "Publish"}
      </Button>
      {!isEditMode && (
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, ml: 2, width: 300 }}
          onClick={() => handleSaveQuestion("draft")}
        >
          Draft
        </Button>
      )}
    </Box>
  );
};

export default AddEditQuestionPage;
