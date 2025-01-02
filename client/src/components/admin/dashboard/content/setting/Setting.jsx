import React, { useState, Suspense } from "react";
import { Tab, Tabs, Box, Grid } from "@mui/material";
import { settingsTabs } from "../../../../../utils/setting";
import DynamicSettings from "./DynamicSettings";

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
        {settingsTabs.map((tab, index) => (
          <Tab
            key={tab.name}
            label={tab.label}
            id={`tab-${index}`}
            aria-controls={`tabpanel-${index}`}
          />
        ))}
      </Tabs>

      <Box sx={{ padding: 2 }}>
        <Suspense fallback={<div>Loading...</div>}>
          {settingsTabs.map((tab, index) => {
            return (
              selectedTab === index && (
                <Box
                  role="tabpanel"
                  hidden={selectedTab !== index}
                  id={`tabpanel-${index}`}
                  aria-labelledby={`tab-${index}`}
                  key={tab.name}
                >
                  <Grid container spacing={2}>
                    {tab.settings.map((settingData, i) => (
                      <Grid item xs={12} sm={6} md={3} key={i}>
                        <DynamicSettings
                          settings={[settingData]}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )
            );
          })}
        </Suspense>
      </Box>
    </Box>
  );
};

export default Setting;
