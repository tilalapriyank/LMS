import express from "express";
import LessonController from "../controllers/lessonController.js";

const router = express.Router();

router.get("/", LessonController.getAllLessons);
router.get("/:id", LessonController.getLessonById);
router.post("/", LessonController.createLesson);
router.put("/:id", LessonController.updateLesson);
router.delete("/:id", LessonController.deleteLesson);
router.get("/author/:authorId", LessonController.getLessonsByAuthor);
router.get("/status/:status", LessonController.getLessonsByStatus);
router.get("/paginated", LessonController.getPaginatedLessons);

export default router;
