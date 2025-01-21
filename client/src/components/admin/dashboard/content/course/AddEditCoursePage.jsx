import React, { useState, useEffect, useCallback } from "react";
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
import Curriculum from "./Curriculum";
import Settings from "../../common/Settings";
import Image from "../../common/Image";
import { useParams, useNavigate } from "react-router-dom";
import { courseSettings } from "../../../../../utils/courseSetting";
import AdditionalSections from "./AdditionalSections";
import UploadMaterial from "../../common/UploadMaterial";
import Taxonomy from "./Taxonomy";
import Video from "../../common/Video";

const AddEditCoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const defaultCourseData = {
    title: "",
    content: "",
    curriculum: [],
    settings: [],
    image: null,
    taxonomy: { categories: [], tags: [] },
    video: [],
    materials: [],
    additional: {
      faq: [],
      requirements: [],
      targetAudience: [],
      keyFeatures: [],
    },
  };

  const [courseData, setCourseData] = useState(defaultCourseData);
  const [isEditMode, setIsEditMode] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (courseId) {
      setIsEditMode(true);
      const fetchedCourseData = {
        title: "Existing Course Title",
        content: "This is the existing course content.",
        curriculum: [],
        settings: [],
        image: null,
        materials: [],
        taxonomy: { categories: [], tags: [] },
        video: [],
        additional: {
          faq: [
            { question: "What is React?", answer: "React is a JS library." },
          ],
          requirements: ["Basic JavaScript knowledge"],
          targetAudience: ["Beginners in Web Development"],
          keyFeatures: ["Interactive UI", "Fast rendering"],
        },
      };
      setCourseData(fetchedCourseData);
    } else {
      setIsEditMode(false);
    }
  }, [courseId]);

  const handleCourseDataChange = useCallback((field, value) => {
    if (field === "settings") {
      setCourseData((prevState) => ({
        ...prevState,
        settings: {
          ...prevState.settings,
          ...value,
        },
      }));
    } else if (field === "additional") {
      setCourseData((prevState) => ({
        ...prevState,
        additional: {
          ...prevState.additional,
          ...value,
        },
      }));
    } else {
      setCourseData((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    }

    // Clear validation error for the field on input
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  }, []);

  const validateFields = () => {
    const errors = {};
    if (!courseData.title) errors.title = "Title is required.";
    if (!courseData.content) errors.content = "Content is required.";
    if (!courseData.curriculum || courseData.curriculum.length === 0) {
      errors.curriculum = "Curriculum is required.";
    }
    if (!courseData.settings || Object.keys(courseData.settings).length === 0) {
      errors.settings = "Settings are required.";
    } else {
      if (
        Object.keys(courseData.settings).length !=
        Object.keys(courseSettings).length
      ) {
        errors.settings = "All settings must be filled.";
      }
    }
    if (!courseData.image) errors.image = "Image is required.";
    if (!courseData.video || courseData.video.length === 0) {
      errors.video = "At least one video is required.";
    }
    if (!courseData.materials || courseData.materials.length === 0) {
      errors.materials = "At least one material is required.";
    }
    if (!courseData.additional.faq || courseData.additional.faq.length === 0) {
      errors.faq = "FAQ is required.";
    }
    if (
      !courseData.additional.requirements ||
      courseData.additional.requirements.length === 0
    ) {
      errors.requirements = "Requirements are required.";
    }
    if (
      !courseData.additional.targetAudience ||
      courseData.additional.targetAudience.length === 0
    ) {
      errors.targetAudience = "Target audience is required.";
    }
    if (
      !courseData.additional.keyFeatures ||
      courseData.additional.keyFeatures.length === 0
    ) {
      errors.keyFeatures = "Key features are required.";
    }
    return errors;
  };

  const handleSaveCourse = () => {
    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    console.log(courseData);
    if (!isEditMode) {
      navigate("/dashboard/course");
    }
  };

  const handleDismissError = (field) => {
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {isEditMode ? "Edit Course" : "Add New Course"}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 2 }}>
            <Title
              title={courseData.title}
              onChange={(value) => handleCourseDataChange("title", value)}
            />
            {validationErrors.title && (
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => handleDismissError("title")}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {validationErrors.title}
              </Alert>
            )}
          </Box>

          <Box sx={{ mb: 2 }}>
            <Content
              content={courseData.content}
              onChange={(value) => handleCourseDataChange("content", value)}
            />
            {validationErrors.content && (
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => handleDismissError("content")}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {validationErrors.content}
              </Alert>
            )}
          </Box>

          <Curriculum
            curriculum={courseData.curriculum}
            onChange={(value) => handleCourseDataChange("curriculum", value)}
          />
          {validationErrors.curriculum && (
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => handleDismissError("curriculum")}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {validationErrors.curriculum}
            </Alert>
          )}

          <Settings
            settings={courseSettings}
            onChange={(field, value) =>
              handleCourseDataChange("settings", { [field]: value })
            }
          />
          {validationErrors.settings && (
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => handleDismissError("settings")}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {validationErrors.settings}
            </Alert>
          )}

          <AdditionalSections
            faqItems={courseData.additional.faq}
            requirements={courseData.additional.requirements}
            targetAudience={courseData.additional.targetAudience}
            keyFeatures={courseData.additional.keyFeatures}
            onChange={(field, value) =>
              handleCourseDataChange("additional", { [field]: value })
            }
          />
          {validationErrors.faq && (
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => handleDismissError("faq")}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {validationErrors.faq}
            </Alert>
          )}
          {validationErrors.requirements && (
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => handleDismissError("requirements")}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {validationErrors.requirements}
            </Alert>
          )}
          {validationErrors.targetAudience && (
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => handleDismissError("targetAudience")}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {validationErrors.targetAudience}
            </Alert>
          )}
          {validationErrors.keyFeatures && (
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => handleDismissError("keyFeatures")}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {validationErrors.keyFeatures}
            </Alert>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          <Image
            image={courseData.image}
            onChange={(file) => handleCourseDataChange("image", file)}
          />
          {validationErrors.image && (
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => handleDismissError("image")}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {validationErrors.image}
            </Alert>
          )}

          <UploadMaterial
            uploadedFiles={courseData.materials}
            onUpload={(materials) =>
              setCourseData((prevState) => ({ ...prevState, materials }))
            }
          />
          {validationErrors.materials && (
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => handleDismissError("materials")}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {validationErrors.materials}
            </Alert>
          )}

          <Taxonomy
            taxonomy={courseData.taxonomy}
            onChange={(value) => handleCourseDataChange("taxonomy", value)}
          />
          <Video
            video={courseData.video}
            onChange={(value) => handleCourseDataChange("video", value)}
          />
          {validationErrors.video && (
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => handleDismissError("video")}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {validationErrors.video}
            </Alert>
          )}
        </Grid>
      </Grid>

      <Button variant="contained" onClick={handleSaveCourse} sx={{ mt: 2 }}>
        {isEditMode ? "Update" : "Publish"}
      </Button>
    </Box>
  );
};

export default AddEditCoursePage;
