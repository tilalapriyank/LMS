import React from "react";
import { TextField, Box } from "@mui/material";

const Title = ({ title, onChange }) => (
  <Box sx={{ width: "100%", mb: 2 }}>
    <TextField
      label="Title"
      value={title}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      variant="outlined"
      sx={{
        mb: 2,
        "& .MuiInputLabel-root": {
          marginBottom: "10px",
        },
      }}
    />
  </Box>
);

export default Title;
