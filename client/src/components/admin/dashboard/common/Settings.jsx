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
      <CardContent style={{ padding: "16px" }}>
        {settings.map((setting, index) => (
          <div key={index} style={{ marginBottom: "16px", maxWidth: "300px" }}>
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
                style={{ marginBottom: "4px" }}
              />
            )}

            {setting.type === "text" && (
              <TextField
                value={setting.value}
                onChange={(e) => onChange(setting.id, e.target.value)}
                fullWidth={false}
                style={{ width: "100%" }}
                margin="dense"
                variant="outlined"
                size="small"
              />
            )}

            {setting.type === "number" && (
              <TextField
                type="number"
                value={setting.value}
                onChange={(e) => onChange(setting.id, e.target.value)}
                fullWidth={false}
                style={{ width: "100%" }}
                margin="dense"
                variant="outlined"
                size="small"
              />
            )}

            {setting.type === "select" && (
              <FormControl
                style={{ width: "100%" }}
                margin="dense"
                variant="outlined"
                size="small"
              >
                <Select
                  value={setting.value}
                  onChange={(e) => onChange(setting.id, e.target.value)}
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
        ))}
      </CardContent>
    </Card>
  );
};

export default Settings;
