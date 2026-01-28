import React from 'react'

const WhatisReact = () => {
  return (
    <div className='max-w-4xl mt-10'>
      <div>
        <img className='w-4xl' src="/ReactHero.jpg" alt="" />
      </div>
        <div className='mt-6'>
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