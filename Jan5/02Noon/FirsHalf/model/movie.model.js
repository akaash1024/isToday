const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    description: { type: String, required: true, trim: true },
    genre: { type: String, required: true, trim: true },
    cast: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const MovieModel = mongoose.model("Movie", movieSchema);

module.exports = { MovieModel };
