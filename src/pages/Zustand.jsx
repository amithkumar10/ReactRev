import React from 'react'
import Navbar from '../components/Common/Navbar'
import Hero from '../components/Common/Hero'
import Footer from '../components/Common/Footer'
import ZustandInfo from '../components/Zustand/ZustandInfo'
import ZustandProj from '../components/Zustand/ZustandProj'

const Zustand = () => {

  return (
    <div  className='flex flex-col justify-start items-center w-full min-h-[100vh]'>
        <Navbar />
        <div className='max-w-4xl'>

            <div className=' mt-10'>
        <Hero />
        <ZustandInfo />
        <ZustandProj />
         
      </div>

        </div>
        <Footer />
    </div>
  )
}

export default Zustand