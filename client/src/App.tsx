import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EditTodo } from "./Components/EditTodo";
import { InputTodo } from "./Components/InputTodo";
import { ListTodo } from "./Components/ListTodo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <InputTodo />
              <ListTodo />
            </>
          }
        />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </Router>
  );
};

export default App;
