const express = require("express");
const { MovieModel } = require("../model/movie.model");
const movieRouter = express.Router();
const { validation } = require("../middleware/validation");

movieRouter.get("/", async (req, res) => {
  try {
    const movie = await MovieModel.find();
    res.status(200).send({ msg: "There are the details of the movies", movie });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error: error.message });
  }
});

movieRouter.post("/", validation, async (req, res) => {
  const payload = req.body;
  try {
    const newMovie = new MovieModel(payload);
    await newMovie.save();
    res.status(201).send({ msg: "new movie add", movie: newMovie });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error: error.message });
  }
});

movieRouter.patch("/:id", validation, async (req, res) => {
  const { id } = req.params;
  try {
    const updateeMovie = await MovieModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res
      .status(200)
      .send({ msg: "Movie updated successfully", movie: updatedMovie });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error: error.message });
  }
});

movieRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deleteMovie = await MovieModel.findByIdAndDelete(id)
      res
        .status(200)
        .send({ msg: "Movie updated successfully", movie: updatedMovie });
    } catch (error) {
      res.status(500).send({ msg: "Something went wrong", error: error.message });
    }
  });


module.exports = { movieRouter };
