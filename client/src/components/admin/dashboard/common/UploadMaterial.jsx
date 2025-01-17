import React from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";

const UploadMaterial = ({ uploadedFiles, onUpload }) => {
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    onUpload([...uploadedFiles, ...newFiles]);
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    onUpload(updatedFiles);
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
        title="Upload Material"
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
        <Typography variant="body2" sx={{ color: "gray" }}>
          Accepted formats: PDF, Word, Excel, Images, PPT
        </Typography>
        <Button
          style={{ marginTop: "10px", marginBottom: "10px" }}
          variant="contained"
          component="label"
          startIcon={<UploadFileIcon />}
        >
          Upload Files
          <input
            type="file"
            multiple
            hidden
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg"
          />
        </Button>

        <Divider />

        <Box sx={{ marginTop: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Uploaded Materials
          </Typography>

          {uploadedFiles.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              No files uploaded yet.
            </Typography>
          ) : (
            <List>
              {uploadedFiles.map((file, index) => (
                <ListItem
                  key={index}
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: 1,
                    marginBottom: 1,
                    padding: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ListItemText
                    primary={file.name}
                    secondary={`Size: ${(file.size / 1024).toFixed(2)} KB`}
                  />
                  <Box>
                    <IconButton
                      edge="end"
                      color="error"
                      onClick={() => handleDeleteFile(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default UploadMaterial;
