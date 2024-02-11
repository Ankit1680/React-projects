import { useState } from "react";


function App() {

  let [counter, setCounter] = useState(5)

  const addValue = ()=> {

    console.log(counter);
    setCounter(counter + 1)
    

  }

  const removeValue = ()=> {

    setCounter(counter - 1);
    console.log(counter);
  }


  return (
    <>
    
  <div className="pl-80">

  <h1>Chai aur react</h1>
    <h2>Counter value : {counter}</h2>

    <button 
    onClick={addValue}
    className="mr-3 border rounded-full bg-blue-300 text-white py-2 px-3">Add value</button>


    <button 
    onClick={removeValue}
    className="ml-3 border rounded-full bg-blue-300 text-white py-2 px-3">remove value</button>
  </div>
    
    </>
  )
}

export default App
