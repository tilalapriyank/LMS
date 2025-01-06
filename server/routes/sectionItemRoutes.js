import express from "express";
import SectionItemController from "../controllers/sectionitemController.js";

const router = express.Router();

// Routes
router.post("/", SectionItemController.createSectionItem); 
router.get("/section/:sectionId", SectionItemController.getItemsBySectionId); 
router.get("/:id", SectionItemController.getItemById); 
router.put("/:id/order", SectionItemController.updateItemOrder); 
router.put("/:id", SectionItemController.updateSectionItem); 
router.delete("/:id", SectionItemController.deleteSectionItem); 

export default router;
