const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 10, max: 20 },
    cast: { type: [String], required: true, trim: true },
  },
  { timestamps: true }
);

const MovieModel = mongoose.model("Movie", movieSchema);
module.exports = { MovieModel };



