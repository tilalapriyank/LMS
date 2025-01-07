import React, { useState, useEffect } from "react";
import { Box, Tab, Tabs, Typography, Grid, Button } from "@mui/material";
import { settingsTabs as defaultSettingsTabs } from "../../../../../utils/setting";
import { saveSettings, getSettings } from "../../../../../api/setting";
import SettingCard from "./SettingCard";

const SettingsPageHorizontalTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [settingsTabs, setSettingsTabs] = useState(defaultSettingsTabs);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const settingsData = await getSettings();
        
        if (!settingsData) {
          const mergedSettings = defaultSettingsTabs.map(tab => ({
            ...tab,
            settings: tab.settings.map(setting => {
              const fetchedSetting = settingsData.find(data => {
                return data.name === setting.id;
              });
              return {
                ...setting,
                value: fetchedSetting ? fetchedSetting.value : setting.value,
              };
            }),
          }));
          setSettingsTabs(mergedSettings);
        } else {
          setSettingsTabs(defaultSettingsTabs);
        }
      } catch (err) {
        setError("Failed to fetch settings");
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleInputChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSaveSettings = async () => {
    const currentTabSettings = settingsTabs[selectedTab]?.settings;

    if (currentTabSettings) {
      for (const setting of currentTabSettings) {
        const settingValue = formValues[setting.id] || setting.value;
        console.log(settingValue);
        try {
          await saveSettings(setting.id, settingValue);
        } catch (err) {
          console.error("Error saving setting:", err);
        }
      }
    }
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

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
          {settingsTabs[selectedTab]?.settings?.map((setting) => (
            <SettingCard
              key={setting.id}
              setting={setting}
              value={formValues[setting.id] || setting.value}
              onChange={handleInputChange}
            />
          ))}
        </Grid>
        <Box sx={{ marginTop: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveSettings}
          >
            Save Settings
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsPageHorizontalTabs;
