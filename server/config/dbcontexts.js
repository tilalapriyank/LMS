import { connectDB } from "./Database.js";
import {
  User,
  UserMeta,
  Course,
  CourseMeta,
  Lesson,
  LessonMeta,
  Quiz,
  QuizMeta,
  Question,
  QuestionMeta,
  QuestionAnswer,
  Category,
  Tag,
  Section,
  Comment,
  CourseTag,
  CourseCategory,
  QuizQuestion,
  SectionItem,
  setupAssociations,
} from "../models/index.js";
import { defaultData } from "../seed.js";

export const initializeDatabase = async () => {
  try {
    await connectDB();
    setupAssociations();
    console.log("Database connected and associations setup successfully.");
    await defaultData();
  } catch (error) {
    console.error("Database initialization failed:", error.message);
    process.exit(1); // Exit the process with failure
  }
};
