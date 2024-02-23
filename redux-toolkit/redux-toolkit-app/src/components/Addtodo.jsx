import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input)); //dispatch
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="mt-20 ml-20">
      <input
        type="text"
        className="bg-gray-600 rounded border border-gray-800"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>

      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ml-4"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
