import express from "express";
import settingController from "../controllers/settingController.js";

const router = express.Router();

router.get("/", settingController.getAllSettings);
router.get("/:name", settingController.getSetting);
router.post("/:name", settingController.saveSetting);

export default router;
