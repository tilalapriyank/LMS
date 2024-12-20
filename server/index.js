import express from "express";
import { connectDB } from "./config/Database.js";
import User from './models/User.js';
import UserMeta from "./models/UserMeta.js";

const app = express();
const port = 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the LMS API!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
