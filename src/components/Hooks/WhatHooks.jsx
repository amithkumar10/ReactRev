import React from 'react'

const WhatHooks = () => {
  return (
    <div className='w-full'>
        <div className='mt-10'>
            <h2 className='md:text-4xl text-3xl font-bold text-justify'>What are React Hooks?</h2>
        </div>

        <div>
            <p className='text-justify'>React Hooks are special functions that allow function components to use React features like state, lifecycle behavior, and other internal capabilities that were previously only available in class components. Before hooks were introduced, function components were mostly used for simple UI rendering, while complex logic such as managing state or handling side effects required class components. Hooks removed this limitation and made function components fully powerful, which is why modern React applications rarely use classes anymore.</p>
        </div>
    </div>
  )
}

export default WhatHooks