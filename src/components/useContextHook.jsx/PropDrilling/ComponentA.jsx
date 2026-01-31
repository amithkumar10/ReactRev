import React from 'react'
import ComponentB from './ComponentB';
import { useState } from 'react';

const ComponentA = () => {
    const [user, setUser] =  useState("Amith Kumar");
    return (
    <div className='h-auto w-auto p-5 border-2 border-white '>
        <div>Component A: Hello {user}</div>
        <ComponentB user={user} />
    </div>
  )
}

export default ComponentA