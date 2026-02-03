import React from 'react'
import Hero from '../components/Common/Hero'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'

const Admin = () => {
  return (
    <div className='flex flex-col justify-start items-center w-full min-h-[100vh]'>
        <Navbar/>
        <div className='max-w-4xl mt-4'>
            <Hero/>
            <h1 className="text-white font-semibold absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">Welcome Admin</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default Admin