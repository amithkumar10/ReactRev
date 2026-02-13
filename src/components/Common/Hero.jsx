import React from 'react'
import { useLocation } from 'react-router-dom';

const Hero = () => {
  const location = useLocation();
  console.log(location.pathname); 
  return (
    <div className='w-4xl'>
        <img className='w-full' src={location.pathname === "/zustand"? "/zustand.jpg" : "/ReactHero.png"} alt="HeroImg" />
    </div>
  )
}

export default Hero