import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

import PropertyCard from './PropertyCard';
// import db from '../../../utils/db';
import db from '../../firebase';
import Layout from '../Layout';
const Properties = () => {
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    (async () => {
      const colRef = collection(db, 'products');

      const snapshots = await getDocs(colRef)

      const docs = snapshots.docs.map((doc) => {
        const property = doc.data()
        property.id = doc.id
        return property
      }


      )

      setProperties(docs)
      console.log(docs)
      console.log('hello')
    })()
  }, [])
  return (
    <>
    <div className="w-full h-auto z-6 properties">
      <div className="w-4/5 mx-auto features text-white md:flex justify-between py-6  ">
        <div className='flex features-con md:-ml-2  justify-around'>
          <span className=''>All</span>
          <span>One Room</span>
          <span>Self Con</span>
          <span>Flat</span>
        </div>
        <div className="filter w-28 flex bg-white text-black px-4 py-2 rounded-md justify-between mt-4 md:mt-0 mx-1.5 ">
          <div className=''><span>Filter</span>
          </div>
          <img src='/images/filter.png' className='w-4 h3.5'/>
        </div>
      </div>
      <div className="w-4/5 md:grid md:grid-cols-3 gap-2  mx-auto">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <div className="view-more text-white grid place-items-center pt-4">
        <img src='/images/viewmore.png' />
        <span className='text-center '>View More</span>
      </div>
      
      
     
      
    </div>
    
   
      

    </>
  )
}

export default Properties