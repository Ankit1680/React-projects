import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/Todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="ml-20">
        <h1>Todos</h1>

        {todos.map((item) => (
          <li key={item.id}>
            {item.text}

            <button
              onClick={() => dispatch(removeTodo(item.id))}
              className="bg-red-400 rounded border px-2 py-1  ml-4"
            >
              X
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default Todo;
