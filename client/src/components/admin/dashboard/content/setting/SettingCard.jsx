import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

const SettingCard = ({ setting, value, onChange }) => {
  const { id, title, description, type, options } = setting;

  const renderInputField = () => {
    switch (type) {
      case "text":
      case "number":
        return (
          <TextField
            variant="outlined"
            fullWidth
            type={type === "number" ? "number" : "text"}
            defaultValue={value}
            onChange={(e) => onChange(id, e.target.value)}
          />
        );

      case "switch":
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={value === "true"}
                onChange={(e) => onChange(id, e.target.checked)}
                name={id}
              />
            }
            label={title}
          />
        );

      case "color": // Color picker input
        return (
          <TextField
            variant="outlined"
            fullWidth
            type="color"
            value={value || "#000000"} // Default color
            onChange={(e) => onChange(id, e.target.value)}
          />
        );

      case "select":
        return (
          <FormControl fullWidth>
            <InputLabel>{title}</InputLabel>
            <Select
              label={title}
              value={value || ""} 
              onChange={(e) => onChange(id, e.target.value)}
            >
              {options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );

      case "multiselect":
        return (
          <FormControl fullWidth>
            <InputLabel>{title}</InputLabel>
            <Select
              label={title}
              multiple
              value={Array.isArray(value) ? value : []}
              onChange={(e) => onChange(id, e.target.value)}
            >
              {options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );

      default:
        return null;
    }
  };

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
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              {description}
            </Typography>
          )}
          {renderInputField()}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SettingCard;
