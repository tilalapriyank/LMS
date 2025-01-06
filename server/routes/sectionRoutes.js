import express from "express";
import SectionController from "../controllers/sectionController.js";

const router = express.Router();

// Routes
router.post("/", SectionController.createSection); 
router.get("/course/:courseId", SectionController.getSectionsByCourseId); 
router.get("/:id", SectionController.getSectionById); 
router.put("/:id/order", SectionController.updateSectionOrder); 
router.put("/:id", SectionController.updateSection); 
router.delete("/:id", SectionController.deleteSection); 

export default router;
