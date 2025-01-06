import express from "express";
import TagController from "../controllers/tagController.js";

const router = express.Router();

// Routes
router.post("/", TagController.createTag); 
router.get("/", TagController.getAllTags); 
router.get("/:id", TagController.getTagById); 
router.put("/:id", TagController.updateTag); 
router.delete("/:id", TagController.deleteTag); 

export default router;
