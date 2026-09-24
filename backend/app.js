import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import appointmentRoutes from "./router/appointment.js";

// Load environment variables from .env / config.env file
dotenv.config({ path: "./config/config.env" });

const app = express();

// Allowed Origins for CORS (Includes Localhost, Deployed Frontend, and Vercel wildcard)
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL
].filter(Boolean); // Filters out undefined values if FRONTEND_URL is temporarily empty

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl, or Postman)
      if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
        callback(null, true);
      } else {
        callback(null, true); // Permissive callback so testing from localhost/Vercel previews does not get blocked
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
  })
);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health-check / Root verification route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Saloon Booking System Backend API is live!",
  });
});

// Connect to MongoDB Atlas
dbConnection();

// API Routes
app.use("/api/v1/appointment", appointmentRoutes);

// Global Error Handling Middleware
app.use(errorMiddleware);

export default app;