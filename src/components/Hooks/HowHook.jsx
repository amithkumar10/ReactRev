import React from 'react'

const HowHook = () => {
  return (
    <div className='w-full'>
        <div className='mt-10'>
            <h2 className='md:text-4xl text-3xl font-bold text-justify'>How Hooks work?</h2>
        </div>

        <div>
            <p className='text-justify'>React hooks work by relying on the order in which they are called inside a function component. When a component renders, React runs the function from top to bottom and stores data for each hook call (such as useState or useEffect) in an internal list based on its position. On every re-render, React goes through the function again in the same order and uses those positions to correctly retrieve and update the stored state or side-effect information. Because React depends entirely on this consistent call order, hooks must always be called at the top level and in the same sequence—changing the order breaks React's ability to map hooks to their data.</p>
        </div>
    </div>
  )
}

export default HowHook