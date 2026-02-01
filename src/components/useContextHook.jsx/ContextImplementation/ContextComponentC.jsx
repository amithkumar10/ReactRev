import React from 'react'
import ContextComponentD from './ContextComponentD'

const ContextComponentC = () => {
  return (
    <div className='h-auto w-auto p-5 border-2 border-white'>
        <h2>Context Component C: I didnt pass anything,
          component D will get it using useContext</h2>
          
        <ContextComponentD />
    </div>
  )
}

export default ContextComponentC