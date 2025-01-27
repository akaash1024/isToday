const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");

const staticFilePath = path.join(__dirname, "public");
app.use(express.static(staticFilePath));
app.use(express.json());

app.get("/", (req, res) => {
  const homePagePath = path.join(__dirname, "..", "index.html");
  res.sendFile(homePagePath);
});

app.listen(PORT, async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/temps");
    console.log(`Connected to DB`);
    console.log(`Server is listening at ${PORT}`);
  } catch (error) {
    console.error(`Something went wrong while listening server`, error.message);
  }
});
