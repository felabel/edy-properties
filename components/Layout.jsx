
import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Navtest from './Navbar/Navtest'

const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
        {/* <Navtest /> */}
        <main>
            {
                children
            }
        </main>
        <Footer />
    </>
  )
}

export default Layout