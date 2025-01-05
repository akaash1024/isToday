const express = require("express");
const path = require("path");

const { PORT } = require("./env");
const app = express();

const staticFilePath = path.join(__dirname, "public");
app.use(express.static(staticFilePath));
app.use(express.json());

app.get("/", (req, res) => {
  const homepagePath = path.join(__dirname, "public", "index.html");
  res.sendFile(homepagePath);
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}/`);
});
