import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';

const Post = () => {

    useEffect(() => {
          axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
          }).then((response) => {
            console.log(response.data);
          }).catch((error) => {
            console.error("There was an error!", error);
          });
    }, []) 

  return (
     <div className='mb-10'>
        <div className='bg-gray-600 p-5 rounded-b-none rounded-md flex justify-between  mt-6'>
            <h2 className='text-4xl font-bold' >Post Request</h2>
            <input type="text" placeholder='Enter userId' />
            <input type="text" placeholder='Enter title' />
            <input type="text" placeholder='Enter body' />            
            <button >Send Request</button>
        </div>

        <div className='h-auto rounded-t-none rounded-md'>
            <pre className='p-5 rounded-t-none rounded-md overflow-x-auto bg-gray-800'>
            
            </pre>
        </div>
    </div>
  )
}

export default Post