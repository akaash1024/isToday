const TodoModel = require("../models/todo.model");

const getTodo = async (req, res) => {
  const { userId, role } = req.body;

  try {
    const isAdmin = role !== "Admin" ? { userId: userId } : {};

    const todos = await TodoModel.find(isAdmin);

    res.status(200).json({ data: todos });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const addTodo = async (req, res) => {
  try {
    const newTodo = new TodoModel(req.body);
    await newTodo.save();
    return res.status(201).json({ msg: "Todo has been saved", newTodo });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await TodoModel.findByIdAndUpdate(id, req.body);
    res.status(201).json({ msg: "Todo updated successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await TodoModel.findByIdAndDelete(id);
    res.status(203).json({ msg: "Todo deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = { getTodo, addTodo, updateTodo, deleteTodo };
