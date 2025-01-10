import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box } from "@mui/material";

const Content = ({ content, onChange }) => (
  <Box sx={{ width: "100%", mb: 10 }}>
    <ReactQuill
      value={content}
      onChange={onChange}
      theme="snow"
      modules={{
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline", "strike"],
          [{ align: [] }],
          ["link", "image", "video"],
          ["blockquote", "code-block"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          ["emoji"],
        ],
      }}
      style={{ height: "200px", width: "100%" }}
    />
  </Box>
);

export default Content;
