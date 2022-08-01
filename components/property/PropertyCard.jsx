import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import db from '../../firebase';
const PropertyCard = () => {
 
  return (
    <>
      {/* <div ClassNameName='text-red-400'>each property list</div> */}

      
        
        <div ClassNameName='text-white '>
          <div ClassName="max-w-sm rounded-md overflow-hidden shadow-lg my-3  card text-white h-100px md:h-auto">
            <Splide hasTrack={ false } aria-label="..." ClassNameName='w-full'
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
                <SplideSlide ClassNameName='w-full'>
                    <div ClassNameName='h-full'>
                      <img src="/images/image1.png" alt="Image 1" ClassNameName='w-full h-full object-cover'/>
                    </div>
                  </SplideSlide>
                <SplideSlide >
                    <img src="/images/deem-bg.png" alt="Image 2 "ClassNameName='w-full h-full object-cover'/>
                </SplideSlide>
              </SplideTrack>
            
            </Splide>
            <div ClassName="px-2 pt-4 pb-3 ">
              <div ClassNameName="flex justify-between">
                <div>$1000.00</div>
                <div ClassNameName='btn px-4 py-2 text-sm font-semibold'><a>View Details</a></div>
              </div>
              <div ClassNameName="divi flex w-full   border-gray-700 rounded-md  mt-4 ">
                <p ClassNameName=''>bedroom</p>
                <p>icon</p>
                <p ClassNameName='noborder'>studio</p>
              </div>
            </div>
          </div>
         
        </div>
      
    
      

    </>
  )
}

export default PropertyCard