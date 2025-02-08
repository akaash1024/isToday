require("dotenv").config();
const mongoose = require("mongoose");

const URL = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log(`Connected to Database`);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDB;
