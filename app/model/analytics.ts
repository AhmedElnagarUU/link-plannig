import mongoose from "mongoose";

const AnalyticsSchema = new mongoose.Schema(
  {
    urlName: { type: String, required: true },        // The public link slug
    userId: { type: String, required: true },          // Owner of the public link

    ip: { type: String },                              // Visitor's IP address
    userAgent: { type: String },                       // Browser info
    country: { type: String },                         // Optional: "EG", "US", etc.
    referrer: { type: String },                        // Where user came from

    timestamp: { type: Date, default: Date.now },      // When visit happened
  },
  { timestamps: true }
);

export default mongoose.models.Analytics ||
  mongoose.model("Analytics", AnalyticsSchema);
