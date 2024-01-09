import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Username must be at least 2 characters long"],
  },
  email: {
    type: String,
    required: [true, "Invalid email address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password must be at least 8 characters long"],
  },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
