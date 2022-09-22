import React from 'react'


const Hero = () => {
  return (
    <div className='w-full'>
      <div className="w-full  primary-bg bg-[url('/images/hero.png')] bg-no-repeat bg-cover md:pb-4 " >
        
        <div className="overlay w-full z-1 overlay absolute">
          <div className="overlay w-full z-2  absolute  text-white blur bg-red-400"></div>
              <div className="lg:mx-36 px-8 text-white lg:w-1/2 mt-36 md:mt-44 lg:mt-72" >
                  <p className='text-3xl md:text-7xl lg:text-6xl hero-text font-semibold'>Find Your <span className='text-brand'>Dream Home </span>@ San Diego</p>

              </div>

          </div>

        <div className=" w-full z-3  absolute blur-down"></div>

      </div>
      {/* <div className="mobile md:hidden bg-red-400 w-full h-24">

      </div> */}

    </div>
  )
}

export default Hero