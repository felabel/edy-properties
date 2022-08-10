import React from 'react'
import { useRouter } from 'next/router';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Grid } from '@splidejs/splide-extension-grid';
import '@splidejs/react-splide/css';
import Layout from '../../components/Layout';
import Map from '../../components/Map/Map';

const Property = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout>
            <div>
            {/* <div>Property {id}</div>  */}
            <div>
            <Splide className='pt-24 slide-container' aria-label="My Favorite Images" options={ {
                    width: '100%',
                    
                    height: 400,
                    type: 'loop',
                    perPage: 2,
                    speed: 1000,
                    gap: '0.5rem',
                    perMove: 1,
                    focus: 'center',
                    padding: '10%',
                    rewind: 'true',
                    breakpoints: {
                    640: {
                        arrows: false,
                        padding: '5%',
                        perPage: 1,
                        type: 'slide'

                        },
                    }
                    
                    } }>
                        <SplideSlide>
                        <img src="/images/hero.png" alt="Image 1"className='w-full h-full object-cover border-4 rounded-sm border-white'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/images/deem-bg.png" alt="Image 2"className='w-full h-full object-cover border-4 rounded-sm border-white'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/images/image2.png" alt="Image 2" className='w-full h-full object-cover border-4 rounded-sm border-white'/>
                        </SplideSlide>
            </Splide>
            <div className='details w-4/5 mx-auto my-8'>
                <div className='flex justify-between'>
                    <p className='details-text font-semibold text-xl'>1000$</p>
                    <img src='/images/share.png'/>
                </div>
                    
                <div className='flex mr-4 mb-6 mt-2'>
                    <span className='details-text mr-4'>535 sq ft</span>
                    <div className='flex'>
                        <div className='mr-4'><img src='/images/bed.png ' /></div>
                        <div className='details-text -ml-3 mr-3'>1 bedroom</div>
                    </div>
                    
                    <div className='flex'>
                        <div className='mr-4'><img src='/images/bath.png'/></div>
                        <div className='details-text -ml-3'>1 bath</div>
                    </div>
                </div>

                <div className='btn px-4 py-2 text-sm font-semibold '><a>Enquire</a></div>
                
                <div className='features-text mt-6 hidden lg:block'>
                    <p className='text-brand text-2xl font-semibold mb-8'>Features</p>
                    <div className='icons flex justify-between details-text'>
                        <div className='feature w-6'><img src='/images/elevate.png'/><span className='text-sm text-center'>Elevator</span></div>
                        <div className='feature w-6'><img src='/images/laundary.png'/><span className='text-sm text-center'>Laundary  Facilities</span></div>
                        <div className='feature w-6'><img src='/images/closet.png'/><span className='text-sm text-center'>Walk in Closet</span></div>
                        <div className='feature w-6'><img src='/images/fireplace.png'/><span className='text-sm text-center'>Fire Place</span></div>
                        <div className='feature w-6'><img src='/images/balcony.png'/><span className='text-sm text-center'>Balcony</span></div>
                        <div className='feature w-6'><img src='/images/park.png'/><span className='text-sm text-center'>Garden</span></div>
                    </div>

                    

                </div>
                <div className='features-text mt-6 lg:hidden'>
                    <p className='text-brand text-2xl font-semibold mb-8'>Features</p>
                    <div className='icons flex justify-between details-text'>
                        <div className='feature w-6'><img src='/images/elevate.png'/><span className='text-sm text-center'>Elevator</span></div>
                        <div className='feature w-6'><img src='/images/laundary.png'/><span className='text-sm text-center'>Laundary  Facilities</span></div>
                        <div className='feature w-6'><img src='/images/closet.png'/><span className='text-sm text-center'>Walk in Closet</span></div>
                    </div>

                    

                </div>
                <div className='features-text mt-6 lg:hidden'>
                    <div className='icons flex justify-between details-text'>
                        <div className='feature w-6'><img src='/images/elevate.png'/><span className='text-sm text-center'>Elevator</span></div>
                        <div className='feature w-6'><img src='/images/laundary.png'/><span className='text-sm text-center'>Laundary  Facilities</span></div>
                        <div className='feature w-6'><img src='/images/closet.png'/><span className='text-sm text-center'>Walk in Closet</span></div>
                    </div>

                    

                </div>
            </div>
            <Map />
            </div>
            </div>
        </Layout>
        
        
    )
}
export default Property