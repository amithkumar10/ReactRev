import React from 'react'
import Navbar from '../components/Common/Navbar'
import Hero from '../components/Common/Hero'
import Footer from '../components/Common/Footer'
import WhatHooks from '../components/Hooks/WhatHooks'
import WhyHooks from '../components/Hooks/WhyHooks'
import HowHook from '../components/Hooks/HowHook'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImpHooks from '../components/Hooks/ImpHooks'

const Hooks = () => {
    

  return (
    <div  className='flex flex-col justify-start items-center w-full min-h-[100vh]'>
        <Navbar />
        <div className='max-w-4xl'>

        <div className=' mt-10'>
        <Hero />
        <h1 className="text-white font-semibold absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">Hooks</h1>

        <WhatHooks />
        <WhyHooks />
        <HowHook />
        <ImpHooks />

      </div>

        </div>
        <Footer />
    </div>
  )
}

export default Hooks