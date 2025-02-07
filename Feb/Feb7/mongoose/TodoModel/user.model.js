const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: (val) => val.length >= 8,
      message: "Password must be 8 character",
    },
  },
});
