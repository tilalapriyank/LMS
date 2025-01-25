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
import Curriculum from "./Curriculum";
import Settings from "../../common/Settings";
import Image from "../../common/Image";
import { useParams, useNavigate } from "react-router-dom";
import { courseSettings } from "../../../../../utils/courseSetting";
import AdditionalSections from "./AdditionalSections";
import UploadMaterial from "../../common/UploadMaterial";
import Taxonomy from "./Taxonomy";
import Video from "../../common/Video";
import {
  createOrEditCourse,
  courseDataDetails,
} from "../../../../../api/course";
import { UserContext } from "../../../../../context/UserContext";

const AddEditCoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { userId } = useContext(UserContext);
  const defaultCourseData = {
    userId: userId,
    title: "",
    content: "",
    curriculum: [],
    settings: {},
    image: null,
    materials: [],
    taxonomy: { categories: [], tags: [] },
    video: [],
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
    const fetchCourseData = async () => {
      if (courseId) {
        setIsEditMode(true);
        try {
          const fetchedCourseData = await courseDataDetails(courseId);
          setCourseData(fetchedCourseData);
          console.log(courseData.additional.faq);
        } catch (error) {
          console.error("Error fetching course data:", error);
        }
      } else {
        setIsEditMode(false);
      }
    };

    fetchCourseData();
  }, [courseId]);

  const handleCourseDataChange = useCallback((field, value) => {
    setCourseData((prevState) => ({
      ...prevState,
      [field]:
        field === "settings" || field === "additional"
          ? { ...prevState[field], ...value }
          : value,
    }));
    setValidationErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  }, []);

  const validateFields = () => {
    const errors = {};
    if (!courseData.title) errors.title = "Title is required.";
    if (!courseData.content) errors.content = "Content is required.";
    if (!courseData.curriculum.length)
      errors.curriculum = "Curriculum is required.";
    if (!Object.keys(courseData.settings).length)
      errors.settings = "Settings are required.";
    if (
      Object.keys(courseData.settings).length !==
      Object.keys(courseSettings).length
    ) {
      errors.settings = "All settings must be filled.";
    }
    if (!courseData.image) errors.image = "Image is required.";
    if (!courseData.taxonomy.categories.length)
      errors.categories = "Category is required.";
    if (!courseData.taxonomy.tags.length) errors.tags = "Tag is required.";
    if (!courseData.video) errors.video = "At least one video is required.";
    if (!courseData.materials.length)
      errors.materials = "At least one material is required.";
    if (!courseData.additional.faq.length) errors.faq = "FAQ is required.";
    if (!courseData.additional.requirements.length)
      errors.requirements = "Requirements are required.";
    if (!courseData.additional.targetAudience.length)
      errors.targetAudience = "Target audience is required.";
    if (!courseData.additional.keyFeatures.length)
      errors.keyFeatures = "Key features are required.";
    return errors;
  };

  const handleSaveCourse = async (status) => {
    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    try {
      const mode = isEditMode ? "edit" : "create";
      const id = isEditMode ? courseId : null;
      const updatedCourseData = { ...courseData, status };
      console.log(updatedCourseData);
      await createOrEditCourse(mode, updatedCourseData, id);
      navigate("/dashboard/course");
    } catch (error) {
      console.error("Error in handleSaveCourse:", error);
    }
    if (!isEditMode) {
      navigate("/dashboard/course");
    }
  };

  const handleDismissError = (field) => {
    setValidationErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {isEditMode ? "Edit Course" : "Add New Course"}
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
            title={courseData.title}
            onChange={(value) => handleCourseDataChange("title", value)}
          />

          <Content
            content={courseData.content}
            onChange={(value) => handleCourseDataChange("content", value)}
          />

          <Curriculum
            curriculum={courseData.curriculum}
            onChange={(value) => handleCourseDataChange("curriculum", value)}
          />

          <Settings
            settings={courseSettings}
            onChange={(field, value) =>
              handleCourseDataChange("settings", { [field]: value })
            }
          />

          <AdditionalSections
            faqItems={courseData.additional.faq}
            requirements={courseData.additional.requirements}
            targetAudience={courseData.additional.targetAudience}
            keyFeatures={courseData.additional.keyFeatures}
            onChange={(field, value) =>
              handleCourseDataChange("additional", { [field]: value })
            }
          />
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Image
            image={courseData.image}
            onChange={(file) => handleCourseDataChange("image", file)}
          />
          <UploadMaterial
            uploadedFiles={courseData.materials}
            onUpload={(materials) =>
              setCourseData((prevState) => ({ ...prevState, materials }))
            }
          />
          <Taxonomy
            taxonomy={courseData.taxonomy}
            onChange={(value) => handleCourseDataChange("taxonomy", value)}
          />
          <Video
            videoList={courseData.video}
            onChange={(videos) => handleCourseDataChange("video", videos)}
          />
        </Grid>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, width: 300 }}
          onClick={() => handleSaveCourse("published")}
        >
          {isEditMode ? "Update" : "Publish"}
        </Button>
        {!isEditMode && (
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3, ml: 2, width: 300 }}
            onClick={() => handleSaveCourse("draft")}
          >
            Draft
          </Button>
        )}
      </Grid>
    </Box>
  );
};

export default AddEditCoursePage;
