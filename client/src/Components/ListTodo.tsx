import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { EditTodo } from "./EditTodo";
import { Todo } from "./types";

export const ListTodo = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:8000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err: any) {
      console.error(err.message);
      alert("Failed to fetch todos");
    }
  };

  const deleteTodo = async (todo_id: number) => {
    try {
      const deleteTodo = await fetch(`http://localhost:8000/todos/${todo_id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== todo_id));
    } catch (err: any) {
      console.error(err.message);
      alert("Failed to delete todo");
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <h1 className="text-center mt-5">Todo List</h1>
      <table className="table table-bordered table-hover mt-5 w-50 mx-auto text-center bg-white shadow-sm rounded">
        <thead className="table-light">
          <tr>
            <th className="fw-semibold">Description</th>
            <th className="fw-semibold">Edit</th>
            <th className="fw-semibold">Delete</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td className="text-start ps-3">{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
