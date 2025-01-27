// logger.js (middleware)
const fs = require("fs/promises");
const path = require("path");

const logger = async (req, res, next) => {
  
  const logEntry = `Time: ${new Date().toLocaleString()} || Method: ${req.method} || URL: ${req.url} \n`;

  const loggerFilePath = path.join(__dirname, "..", "data.txt");

  try {
    await fs.appendFile(loggerFilePath, logEntry, "utf-8");
    console.log(logEntry.trim());
  } catch (error) {
    console.error(`Failed to write to log file: ${error.message}`);
  }

  next();
};

module.exports = { logger };
