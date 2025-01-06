import express from "express";
import CourseMetaController from "../controllers/coursemetaController.js";

const router = express.Router();

// Routes
router.get("/:id", CourseMetaController.findById); 
router.get("/", CourseMetaController.findAll); 
router.get("/course/:courseId", CourseMetaController.findByCourseId); 
router.post("/", CourseMetaController.create); 
router.put("/:id", CourseMetaController.update); 
router.delete("/:id", CourseMetaController.delete); 
router.get("/count", CourseMetaController.count); 
router.get("/course/:courseId/count", CourseMetaController.countByCourseId); 
router.get("/paginated", CourseMetaController.findPaginated);

export default router;
