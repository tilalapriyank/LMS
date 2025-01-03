import express from "express";
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  getCoursesByAuthor,
  getCoursesByStatus,
} from "../controllers/courseController.js";

const router = express.Router();

// Route to get all courses
router.get("/", getAllCourses);

// Route to get a single course by ID
router.get("/:id", getCourseById);

// Route to create a new course
router.post("/", createCourse);

// Route to update an existing course by ID
router.put("/:id", updateCourse);

// Route to delete a course by ID
router.delete("/:id", deleteCourse);

// Route to get courses by author ID
router.get("/author/:authorId", getCoursesByAuthor);

// Route to get courses by status
router.get("/status/:status", getCoursesByStatus);

export default router;
