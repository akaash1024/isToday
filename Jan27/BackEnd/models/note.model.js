const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
      required: true,
    },
  },
  {
    versionKey: false,
    toJSON: { virtuals: true },
  }
);

noteSchema.virtual("users", {
  ref: "UserModel",
  localField: "userId",
  foreignField: "_id",
});

const NoteModel = mongoose.model("NoteModel", noteSchema);

module.exports = { NoteModel };
