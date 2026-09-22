import express from "express";
import { getUser } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.get(
  "/current",
  authMiddleware,
  getUser
);

export default userRouter;