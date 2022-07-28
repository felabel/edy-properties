import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full z-10 fixed'>
      <div className="w-5/6  flex m-auto justify-between  text-white py-4">
        <div className="logo w-36 md:w-44">
          <img 
          src='/images/logo.png'
         
          />
        </div>
        <div className="links flex gap-6 my-auto font-semibold text-sm font-inter">
          <div className='btn pointer bg-transparent text-white hover:bg-transparent'><Link href='/'>Home</Link></div>
          <div className='btn pointer bg-transparent text-white hover:bg-transparent'><Link href='/'>About Us</Link></div>
          <div className='btn pointer bg-transparent text-white hover:bg-transparent'><Link href='/'>Other Projects</Link></div>
          <div className='btn pointer '><Link href='/'>Enquire Now</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar