import React from 'react'
import Navbar from '../components/Common/Navbar'
import Hero from '../components/Common/Hero'
import Footer from '../components/Common/Footer'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Get from '../components/ApiFetching/Get';
import Delete from '../components/ApiFetching/Delete';
import Put from '../components/ApiFetching/Put';
import Post from '../components/ApiFetching/Post';
import Patch from '../components/ApiFetching/Patch';

const ApiCalls = () => {
  
  return (
   <div  className='flex flex-col justify-start items-center w-full min-h-[100vh]'>
        <Navbar />
        <div className='max-w-4xl'>

            <div className=' mt-10'>
        <Hero />
          <h1 className="text-white font-semibold absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">API Calls</h1>

          <Get />
          <Post />
          <Put />
          <Delete />
          <Patch />
      </div>

        </div>
        <Footer />
    </div>
  )
}

export default ApiCalls