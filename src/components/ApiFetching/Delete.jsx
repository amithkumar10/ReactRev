import React from 'react'

const Delete = () => {
  return (
    <div className='mb-10'>
        <div className='bg-gray-600 p-5 rounded-b-none rounded-md flex justify-between  mt-6'>
            <h2 className='text-4xl font-bold' >Delete Request</h2>
            <button >Send Request</button>
        </div>

        <div className='h-auto rounded-t-none rounded-md'>
            <pre className='p-5 rounded-t-none rounded-md overflow-x-auto bg-gray-800'>
            
            </pre>
        </div>
    </div>
  )
}

export default Delete