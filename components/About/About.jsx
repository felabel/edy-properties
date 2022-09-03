import React from 'react'

const About = () => {
  return (
    <div>
        <div className='w-full about' id='about'>
            <div className="w-full   primary-bg bg-[url('/images/deem-bg.png')] bg-no-repeat bg-cover pb-4" >
                <div className="overlay w-full  overlay absolute">

                    <div className=" w-full  absolute  text-white blur-ab"></div>

                    <div className="md:flex z-7 md:w-4/5 mx-auto">
                        <div className="text-white md:w-3/5 mt-28 md:mt-64 pl-4 md:pl-0">
                            <p className="text-brand text-3xl my-2 font-semibold ">About Us</p>
                            <p className='text-lg md:text-sm'>Dream Home is a gated community with a great location. Located downtown, you’re within walking distance of Parks, and the best shopping, dining and entertainment Getting around is a breeze, with easy access to freeways, buses and trolleys. . Laundry is available on premises.</p>
                        </div>
                        <div className="row-text  mt-24 md:mt-0 md:w-2/5">
                            <div className="box1 text-center text-lg md:text-sm ">
                                <p className="text-brand font-semibold text-2xl py-2">500+</p>
                                <p className='py-1 font-semibold ab-text'>project</p>
                                <p className='ab-text'>Over 500 lexury villas for“Home<br></br>Away From Home” experience</p>
                            </div>
                            <div className="box1 text-center text-sm ">
                                <p className="text-brand font-semibold text-2xl py-2">500+</p>
                                <p className='py-1 font-semibold ab-text'>project</p>
                                <p className='ab-text'>Over 500 lexury villas for“Home<br></br>Away From Home” experience</p>
                            </div>
                            <div className="box1 text-center text-sm ">
                                <p className="text-brand font-semibold text-2xl py-2">500+</p>
                                <p className='py-1 font-semibold ab-text'>project</p>
                                <p className='ab-text'>Over 500 lexury villas for“Home<br></br>Away From Home” experience</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="overlay-ab w-full z-2 absolute  text-white blur-ab-down"></div>
                </div>

            </div>
       

    </div>
    </div>
  )
}

export default About 