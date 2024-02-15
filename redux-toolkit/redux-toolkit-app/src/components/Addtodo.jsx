import React, { useState } from 'react'
import 

function AddTodo() {

    const [input, setInput] = useState('')


  return (
    <form>
        <input
        type='text'
        className='bg-gray-600 rounded border border-gray-800'


        value={input}
        onChange={(e) => setInput(e.target.value)}

        
        >
    
        </input>

        <button></button>
    </form>
  )
}

export default AddTodo