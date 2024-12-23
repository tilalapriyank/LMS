import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { validateRegistration } from '../middlewares/validators.js';

const router = express.Router();

router.post('/register', validateRegistration, registerUser);
router.post('/login', loginUser);

export default router;
