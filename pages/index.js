import React, { useEffect, useState} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Properties from '../components/property/Properties';
// import PropertyCard from './PropertyCard';
// import db from '../../../utils/db';
import db from '../firebase';
import Hero from '../components/Hero/Hero';
import Map from '../components/Map/Map';
import Layout from '../components/Layout';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
const Home = () => {
   
  return (
    <>
      <Layout>
        <Hero />
        <Properties />
        <Map />
        <About />
        <Contact />
      </Layout>
    </>
      
    
  )
}

export default Home