import express from "express";
import passport from "passport";
import session from "express-session";
import dotenv from 'dotenv';
import cors from "cors";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import mailRoutes from "./routes/mailRoutes.js"
import gptRoutes from "./routes/gptRoutes.js";
import passportConfig from "./config/passportConfig.js";
import userProfileRoutes from './routes/userProfileRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';
import jobDescriptionRoutes from './routes/jobDescriptionRoutes.js';

console.log(process.cwd());

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable trust proxy for Nginx/Vercel
app.set("trust proxy", 1);

// Allowed origins: localhost (dev) + production URL
const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.CLIENT_URL_PROD,
].filter(Boolean);

// Middleware for CORS (allowing cross-origin requests)
app.use(cors({
  origin: (origin, callback) => {
    // Diagnostic logging for production CORS issues
    if (process.env.NODE_ENV === "production") {
      console.log(`CORS Debug - Incoming Origin: ${origin}`);
      console.log(`CORS Debug - Allowed Origins: ${JSON.stringify(allowedOrigins)}`);
    }

    // Allow requests with no origin (e.g. curl, mobile apps, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS: origin '${origin}' not allowed`));
  },
  credentials: true,
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production", // Set to true for production HTTPS
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Initialize Passport and restore authentication state from session
app.use(passport.initialize());
app.use(passport.session());
// Configure Passport strategies
passportConfig(passport);


// Define routes
app.use('/auth', authRoutes);
app.use('/api/mail', mailRoutes)
app.use('/ai', gptRoutes)
app.use('/api/profile', userProfileRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/job-description', jobDescriptionRoutes);


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
const PORT = process.env.PORT || 8500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
