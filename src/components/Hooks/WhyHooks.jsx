import React from 'react'

const WhyHooks = () => {
  return (
    <div className='w-full'>
        <div className='mt-10'>
            <h2 className='md:text-4xl text-3xl font-bold text-justify'>Why use Hooks?</h2>
        </div>

        <div>
            <p className='text-justify'>Meta introduced React Hooks to fix real problems in class components, not to add something fancy. In class-based components, related logic was spread across different lifecycle methods, which made the code hard to understand and maintain. This often caused repeated code and tightly coupled components. Reusing logic between components was also difficult and required complex patterns like higher-order components or render props, which made the code harder to read. Hooks solved this by letting function components manage state and side effects directly, making the code simpler, reusable, and easier to test and reason about.</p>
            <br />
            <p className='text-justify'>You should use hooks because they make your codebase simpler, more predictable, and more scalable. Hooks eliminate class syntax, reduce boilerplate, and let you organize code by what it does rather than when it runs. They also align better with modern JavaScript patterns and improve performance optimization through memoization hooks. Bottom line: hooks are the modern React standard, they reduce bugs at scale, and not using them puts you at a structural disadvantage in real-world React applications.</p>
        </div>
    </div>
  )
}

export default WhyHooks