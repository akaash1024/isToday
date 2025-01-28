const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "student"],
      default: "student",
    },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;
