require("dotenv").config();
const express = require("express");

const userRouter = require("./routes/user.routes");
const todoRouter = require("./routes/todo.routes");
const connectDatabase = require("./db");

const errorMiddleware = require("./middlewares/error-handle.middleware");

const app = express();
app.use(express.json());

app.use(errorMiddleware);

// ? routes
app.use("/api/user", userRouter);
app.use("/api/todo", todoRouter);

const PORT = process.env.PORT;
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}/`);
  });
});
