import React from "react";
import axios from "axios";
import { useState } from "react";

const Delete = () => {
  const [posts, setPosts] = useState([]);


  const handleClick = () => {

    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      (res) => {
        setPosts(res.data.slice(1, 4));
        console.log(res.data.slice(1, 4));
      }
    ).catch((err) => {
      console.log(err);
    })


  }

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
      if (res.status === 200) {
        const ok = confirm("Are you sure you want to delete this post?")
        if (ok) { setPosts(posts.filter((post) => post.id !== id)); }
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="mb-10">
      <div className="bg-gray-600 p-5 rounded-b-none rounded-md flex justify-between items-center gap-2 mt-6">
        <h2 className="text-4xl font-bold">Delete Request</h2>
        {/* <form className="flex gap-2">
          <input
            type="text"
            className="h-10 border-1 p-3 border-white max-w-40"
            placeholder="Enter userId"
          />
           */}

        <button onClick={handleClick} className="">
          Get Posts
        </button>
      </div>

      <div className="h-auto rounded-t-none rounded-md">
        {posts && posts.map((post) => (
          <div key={post.title} className={`mb-3 bg-gray-800 p-5`}>
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">{post.title} {post.id}</h2>
              <button onClick={() => { handleDelete(post.id) }}>Delete</button>
            </div>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delete;
