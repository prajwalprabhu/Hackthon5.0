import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  pkey: String,
  pswd: String,
  files: [Buffer],
  isCreator: Boolean,
  isConsumer: Boolean,
});

export const User = mongoose.model("User", UserSchema);
