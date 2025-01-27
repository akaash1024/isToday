require("dotenv").config();
const mongoose = require("mongoose");

const databaseURL = process.env.ATLAS_URI;

const connectAtlas = async (req, res, next) => {
  try {
    await mongoose.connect(databaseURL);
    console.log(`MongoDB Atlas connected successfully. ..`);
  } catch (error) {
    res.status(500).json({ msg: "Failed while connecting.. ." });
  }
};

module.exports = { connectAtlas };
