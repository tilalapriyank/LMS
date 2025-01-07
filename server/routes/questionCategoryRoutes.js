import express from "express";
import QuestionCategoryController from "../controllers/questioncategoryController.js";

const router = express.Router();

router.post("/", QuestionCategoryController.createCategory);
router.get("/", QuestionCategoryController.getAllCategories);
router.get("/:categoryId", QuestionCategoryController.getCategoryById);
router.put("/:categoryId", QuestionCategoryController.updateCategory);
router.delete("/:categoryId", QuestionCategoryController.deleteCategory);

export default router;
