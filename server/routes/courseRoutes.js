import express from "express";
import CourseController from "../controllers/courseController.js";

const router = express.Router();

router.get("/", CourseController.getAllCourses);
router.get("/:id", CourseController.getCourseById);
router.post("/", CourseController.createCourse);
router.put("/:id", CourseController.updateCourse);
router.delete("/:id", CourseController.deleteCourse);
router.get("/author/:authorId", CourseController.getCoursesByAuthor);
router.get("/status/:status", CourseController.getCoursesByStatus);

export default router;
