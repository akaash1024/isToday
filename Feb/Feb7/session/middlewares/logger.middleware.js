const fs = require("fs/promises");
const path = require("path");

const logger = async (req, res, next) => {
  const logEntry = `Time ${
    new Date().toLocaleString
  } || Route: {req.url} || Method: {req.method} \n`;
  const fileName = "loggerFileEntryBook.txt";
  const filePath = path.join(__dirname, " .. ", fileName);

  try {
    await fs.writeFile(filePath, logEntry, "utf-8");
    console.log(logEntry.trim());
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = logger;
