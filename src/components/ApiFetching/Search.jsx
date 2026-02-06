import React from 'react'

const Search = () => {
  return (
    <div className="mb-10">
      <div className="bg-gray-600 p-5 rounded-b-none rounded-md flex justify-between items-center gap-2 mt-6">
        <h2 className="text-4xl font-bold">Search Request</h2>
        <form className="flex gap-2">
          <input
            type="text"
            className="h-10 border-1 p-3 border-white max-w-40"
            placeholder="Enter userId"
          />


{/* https://dummyjson.com/products/search?q=phone */}

        

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
  )
}

export default Search