import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";
import { Todo } from "./types";

type EditTodoProps = { todo?: Todo };

export const EditTodo = (props: EditTodoProps) => {
  const { todo = { todo_id: 0, description: "" } } = props;
  const modalId = `modal-${todo.todo_id}`;

  const [description, setDescription] = useState<string>(todo.description);

  useEffect(() => {
    setDescription(todo?.description ?? "");
  }, [todo?.description]);

  const onSubmitEditForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { description };
      if (description.trim() === "") {
        return; // Do not submit if the description is empty
      }
      const res = await fetch(`http://localhost:8000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err: any) {
      console.error(err.message);
      alert("Failed to edit todo");
    }
  };

  return (
    <>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        className="btn btn-sm btn-outline-primary"
      >
        Edit
      </button>

      <div className="modal" id={`${modalId}`} tabIndex={-1}>
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={onSubmitEditForm}>
            <div className="modal-header">
              <h5 className="modal-title">Edit Todo</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Description</p>
              <input
                type="text"
                placeholder="Add Todo..."
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
