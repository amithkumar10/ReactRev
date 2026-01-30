import React from 'react'
import Counter from './Exercises/Counter'
import Bulb from './Exercises/Bulb'
import NameGame from './Exercises/NameGame'
import FavFood from './Exercises/FavFood'

const StateHookExercises = () => {
  return (
    <div>
        <div>
            <h2 className='text-4xl font-bold mb-4 mt-8'>Exercises</h2>
            <p className='text-justify mb-4'>Here are some exercises to practice using the useState hook in React:</p>
        </div>
        
       <div flex className='grid grid-cols-2 justify-between gap-8'>
         <div className='flex flex-col mb-4'>
            <h3 className='text-xl font-semibold mb-4'>Exercise 1 - Basic Counter State Management</h3>
            <Counter/>
        </div>

        <div className='flex flex-col mb-6'>
            <h3 className='text-xl font-semibold mb-4'>Exercise 2 - Boolean State Toggle Bulb</h3>
            <Bulb/>
        </div>

        <div className='flex flex-col mb-6'>
            <h3 className='text-xl font-semibold mb-4'>Exercise 3 - Controlled Input Using useState</h3>
            <NameGame/>
        </div>

        <div className='flex flex-col mb-6'>
            <h3 className='text-xl font-semibold mb-4'>Exercise 4 - List Management Using State Arrays</h3>
            <FavFood/>
        </div>


       </div>

    </div>
  )
}

export default StateHookExercises