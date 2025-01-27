const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

const Person = model("Person", personSchema);

async function savePeople() {
  try {
    // Create a person with a number as the name
    const person1 = new Person({ name: 42, age: "50" });

    console.log("Before saving:", person1);

    // Save the person to the database
  } catch (error) {
    console.error("Error saving person:", error.message);
  } finally {
    // Close the database connection after saving
    mongoose.connection.close();
  }
}
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Call the function
savePeople();






const fs = require("fs/promises");
const path = require("path");

const loggerMiddleware = async (req, res, next) => {
  const logEntry = `Time: ${new Date().toLocaleString()} | Route: ${req.url} | Method: ${req.method}\n`;
  const datatxt_FilePath = path.join(__dirname, "..", "data.txt")

  try {
    await fs.appendFile(datatxt_FilePath, logEntry, "utf-8");
    console.log(logEntry.trim());
  } catch (err) {
    console.error(`Failed to write to log file: ${err}`);
  }

  next();
};





const fs = require("fs/promises");
const path = require("path");

const loggerMiddleware = async (req, res, next) => {
  const logEntry = `Time: ${new Date().toLocaleString()} | Route: ${req.url} | Method: ${req.method}\n`;
  const datatxt_FilePath = path.join(__dirname, "..", "data.txt")

  try {
    await fs.appendFile(datatxt_FilePath, logEntry, "utf-8");
    console.log(logEntry.trim());
  } catch (err) {
    console.error(`Failed to write to log file: ${err}`);
  }

  next();
};


git rm -rf --cached .
