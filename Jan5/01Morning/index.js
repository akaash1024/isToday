const express = require("express");
const path = require("path");
const mongoose = require("mongoose")
const { PORT } = require("./env");
const app = express();
const { movieRouter } = require("./routers/movies.router");

const staticFilePath = path.join(__dirname, "public");
app.use(express.static(`staticFilePath`));
app.use(express.json());

app.get("/", (req, res) => {
  const homepagePath = path.join(__dirname, "public", "index.html");
  res.sendFile(homepagePath);
});

app.use(express.json())
app.use("/movies", movieRouter);

app.listen(PORT, async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/dbCinema");
    console.log(`Connected to Database`);
    console.log(`Server is listening at http://localhost:${PORT}/`);
  } catch (error) {
    console.log(`something went wrong`, error.message);
  }
});
