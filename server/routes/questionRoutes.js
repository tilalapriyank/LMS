import express from "express";
import QuestionController from "../controllers/questionController.js";

const router = express.Router();

router.get("/:id", QuestionController.getQuestionById); 
router.get("/", QuestionController.getAllQuestions); 
router.post("/", QuestionController.createQuestion);
router.put("/:id", QuestionController.updateQuestion); 
router.delete("/:id", QuestionController.deleteQuestion); 
router.get("/author/:authorId", QuestionController.getQuestionsByAuthor); 
router.get("/type/:type", QuestionController.getQuestionsByType); 
router.get("/paginate", QuestionController.getPaginatedQuestions); 
router.get("/count", QuestionController.getCount); 

export default router;
