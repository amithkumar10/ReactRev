import React from 'react'
import { useState, useEffect } from 'react';

const EffectTimerCleanup = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    console.log("Timer is running:", isRunning);
    console.log("Seconds:", seconds);
    console.log("Setting up interval:", timer);


    return () => clearInterval(timer);
  }, [isRunning]);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;


  return (
    <div className='flex flex-col gap-2  justify-center items-center'>
      <h2 className='font-semibold mb-3'>Exercise 4 - Timer Cleanup Concept</h2>
      <div className='border-2 border-white p-5 max-w-72 flex flex-col gap-2  justify-center items-center'>
        <div>
          <h2 className='text-5xl font-bold'>{hours} : {minutes} : {secs} </h2>
        </div>

        <div className=' flex gap-2'>
          <button className={`px-4 py-2 rounded ${!isRunning ? "bg-black text-white" : "opacity-50"
            }`} disabled={isRunning} onClick={() => setIsRunning(true)}>Start</button>

          <button className={`px-4 py-2 rounded ${isRunning ? "bg-black text-white" : "opacity-50"
            }`} onClick={() => setIsRunning(false)}>Stop </button>

          <button className={`px-4 py-2 rounded ${isRunning ? "bg-black text-white" : "opacity-50"
            }`} onClick={() => { setSeconds(0); setIsRunning(false); }}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default EffectTimerCleanup;