import { useEffect, useState } from "react";
import { Todoprovider } from "./context";


function App() {

  const [todos, setTodos] = useState([])

  const addTodo= (todo)=> {
      setTodos((prev)=> [...prev, {id: Date.now(), ...todo}])      //destructure previous todos
  }

  const updateTodo = (id, todo)=> {
    setTodos((prev) => prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo )))

   
  }

  const deleteTodo = (id)=> {
      setTodos((prev)=> prev.filter((todo)=> todo.id != id))
  }
  

  const toggleComplete = (id)=> {
      setTodos((prev)=> prev.map((todo)=> todo === id ? {...todo, completed : !todo.completed } : todo))
  }

  //localstorage

  useEffect(()=> {

    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {

    }
  },)


  return (
    <Todoprovider value={{todos, addTodo,updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </Todoprovider>
  );
}

export default App;
