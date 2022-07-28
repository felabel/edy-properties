import { Splide, SplideSlide } from '@splidejs/react-splide';

import React from 'react'

const Slide = () => {
  return (
    <div>
        <Splide aria-label="My Favorite Images">
            <SplideSlide>
                <img src="image1.jpg" alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
                <img src="image2.jpg" alt="Image 2"/>
            </SplideSlide>
        </Splide>
    </div>
  )
}

export default Slide