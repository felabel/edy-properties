import React from 'react'


const Hero = () => {
  return (
    <div ClassNameName='w-full'>
      <div ClassNameName="w-full  primary-bg bg-[url('/images/hero.png')] bg-no-repeat bg-cover md:pb-4 " >
        
        <div ClassNameName="overlay w-full z-1 overlay absolute">
          <div ClassNameName="overlay w-full z-2  absolute  text-white blur bg-red-400"></div>
              <div ClassNameName="lg:mx-36 px-8 text-white lg:w-1/2 mt-36 md:mt-44 lg:mt-72" >
                  <p ClassNameName='text-3xl md:text-7xl lg:text-6xl hero-text font-semibold'>Find Your <span ClassNameName='text-brand'>Dream Home </span>@ San Diego</p>

              </div>

          </div>

        <div ClassNameName=" w-full z-3  absolute blur-down">hello there</div>

      </div>
      {/* <div ClassNameName="mobile md:hidden bg-red-400 w-full h-24">

      </div> */}

    </div>
  )
}

export default Hero