import React from 'react'

const Footer = () => {
  return (
    <div ClassNameName='w-full footer bg-red-500 pt-6'>
      <div ClassNameName="py-8 w-4/5 grid lg:grid-cols-3 mx-auto  gap-2 text-white justify-between ">
        <div ClassNameName="footer-text ">
          <img src='/images/logo.png' />
          <p ClassNameName='text-2xl md:text-base font-semibold'>Dream House</p>
          <p ClassNameName='mt-4  font-thin text-lg md:text-base'>Dream Home is a gated community <br></br> with a great location. Located <br></br> downtown, you’re within walking <br></br> distance of Parks, and the...<a ClassNameName='text-brand'>View More</a></p>
        </div>
        <div ClassNameName="address mt-6 md:mt-0 text-lg md:text-base">
          <p ClassNameName='text-2xl'>Address</p>
          <p ClassNameName='mt-4'>Deam home villas San <br></br>Diego, CA, USA</p>
          <div ClassNameName='flex mt-3'>
            <span ClassNameName='mt-1'><img src="/images/call-calling.png" alt="" /></span><p ClassNameName='ml-2'>025-777-3067</p>
          </div>
          <div ClassNameName='flex mt-3'>
            <span><img src="/images/call-calling.png" alt="" /></span><p ClassNameName='ml-2'>info@dreamhome.com</p>
          </div>
          
        
        </div>
        <div ClassNameName="socials  mt-6 md:mt-0">
          <p ClassNameName='text-2xl'>Contact Us</p>
          <div ClassNameName="soc flex mt-4">
            <img src="/images/insta.png" alt="" />
            <img src="/images/youtube.png" alt="" />
            <img src="/images/twitter.png" alt="" />

          </div>
          <div ClassNameName="lang flex mt-8 w-40 px-2.5 py-1 ">
            <span ClassNameName='mt-1 mr-1.5'><img  src='/images/globe.png'/></span>
            <select name="" id="" placeholder='English - en' ClassNameName='bg-transaparent'> 
              <option value="English">English - en </option>
              <option value="French">French</option>
            </select>
          </div>

        </div>
        
      </div>
      <div ClassNameName='textlg text-center footer-down py-6 '><p>© 2022 Dandelion | All Rights Reserved</p></div>
    </div>
  )
}

export default Footer