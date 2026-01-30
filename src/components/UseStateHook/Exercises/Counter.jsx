import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (


        <div className='max-w-60 flex flex-col justify-center items-center border-1 p-3'>
            <div className='bg-gray-600 w-full rounded flex justify-center items-center mb-2'><p className='mt-2 mb-2 font-semibold text-2xl'>{count}</p></div>
            <div className='flex w-full justify-center items-center gap-3 mb-3'>
                <button className='w-full' onClick={() => { setCount(count + 10) }}>+</button>
                <button className='w-full' onClick={() => { setCount(count - 5) }}>-</button>
            </div>

            <button onClick={() => { setCount(0) }} className='w-full'> Reset</button>
        </div>



    )
}

export default Counter