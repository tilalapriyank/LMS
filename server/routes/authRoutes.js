import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { validateRegistration } from "../middlewares/validators.js";
import {authenticateToken} from "../middlewares/authenticateToken.js";

const router = express.Router();

router.post("/register", validateRegistration, registerUser);
router.post("/login", loginUser);

router.get("/dashboard", authenticateToken, (req, res) => {
  res
    .status(200)
    .json({ message: `Welcome to the dashboard, User ID: ${req.user.userId}` });
});

export default router;
