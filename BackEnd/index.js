import express from "express";
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8400;

//connect DataBase
connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

