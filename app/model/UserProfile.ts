// models/UserProfile.ts
import mongoose from 'mongoose';

const UserProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  urlName: { type: String, required: true, unique: true },
});

export default mongoose.models.UserProfile || mongoose.model('UserProfile', UserProfileSchema);
