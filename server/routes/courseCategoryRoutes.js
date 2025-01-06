import express from "express";
import CourseCategoryController from "../controllers/coursecatgoryController.js";

const router = express.Router();

router.get("/", CourseCategoryController.getAll);
router.get("/course/:courseId", CourseCategoryController.getCategoriesByCourse);
router.get("/category/:categoryId", CourseCategoryController.getCoursesByCategory);
router.post("/", CourseCategoryController.create);
router.put("/:courseId/:categoryId", CourseCategoryController.update);
router.delete("/:courseId/:categoryId", CourseCategoryController.delete);

export default router;
