import React, { useState, useEffect, useCallback } from "react";
import Title from "../../common/Title";
import Content from "../../common/Content";
import Curriculum from "./Curriculum";
import Settings from "../../common/Settings";
import Image from "../../common/Image";
import { Grid, Box, Typography, Button } from "@mui/material";
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
    settings: {
      isActive: false,
      duration: "",
    },
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

  useEffect(() => {
    if (courseId) {
      setIsEditMode(true);
      const fetchedCourseData = {
        title: "Existing Course Title",
        content: "This is the existing course content.",
        curriculum: [],
        settings: { isActive: true, duration: "3 months" },
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

  const handleCourseDataChange = useCallback(
    (field, value) => {
      if (field === "settings") {
        setCourseData(prevState => ({
          ...prevState,
          settings: {
            ...prevState.settings,
            ...value,
          },
        }));
      } else if (field === "additional") {
        setCourseData(prevState => ({
          ...prevState,
          additional: {
            ...prevState.additional,
            ...value,
          },
        }));
      } else {
        setCourseData(prevState => ({
          ...prevState,
          [field]: value,
        }));
      }
    },
    []
  );

  const handleSaveCourse = () => {
    console.log(courseData);
    if (!isEditMode) {
      navigate("/dashboard/course");
    }
  };

  const handleUploadMaterials = (materials) => {
    setCourseData(prevState => ({
      ...prevState,
      materials,
    }));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {isEditMode ? "Edit Course" : "Add New Course"}
      </Typography>

      <Grid container spacing={2}>
        {/* Main Content - 8 columns */}
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
            onChange={(value) => handleCourseDataChange("settings", value)}
          />
          <AdditionalSections
            faqItems={courseData.additional.faq}
            requirements={courseData.additional.requirements}
            targetAudience={courseData.additional.targetAudience}
            keyFeatures={courseData.additional.keyFeatures}
            onChange={(field, value) => handleCourseDataChange("additional", { [field]: value })}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Image
            image={courseData.image}
            onChange={(file) => handleCourseDataChange("image", file)}
          />
          <UploadMaterial
            uploadedFiles={courseData.materials}
            onUpload={handleUploadMaterials}
          />
          <Taxonomy
            taxonomy={courseData.taxonomy}
            onChange={(value) => handleCourseDataChange("taxonomy", value)}
          />
          <Video
            video={courseData.video}
            onChange={(value) => handleCourseDataChange("video", value)}
          />
        </Grid>
      </Grid>

      <Button variant="contained" onClick={handleSaveCourse} sx={{ mt: 2 }}>
        {isEditMode ? "Update" : "Publish"}
      </Button>
    </Box>
  );
};

export default AddEditCoursePage;
