import React from 'react'

const HowReactWorks = () => {
  return (
    <div className='max-w-4xl  mt-16'>
        <div>
            <h2 className="md:text-4xl text-3xl font-bold text-justify">How does React work?</h2>
        </div>

        <div>
            <p className='text-justify'>
            React works by creating a virtual representation of the user interface in memory, known as the Virtual DOM. When the state of a component changes, React updates the Virtual DOM first, then it compares the new Virtual DOM with the previous version using a process called reconciliation. This allows React to determine the most efficient way to update the actual DOM, minimizing direct manipulations and improving performance. React components can be functional or class-based, and they can manage their own state and lifecycle methods to create dynamic and interactive UIs.
            </p>

            <p className='font-bold text-xl mt-4'>Understanding Virtual DOM</p>

            <img className='flex flex-col justify-centre item-center' src="/VDOM.jpg" alt="" />
           
           <div className='flex flex-col gap-4'>
             <p className="text-justify">
                The virtual DOM is a programming concept where a virtual representation of a User Interface is kept in memory and synced with the Real DOM. In React context, the Virtual DOM is React's local and simplified copy of the HTML DOM. ReactJS is the first framework to take this to an obvious conclusion: optimizing for DOM manipulation leads to a fast library, and in this case, a library which enables web applications that require very little code. ReactJS works by storing the state of your application internally, and only re-rendering your content into the browser (the DOM manipulation) when the state changes. You interact with ReactJS by telling it when the state has changed and ReactJS handles all the visual changes to your application for you. Consider the above example, React sees the change you want to make and only re-renders the p tag. This one behavior leads to massive performance increases and is the reason for React to become more popular.</p>

                <a href="https://react.dev/" target="_blank" className='bg-gray-300 max-w-28 p-1 px-2 rounded-lg' rel="noopener noreferrer">Read Article</a>
           </div>
        </div>
    </div>
  )
}

export default HowReactWorks