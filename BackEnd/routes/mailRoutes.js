import express from "express";
const router = express.Router();

import { sendEmail } from "../controllers/mailController.js";

// Route to send email
router.post('/send-email', sendEmail);

export default router;

