import React from "react";
import {
  Box,
  TextField,
  Switch,
  MenuItem,
  Typography,
  Card,
  CardContent,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const DynamicSettings = ({ settings = [], onChange }) => {
  const renderSetting = (setting) => {
    const cardStyle = {
      marginBottom: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%", // Ensure all cards have the same height
    };

    switch (setting.type) {
      case "number":
        return (
          <Grid item md={12} key={setting.id}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h6">{setting.title}</Typography>
                <TextField
                  type="number"
                  value={setting.value}
                  onChange={(e) =>
                    onChange(setting.id, parseInt(e.target.value, 10))
                  }
                  fullWidth
                  margin="normal"
                  helperText={setting.description}
                  inputProps={{
                    "aria-label": setting.title,
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        );

      case "switch":
        return (
          <Grid item md={12} key={setting.id}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h6">{setting.title}</Typography>
                <Switch
                  checked={setting.value}
                  onChange={(e) => onChange(setting.id, e.target.checked)}
                  inputProps={{
                    "aria-label": setting.title,
                  }}
                />
                <Typography variant="body2">{setting.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );

      case "multiple_select":
        return (
          <Grid item md={12} key={setting.id}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h6">{setting.title}</Typography>
                <TextField
                  select
                  value={setting.value}
                  onChange={(e) => onChange(setting.id, e.target.value)}
                  fullWidth
                  margin="normal"
                  helperText={setting.description}
                  inputProps={{
                    "aria-label": setting.title,
                  }}
                  multiple
                >
                  {setting.options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </CardContent>
            </Card>
          </Grid>
        );

      case "select":
        return (
          <Grid item md={12} key={setting.id}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h6">{setting.title}</Typography>
                <TextField
                  select
                  value={setting.value}
                  onChange={(e) => onChange(setting.id, e.target.value)}
                  fullWidth
                  margin="normal"
                  helperText={setting.description}
                  inputProps={{
                    "aria-label": setting.title,
                  }}
                >
                  {setting.options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </CardContent>
            </Card>
          </Grid>
        );

      case "checkbox":
        return (
          <Grid item md={12} key={setting.id}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h6">{setting.title}</Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={setting.value}
                      onChange={(e) => onChange(setting.id, e.target.checked)}
                      inputProps={{
                        "aria-label": setting.title,
                      }}
                    />
                  }
                  label={setting.description}
                />
              </CardContent>
            </Card>
          </Grid>
        );

      case "color":
        return (
          <Grid item md={12} key={setting.id}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h6">{setting.title}</Typography>
                <TextField
                  type="color"
                  value={setting.value}
                  onChange={(e) => onChange(setting.id, e.target.value)}
                  fullWidth
                  margin="normal"
                  helperText={setting.description}
                  inputProps={{
                    "aria-label": setting.title,
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        );

      case "text":
        return (
          <Grid item md={12} key={setting.id}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h6">{setting.title}</Typography>
                <TextField
                  type="text"
                  value={setting.value}
                  onChange={(e) => onChange(setting.id, e.target.value)}
                  fullWidth
                  margin="normal"
                  helperText={setting.description}
                  inputProps={{
                    "aria-label": setting.title,
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        );

      default:
        return null;
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {settings.map(renderSetting)}
      </Grid>
    </Box>
  );
};

export default DynamicSettings;
