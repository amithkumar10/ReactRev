import React from 'react'
import { useContext } from 'react'
import { UserContext } from './ContextComponentA';
import ContextComponentC from './ContextComponentC';

const ContextComponentB = () => {
    const user = useContext(UserContext);
    console.log("User in B:", user);
  return (
    <div className='h-auto w-auto p-5 border-2 border-white '>
        <h2>Context Component B: Welcome {user}</h2>

       <ContextComponentC />
    </div>
  )
}

export default ContextComponentB