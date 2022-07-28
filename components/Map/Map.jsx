import React from 'react'

const Map = () => {
  return (
    <div className='full map pb-24 pt-4 mt-10'>
        <div className='w-4/5 mx-auto mb-6'>
            <p className='text-brand text-2xl  font-semibold'>Neighborhood</p>
            <p className='text-sm '>Dream home villas, CA, San Diego</p>
        </div>
        
        <div className="image w-4/5 mx-auto">
            <img src='/images/map.png' className='rounded-md' />
        </div>
    </div>
  )
}

export default Map