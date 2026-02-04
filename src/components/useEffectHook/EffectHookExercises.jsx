import React from 'react'
import EffectLocalStorageSync from './Exercises/EffectLocalStorageSync'
import EffectTitleUpdater from './Exercises/EffectTitleUpdater'
import EffectTimerCleanup from './Exercises/EffectTimerCleanup'
import EffectFetching from './Exercises/EffectFetching'

const EffectHookExercises = () => {
  return (
    <div>
      <div className='mb-5'>
        <h2 className='text-4xl font-bold text-white mb-3'>Exercises</h2>
        <p>Here are some exercises to practice using the useEffect hook in React:</p>
      </div>
        <div className='grid grid-cols-2 gap-20 justify-center items-center'>
           
            <EffectTitleUpdater />
             <EffectLocalStorageSync />
             <EffectFetching />
            <EffectTimerCleanup />
        </div>
    </div>
  )
}

export default EffectHookExercises