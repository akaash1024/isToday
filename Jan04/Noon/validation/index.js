const express = require("express");
const path = require("path");
const { validation } = require("./middleware/validation");

const { PORT } = require("./env");

const app = express();
app.use(express.json());

const staticFilePath = path.join(__dirname, "public");
app.use(express.static(staticFilePath));

app.get("/", (req, res) => {
  const homepagePath = path.join(__dirname, "public", "index.html");
  res.sendFile(homepagePath);
});

app.post("/", validation, (req, res) => {
  try {
    console.log("Data received:", req.body);
    console.log("Posted Successfully");

    return res.status(201).json({
      message: "Data posted successfully!",
      data: req.body,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Something went wrong!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}/`);
});
