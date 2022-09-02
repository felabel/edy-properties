import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React from 'react'

const Slide = () => {
  return (
    <div className='w-full mb-8 md:mb-0 md:mt-44 pt-8 slide-container' >
      <div className='text text-center my-6'>
        <p className='text-brand font-semibold text-3xl'>Other Projects</p>
        <p className='text-lg md:text-base text-white'>Other projects by us in different locations </p>

      </div>
        
        <Splide hasTrack={ false } aria-label="..." className='mx-auto '
        options={ {
          width: '100%',
          fixedWidth: '90%',
          height: 300,
          type: 'loop',
          // perPage: 2.5,
          speed: 1000,
          gap: '2rem',
          // perMove: 2,
          focus: 'start',
          padding: '10%',
          breakpoints: {
            640: {
              arrows: false,
              padding: '5%'
            },
          }
          
        } }
        >
        


            <SplideTrack>
              <SplideSlide>
                  <Image src="/images/hero.png" alt="Image 1"className='w-full h-full object-cover md:border-4 rounded-sm border-white'/>
                </SplideSlide>
              <SplideSlide>
                  <Image src="/images/deem-bg.png" alt="Image 2"className='w-full h-full object-cover md:border-4 rounded-sm border-white'/>
              </SplideSlide>
              <SplideSlide>
                  <Image src="/images/image2.png" alt="Image 2" className='w-full h-full object-cover md:border-4 rounded-sm border-white'/>
              </SplideSlide>
              
            </SplideTrack>
          
        </Splide>
       
    </div>
  )
}

export default Slide