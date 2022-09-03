import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import Link from 'next/link';
import Image from 'next/image'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import useGetImageURL from '../../hooks/getImage';

const PropertyCard = (props) => {
  const { property } = props;
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
    getImageURL(property.image1, (url) => setImage1(url));
    // Imsert function for imge1
    getImageURL(property.image2, (url) => setImage2(url))
  }, [property.image2, property.image1]);
  return (
    <div className='text-white '>
      <div className="max-w-sm rounded-md overflow-hidden shadow-lg my-3  card text-white h-100px md:h-auto">
        <Splide hasTrack={false} aria-label="..." className='w-full'
          options={{
            rewind: true,
            width: 800,
            gap: '1rem',
            pagination: false,
            heightRatio: 0.7,
            breakpoints: {
              640: {
                // heightRatio: 0.8,
              },
            }
          }}
        >



          <SplideTrack>
            <SplideSlide className='w-full'>
              <div className='h-full'>
                <Image src={image1 ? image1 : "/images/image1.png"} alt="Image 1" layout='fill' className='w-full h-full object-cover' />
              </div>
            </SplideSlide>
            <SplideSlide className='w-full'>
              <div className='h-full'>
                <Image src={image2 ? image2 : "/images/image1.png"} alt="Image 2" layout='fill' className='w-full h-full object-cover' />
              </div>
            </SplideSlide>
            
          </SplideTrack>

        </Splide>
        <div className="px-5 pt-4 pb-3 ">
          <div className="flex items-start justify-between">
            <div className='flex flex-col gap-y-2'>
              <span>{property.name}</span>
              <span>₦ {property.price}</span>
            </div>
            <Link href={`/property/${property.id}`}><a className='btn px-4 py-2 text-sm font-semibold'>View Details</a></Link>
          </div>
          {/* <div className="divi flex w-full   border-gray-700 rounded-md  mt-4 ">
            <p className=''>{property.no_of_rooms}Bedrooms</p>
            <p>icon</p>
            <p className='nobordaaaaaaaer'>studio</p>
          </div> */}

          <div className="property-meta flex justify-center my-2 border-[0.5px] border-[rgba(255,251,251,0.35)] px-2 rounded-md">
            <p className=''>{property.no_of_rooms} {`Bedroom${property.no_of_rooms>1?"s":""}`}</p>
            <p className='text-center'>{property.bath} {`Bath${property.bath>1?"s":""}`}</p>
            <p className=''>studio</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PropertyCard