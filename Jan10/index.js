const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const helmet = require("helmet");

const app = express();
const PORT = 3000;

// Ensure uploads directory exists
if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

// Middleware
app.use(helmet());
app.use(express.static(__dirname));

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) =>
    cb(
      null,
      file.originalname.split(".")[0] +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    ),
});

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 2 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Error: Images only!"));
    }
  },
});

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/upload", upload.array("files", 4), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: "No files uploaded." });
  }

  const fileDetails = req.files.map((file) => ({
    originalName: file.originalname,
    savedAs: file.filename,
    size: file.size,
  }));

  res.status(200).json({ success: true, files: fileDetails });
});

// Server
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
