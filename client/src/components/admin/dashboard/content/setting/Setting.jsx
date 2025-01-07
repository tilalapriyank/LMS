import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  InputLabel,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { settingsTabs } from "../../../../../utils/setting";
import { saveSettings } from "../../../../../api/setting";

const SettingsPageHorizontalTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formValues, setFormValues] = useState({});

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleInputChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const renderSettingField = (setting) => {
    const { id, title, description, type, options, value } = setting;

    switch (type) {
      case "text":
      case "number":
        return (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card
              sx={{
                mb: 2,
                borderRadius: 2,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {title}
                </Typography>
                {description && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                  >
                    {description}
                  </Typography>
                )}
                <TextField
                  variant="outlined"
                  fullWidth
                  type={type === "number" ? "number" : "text"}
                  defaultValue={value}
                  onChange={(e) => handleInputChange(id, e.target.value)}
                />
              </CardContent>
            </Card>
          </Grid>
        );

      case "switch":
        return (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card sx={{ mb: 2, borderRadius: 2, boxShadow: 3 }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {title}
                </Typography>
                {description && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                  >
                    {description}
                  </Typography>
                )}
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
              </CardContent>
            </Card>
          </Grid>
        );

      case "select":
        return (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card sx={{ mb: 2, borderRadius: 2, boxShadow: 3 }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {title}
                </Typography>
                {description && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                  >
                    {description}
                  </Typography>
                )}
                <FormControl fullWidth>
                  <InputLabel>{title}</InputLabel>
                  <Select
                    label={title}
                    value={value}
                    onChange={(e) => handleInputChange(id, e.target.value)}
                  >
                    {options?.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
        );

      default:
        return null;
    }
  };

  const handleSaveSettings = async () => {
    const currentTabSettings = settingsTabs[selectedTab]?.settings;

    if (currentTabSettings) {
      for (const setting of currentTabSettings) {
        const settingValue = formValues[setting.id] || setting.value;
        const response = await saveSettings(setting.id, settingValue);
      }
    }
  };

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
          {settingsTabs[selectedTab]?.settings.map((setting) =>
            renderSettingField(setting)
          )}
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
