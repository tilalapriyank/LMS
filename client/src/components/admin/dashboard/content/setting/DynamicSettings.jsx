import React from "react";
import {
  Grid,
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
} from "@mui/material";

const SettingCard = ({ setting, handleInputChange, formValues }) => {
  const { id, title, description, type, options, value } = setting;

  return (
    <Grid item xs={12} sm={6} md={3} key={id}>
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
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SettingCard;
