import React from 'react'
import Suskart from './ZustandProjComponents/Suskart'
import Zuskart from './ZustandProjComponents/Zuskart'

const ZustandProj = () => {
  return (
    <div>
        <h2 className='text-4xl font-bold mb-5'>Projects</h2>
      <div className='flex flex-col gap-16'>
          <Suskart />
        <Zuskart />
      </div>
    </div>
  )
}

export default ZustandProj