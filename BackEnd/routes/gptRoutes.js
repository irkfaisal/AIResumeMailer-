import express from "express";
const router = express.Router();

import {generateAIResponse} from "../controllers/chatgptResponseToMailController.js";

router.post('/get-ai-response', generateAIResponse);

export default router;