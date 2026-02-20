import React from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'

const LocalProj = () => {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </div>
  )
}

export default LocalProj