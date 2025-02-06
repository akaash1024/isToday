const Service_Database = require("../models/service.model");

const services = async (req, res) => {
  try {
    const response = await Service_Database.find();
    if (!response) {
      res.status(404).json({ msg: "No service found" });
      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`services: ${error}`);
  }
};

module.exports = services;
