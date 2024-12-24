import React from "react";
import { Button, Typography, Box } from "@mui/material";

const LiveChat = () => {
  return (
    <Box sx={{ backgroundColor: "#1976d2", py: 6, color: "white", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Live Chat Support
      </Typography>
      <Typography variant="body1" paragraph>
        Have any questions or need assistance? Our support team is available to chat with you live.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{
          borderRadius: "50px",
          padding: "12px 25px",
          fontWeight: "bold",
        }}
      >
        Chat with Us
      </Button>
    </Box>
  );
};

export default LiveChat;
