import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { initializeDatabase } from "./config/dbcontexts.js";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";
import sectionRoutes from "./routes/sectionRoutes.js";
import quizQuestionRoutes from "./routes/quizQuestionRoutes.js";
import quizMetaRoutes from "./routes/quizMetaRoutes.js";
import courseMetaRoutes from "./routes/courseMetaRoutes.js";
import courseCategoryRoutes from "./routes/courseCategoryRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import lmsRoutes from "./routes/lmsRoutes.js";
import tagRoutes from "./routes/tagRoutes.js";
import quecategoryRoutes from "./routes/questionCategoryRoutes.js";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Welcome to the LMS API!");
});

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/sections", sectionRoutes);
app.use("/api/quizquestions", quizQuestionRoutes);
app.use("/api/quiz-metas", quizMetaRoutes);
app.use("/api/course-metas", courseMetaRoutes);
app.use("/api/course-category", courseCategoryRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/tag", tagRoutes);
app.use("/api/lms", lmsRoutes);
app.use("/api/question-category", quecategoryRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

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
