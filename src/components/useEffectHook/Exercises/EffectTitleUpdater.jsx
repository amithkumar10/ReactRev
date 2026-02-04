import React from 'react'
import { useState, useEffect } from 'react';

const EffectTitleUpdater = () => {
    const [titleCount, setTitleCount] = useState(1);
    const [maxUpdates, setMaxUpdates] = useState(5);

    const handleClick = () => {
        setTitleCount(titleCount + 1);
    }

    useEffect(()=> {
        setMaxUpdates(maxUpdates - 1);
        if(maxUpdates === 0){
            alert("Max updates reached");
            setTitleCount(1);
            setMaxUpdates(5);
        }
    }, [titleCount]);

  return (
    <div className='max-w-72 flex flex-col '>
        <h2 className='font-semibold mb-4'>Exercise 1 - Title Updater</h2>
       <div className='flex flex-col justify-center items-center border-2 border-white p-5'>
        
        <div className='p-4 bg-gray-700 mb-4'>
        <h3 className='font-bold'>Movie Title is: <strong className='text-yellow-300 font-bold text-xl'>DHOOM {titleCount}</strong></h3>
       </div>

       <div className='flex max-h-10 gap-2'>
        <button onClick={handleClick}>Update</button>

        <label className='bg-red-700 p-3 rounded text-sm'>Max Updates: {maxUpdates} </label>
       </div>
       </div>
   
    </div>
  )
}

export default EffectTitleUpdater