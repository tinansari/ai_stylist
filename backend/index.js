// backend/index.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI();

app.post('/recommend', async (req, res) => {
    const { preferences } = req.body;

    console.log("Received request with preferences:", preferences);

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "You are a helpful stylist assistant." },
                { role: "user", content: `Suggest an outfit for the following preferences: ${preferences}` },
            ],
        });

        const recommendation = completion.choices[0].message.content.trim();
        console.log("Recommendation:", recommendation);
        res.json({ recommendation });
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        res.status(500).json({ error: "Failed to get recommendation" });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});




    
