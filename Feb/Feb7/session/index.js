const express = require("express");
const app = express();
const path = require("path");
const logger = require("./middlewares/logger.middleware");
const errorMiddleware = require("./middlewares/error.middleware");
const connectDatabase = require("./database/db");

// !
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staticFile = path.join(__dirname, "public");
app.use(express.static(staticFile));

// ! extenal middleware
app.use(logger);

//! error handling
app.use(errorMiddleware);

// ! server
const PORT = process.env.PORT;
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`⚙️ Server is listening at http://localhost:${PORT}`);
  });
});
