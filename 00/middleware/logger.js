const fs = require("fs").promises;
const path = require("path");

const loggerMiddleware = async (req, res, next) => {
  const logEntry = `Time: ${new Date().toLocaleTimeString()} || Method: ${req.method} || Route: ${res.url} \n`;
  try {
    await fs.appendFile("../data.txt", logEntry, "utf-8")
  } catch (error) {
    console.error(`Failed to write log file ${error}`);
  }
};

module.exports = { loggerMiddleware };
