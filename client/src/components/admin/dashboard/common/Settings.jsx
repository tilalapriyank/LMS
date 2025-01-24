import React from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  FormControl,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
} from "@mui/material";

const Settings = ({ settings, onChange }) => {
  return (
    <Card
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        marginTop: "30px",
      }}
    >
      <CardHeader
        title="Settings"
        titleTypographyProps={{
          variant: "h6",
          fontWeight: "bold",
        }}
        style={{
          backgroundColor: "#1976d2",
          borderBottom: "1px solid #ddd",
          padding: "16px",
          color: "#fff",
        }}
      />
      <CardContent>
        <Grid container spacing={3}>
          {settings.map((setting, index) => (
            <Grid item xs={12} md={4} key={index}>
              <div style={{ marginBottom: "20px", maxWidth: "400px" }}>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  style={{ fontWeight: "bold", marginBottom: "4px" }}
                >
                  {setting.title}
                </Typography>
                {setting.description && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginBottom: "8px" }}
                  >
                    {setting.description}
                  </Typography>
                )}

                {setting.type === "checkbox" && (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={setting.value}
                        onChange={(e) => onChange(setting.id, e.target.checked)}
                        color="primary"
                      />
                    }
                    label={setting.title}
                  />
                )}

                {setting.type === "text" && (
                  <TextField
                    onChange={(e) => onChange(setting.id, e.target.value)}
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    size="small"
                    placeholder={setting.placeholder || "Enter text"}
                  />
                )}

                {setting.type === "number" && (
                  <TextField
                    type="number"
                    onChange={(e) => onChange(setting.id, e.target.value)}
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    size="small"
                    placeholder={setting.placeholder || "Enter number"}
                  />
                )}

                {setting.type === "textarea" && (
                  <TextField
                    multiline
                    rows={4}
                    onChange={(e) => onChange(setting.id, e.target.value)}
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    size="small"
                    placeholder={setting.placeholder || "Enter text"}
                  />
                )}

                {setting.type === "select" && (
                  <FormControl
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    size="small"
                  >
                    <Select
                      onChange={(e) => onChange(setting.id, e.target.value)}
                      displayEmpty
                    >
                      {setting.options.map((option, idx) => (
                        <MenuItem key={idx} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Settings;
