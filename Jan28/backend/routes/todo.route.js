const {
  addTodo,
  updateTodo,
  deleteTodo,
  getTodo,
} = require("../controllers/todo.controller");

const todoRouter = require("express").Router();

todoRouter.route("/").get((req, res) => {
  res.status(200).json({ msg: "Hello todo Route" });
});

todoRouter.get("/", getTodo);
todoRouter.post("/add", addTodo);
todoRouter.patch("/update", updateTodo);
todoRouter.delete("/delete", deleteTodo);

module.exports = todoRouter;
