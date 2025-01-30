require("dotenv").config();
const express = require("express");

const userRouter = require("./routes/user.routes");
const todoRouter = require("./routes/todo.routes");
const connectDatabase = require("./db");
const cors = require("cors");
const path = require("path");

const errorMiddleware = require("./middlewares/error-handle.middleware");
const homeRoutes = require("./routes/home.route");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));

// ? routes
app.use("/api/user", userRouter);
app.use("/api/todo", todoRouter);

app.set("view engine", "ejs");
app.get("/", homeRoutes);

// ? errorHanding
app.use(errorMiddleware);

// ? server connection
const PORT = process.env.PORT;
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}/`);
  });
});
