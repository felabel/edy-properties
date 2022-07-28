import React from 'react'


const Hero = () => {
  return (
    <div className='w-full'>
        <div className="w-full  primary-bg bg-[url('/images/hero.png')] bg-no-repeat bg-cover pb-4" >
            <div className="overlay w-full z-1 overlay absolute">
            <div className="overlay w-full z-2  absolute  text-white blur">hello there</div>
                <div className="mx-36  text-white w-1/2 mt-72" >
                    <p className='text-6xl hero-text font-semibold'>Find Your <span className='text-brand'>Dream Home </span>@ San Diego</p>

                </div>

            </div>

          <div className=" w-full z-3  absolute blur-down">hello there</div>

        </div>

    </div>
  )
}

export default Hero