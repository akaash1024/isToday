const express = require("express");
const bcrypt = require("bcrypt");
const { connectDB } = require("./db");
const { UserModel } = require("./models/user.model");

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, age, email, pass } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      const newUser = new UserModel({ name, age, email, pass: hash });
      await newUser.save();
      res.send("User has been saved");
    });
  } catch (error) {
    res.send(error);
  }
});

app.listen(3000, () => {
  connectDB()
  console.log(`Server is listening at 3000`);
});
