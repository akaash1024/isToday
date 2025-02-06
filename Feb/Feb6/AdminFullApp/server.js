require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const authRoute = require("./router/auth.router");
const connectDatabase = require("./database/db");
const { ApiError } = require("./utils/ApiError");

//! cors part
app.use(cors());
app.use(express.json());

// ! routes
app.use("/api/auth", authRoute);
// app.use("api/form", contactRoute)
// app.use("api/data", serviceRoute)
// // ? adming route
// app.use("api/admin", adminRoute)

// ! hadnling error part
app.use(ApiError);

// ! server
const PORT = process.env.PORT;
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`⚙️ Server is listening at http://localhost:${PORT}/`);
  });
});
