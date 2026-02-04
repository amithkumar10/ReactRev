import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const EffectFetching = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
           (response)=>{
            setData(response.data.slice(0, 5));
            console.log("Fetched data:", response.data);
           }
        ).catch(error => {
            console.error("Error fetching data:", error);
        });
    }, [])
  return (
    <div className='border-2 border-white p-5 max-w-72'>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default EffectFetching