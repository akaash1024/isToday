const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const { validateUser } = require("./middleware/validateUser");

const app = express();
const PORT = process.env.PORT || 3000;

const fileName = "db.json";
const filePath = path.join(__dirname, fileName);

//utility func

const readDB = async () => {
  try {
    const data = fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      const initialData = { students: [] };
      await writeDB(initialData);
      return initialData;
    }
    throw error;
  }
};

const writeDB = async (data) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

app.get("/", (req, res) => res.json("Hello Express"));

app.get("/users", (req, res) => {
  try {
  } catch (error) {}
});















// ? server port
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}/`);
});
