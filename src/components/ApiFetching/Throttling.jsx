import React, { useState } from "react";
import useThrottle from "../CustomHooks/Hooks/useThrottle";

const Throttling = () => {
  const [count, setCount] = useState(0);

  const increment = useThrottle(() => {
    setCount((prev) => prev + 1);
  }, 2000);

  return (
    <>
    <div className="p-3 bg-gray-600 rounded-md rounded-b-none mt-6 flex justify-between items-center ">
   
        <h2 className="text-4xl font-bold">Throttling</h2>

    

      <button
        onClick={increment}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
      >
        Click Me Fast
      </button>

      
    </div>
    <div className="bg-gray-800 p-6 rounded-t-none rounded-md  flex flex-col items-center">

         <div className={`bg-black  p-4 rounded-md ${count === 0 ? "hidden" : ""}`}>
        <p className="text-2xl font-bold">Count: {count}</p>
     </div>
    </div>
    </>
  );
};

export default Throttling;