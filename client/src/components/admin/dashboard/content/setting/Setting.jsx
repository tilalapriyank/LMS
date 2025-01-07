import React, { useState, useEffect } from "react";
import { Box, Tab, Tabs, Typography, Grid, Button } from "@mui/material";
import { settingsTabs } from "../../../../../utils/setting";
import SettingCard from "./DynamicSettings";

const SettingsPageHorizontalTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formValues, setFormValues] = useState({});

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleInputChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [selectedTab]: {
        ...prevValues[selectedTab],
        [id]: value,
      },
    }));
  };

  const handleSave = () => {
    console.log("Saving settings for tab:", settingsTabs[selectedTab].label);
    console.log("Form Values: ", formValues[selectedTab] || {});
  };

  useEffect(() => {
    if (!formValues[selectedTab]) {
      setFormValues((prevValues) => ({
        ...prevValues,
        [selectedTab]: settingsTabs[selectedTab]?.settings.reduce(
          (acc, setting) => ({
            ...acc,
            [setting.id]: setting.value || "",
          }),
          {}
        ),
      }));
    }
  }, [selectedTab, formValues]);

  return (
    <Box sx={{ padding: 3 }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Horizontal tabs example"
      >
        {settingsTabs.map((tab, index) => (
          <Tab label={tab.label} key={tab.name} />
        ))}
      </Tabs>
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
          {settingsTabs[selectedTab]?.label}
        </Typography>
        <Grid container spacing={3}>
          {settingsTabs[selectedTab]?.settings.map((setting) => (
            <SettingCard
              key={setting.id}
              setting={setting}
              handleInputChange={handleInputChange}
              formValues={formValues[selectedTab] || {}}
            />
          ))}
        </Grid>
        <Button variant="contained" sx={{ mt: 3 }} onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsPageHorizontalTabs;
