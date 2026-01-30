import React, { useState } from 'react'

const NameGame = () => {
    const [name, setName] = useState("");
  return (
    <div>
        <div className='max-w-60 flex flex-col justify-center items-center border-1 p-3'>
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                className='w-full mb-3 p-2 rounded bg-gray-700 text-white border border-gray-600'
            />
            <p className='text-center'>Hello, {name}!</p>
        </div>
    </div>
  )
}

export default NameGame