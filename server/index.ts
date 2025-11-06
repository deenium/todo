import express from "express";
import cors from "cors";
import pool from "./db";

const app = express();

// Middleware
app.use(cors()); // Standard middleware of expressJS application
app.use(express.json()); // To parse JSON bodies from frontend

// Routes

// Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo);
  } catch (err: any) {
    console.error(err.message);
  }
});

// get all todos

// get a todo

// update a todo

// delete a todo

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
