import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Title from "../../common/Title";
import Description from "../../common/Description";
import Curriculum from "./Curriculum";
import CourseSettings from "./CourseSettings";
import VideoSettings from "../../common/VideoSettings";
import CourseImage from "./CourseImage";


const AddEditCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [curriculum, setCurriculum] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [videoType, setVideoType] = useState("shortcode");
  const [courseImage, setCourseImage] = useState(null);

  const handleTabChange = (_, newValue) => setActiveTab(newValue);

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        {courseTitle ? "Edit Course" : "Add New Course"}
      </Typography>

      <Title courseTitle={courseTitle} setCourseTitle={setCourseTitle} />

      <Description
        courseDescription={courseDescription}
        setCourseDescription={setCourseDescription}
      />

      <Curriculum curriculum={curriculum} setCurriculum={setCurriculum} />

      <CourseSettings activeTab={activeTab} onTabChange={handleTabChange} />

      <VideoSettings
        videoType={videoType}
        setVideoType={setVideoType}
      />

      <CourseImage
        courseImage={courseImage}
        setCourseImage={setCourseImage}
      />

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
