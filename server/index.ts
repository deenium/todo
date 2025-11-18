import express from "express";
import cors from "cors";
import pool from "./db";

const app = express();
const PORT = 8000;
// Middleware
app.use(cors()); // Standard middleware of expressJS application
app.use(express.json()); // To parse JSON bodies from frontend

// Routes

// Object type : {id: number, description: string}

// Create a todo
// POST request to create a new data entry in the database
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    // "INSERT INTO tableName (column1, column2) VALUES(value1, value2) RETURNING *"
    res.json(newTodo.rows[0]);
    // console.log(newTodo);
  } catch (err: any) {
    console.error(err.message);
  }
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err: any) {
    console.error(err.message);
  }
});

// get a todo
// http://localhost:8000/todos/1 to get todo with id=1
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
    // comments : if todo does not exist, no error will be thrown, but no rows will be affected
  } catch (err: any) {
    console.log(err.message);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    // "UPDATE tableName SET column1 = value1, column2 = value2 WHERE condition"
    res.json("Todo was updated successfully");
    // comments : if todo does not exist, no error will be thrown, but no rows will be affected
  } catch (err: any) {
    console.log(err.message);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    // "DELETE FROM tableName WHERE condition"
    res.json("Todo was deleted successfully");
    // comments : if todo does not exist, no error will be thrown, but no rows will be affected
  } catch (err: any) {
    console.log(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
