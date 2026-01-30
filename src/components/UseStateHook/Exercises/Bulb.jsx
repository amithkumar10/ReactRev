import React from 'react'
import { useState } from 'react'

const Bulb = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <div>
            <div className='max-w-60 flex flex-col justify-center items-center border-1 p-3'>
                <div className='bg-gray-600 w-full rounded flex justify-center items-center mb-2 p-5'>
                    {isOn ? <div className='w-16 h-16 rounded-full bg-yellow-300 shadow-lg'></div> : <div className='w-16 h-16 rounded-full bg-gray-900 shadow-lg'></div>}
                </div>
                <div className='flex w-full justify-center items-center gap-3 mb-3'>
                    <button className='w-full' onClick={() => { setIsOn(true) }}>ON</button>
                    <button className='w-full' onClick={() => { setIsOn(false) }}>OFF</button>
                </div>


            </div>
        </div>
    )
}

export default Bulb