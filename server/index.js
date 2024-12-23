import express from "express";
import { initializeDatabase } from "./config/dbcontexts.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the LMS API!");
});

// Start Server
const startServer = async () => {
  try {
    await initializeDatabase();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error.message);
  }
};

startServer();
