import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>

    {/* header is fixed */}
        <Header/>  
    {/* Outlet contains dynamic component     */}
        <Outlet/>

        <Footer/>
    {/* footer is fixed */}

    </>
  )
}

export default Layout