import Properties from '../components/property/Properties';

import Hero from '../components/Hero/Hero';
import Map from '../components/Map/Map';
import Layout from '../components/Layout';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Slide from '../components/slide/Slide';
import ReactLoading from 'react-loading'
import { useState } from 'react';

// import ContactTest from '../components/Contact/ContactTest';
const Home = () => {
  const [isLoading,	setIsLoading] = useState(true)
 


  return (
    <>
    {/* {isLoading && 
                <ReactLoading type="spinningBubbles" color="fuschia" />
    } */}
    
      <Layout>
        <Hero />
        <Properties />
        <Map />
        <About />
        <Slide />
        <Contact />
        {/* <ContactTest /> */}
      </Layout>
    </>


  )
}

export default Home