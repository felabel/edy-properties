
import Head from 'next/head'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Edynek Properties</title>
      </Head>
      <Navbar />
      {/* <Navtest /> */}
      <main>
        {
          children
        }
      </main>
      <Footer />
    </>
  )
}

export default Layout