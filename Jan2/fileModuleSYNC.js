
const fs = require('fs');

const writeFile = fs.writeFileSync("db.text", "This is initial data", "utf-8")
console.log("created")


const readFile = fs.readFileSync("db.text", "utf-8")
console.log(readFile);

const updateFile = fs.appendFileSync("db.text", "\nUpdated now ", "utf-8")
console.log("updateFile");

const renameFile = fs.renameSync("db.text", "newdb.text")
console.log("Renamed");


// const deleteFile = fs.unlinkSync("newdb.text")
// console.log("deleted");


