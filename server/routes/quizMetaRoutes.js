import express from "express";
import QuizMetaController from "../controllers/quizmetaController.js";

const router = express.Router();

// Routes
router.get("/:id", QuizMetaController.findById); 
router.get("/", QuizMetaController.findAll); 
router.get("/quiz/:quizId", QuizMetaController.findByQuizId); 
router.post("/", QuizMetaController.create); 
router.put("/:id", QuizMetaController.update); 
router.delete("/:id", QuizMetaController.delete); 
router.get("/count", QuizMetaController.count); 
router.get("/quiz/:quizId/count", QuizMetaController.countByQuizId); 
router.get("/paginated", QuizMetaController.findPaginated); 

export default router;
