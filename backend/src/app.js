// filepath: /backend/src/app.js
import express from 'express';
import dotenv from 'dotenv';
import openaiRoutes from './routes/openai.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/openai', openaiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});