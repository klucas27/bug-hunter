// filepath: /backend/src/routes/openai.js
import express from 'express';
import OpenAIController from '../controllers/openaiController.js';

const router = express.Router();
const openAIController = new OpenAIController();

router.post('/correct-code', openAIController.correctCode);

export default router;