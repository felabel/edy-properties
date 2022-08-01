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
            <Splide ClassNameName='pt-24' aria-label="My Favorite Images" options={ {
                    width: '100%',
                    
                    height: 400,
                    type: 'loop',
                    perPage: 2,
                    speed: 1000,
                    gap: '0.5rem',
                    perMove: 1,
                    focus: 'center',
                    padding: '10%',
                    
                    } }>
                        <SplideSlide>
                        <img src="/images/hero.png" alt="Image 1"ClassNameName='w-full h-full object-cover border-4 rounded-sm border-white'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/images/deem-bg.png" alt="Image 2"ClassNameName='w-full h-full object-cover border-4 rounded-sm border-white'/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/images/image2.png" alt="Image 2" ClassNameName='w-full h-full object-cover border-4 rounded-sm border-white'/>
                        </SplideSlide>
            </Splide>
            <div ClassNameName='details w-4/5 mx-auto my-8'>
                <div ClassNameName='flex justify-between'>
                    <p ClassNameName='details-text font-semibold text-xl'>1000$</p>
                    <img src='/images/share.png'/>
                </div>
                    
                <div ClassNameName='flex mr-4 mb-6 mt-2'>
                    <span ClassNameName='details-text mr-4'>535 sq ft</span>
                    <div ClassNameName='flex'>
                        <div ClassNameName='mr-4'><img src='/images/bed.png ' /></div>
                        <div ClassNameName='details-text -ml-3 mr-3'>1 bedroom</div>
                    </div>
                    
                    <div ClassNameName='flex'>
                        <div ClassNameName='mr-4'><img src='/images/bath.png'/></div>
                        <div ClassNameName='details-text -ml-3'>1 bath</div>
                    </div>
                </div>

                <div ClassNameName='btn px-4 py-2 text-sm font-semibold '><a>Enquire</a></div>
                
                <div ClassNameName='features-text mt-6'>
                    <p ClassNameName='text-brand text-2xl font-semibold mb-8'>Features</p>
                    <div ClassNameName='icons flex justify-between details-text'>
                        <div ClassNameName='feature w-6'><img src='/images/elevate.png'/><span ClassNameName='text-sm text-center'>Elevator</span></div>
                        <div ClassNameName='feature w-6'><img src='/images/laundary.png'/><span ClassNameName='text-sm text-center'>Laundary  Facilities</span></div>
                        <div ClassNameName='feature w-6'><img src='/images/closet.png'/><span ClassNameName='text-sm text-center'>Walk in Closet</span></div>
                        <div ClassNameName='feature w-6'><img src='/images/fireplace.png'/><span ClassNameName='text-sm text-center'>Fire Place</span></div>
                        <div ClassNameName='feature w-6'><img src='/images/balcony.png'/><span ClassNameName='text-sm text-center'>Balcony</span></div>
                        <div ClassNameName='feature w-6'><img src='/images/park.png'/><span ClassNameName='text-sm text-center'>Garden</span></div>
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