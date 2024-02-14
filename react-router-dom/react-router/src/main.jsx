import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import Profile from './components/About/Profile.jsx'


//router    -   method 1
// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout/>,
//       children: [
//         {
//           path: '/',
//           element: <Home/>
//         },

//         {
//           path: '/about',
//           element: <About/>
//         },

//         {
//           path: '/contact',
//           element: <Contact />
//         }
//       ]
//     }
// ])



//router      -    method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

        <Route  path='/' element={<Home/>}/> 
        {/* nested routes      /about/profile   */}
        <Route path='/about' element={<About/>} />

        <Route path='/contact' element={<Contact/>}/>
        <Route path='/github' element={<Github/>} />
        {/* params */}

        <Route 
        
        path='user/:userid' 
        element={<User/>}
        
        />

    </Route>
      
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>   
  </React.StrictMode>,
)
