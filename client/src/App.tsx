import React from "react";
import { EditTodo } from "./Components/EditTodo";
import { InputTodo } from "./Components/InputTodo";
import { ListTodo } from "./Components/ListTodo";

const App = () => {
  return (
    <>
      <InputTodo />
      <ListTodo />
      <EditTodo />
    </>
  );
};

export default App;
