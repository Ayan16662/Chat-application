import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./src/config/db.js";
import authRouter from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Middlewares
app.use(express.json());

app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);

// Start server
app.listen(PORT, async () => {
  await connectDB();

  console.log(
    `Server running on http://localhost:${PORT}`
  );
});