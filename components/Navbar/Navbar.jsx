import React, {Fragment, useState, useEffect } from 'react';
import { Transition } from "@headlessui/react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  useEffect(() => {
        
    AOS.init({})
}, []);
const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full z-10 fixed'>
      <div className="w-5/6  flex m-auto justify-between  text-white py-4">
        <div className="logo w-36 md:w-44">
          <img 
          src='/images/logo.png'
         
          />
        </div>
        <div className="links lg:flex gap-6 my-auto font-semibold text-sm font-inter hidden">
          <div className='btn pointer bg-transparent text-white hover:bg-transparent'><Link href='/'>Home</Link></div>
          <div className='btn pointer bg-transparent text-white hover:bg-transparent'><Link href='/'>About Us</Link></div>
          <div className='btn pointer bg-transparent text-white hover:bg-transparent'><Link href='/'>Other Projects</Link></div>
          <div className='btn pointer '><Link href='/'>Enquire Now</Link></div>
        </div>
        <div className="mobile-menu  lg:hidden ">
                            <button onClick = {() => setIsOpen(!isOpen)}>
                                {!isOpen ? (
                                    <svg
                                        className="block h-8 w-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#FF9505"
                                        aria-hidden="true"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                    ) : (
                                    <svg
                                        className="block h-8 w-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#FF9505"
                                        aria-hidden="true"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                            {/* menu */}
                            
        </div>
      </div>

      {/* mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        >
            {isOpen && (
                <div  className="mobile-nav aos-init aos-animate lg:hidden index-10 w-full bg-red-500" id="mobile-menu">
                    <div data-aos='flip-down'  className="mobile-nav aos-init aos-animate   absolute w-screen text-center h-auto  pb-10">
                    <div className='btn pointer bg-transparent text-white hover:bg-transparent block'><Link href='/'>Home</Link></div>
                    <div className='btn pointer bg-transparent text-white hover:bg-transparent block'><Link href='/'>About Us</Link></div>
                    <div className=' btn pointer bg-transparent text-white hover:bg-transparent block'><Link href='/'>Other Projects</Link></div>
                    <div className='btn pointer block'><Link href='/'>Enquire Now</Link></div>
                        
                

                
                    </div>
                </div>
            )}
    </Transition>
                    
    </div>
  )
}

export default Navbar