import React, { useState } from "react";
import { Card, CardContent, Button, TextField, Typography, FormControlLabel, Switch, Grid, Box, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const GeneralSettings = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default rows per page
  const [allowInstructorPublish, setAllowInstructorPublish] = useState(true); // Default: Instructors can publish
  const [showBecomeInstructor, setShowBecomeInstructor] = useState(true); // Default: Show Become Instructor button
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY"); // Default date format
  const [currency, setCurrency] = useState("USD"); // Default currency
  const [fontSize, setFontSize] = useState(14); // Default font size
  const [theme, setTheme] = useState("light"); // Default theme
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false); // Default screen reader compatibility
  const [keyboardShortcutsEnabled, setKeyboardShortcutsEnabled] = useState(false); // Default keyboard shortcuts
  const [language, setLanguage] = useState("en"); // Default language
  const [rtlEnabled, setRtlEnabled] = useState(false); // Default RTL support

  const handleSubmit = () => {
    alert("General settings saved!");
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2} justifyContent="space-between">
        {/* Pagination Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pagination (Rows Per Page)
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                Set the number of rows to be displayed per page.
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

        {/* Allow Instructors To Publish Courses Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Allow Instructors To Publish Courses
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                Enable instructors to publish the course directly. If disabled, admins will review content before publishing.
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

        {/* Become an Instructor Button Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Become an Instructor Button
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                Enable the option to display this button on the student dashboard.
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

        {/* Date Format Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ width: "100%" }}>
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

        {/* Currency Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ width: "100%" }}>
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

        {/* Font Size & Theme Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ width: "100%" }}>
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

        {/* Screen Reader Compatibility Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ width: "100%" }}>
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

        {/* Keyboard Shortcuts Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ width: "100%" }}>
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

        {/* Language Selection Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Language Selection
              </Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Language</InputLabel>
                <Select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  label="Language"
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        {/* RTL Support Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                RTL (Right-to-Left) Support
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={rtlEnabled}
                    onChange={(e) => setRtlEnabled(e.target.checked)}
                    color="primary"
                  />
                }
                label="Enable RTL Support"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Box sx={{ textAlign: "center", marginTop: 2 }}>
        <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ width: "200px" }}>
          Save Settings
        </Button>
      </Box>
    </Box>
  );
};

export default GeneralSettings;
