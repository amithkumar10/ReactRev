import React from 'react'
import Hero from '../Common/Hero'

const WhatisReact = () => {
  return (
    <div className='max-w-4xl mt-10'>

      <div>
        <Hero />
          <h1 className="text-white font-semibold absolute  top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">React</h1>
      </div>
      
        <div className='mt-10'>
            <h2 className="md:text-4xl text-3xl font-bold text-justify">What is React?</h2>
        </div>
        <div className='flex flex-col gap-4'>
            <p className='text-justify'>React is a popular JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive user experience. It was developed by Facebook and is maintained by Facebook and a community of individual developers and companies.</p>

            <a href="https://react.dev/" target="_blank" className='bg-gray-300 max-w-44 p-1 px-2 rounded-lg' rel="noopener noreferrer">React Documentation</a>
        </div>
    </div>
  )
}

export default WhatisReact