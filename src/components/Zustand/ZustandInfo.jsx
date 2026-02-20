import React from 'react'

const ZustandInfo = () => {
  return (
    <div className='mb-15'>
      <h2 className='text-4xl font-bold   mt-10'>What is Zustand</h2>
      <p className='text-justify mb-4'>
       Zustand is a lightweight and fast state management library for React. Think of it as a central place where your app can keep important data that many components need to use, like a “global memory” for your app. For example, in an e-commerce app, the shopping cart or user login info can be stored in Zustand so any page or component can access it easily without passing props through multiple layers.
      </p>

      <h2 className='text-4xl font-bold  mt-10'>Why to use Zustand</h2>
      <p className='text-justify mb-4'>
        Zustand is used when multiple components need the same data or need to update shared information. For instance, if you have a music player app, the current song, play/pause status, and volume level can be stored in Zustand. This way, the header, playlist, and player controls can all stay in sync automatically without complex prop-passing or Redux boilerplate. It keeps the code clean, easy to understand, and avoids unnecessary re-renders.
      </p>

      <h2 className='text-4xl font-bold  mt-10'>How does Zustand Work</h2>
      <p className='text-justify mb-4'>
       in Zustand, you create a “store” that holds the state and the functions to modify it. For example, in a shopping cart, you can have a cart object in the store and functions like addItem or removeItem. Any component can read the cart or call addItem, and all components that use cart automatically update when it changes. So, it works like a shared memory with automatic updates for your React components.
      </p>
    </div>
  )
}

export default ZustandInfo