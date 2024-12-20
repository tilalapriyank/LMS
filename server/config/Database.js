import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { User, UserMeta, Tag, SectionItem, Section, QuizQuestion, Quiz, Question, Lesson, CourseTag, CourseCategory, Course, Comment, Category } from '../models/index.js';

dotenv.config();

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: console.log,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL Connected...");
    // Sync the database
    await sequelize.sync();
    console.log("Database synced...");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  }
};

// Export the connectDB function
export { connectDB, sequelize };
