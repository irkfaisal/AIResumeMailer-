import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import mailRoutes from "./routes/mailRoutes.js"
import gptRoutes from "./routes/gptRoutes.js"

console.log(process.cwd());

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware for CORS (allowing cross-origin requests)
app.use(cors());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api', mailRoutes)
app.use('/ai', gptRoutes )


// Error handling middleware (ensure this is after the routes)
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  });

// Connect to the database
connectDB();

// Start the server
const PORT = process.env.PORT || 8400;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
