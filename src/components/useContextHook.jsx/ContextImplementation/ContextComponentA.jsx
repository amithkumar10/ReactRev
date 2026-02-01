import React from 'react'
import { useState, createContext } from 'react'
import ContextComponentB from './ContextComponentB';

export const UserContext = createContext();

const ContextComponentA = () => {
    const [user, setUser] = useState("Amith")
  return (
    <div className='h-auto w-auto p-5 border-2 border-white '>
        <h2>Context Component A: Hello {user}</h2>
    
        <UserContext.Provider value={user}>
            <ContextComponentB />
        </UserContext.Provider>
    </div>
  )
}

export default ContextComponentA