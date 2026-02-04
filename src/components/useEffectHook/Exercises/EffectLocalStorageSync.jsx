import React, { useEffect } from 'react'
import { useState } from 'react';

const EffectLocalStorageSync = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const storedData = localStorage.getItem('myData');

  useEffect(() => {
    setDisplayValue(storedData);
    setTimeout(() => {
      localStorage.removeItem('myData');
    }, 2000)
  }, [storedData]);

  const handleSave = () => {
    localStorage.setItem('myData', inputValue);
    setInputValue('');
  }

  return (
    <div className='max-w-86  py-2 px-8 flex flex-col  '>
        <h2 className='mb-4 font-semibold'>Exercise 2 - Local Storage</h2>
      <div className='w-full flex  flex-col mx-2 py-2 gap-2  border-2 border-white justify-center items-center'>
        <div className='flex gap-2 justify-center items-center'>
          <input type="text" className='h-10 border-1 border-white' placeholder='Enter some text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
          <button onClick={handleSave}>Save </button>
        </div>

        <div className='bg-gray-700 p-3'>
          <p className='text-white'>Content Stored in local Storage: {displayValue}</p>
        </div>

      </div>
    </div>
  )
}

export default EffectLocalStorageSync