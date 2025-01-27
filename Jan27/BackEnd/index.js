require("dotenv").config();
const express = require("express");
const chalk = require("chalk");
const { connectAtlas } = require("./dbConfig");
const { userRouter } = require("./routes/user.routes");
const { noteRouter } = require("./routes/note.routes");
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/note", noteRouter);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello Express" });
});

app.route("/about").get((req, res) => {
  res.status(200).json({ msg: "about" });
});

// ! connecting and running with server. ..
connectAtlas().then(() => {
  app.listen(PORT, () => {
    console.log(
      chalk.red(`⚙️ Server is listening at http://localhost:${PORT}/`)
    );
  });
});
