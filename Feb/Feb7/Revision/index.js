// const fs = require("fs")
// const path = require("path")

// const fileName = "test.txt"
// const filePath = path.join(__dirname, fileName)

// // ! writeFile
// const writeFile = fs.writeFileSync(filePath, "Hello I am AKahs Today practicing", "utf-8")

// // ! readFile
// const readFile = fs.readFileSync(filePath, "utf8")
// console.log(readFile);

// const updateFile = fs.appendFileSync(fileName, "\n hello this is updated", "utf8")
// console.log("updated");

// const newFileName = "newTest.txt"
// const newFilePath = path.join(__dirname, newFileName)

// const updateFileName = fs.renameSync(filePath, newFilePath)
// console.log("updated");

// const deleteFile = fs.unlinkSync(newFilePath)
// console.log("file has been deleted");

// const fs = require("fs");
// const path = require("path");

// const fileName = "async.txt";
// const filePath = path.join(__dirname, fileName);

// fs.writeFile(filePath, "This is data", (err, res) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("created");
// });

const fs = require("fs/promises");
const path = require("path");

const writeFile = async () => {
  const fileName = "async.txt";
  const filePath = path.join(__dirname, fileName);
  try {
    await fs.writeFile(filePath, "this is updating");
    console.log("wroted");
  } catch (error) {
    console.log(error.message);
  }
};
writeFile();
