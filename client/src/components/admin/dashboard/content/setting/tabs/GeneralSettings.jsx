import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
  Grid,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const GeneralSettings = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [allowInstructorPublish, setAllowInstructorPublish] = useState(true);
  const [showBecomeInstructor, setShowBecomeInstructor] = useState(true);
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
  const [currency, setCurrency] = useState("USD");
  const [fontSize, setFontSize] = useState(14);
  const [theme, setTheme] = useState("light");
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);
  const [keyboardShortcutsEnabled, setKeyboardShortcutsEnabled] = useState(false);
  const [language, setLanguage] = useState("en");
  const [rtlEnabled, setRtlEnabled] = useState(false);

  const handleSubmit = () => {
    alert("General settings saved!");
  };

  return (
    <Box sx={{ flexGrow: 1, margin: 3 }}>
      <Grid container spacing={3}>
        {/* Pagination Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pagination (Rows Per Page)
              </Typography>
              <TextField
                type="number"
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(e.target.value)}
                fullWidth
                margin="normal"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Allow Instructors To Publish Courses */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Allow Instructors To Publish Courses
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={allowInstructorPublish}
                    onChange={(e) => setAllowInstructorPublish(e.target.checked)}
                    color="primary"
                  />
                }
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Become an Instructor Button */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Become an Instructor Button
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={showBecomeInstructor}
                    onChange={(e) => setShowBecomeInstructor(e.target.checked)}
                    color="primary"
                  />
                }
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Date Format */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Date Format
              </Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Format</InputLabel>
                <Select
                  value={dateFormat}
                  onChange={(e) => setDateFormat(e.target.value)}
                  label="Format"
                >
                  <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
                  <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
                  <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        {/* Currency */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Currency
              </Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Currency</InputLabel>
                <Select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  label="Currency"
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                  <MenuItem value="INR">INR</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        {/* Font Size & Theme */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Font Size & Theme
              </Typography>
              <TextField
                label="Font Size"
                type="number"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Theme</InputLabel>
                <Select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  label="Theme"
                >
                  <MenuItem value="light">Light</MenuItem>
                  <MenuItem value="dark">Dark</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        {/* Screen Reader Compatibility */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Screen Reader Compatibility
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={screenReaderEnabled}
                    onChange={(e) => setScreenReaderEnabled(e.target.checked)}
                    color="primary"
                  />
                }
                label="Enable Screen Reader Compatibility"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Keyboard Shortcuts */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Keyboard Shortcuts
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={keyboardShortcutsEnabled}
                    onChange={(e) => setKeyboardShortcutsEnabled(e.target.checked)}
                    color="primary"
                  />
                }
                label="Enable Keyboard Shortcuts"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Box sx={{ textAlign: "center", marginTop: 3 }}>
        <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ width: "200px" }}>
          Save Settings
        </Button>
      </Box>
    </Box>
  );
};

export default GeneralSettings;
