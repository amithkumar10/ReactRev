import React, { useState, useEffect } from "react";
import axios from "axios";
import useDebounce from "../CustomHooks/Hooks/useDebounce";

const Search = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery) {
      setProducts([]);
      return;
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://dummyjson.com/products/search?q=${debouncedQuery}`
        );
        setProducts(res.data.products.slice(0, 5));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedQuery]);

  return (
    <div className="mb-10">
      <div className="bg-gray-600 p-5 rounded-md mt-6">
        <h2 className="text-4xl font-bold mb-3">Search Request</h2>

        <input
          type="text"
          className="h-10 p-3 border-white w-full border-1  text-white"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {loading && <p className="mt-2">Searching...</p>}

        <div className="mt-3 bg-gray-800 rounded-md">
          {products.map((product) => (
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