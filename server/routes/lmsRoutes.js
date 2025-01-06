import express from "express";
import LMSController from '../controllers/lmsController.js';

const router = express.Router();

router.get("/course-category/:courseId", LMSController.getCategoryNamesByCourseId);
router.get("/item-course/:itemId", LMSController.getCourseNameByItemId);

export default router;
