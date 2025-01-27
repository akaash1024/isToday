// app.js (or server.js)
const express = require("express");
const path = require("path");
const { PORT } = require("./env");
const { logger } = require("./middleware/logger");
const mongoose = require("mongoose");

const app = express();
app.use(logger);
app.use(express.json());

const staticFilePath = path.join(__dirname, "public");
app.use(express.static(staticFilePath));

app.get("/", (req, res) => {
  const homepagePath = path.join(__dirname, "public", "index.js");
  res.sendFile(homepagePath);
});

app.listen(PORT, async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice");
    console.log(`Connected to Database.. .`);
    console.log(`Server is listening at http://localhost:${PORT}/`);
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  }
});
