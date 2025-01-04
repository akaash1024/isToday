const express = require("express");
const { PORT } = require("./env");
const path = require("path");
const { truncate } = require("fs");
const fs = require("fs").promises;

const app = express();

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  const homepagePath = path.join(__dirname, "public", "index.html");
  res.sendFile(homepagePath);
});

// ! Operation 

/*
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

// ? writeFile

// ? readFile
// ? updateFile
// ? renameFile
// ? deleteFile


app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}/`);
});
