import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
router.get("/email/:email", UserController.getUserByEmail);
router.get("/count", UserController.countUsers);
router.get("/paginated", UserController.getPaginatedUsers);

export default router;
