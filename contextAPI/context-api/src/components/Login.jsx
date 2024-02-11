import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { useState } from 'react'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //useContext()
    const {setUser} = useContext(UserContext)



    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }


  return (
    <div>
        <h2>Login</h2>
       
        <input 
        type="text" 
        className='border border-gray-600 rounded-md mx-2'
        value={username}
        
        onChange={(e)=> setUsername(e.target.value)}
        /> 

        
        <input 
        type="password" 
        className='border border-gray-700 rounded-md mr-3'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />

        <button 
        className='bg-blue-500 rounded-lg py-1 px-2'
        onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login