import React from "react";
import { Box, Typography, RadioGroup, Radio, FormControlLabel } from "@mui/material";

const VideoSettings = ({ videoType, setVideoType }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Video Settings
      </Typography>
      <RadioGroup
        value={videoType}
        onChange={(e) => setVideoType(e.target.value)}
        row
      >
        <FormControlLabel
          value="shortcode"
          control={<Radio />}
          label="Shortcode"
        />
        <FormControlLabel
          value="upload"
          control={<Radio />}
          label="Upload"
        />
        <FormControlLabel
          value="external"
          control={<Radio />}
          label="External URL"
        />
      </RadioGroup>
      <Box sx={{ marginTop: 2 }}>
        {videoType === "shortcode" && (
          <Typography>Shortcode Input Content</Typography>
        )}
        {videoType === "upload" && (
          <Typography>Upload Video Content</Typography>
        )}
        {videoType === "external" && (
          <Typography>External URL Input Content</Typography>
        )}
      </Box>
    </Box>
  );
};

export default VideoSettings;
