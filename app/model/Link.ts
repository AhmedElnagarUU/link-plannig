import mongoose from "mongoose";

const TestSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    createdBy: { type: String, required: true }, // Stores Kinde user ID
  },
  { timestamps: true }
);

// ✅ Add index for efficient user-based queries
TestSchema.index({ createdBy: 1 });

export default mongoose.models.Test || mongoose.model("Test", TestSchema);
