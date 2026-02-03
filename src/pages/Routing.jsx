import React from 'react'
import Navbar from '../components/Common/Navbar'
import Hero from '../components/Common/Hero'
import Footer from '../components/Common/Footer'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactRouter from '../components/Routing/ReactRouter';
import RouteParams from '../components/Routing/RouteParams';
import ProtectedRoutesLearn from '../components/Routing/ProtectedRoutesLearn';
import UseLocationHook from '../components/Routing/UseLocationHook';

const Routing = () => {
    
  return (
     <div  className='flex flex-col justify-start items-center w-full min-h-[100vh]'>
        <Navbar />
        <div className='max-w-4xl'>

            <div className=' mt-10'>
        <Hero />
          <h1 className="text-white font-semibold absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">Routing</h1>
      </div>

          <ReactRouter />
          <RouteParams />
          <ProtectedRoutesLearn />
          <UseLocationHook />

        </div>
        <Footer />
    </div>
  )
}

export default Routing