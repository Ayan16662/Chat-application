import express from "express";
import {
  createStatus,
  getStatusFeed,
  viewStatus,
} from "../controllers/statusController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/", protect, upload.single("media"), createStatus);
router.get("/", protect, getStatusFeed);
router.put("/:id/view", protect, viewStatus);

export default router;
