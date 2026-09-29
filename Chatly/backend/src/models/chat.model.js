import mongoose from "mongoose";

const statusSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    mediaUrl: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      enum: ["image", "video", "text"],
      default: "image",
    },
    caption: {
      type: String,
      default: "",
    },
    viewers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    expiresAt: {
      type: Date,
      default: () => Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    },
  },
  { timestamps: true }
);

// Auto-delete expired statuses
statusSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const Status = mongoose.model("Status", statusSchema);
export default Status;
