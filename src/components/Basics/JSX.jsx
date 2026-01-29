import React from 'react'

const JSX = () => {
  return (
    <div className='max-w-4xl mt-10'>
        
        <div>
        <h2 className="md:text-4xl text-3xl font-bold text-justify mb-4">JSX (JavaScript XML)</h2>
        <p>JSX is a syntax extension that lets you write HTML-like code inside JavaScript, which React converts into React.createElement calls.</p>
        </div>

        <div className='mt-4'>
            <h3 className='font-semibold'>Example - JSX used to write this component</h3>
            <pre className='bg-gray-200 p-4 rounded-lg overflow-x-auto'>
{`import React from 'react';
const JSX = () => {
  return (
    <div className='max-w-4xl mt-10'>           
        <h2 className="md:text-4xl text-3xl font-bold text-justify mb-4">JSX (JavaScript XML)</h2>
        <p>JSX is a syntax extension that lets you write HTML-like code inside JavaScript, which React converts into React.createElement calls.</p>
    </div>
    );
};`}
            </pre>
        </div>
    </div>
  )
}

export default JSX
