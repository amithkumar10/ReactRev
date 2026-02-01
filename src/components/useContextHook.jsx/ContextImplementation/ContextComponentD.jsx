import React from 'react'
import { useContext } from 'react'
import { UserContext } from './ContextComponentA';

const ContextComponentD = () => {
  const user = useContext(UserContext);
  return (
    <div className='h-auto w-auto border-white border-2 p-5'>
        <h2>Context Component D: Hello {user}!</h2>
    </div>
  )
}

export default ContextComponentD