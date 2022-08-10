import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import db from '../../firebase';
const PropertyCard = () => {
 
  return (
    <>
      {/* <div className='text-red-400'>each property list</div> */}

      
        
        <div className='text-white '>
          <div className="max-w-sm rounded-md overflow-hidden shadow-lg my-3  card text-white h-100px md:h-auto">
            <Splide hasTrack={ false } aria-label="..." className='w-full'
            options={ {
              rewind: true,
              width : 800,
              gap   : '1rem',
              pagination: false,
              heightRatio: 0.7,
              breakpoints: {
                640: {
                  // heightRatio: 0.8,
                },
              }
            } }
            >
          


              <SplideTrack>
                <SplideSlide className='w-full'>
                    <div className='h-full'>
                      <img src="/images/image1.png" alt="Image 1" className='w-full h-full object-cover'/>
                    </div>
                  </SplideSlide>
                <SplideSlide >
                    <img src="/images/deem-bg.png" alt="Image 2 "className='w-full h-full object-cover'/>
                </SplideSlide>
              </SplideTrack>
            
            </Splide>
            <div className="px-2 pt-4 pb-3 ">
              <div className="flex justify-between">
                <div>$1000.00</div>
                <div className='btn px-4 py-2 text-sm font-semibold'><a>View Details</a></div>
              </div>
              <div className="divi flex w-full   border-gray-700 rounded-md  mt-4 ">
                <p className=''>bedroom</p>
                <p>icon</p>
                <p className='noborder'>studio</p>
              </div>
            </div>
          </div>
         
        </div>
      
    
      

    </>
  )
}

export default PropertyCard