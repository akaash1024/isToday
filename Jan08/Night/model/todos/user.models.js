const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, lowercase: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /.+\@.+\..+/, // ! need to check while revision
    },
    password: { type: String, required: [true, "Password is required"] },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
