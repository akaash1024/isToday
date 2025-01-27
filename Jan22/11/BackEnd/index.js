const express = require("express");

const chalk = require("chalk");
const serverlog = chalk.redBright.underline;

const app = express();

const PORT = 3000;

const data = [
  {
    id: 1,
    title: "A joke",
    content: "This is a joke",
  },
  {
    id: 2,
    title: "A second joke",
    content: "This is second joke",
  },
  {
    id: 3,
    title: "A third joke",
    content: "This is third joke",
  },
];

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(serverlog(` Server is listening at ${PORT} `));
});
