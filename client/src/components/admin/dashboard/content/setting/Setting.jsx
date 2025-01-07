import React, { useState } from "react";
import { Box, Tab, Tabs, Typography, TextField, FormControl, Select, MenuItem, Checkbox, FormControlLabel, InputLabel, Card, CardContent, Grid } from "@mui/material";
import { settingsTabs } from "../../../../../utils/setting";

const SettingsPageHorizontalTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formValues, setFormValues] = useState({});

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleInputChange = (id, value) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [id]: value
    }));
  };

  const renderSettingField = (setting) => {
    const { id, title, description, type, options, value } = setting;

    const settingField = (
      <Grid item xs={12} sm={6} md={4} key={id}>
        <Card sx={{ mb: 2, borderRadius: 2, boxShadow: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              {title}
            </Typography>
            {description && (
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                {description}
              </Typography>
            )}
            {type === "text" && (
              <TextField
                variant="outlined"
                fullWidth
                defaultValue={value}
                onChange={(e) => handleInputChange(id, e.target.value)}
              />
            )}
            {type === "number" && (
              <TextField
                label={title}
                type="number"
                variant="outlined"
                fullWidth
                defaultValue={value}
                onChange={(e) => handleInputChange(id, e.target.value)}
              />
            )}
            {type === "switch" && (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value}
                    onChange={(e) => handleInputChange(id, e.target.checked)}
                    name={id}
                  />
                }
                label={title}
              />
            )}
            {type === "select" && (
              <FormControl fullWidth>
                <InputLabel>{title}</InputLabel>
                <Select
                  label={title}
                  value={value}
                  onChange={(e) => handleInputChange(id, e.target.value)}
                >
                  {options?.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </CardContent>
        </Card>
      </Grid>
    );

    return settingField;
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Horizontal tabs example">
        {settingsTabs.map((tab, index) => (
          <Tab label={tab.label} key={tab.name} />
        ))}
      </Tabs>
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
          {settingsTabs[selectedTab]?.label}
        </Typography>
        <Grid container spacing={3}>
          {settingsTabs[selectedTab]?.settings.map((setting) => renderSettingField(setting))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SettingsPageHorizontalTabs;
