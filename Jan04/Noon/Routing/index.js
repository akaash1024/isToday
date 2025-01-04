const express = require("express");
const { PORT } = require("./env");
const path = require("path");
const { studentRouter } = require("./Routing/students.router");
const { teacherRouter } = require("./Routing/teachers.router");

const app = express();
const staticFilePath = path.join(__dirname, "public");

const middlewares = [express.static(staticFilePath), express.json()];

app.use(middlewares);

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "index.html"))
);
app.use("/students", studentRouter);
app.use("/teachers", teacherRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}/`);
});
