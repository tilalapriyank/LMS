import React, { useState, useEffect } from "react";
import Title from "../../common/Title";
import Content from "../../common/Content";
import Curriculum from "./Curriculum";
import Settings from "../../common/Settings";
import Image from "../../common/Image";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { courseSettings } from "../../../../../utils/courseSetting";

const AddEditCoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const defaultCourseData = {
    title: "",
    content: "",
    curriculum: "",
    settings: {
      isActive: false,
      duration: "",
    },
    image: null,
  };

  const [courseData, setCourseData] = useState(defaultCourseData);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (courseId) {
      setIsEditMode(true);
      const fetchedCourseData = {
        title: "Existing Course Title",
        content: "This is the existing course content.",
        curriculum: "Curriculum details here...",
        settings: { isActive: true, duration: "3 months" },
        image: null,
      };
      setCourseData(fetchedCourseData);
    } else {
      setIsEditMode(false);
    }
  }, [courseId]);

  const handleCourseDataChange = (field, value) => {
    if (field === "isActive" || field === "duration") {
      setCourseData({
        ...courseData,
        settings: {
          ...courseData.settings,
          [field]: value,
        },
      });
    } else {
      setCourseData({
        ...courseData,
        [field]: value,
      });
    }
  };

  const handleChange = (name, value) => {
    console.log(`${name} changed to ${value}`);
  };

  const handleSaveCourse = () => {
    console.log(courseData);
    if (!isEditMode) {
      navigate("/dashboard/course");
    }
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
            <Settings settings={courseSettings} onChange={handleChange} />
        </Grid>

        <Grid item xs={12} md={4}>
          <Image
            image={courseData.image}
            onChange={(file) => handleCourseDataChange("image", file)}
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
