import React from 'react'

const ListKeys = () => {
  return (
    <div className='w-full mt-10'>
        <h2 className="md:text-4xl text-3xl font-bold text-justify mb-4">Lists and Keys</h2>
        <p>In React, lists are used to render multiple components or elements based on an array of data. Keys are unique identifiers assigned to each element in a list to help React efficiently update and manage the DOM.</p>

        <pre className='bg-gray-800 p-4 rounded-lg overflow-x-auto mt-3'>{`
const users = ["Amith", "Rahul", "Neha"];

return (
  <ul>
    {users.map((user) => (
      <li key={user}>{user}</li>
    ))}
  </ul>
);      
        `}</pre>

    </div>
  )
}

export default ListKeys