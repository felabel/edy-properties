
// import React from 'react'
// import { useRouter } from 'next/router';
// import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// import { GridComponent } from '@splidejs/splide-extension-grid/dist/types/extensions/Grid/Grid';
// const Details = () => {
//     const router = useRouter();
//     const { id } = router.query;
//     return (
//         <div>
//            <div>Property {id}</div> 
//            <div>
//            <div ClassNameName="p-example__body">
//             <div ClassNameName="p-example__splide">
//             <Splide ClassNameName="splide" id="example-grid" 
//             options={
//                 {
//                    type: 'loop',
//                    height: '20rem',
//                    gap: '1rem',
//                    perPage: 2,
//                    perMove: 1,
//                    grid: {
//                     dimensions: [ [ 1, 1 ], [ 2, 2 ], [ 2, 1 ], [ 1, 2 ], [ 2, 2 ], [ 3, 2 ] ],
//                     gap: {
//                         row: '1rem',
//                         col: '1rem'
//                     }
//                    } 
//                 }
//             }
//             >
                
//                 <SplideTrack ClassNameName="splide__track">
//                     <GridComponent>
//                         <ul ClassName="splide__list">
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">01</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">02</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">03</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">04</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">05</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">06</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">07</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">08</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">09</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">10</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">11</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">12</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">13</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">14</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">15</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">16</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">17</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">18</span></SplideSlide>
//                     <SplideSlide ClassNameName="p-splide__slide splide__slide"><span ClassNameName="p-splide__slide-number">19</span></SplideSlide>
//                 </ul>
//                     </GridComponent>
                
//                 </SplideTrack>
//             </Splide>
//             </div>
//             </div>
//            </div>
//         </div>
        
//     )
// }
// export default Details

// import Splide from '@splidejs/splide';


// new Splide( '.splide' ).mount();

// import { Splide } from '@splidejs/splide';
// import { Grid } from '@splidejs/splide-extension-grid';


// new Splide( '#splide' ).mount( { Grid } );