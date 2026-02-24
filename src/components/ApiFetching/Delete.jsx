import React, { useState } from "react";
import axios from "axios";
import useDelete from "../CustomHooks/Hooks/useDelete";

const Delete = () => {
  const [getLoading, setGetLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const { deleteItem, loadingId, error } = useDelete(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const handleClick = async () => {
    try {
      setGetLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(res.data.slice(1, 4));
    } catch (err) {
      console.log(err);
    } finally {
      setGetLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!ok) return;

    const success = await deleteItem(id);

    if (success) {
      setPosts((prev) => prev.filter((post) => post.id !== id));
    }
  };

  return (
    <div className="mb-10">
      <div className="bg-gray-600 p-5 rounded-md rounded-b-none flex justify-between items-center mt-6">
        <h2 className="text-4xl font-bold">Delete Request</h2>

        <button onClick={handleClick}>
          {getLoading ? "Loading..." : "Get Posts"}
        </button>
      </div>

      {error && <p>Error: {error}</p>}

      <div>
        {posts.map((post) => (
          <div key={post.id} className="mb-3 bg-gray-800 p-5">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">
                {post.title}
              </h2>

              <button onClick={() => handleDelete(post.id)}>
                {loadingId === post.id ? "Deleting..." : "Delete"}
              </button>
            </div>

            <p>{post.body}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 p-6 rounded-t-none rounded-md "/>
    </div>
  );
};

export default Delete;