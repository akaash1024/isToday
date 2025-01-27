

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
  },
  {
    versionKey: false,
    toJSON: { virtuals: true },
  }
);


userSchema.virtual("notes", {
    ref: "NoteModel",
    localField: "_id",
    foreignField: "userId",
  });


const UserModel = mongoose.model("UserModel", userSchema);

module.exports = { UserModel };
