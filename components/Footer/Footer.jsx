import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='w-full footer bg-red-500 pt-6'>
      <div className="py-8 w-4/5 grid lg:grid-cols-3 mx-auto  gap-2 text-white justify-between ">
        <div className="footer-text ">
          <Image src='/images/logo.png' alt='' width={44} height={48} />
          <p className='text-2xl md:text-base font-semibold'>Dream House</p>
          <p className='mt-4  font-thin text-lg md:text-base'>Dream Home is a gated community <br></br> with a great location. Located <br></br> downtown, you’re within walking <br></br> distance of Parks, and the...<a className='text-brand'>View More</a></p>
        </div>
        <div className="address mt-6 md:mt-0 text-lg md:text-base">
          <p className='text-2xl'>Address</p>
          <p className='mt-4'>Deam home villas San <br></br>Diego, CA, USA</p>
          <div className='flex mt-3'>
            <span className='mt-1'>
              <Image src="/images/call-calling.png" alt="" width={24} height={24}  />
            </span><p className='ml-2'>025-777-3067</p>
          </div>
          <div className='flex mt-3'>
            <span>
              <Image src="/images/call-calling.png" alt="" width={24} height={24} />
            </span><p className='ml-2'>info@dreamhome.com</p>
          </div>
          
        
        </div>
        <div className="socials  mt-6 md:mt-0">
          <p className='text-2xl'>Contact Us</p>
          <div className="soc flex mt-4">
            <Image src="/images/insta.png" alt=""  width={28} height={28}/>
            <Image src="/images/youtube.png" alt="" width={28} height={28} />
            <Image src="/images/twitter.png" alt="" width={28} height={28}/>

          </div>

          <div className="lang flex mt-8 w-48 px-2.5 py-1 ">
          <Image src="/images/globe.png" alt="" width={24} height={28} className='mt-1 mr-1.5' />

            {/* <span className='mt-1 mr-1.5'>
              <Image src='/images/twitter.png' width={44} height={56} alt=""/>
            </span> */}
            <select name="" id="" placeholder='English - en' className='bg-transaparent'> 
              <option value="English">English - en </option>
              <option value="French">French</option>
            </select>
          </div>

        </div>
        
      </div>
      <div className='textlg text-center footer-down py-6 '><p>© 2022 Dandelion | All Rights Reserved</p></div>
    </div>
  )
}

export default Footer