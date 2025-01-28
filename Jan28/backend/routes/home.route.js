const homeRouter = require("express").Router();

// homeRouter.route("/").get((req, res) => {
//   res.status(200).json({ msg: "Hello home Route" });
// });

const studentsData = [
  { name: "Aarav", grade: "10th" },
  { name: "Ishita", grade: "9th" },
  { name: "Rohan", grade: "8th" },
  { name: "Meera", grade: "10th" },
  { name: "Kabir", grade: "11th" },
];


homeRouter.get("/", (req, res) => {
  res.render("report", { student: studentsData });
});

module.exports = homeRouter;
