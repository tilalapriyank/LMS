import React, { useState } from "react";
import { Card, CardHeader, CardContent, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

const InputButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: "#1976d2",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
}));

const Video = ({ video, onChange }) => {
  const [courseData, setCourseData] = useState({
    video: null, 
    videoUrl: "",
    videoOption: "upload", 
  });

  const handleCourseDataChange = (key, value) => {
    const updatedData = { ...courseData, [key]: value };
    setCourseData(updatedData);
    if (onChange) onChange(updatedData);
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleCourseDataChange("video", file);
    }
  };

  const handleUrlChange = (event) => {
    const url = event.target.value;
    if (courseData.videoOption === "youtube") {
      const videoIdMatch = url.match(
        /(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/
      );
      const videoId = videoIdMatch ? videoIdMatch[1] : "";
      handleCourseDataChange("videoUrl", videoId);
    } else {
      handleCourseDataChange("videoUrl", url);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
      style={{ marginTop: "30px" }}
    >
      <CardHeader
        title="Course Intro Video"
        sx={{
          backgroundColor: "#1976d2",
          color: "#fff",
          padding: "16px",
        }}
        titleTypographyProps={{
          variant: "h6",
          fontWeight: "bold",
        }}
      />
      <CardContent>
        <TextField
          select
          fullWidth
          label="Select Video Type"
          value={courseData.videoOption}
          onChange={(e) =>
            handleCourseDataChange("videoOption", e.target.value)
          }
          SelectProps={{ native: true }}
          style={{ marginBottom: "16px" }}
        >
          <option value="upload">Upload Video</option>
          <option value="external">External URL</option>
          <option value="embedded">Embed Video</option>
          <option value="youtube">YouTube</option>
        </TextField>

        {courseData.videoOption === "upload" && (
          <>
            <InputButton variant="contained" component="label">
              Choose Video
              <input
                type="file"
                accept="video/*"
                hidden
                onChange={handleVideoChange}
              />
            </InputButton>
            {courseData.video && (
              <div>
                <video
                  width="100%"
                  controls
                  src={URL.createObjectURL(courseData.video)}
                />
              </div>
            )}
          </>
        )}

        {courseData.videoOption === "external" && (
          <TextField
            label="External Video URL"
            fullWidth
            value={courseData.videoUrl}
            onChange={handleUrlChange}
            placeholder="Enter external video URL"
            style={{ marginBottom: "16px" }}
          />
        )}

        {courseData.videoOption === "embedded" && (
          <TextField
            label="Embed Code"
            fullWidth
            value={courseData.videoUrl}
            onChange={handleUrlChange}
            placeholder="Enter embed code"
            style={{ marginBottom: "16px" }}
          />
        )}

        {courseData.videoOption === "youtube" && (
          <TextField
            label="YouTube Video URL"
            fullWidth
            value={courseData.videoUrl}
            onChange={handleUrlChange}
            placeholder="Enter YouTube video URL"
            style={{ marginBottom: "16px" }}
          />
        )}

        {courseData.videoOption === "external" && courseData.videoUrl && (
          <iframe
            width="100%"
            height="315"
            src={courseData.videoUrl}
            title="External Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}

        {courseData.videoOption === "embedded" && courseData.videoUrl && (
          <div
            dangerouslySetInnerHTML={{ __html: courseData.videoUrl }}
            style={{ marginTop: "16px" }}
          />
        )}

        {courseData.videoOption === "youtube" && courseData.videoUrl && (
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${courseData.videoUrl}`}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </CardContent>
    </Card>
  );
};

export default Video;
