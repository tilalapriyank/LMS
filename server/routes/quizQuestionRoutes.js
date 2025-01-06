import express from "express";
import QuizQuestionController from "../controllers/quizquestionController.js";

const router = express.Router();

// Routes
router.post("/", QuizQuestionController.createQuizQuestion); 
router.get("/quiz/:quizId", QuizQuestionController.getQuizQuestionsByQuizId); 
router.get("/question/:questionId", QuizQuestionController.getQuizQuestionsByQuestionId); 
router.get("/:id", QuizQuestionController.getQuizQuestionById); 
router.put("/:id/order", QuizQuestionController.updateQuizQuestionOrder); 
router.delete("/:id", QuizQuestionController.deleteQuizQuestion);

export default router;
