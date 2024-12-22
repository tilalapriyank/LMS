import express from "express";
// import * as dbcontexts from "./config/dbcontexts.js";

import User from "../models/User.js";
import UserMeta from "../models/UserMeta.js";
import Course from "../models/Course.js";
import Lesson from "../models/Lesson.js";
import Quiz from "../models/Quiz.js";
import Question from "../models/Question.js";
import Category from "../models/Category.js";
import Tag from "../models/Tag.js";
import Section from "../models/Section.js";
import Comment from "../models/Comment.js";

import { connectDB } from "./config/Database.js";


const app = express();
const port = 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the LMS API!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
