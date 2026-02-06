import React from "react";
import axios from "axios";
import { useState } from "react";

const Put = () => {
    const [data, setData] = useState({
        userId: "",
        title: "",
        body: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);

        axios.put(('https://jsonplaceholder.typicode.com/posts/1'), {
            userId: data.userId,
            title: data.title,
            body: data.body,
        }).then((res)=>{
            if(res.status === 200){
                alert("Data updated successfully");
            }
            console.log(res.data);
            setData({
                userId: "",
                title: "",
                body: "",
            });
        }).catch((err)=>{
            console.log(err.message);
        })

    }
    
  return (
    <div className="mb-10">
      <div className="bg-gray-600 p-5 rounded-b-none rounded-md flex justify-evenly items-center gap-2 mt-6">
        <h2 className="text-4xl font-bold">Put Request</h2>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            className="h-10 border-1 p-3 border-white max-w-40"
            placeholder="Enter userId"
            value={data.userId}
            onChange={(e)=> setData({...data, userId: e.target.value})}
          />

          <input
            type="text"
            className="h-10 border-1 p-3 border-white max-w-40"
            placeholder="Enter title"
            value={data.title}
            onChange={(e)=> setData({...data, title: e.target.value})}
          />

          <input
            type="text"
            className="h-10 border-1 p-3 border-white max-w-40"
            placeholder="Enter body"
            value={data.body}
            onChange={(e)=> setData({...data, body: e.target.value})}
           />
          

          <button type="submit" className="h-10">
            Send
          </button>
        </form>
      </div>

      <div className="h-auto rounded-t-none rounded-md">
        <pre className="p-5 rounded-t-none rounded-md overflow-x-auto bg-gray-800">

        </pre>
      </div>
    </div>
  );
};

export default Put;
