import React from 'react'
import LocalProj from './CustomProjComponents/LocalProj'
const CustomHookProj = () => {
  return (
    <div>
        <h2 className='text-4xl font-semibold text-white mt-10 mb-6'>Exercises</h2>

        <div>
           <LocalProj />
        </div>
    </div>
  )
}

export default CustomHookProj