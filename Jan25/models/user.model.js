const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    email: String,
    pass: String,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = { UserModel };
