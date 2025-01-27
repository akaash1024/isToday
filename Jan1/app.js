const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => res.json("Hello Backend!"));

// ! ############################
const fs = require('fs/promises');
const path = require('path');

const fileName = "akash.txt"
const filePath = path.join(__dirname, fileName)

// * writeFile 

const writeFile = async () => {
  try {
    await fs.writeFile(filePath, "This is initial Data", "utf-8")
    console.log("created");
  } catch (error) {
    console.error(error)
  }
}

// * Readfile

const readFile = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8")
    console.log(data);
  } catch (error) {
    console.error(error)
  }
}


const updateFile = async () => {
  try {
    
  } catch (error) {
    console.error(error)
  }
}














// ! ############################
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}/`);
});
