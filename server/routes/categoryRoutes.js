import express from "express";
import CategoryController from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", CategoryController.getAll);
router.get("/:id", CategoryController.getById);
router.post("/", CategoryController.create);
router.put("/:id", CategoryController.update);
router.delete("/:id", CategoryController.delete);
router.get("/search/by-name", CategoryController.findByName);
router.get("/paginated", CategoryController.findPaginated);

export default router;
