const express = require("express");
const fs = require("fs/promises");
const path = require("path");

const app = express();

const fileName = "learn.txt";
const filePath = path.join(__dirname, fileName);

const readDB = 