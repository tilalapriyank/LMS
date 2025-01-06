import express from "express";
import LMSController from '../controllers/lmsController.js';

const router = express.Router();

router.get("/course/:courseId", LMSController.getCategoryNamesByCourseId);

export default router;
