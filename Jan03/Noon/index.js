const express = require("express");
const { PORT } = require("./env");
const path = require('path')

const app = express();

const staticFilePath = path.join(__dirname, "./public")
app.use(express.static(staticFilePath))


app.get("/", (req, res) => {
  const homePagePath = path.join(__dirname, "./public/index.html");
  res.send(homePagePath)
});



app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}/`);
});
