import express from "express";
import UserMetaController from "../controllers/usermetaController.js";

const router = express.Router();

// Routes
router.post("/:userId", UserMetaController.createOrUpdateUserMeta);
router.get("/:userId/:metaKey", UserMetaController.getUserMeta);
router.get("/:userId", UserMetaController.getAllUserMeta);
router.delete("/:userId/:metaKey", UserMetaController.deleteUserMeta);

export default router;
