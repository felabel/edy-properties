import React from 'react';
import Image from 'next/image'

const Map = () => {
  return (
    <div className='full map pb-24 pt-4 mt-10'>
        <div className='w-4/5 mx-auto mb-6'>
            <p className='text-brand text-2xl  font-semibold'>Neighborhood</p>
            <p className='text-sm '>Dream home villas, CA, San Diego</p>
        </div>
        
        <div className="image w-4/5 mx-auto">
            <Image src='/images/map.png' alt='' className='rounded-md' width="100%" height="50%" layout="responsive" />
        </div>
    </div>
  )
}

export default Map