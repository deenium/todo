import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const InputTodo = () => {
  const [description, setDescription] = useState<string>("");
  const navigate = useNavigate();

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    // to avoid refreshing the page on submit
    e.preventDefault();
    try {
      const body = { description };
      if (description.trim() === "") {
        return; // Do not submit if the description is empty
      }
      const response = await fetch("http://localhost:8000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setDescription("");
      navigate("/");
    } catch (err: any) {
      console.error(err.message);
      alert("Failed to add todo");
    }
  };
  return (
    <>
      <h1 className="text-center mt-5">Input Todo Component</h1>
      <form className="d-flex w-50 mx-auto" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Add Todo..."
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};
