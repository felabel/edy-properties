import React from 'react'

const Footer = () => {
  return (
    <div className='w-full footer'>
      <div className="py-8 w-4/5 grid grid-cols-3 mx-auto  gap-2 text-white justify-between ">
        <div className="footer-text w-">
          <img src='/images/logo.png' />
          <p>Dream House</p>
          <p className='mt-4  font-thin'>Dream Home is a gated community <br></br> with a great location. Located <br></br> downtown, you’re within walking <br></br> distance of Parks, and the...<a className='text-brand'>View More</a></p>
        </div>
        <div className="address ">
          <p className='text-2xl'>Contact Us</p>
          <p className='mt-4'>Deam home villas San <br></br>Diego, CA, USA</p>
          <div className='flex mt-3'>
            <span className='mt-1'><img src="/images/call-calling.png" alt="" /></span><p className='ml-2'>025-777-3067</p>
          </div>
          <div className='flex mt-3'>
            <span><img src="/images/call-calling.png" alt="" /></span><p className='ml-2'>info@dreamhome.com</p>
          </div>
          
        
        </div>
        <div className="socials  ">
          <p className='text-2xl'>Contact Us</p>
          <div className="soc flex mt-4">
            <img src="/images/insta.png" alt="" />
            <img src="/images/youtube.png" alt="" />
            <img src="/images/twitter.png" alt="" />

          </div>
          <div className="lang flex mt-8 w-40 px-2.5 py-1 ">
            <span className='mt-1 mr-1.5'><img  src='/images/globe.png'/></span>
            <select name="" id="" placeholder='English - en' className='bg-transaparent'> 
              <option value="English">English - en </option>
              <option value="French">French</option>
            </select>
          </div>

        </div>
        
      </div>
      <div className='text-center footer-down py-6 '><p>© 2022 Dandelion | All Rights Reserved</p></div>
    </div>
  )
}

export default Footer