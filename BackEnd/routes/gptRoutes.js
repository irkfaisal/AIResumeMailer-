import express from "express";
const router = express.Router();

import { generateAIResponse } from "../controllers/aiResponseToMailController.js";

router.post('/get-ai-response', generateAIResponse);

export default router;