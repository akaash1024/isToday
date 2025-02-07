require("dotenv").config();

const URL = process.env.MONGO_URL;

const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(URL);
    console.log(`Connected to mongodb`);
  } catch (error) {
    console.error("Failded to connected Mongo database", error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
