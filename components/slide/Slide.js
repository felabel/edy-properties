import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React from 'react'

const Slide = () => {
  return (
    <div ClassNameName='w-full mb-8 md:mb-0 md:mt-44 pt-8 slide-container' >
      <div ClassNameName='text text-center my-6'>
        <p ClassNameName='text-brand font-semibold text-3xl'>Other Projects</p>
        <p ClassNameName='text-lg md:text-base text-white'>Other projects by us in different locations </p>

      </div>
        
        <Splide hasTrack={ false } aria-label="..." ClassNameName='mx-auto '
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
                  <img src="/images/hero.png" alt="Image 1"ClassNameName='w-full h-full object-cover md:border-4 rounded-sm border-white'/>
                </SplideSlide>
              <SplideSlide>
                  <img src="/images/deem-bg.png" alt="Image 2"ClassNameName='w-full h-full object-cover md:border-4 rounded-sm border-white'/>
              </SplideSlide>
              <SplideSlide>
                  <img src="/images/image2.png" alt="Image 2" ClassNameName='w-full h-full object-cover md:border-4 rounded-sm border-white'/>
              </SplideSlide>
              {/* <SplideSlide>
                  <img src="/images/hero.png" alt="Image 1"ClassNameName='w-full h-full object-cover'/>
                </SplideSlide>
              <SplideSlide>
                  <img src="/images/deem-bg.png" alt="Image 2"ClassNameName='w-full h-full object-cover'/>
              </SplideSlide> */}
              {/* <SplideSlide>
                  <img src="/images/image2.png" alt="Image 2" ClassNameName='w-full h-full object-cover'/>
              </SplideSlide>
              <SplideSlide>
                  <img src="/images/hero.png" alt="Image 1"ClassNameName='w-full h-full object-cover'/>
                </SplideSlide>
              <SplideSlide>
                  <img src="/images/deem-bg.png" alt="Image 2"ClassNameName='w-full h-full object-cover'/>
              </SplideSlide>
              <SplideSlide>
                  <img src="/images/image2.png" alt="Image 2" ClassNameName='w-full h-full object-cover'/>
              </SplideSlide> */}
            </SplideTrack>
          
        </Splide>
        {/* <Splide hasTrack={ false } aria-label="top houses" ClassNameName='w-56 h-44'>
          <div ClassNameName="custom-wrapper">
            <SplideTrack>
                <SplideSlide>
                  <img src="/images/hero.png" alt="Image 1"/>
                </SplideSlide>
              <SplideSlide>
                  <img src="/images/deem-bg.png" alt="Image 2"/>
              </SplideSlide>
            </SplideTrack>


            <div ClassNameName="splide__arrows top-10"  />
            <div ClassNameName="splide__progress">
              <div ClassNameName="splide__progress__bar" />
            </div>
            <button ClassName="splide__toggle" type="button">
              <span ClassName="splide__toggle__play">Play</span>
              <span ClassName="splide__toggle__pause">Pause</span>
            </button>
          </div>
        </Splide> */}
    </div>
  )
}

export default Slide