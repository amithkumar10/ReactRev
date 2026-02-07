import axios from "axios";
import React, { useState } from "react";

const Patch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    userId: "",
    title: "",
  })



  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
    console.log(data);

    axios.patch(`https://jsonplaceholder.typicode.com/posts/${data.userId}`,{
      userId: data.userId,
      title: data.title,
    }).then((res)=>{
      if(res.status === 200){
        setLoading(false);
        alert("Data updated successfully");
      }
      console.log(res.data);
      setData({
        userId: "",
        title: "",
      })
    }).catch((error)=>{
      console.log(error.message);
    })
  }

  return (
    <div className="mb-10">
      <div className="bg-gray-600 p-5 rounded-b-none rounded-md flex justify-between items-center gap-2 mt-6">
        <h2 className="text-4xl font-bold">Patch Request</h2>
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

          <button type="submit" className="h-10">
           {loading ? "Updating..." : "Send"}
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

export default Patch;
