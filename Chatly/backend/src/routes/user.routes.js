import express from "express";
import { getUser } from "../controllers/user.controller";

const userRouter = express.Router();

// Public
userRouter.post("/signup", Signup);

userRouter.post("/login", login);

// Protected
userRouter.get(
  "/logout",
  authMiddleware,
  logout
);

userRouter.get(
  "/getMe",
  authMiddleware,
  getMe
);

export default authRouter;