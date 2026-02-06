import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Get = () => {

    const [data, setData] = useState(null);
    const [request, setRequest] = useState(false);

    const handleClick = () =>{
        setRequest(true);
       
    }
   
   useEffect(()=>{
        if (!request) return;
         axios.get('https://jsonplaceholder.typicode.com/posts/1').then(
        (res)=>{
            setData(res.data);
            console.log(res.data);
        },
        setRequest(false)
    ).catch((err)=>{
        console.log(err);
    })
   }, [request])
   
  return (
    <div className='mb-10'>
        <div className='bg-gray-600 p-5 rounded-b-none rounded-md flex justify-between  mt-6'>
            <h2 className='text-4xl font-bold' >Get Request</h2>
            <button onClick={handleClick}>Send </button>
        </div>

        <div className='h-auto rounded-t-none rounded-md'>
            <pre className='p-5 rounded-t-none rounded-md overflow-x-auto bg-gray-800'>
            {data ? JSON.stringify(data, null, 2) : "No Data Yet"}    
            </pre>
        </div>
    </div>
  )
};

export default Get