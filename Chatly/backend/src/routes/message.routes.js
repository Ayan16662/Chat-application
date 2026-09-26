import express from "express";
import {
  sendMessage,
  sendMediaMessage,
  getMessages,
  markMessagesAsRead,
} from "../controllers/messageController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/", protect, sendMessage);
router.post("/media", protect, upload.single("file"), sendMediaMessage);
router.get("/:chatId", protect, getMessages);
router.put("/read/:chatId", protect, markMessagesAsRead);

export default router;
