const express = require("express");
const { PORT } = require("./env");
const path = require("path");
const { truncate } = require("fs");

const app = express();

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  const homepagePath = path.join(__dirname, "public", "index.html");
  res.sendFile(homepagePath);
});

// ! Operation

/*
const fs = require("fs").promises;

const fileName = "practice.txt";
const filePath = path.join(__dirname, fileName);

// ? writeFile
const writeFile = async () => {
  try {
    await fs.writeFile(filePath, "This is initial data", "utf-8");
    console.log(`File Saved`);
  } catch (error) {
    console.error(error);
  }
};

// ? ReadFile 
const readFile = async () => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        console.log("File Data", data);
        
    } catch (error) {
        console.error(error)
    }
}

// ? UpdateFile 
const updateFile = async ( ) => {
    try {
        await fs.appendFile(filePath, "\n i am updaing this doc", "utf-8")
        console.log(`File updated successfully`);
        readFile()
    } catch (error) {
        console.error(error)
    }
}

// ? rename 
const newFileName = "NewFile.txt";
const newFilePath = path.join(__dirname, newFileName);
const renameFileName = async () => {
    try {
        await fs.rename(filePath, newFilePath)
        console.log(`File Renamed`);
        
    } catch (error) {
        console.error(error)
    }
}




// ? delete // unlink
const deleteFile = async ( ) => {
    try {
        await fs.unlink(newFilePath)
        console.log(`File Deleted`);
        
    } catch (error) {
        console.error(error)
    }
}


*/

/*
const fileName = "sync.txt"
const filePath = path.join(__dirname, fileName)
// ? writeFile

const fs = require('fs');
const { log } = require("console");
fs.writeFileSync(filePath, "This is initial data", "utf-8")
console.log(`File created`);

// ? readFile
const data = fs.readFileSync(filePath, "utf-8")
console.log(data);

// ? updateFile
fs.appendFileSync(filePath, "thisi is nskdfh", "utf-8")
console.log(`updated`);

// ? renameFile
const newFileName = "new.txt"
const newFilePath = path.join(__dirname, newFileName)
fs.renameSync(filePath, newFilePath)
console.log(`Renamed`);

// ? deleteFile
fs.unlinkSync(newFilePath)
console.log(`Deleted`);


*/

const fs = require("fs");
const fileName = "callback.txt";
const filePath = path.join(__dirname, fileName);

// ? writeFile
fs.writeFile(filePath, "thisi sdata", (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log(`File saved`);
});

// ? ReadFile

fs.readFile(fileName, "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log(res);
});
// ? UpdateFile
fs.appendFile(filePath, "\nthis is update", "utf-8", (err, res)=>{
    if (err) {
        console.log(err);
      }
      console.log("updated");
})
// ? RenameFile
// ? DeleteFile

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}/`);
});
