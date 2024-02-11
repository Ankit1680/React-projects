import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

//const data = useLoaderData()
    const [data, setdata] = useState({})
    useEffect(()=> {
            fetch('https://api.github.com/users/Ankit1680')
            .then( response => response.json())
            .then(data => {
                console.log(data);
                setdata(data)
            })

    }, [])

  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
        Github followers : {data.name}
        <img 
        src={data.avatar_url} alt="" width={200} 
   
        />
        
        </div>
  )
}

export default Github

// export const githubInfoLoader = async () => {

//        const response = await fetch('https://api.github.com/users/Ankit1680');
//        const data = await response.json()
//        return data

// }