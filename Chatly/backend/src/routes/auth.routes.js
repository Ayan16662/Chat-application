import express from "express";

import {
  login,
  Signup,
  logout,
  getMe,
} from "../controllers/auth.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const authRouter = express.Router();

// Public
authRouter.post("/signup", Signup);

authRouter.post("/login", login);

// Protected
authRouter.get(
  "/logout",
  authMiddleware,
  logout
);

authRouter.get(
  "/getMe",
  authMiddleware,
  getMe
);

export default authRouter;