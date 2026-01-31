import React from 'react'
import ComponentC from './ComponentC'


const ComponentB = (props) => {
    // console.log(typeof props.user);
  return (
    <div className='border-2 border-white w-auto h-auto p-5'>Component B: Hello from {props.user}
    <ComponentC user={props.user} />
    </div>
  )
}

export default ComponentB