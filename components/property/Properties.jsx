import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import PropertyCard from './PropertyCard';
import useGetProperties from '../../hooks/getProperties';
import Image from 'next/image'
import ReactLoading from 'react-loading'

const Properties = () => {
  
  const properties = useGetProperties();
  const [modProduct, setModProducts] = useState([]);

  useEffect(() => {
    console.log(properties);
  }, [properties]);

  const filterProperties = () => {
    properties.filter((property)=>property.name.includes('Two Bedroom flat')).map(filteredProperty => (
      console.log(filteredProperty)
        // <div className="w-4/5 md:grid md:grid-cols-3 gap-2  mx-auto">
        //   {filteredProperty}
        // </div> 
    ))
  }

  
  return (
    <> 
      <div  className="w-full h-auto z-6 properties">
        <div className="w-4/5 mx-auto features text-white md:flex justify-between py-6  ">
          <div className='flex features-con md:-ml-2  justify-around'>
            <span className=''>All</span>
            <span onClick={() => filterProperties()}>One Room</span>
            <span>Self Con</span>
            <span>Flat</span>
          </div>
          <div className="filter w-28 flex bg-white text-black px-4 py-2 rounded-md justify-between mt-4 md:mt-0 mx-1.5 ">
            <div className=''><span>Filter</span>
            </div>
            <img src='/images/filter.png' className='w-4 h3.5'  alt=''/>
          </div>
        </div>
        <div className="w-4/5 md:grid md:grid-cols-3 gap-2  mx-auto">
          {
            properties !== [] && properties.map((property, i) => (<PropertyCard property={property} key={property.id} />))
          }
        </div>
        <a href='/listings'>
          <div className="view-more text-white grid place-items-center pt-4">
           <img src='/images/viewmore.png'  alt=''/>
          <span className='text-center '>View More</span>
        </div>

        </a>
        




      </div>




    </>
  )
}

export default Properties