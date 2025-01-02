const express = require("express");
const cors = require('cors');
const app = express();

app.use(express());
app.use(cors());

const todos = [
  { id: 1, title: "Todo 1", completed: false },
  { id: 2, title: "Todo 2", completed: false },
  { id: 3, title: "Todo 3", completed: false },
];

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Get a single todo by ID
app.get("/todo", (req, res) => {
  const todo = todos.find(t => t.id == req.query.id);
  res.json(todo || { message: "Todo not found" });
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
