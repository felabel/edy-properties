
import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

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