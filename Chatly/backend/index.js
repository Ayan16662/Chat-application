import express from "express";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";
import authRouter from "./src/routes/auth.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running at ${PORT}`);
});