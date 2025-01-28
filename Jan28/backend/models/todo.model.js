const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  des: { type: String, required: true },
  userId: { type: String },
});

const TodoModel = mongoose.model("TodoModel", todoSchema);

module.exports = TodoModel;
