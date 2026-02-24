import React, { useState } from "react";
import usePost from "../CustomHooks/Hooks/usePost";

const Post = () => {
  const [formData, setFormData] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const { loading, error, postData } = usePost(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData);
    setFormData({
      userId: "",
      title: "",
      body: "",
    });
  };

  return (
    <div className="mb-10">
      <div className="bg-gray-600 p-5 rounded-b-none rounded-md flex justify-evenly items-center gap-2 mt-6">
        <h2 className="text-4xl font-bold">Post Request</h2>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
          className="w-40 border-white border-1 px-2"
            type="text"
            placeholder="Enter userId"
            value={formData.userId}
            onChange={(e) =>
              setFormData({ ...formData, userId: e.target.value })
            }
          />

          <input
            className="w-40 border-white border-1 px-2"
            type="text"
            placeholder="Enter title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          <input
            className="w-40 border-white border-1 px-2"
            type="text"
            placeholder="Enter body"
            value={formData.body}
            onChange={(e) =>
              setFormData({ ...formData, body: e.target.value })
            }
          />

          <button type="submit">
            {loading ? "Posting..." : "Send"}
          </button>
        </form>
      </div>

      <div className="bg-gray-800 p-6 rounded-t-none rounded-md ">
      
      </div>
    </div>
  );
};

export default Post;