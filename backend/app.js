import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import appointmentRoutes from "./router/appointment.js";

// Load environment variables from .env file
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB Atlas
dbConnection();

app.use("/api/v1/appointment", appointmentRoutes);

// Global Error Handling Middleware
app.use(errorMiddleware);

export default app;

