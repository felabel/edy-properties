import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Grid } from '@splidejs/splide-extension-grid';
import '@splidejs/react-splide/css';
import Layout from '../../components/Layout';
import Map from '../../components/Map/Map';
import useGetProperty from '../../hooks/getProperty';
import Image from 'next/image';

import { getDownloadURL, getStorage, ref } from 'firebase/storage'

const Property = () => {
    const router = useRouter();
    const { id } = router.query;
    const property = useGetProperty(id);


    const [error, setError] = useState({ error: false, message: "" });
    const [loading, setLoading] = useState(false);

    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    const [image5, setImage5] = useState("");
    

    const getImageURL = (img, stateSetter) => {
        const storage = getStorage()
        const imgRef = ref(storage, img);

        setLoading(true);
        getDownloadURL(imgRef).then((url) => {
            stateSetter(url)
        }).catch((error) => setError({ error: true, message: error.message }))

        setLoading(false);

    }
    useEffect(() => {
        if (property.image1) {
            getImageURL(property.image1, (url) => setImage1(url));
            console.log(image1);
        }
        if (property.image2) {
            getImageURL(property.image2, (url) => setImage2(url));
            console.log(image2);
        }
        if (property.image3) {
            getImageURL(property.image3, (url) => setImage3(url));
            console.log(image3);
        }
        if (property.image4) {
            getImageURL(property.image4, (url) => setImage4(url));
            console.log(image4);
        }
        if (property.image5) {
            getImageURL(property.image5, (url) => setImage5(url));
            console.log(image5);
        }
    }, [property.image1, image1, image2, image3, image4, image5]);


    






    return (
        <Layout>
            <div>
                {/* <div>Property {id}</div>  */}
                <div>
                    <Splide className='pt-24 slide-container' aria-label="My Favorite Images" options={{
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

                    }}>
                       { image1 && <SplideSlide>
                            <img src={image1} alt="Image 1" layout='fill'  className='w-full h-full object-cover border-4 rounded-sm border-white' />
                        </SplideSlide>}
                        { image2 && 
                            <SplideSlide>
                                <img src={image2} alt="Image 2" layout='fill' className='w-full h-full object-cover border-4 rounded-sm border-white' />
                            </SplideSlide> 
                        }
                        { image3 && 
                        <SplideSlide>
                            <img src={image3} alt="Image 2" layout='fill' className='w-full h-full object-cover border-4 rounded-sm border-white' />
                        </SplideSlide>
                        }
                        { image4 && 
                        <SplideSlide>
                            <img src={image4} alt="Image 2" layout='fill' className='w-full h-full object-cover border-4 rounded-sm border-white' />
                        </SplideSlide>
                        }
                        { image5 && 
                        <SplideSlide>
                            <img src={image5} alt="Image 2" layout='fill' className='w-full h-full object-cover border-4 rounded-sm border-white' />
                        </SplideSlide>
                        }
                    </Splide>
                    <div className='details w-4/5 mx-auto my-8'>
                        <div className='flex justify-between'>
                            <p className='details-text font-semibold text-xl'>₦{property.price && property.price.toLocaleString("en-US")} / year</p>
                            {/* <p className='text-white'>{image1}</p> */}
                            <img src='/images/share.png' alt=''/>
                        </div>

                        <div className='flex mr-4 mb-6 mt-2'>
                            <span className='details-text mr-4'>535 sq ft</span>
                            <div className='flex'>
                                <div className='mr-4'><img    src='/images/bed.png ' alt='' /></div>
                                <div className='details-text -ml-3 mr-3'>{property.no_of_rooms} {`Bedroom${property.no_of_rooms>1?"s":""}`}</div>

                            </div>

                            <div className='flex'>
                                <div className='mr-4'><img src='/images/bath.png'  alt='' /></div>
                                <div className='details-text -ml-3'>{property.bath} {`Bath${property.bath>1?"s":""}`}</div>
                            </div>
                        </div>
                        <div className="desc mb-4 details-text">{property.description}</div>
                        <div className="desc mb-4 details-text">contact agent: {property.mobile}</div>


                        <div className='btn px-4 py-2 text-sm font-semibold '><a>Enquire</a></div>

                        <div className='features-text mt-6 hidden lg:block'>
                            <p className='text-brand text-2xl font-semibold mb-8'>Features</p>
                            <div className='icons flex justify-between details-text'>
                                <div className='feature w-6'><img src='/images/elevate.png'    alt=''/><span className='text-sm text-center'>Elevator</span></div>
                                <div className='feature w-6'><img src='/images/laundary.png'    alt=''/><span className='text-sm text-center'>Laundary  Facilities</span></div>
                                <div className='feature w-6'><img src='/images/closet.png'    alt=''/><span className='text-sm text-center'>Walk in Closet</span></div>
                                <div className='feature w-6'><img src='/images/fireplace.png'    alt=''/><span className='text-sm text-center'>Fire Place</span></div>
                                <div className='feature w-6'><img src='/images/balcony.png'    alt=''/><span className='text-sm text-center'>Balcony</span></div>
                                <div className='feature w-6'><img src='/images/park.png'    alt=''/><span className='text-sm text-center'>Garden</span></div>
                            </div>



                        </div>
                        {/* mobile */}
                        <div className='features-text mt-6 lg:hidden'>
                            <p className='text-brand text-2xl font-semibold mb-8'>Features</p>
                            <div className='icons flex justify-between details-text'>
                                <div className='feature w-6'><img src='/images/elevate.png'   alt='' /><span className='text-sm text-center'>Elevator</span></div>
                                <div className='feature w-6'><img src='/images/laundary.png'   alt='' /><span className='text-sm text-center'>Laundary  Facilities</span></div>
                                <div className='feature w-6'><img src='/images/closet.png'   alt='' /><span className='text-sm text-center'>Walk in Closet</span></div>
                            </div>



                        </div>
                        <div className='features-text mt-6 lg:hidden'>
                            <div className='icons flex justify-between details-text'>
                                <div className='feature w-6'><img src='/images/elevate.png'   alt='' /><span className='text-sm text-center'>Elevator</span></div>
                                <div className='feature w-6'><img src='/images/laundary.png'   alt='' /><span className='text-sm text-center'>Laundary  Facilities</span></div>
                                <div className='feature w-6'><img src='/images/closet.png'    alt=''/><span className='text-sm text-center'>Walk in Closet</span></div>
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