import express from "express";
import LMSController from "../controllers/lmsController.js";

const router = express.Router();

router.get(
  "/course-category/:courseId",
  LMSController.getCategoryNamesByCourseId
);
router.get("/item-course/:itemId", LMSController.getCourseNameByItemId);
router.get("/quiz-name/:questionId", LMSController.getQuizNameByQid);
router.post("/create-course", LMSController.createCourse);
router.post("/edit-course/:id", LMSController.editCourse);
router.get("/course-data/:id", LMSController.getCourseData);
router.post("/create-question", LMSController.createQuestion);
router.get("/question-data/:id", LMSController.getQuestionData);



export default router;
