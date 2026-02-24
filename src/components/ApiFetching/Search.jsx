import React, { useEffect, useState } from "react";
import useDebounce from "../CustomHooks/Hooks/useDebounce";
import useFetch from "../CustomHooks/Hooks/useFetch";

const Search = () => {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  console.log("Search Component: ", debouncedQuery);

  const { data, loading, error, refetch } = useFetch(
    debouncedQuery
      ? `https://dummyjson.com/products/search?q=${debouncedQuery}`
      : null
  );

  useEffect(()=> {
    refetch();
  }, [debouncedQuery]);

  const products = data?.products?.slice(0, 5) || [];

  return (
    <div className="mb-10">
      <div className="bg-gray-600 p-5 rounded-md mt-6">
        <h2 className="text-4xl font-bold mb-3">Search Request</h2>

        <input
          type="text"
          className="h-10 p-3 border-white w-full border text-white"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {loading && <p className="mt-2">Searching...</p>}
        {error && <p className="mt-2 text-red-500 text-xl font-semibold">Error: {error}</p>}

        <div className="mt-3 bg-gray-800 rounded-md">
          {query.length > 0 && products.map((product) => (
            <div key={product.id} className="p-2 border-b border-gray-700">
              {product.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;