import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = (props) => {
  // console.log(typeof props);

  return (
    <div className='h-auto w-auto p-5 border-2 border-white'>Component C: Hello {props.user}
    <ComponentD user = {props.user} />
    </div>
  )
}

export default ComponentC