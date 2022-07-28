import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

// import db from '../../../utils/db';
import db from '../../firebase';
const PropertyCard = () => {
 
  return (
    <>
      {/* <div className='text-red-400'>each property list</div> */}

      
        
        <div className='text-white '>
          <div class="max-w-sm rounded-md overflow-hidden shadow-lg my-3  card text-white">
            <img class="w-full" src="/images/image1.png" />
            <div class="px-2 pt-4 pb-3 ">
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
          {/* <div class="max-w-sm rounded-md overflow-hidden shadow-lg my-3  card text-white">
            <img class="w-full" src="/images/image1.png" />
            <div class="px-2 pt-4 pb-3 ">
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
          <div class="max-w-sm rounded-md overflow-hidden shadow-lg my-3  card text-white">
            <img class="w-full" src="/images/image1.png" />
            <div class="px-2 pt-4 pb-3 ">
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
          </div> */}
        </div>
      
    
      

    </>
  )
}

export default PropertyCard