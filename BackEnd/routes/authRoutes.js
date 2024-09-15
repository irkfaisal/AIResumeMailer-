import express from "express";
const router = express.Router();

import { userRegistration } from "../controllers/authController.js";
import { userLogin } from "../controllers/authController.js";

// @route POST /api/auth/register
router.post('/register', userRegistration);
router.post('/login', userLogin);

export default router;