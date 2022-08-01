import React, {Fragment, useState, useEffect } from 'react';
import { Transition } from "@headlessui/react";
import AOS from 'aos';
import 'aos/dist/aos.css'

// import { Link } from "react-router-dom";


const Navtest = () => {
    useEffect(() => {
        
        AOS.init({})
    }, []);
    const [isOpen, setIsOpen] = useState(false);
    return (
       
        <div>
            <nav className="  shadow-md fixed w-screen z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className=" flex items-center justify-between h-auto logo  lg:text-lg text-gray-100 w-full">
                        <div className="mx-auto flex items-center w-full justify-between">
                            <div className="flex-shrink-0">
                                <a href='/'>
                                    <h1 className='text-bold text-teal text-6xl md:text-8xl lg:text-8xl xl:text-8xl'>F</h1>
                                </a>
                        
                            </div>
                            <div className="hidden md:block lg:mr-4">
                                <div className=" flex items-baseline space-x-10">
                                    <a href="#!" className="hover:text-purple">
                                        Home
                                    </a>
                                    <a href="#about" className="hover:text-purple">
                                        About
                                    </a>
                                    <a href="#services" className="hover:text-purple">
                                        Services
                                    </a>
                                    
                                    <a href="#contact" className="hover:text-purple">
                                        Contact Me
                                    </a>
                                    <a href="#projects" className="bg-gradient-purple  px-14 py-4 rounded-full">
                                        Projects
                                    </a>
                                
                                </div>
                            </div>
                        </div>
                        {/* button to display menu */}
                        <div className="mobile-menu md:hidden lg:hidden ">
                            <button onClick = {() => setIsOpen(!isOpen)}>
                                {!isOpen ? (
                                    <svg
                                        className="block h-8 w-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="rgb(221, 54,183)"
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
                                        stroke="rgb(221, 54,183)"
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
                                <div  className="aos-init aos-animate md:hidden index-10 w-full mobile-nav" id="mobile-menu">
                                    <div data-aos='flip-down'  className="bg-nav-tp aos-init aos-animate -ml-4  absolute w-screen text-center h-auto bg-gray-700 pb-10">
                                        <a
                                        href="#about"
                                        className="text-center hover:bg-gray-700 text-white block px-3 py-6 rounded-md text-2xl font-medium"
                                        >
                                        About Me
                                        </a>

                                        <a
                                        href="#services"
                                        className="text-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-6 rounded-md text-2xl font-medium"
                                        >
                                        Services
                                        </a>

                                        <a
                                        href="#workflow"
                                        className="text-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-6 rounded-md text-2xl font-medium"
                                        >
                                        Workflow
                                        </a>
                                        <a
                                        href="#contact"
                                        className="text-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-6 rounded-md text-2xl font-medium"
                                        >
                                        Contact
                                        </a>
                                        <a href="#projects" className="bg-purple px-14 py-4 rounded-full">
                                        My Projects
                                        </a>
                                        
                                

                                
                                    </div>
                                </div>
                            )}
                    </Transition>
                    
                    
                    
                    
                </div>
            </nav>
        </div>
    );
}

export default Navtest