import React from 'react'

const WhyUseReact = () => {
  return (
    <div className='max-w-4xl  mt-8'>

        <div>
            <h2 className="md:text-4xl text-3xl font-bold text-justify mt-16">Why use React?</h2>
        </div>
        <div className='flex flex-col gap-4'>
            <p className='text-justify'>Taking JavaScript application data and rendering it into a browser is a costly operation. Let’s consider an example, Imagine a complex UI with thousands of DOM nodes. The user inputs a data in a form field and you want to update a p tag’s content to reflect this. With Javascript, you have to change all the DOM nodes (remember we have thousands of them) to see the change in just one node. So “DOM manipulation is expensive” in the traditional web world.
            To overcome the limitations in traditional DOM the concept of the Virtual DOM came into existence. React uses the Virtual DOM to efficiently update the DOM.</p>

            <a href="https://react.dev/" target="_blank" className='bg-gray-300 max-w-28 p-1 px-2 rounded-lg' rel="noopener noreferrer">Read Article</a>
        </div>
    </div>
  )
}

export default WhyUseReact