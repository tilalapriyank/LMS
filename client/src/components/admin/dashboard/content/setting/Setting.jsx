import React, { useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";
import GeneralSettings from "./tabs/GeneralSettings";
import CourseSettings from "./tabs/CourseSettings";
import QuizSettings from "./tabs/QuizSettings";
import LessonSettings from "./tabs/LessonSettings";
import ProfileSettings from "./tabs/ProfileSettings";
import PaymentSettings from "./tabs/PaymentSettings";

const Setting = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="settings tabs"
      >
        <Tab label="General" />
        <Tab label="Course" />
        <Tab label="Quiz" />
        <Tab label="Lesson" />
        <Tab label="Profile" />
        <Tab label="Payment" />
      </Tabs>

      <Box sx={{ padding: 2 }}>
        {selectedTab === 0 && <GeneralSettings />}
        {selectedTab === 1 && <CourseSettings />}
        {selectedTab === 2 && <QuizSettings />}
        {selectedTab === 3 && <LessonSettings />}
        {selectedTab === 4 && <ProfileSettings />}
        {selectedTab === 5 && <PaymentSettings />}
      </Box>
    </Box>
  );
};

export default Setting;
