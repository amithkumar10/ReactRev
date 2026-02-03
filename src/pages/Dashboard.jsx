import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Common/Navbar';
import WhatisReact from '../components/Dashboard/WhatisReact';
import WhyUseReact from '../components/Dashboard/WhyUseReact';
import HowReactWorks from '../components/Dashboard/HowReactWorks';
import Footer from '../components/Common/Footer';


const Dashboard = () => {
 
    
return (
    <div className='flex flex-col justify-start items-center w-full min-h-[100vh]'>
          <Navbar />
          <WhatisReact />
          <WhyUseReact />
          <HowReactWorks />
          <Footer />
    </div>
  )
}

export default Dashboard