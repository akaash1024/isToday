const express = require("express");
const app = express();
const connectDB = require("./config/database");
const userRouter = require("./routes/user.route");
const todoRouter = require("./routes/todo.route");
const homeRouter = require("./routes/home.route");
const PORT = process.env.PORT;
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));

// app.get("/", (req, res) => {
//   res.status(200).json({ msg: "Successfully got, request.. ." });
// });

// ? setting ejs file
app.set("view engine", "ejs");

// ?  Routes
app.use("/api/users", userRouter);
app.use("/api/todos", todoRouter);
app.use("/api", homeRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`⚙️ Server is listening at https://localhost${PORT}`);
  });
});
