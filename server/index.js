import express from "express";
import initializeDatabase from "./database/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

initializeDatabase()
  .then((connection) => {
    app.get("/", (req, res) => {
      res.send("LMS server is running!");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize database:", err);
    process.exit(1);
  });
