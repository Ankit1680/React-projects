import React from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <h1>redux-toolkit app</h1>

      <AddTodo />

      <Todo />
    </>
  );
}

export default App;
