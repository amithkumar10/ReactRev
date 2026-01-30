import React, { useState } from "react";

const FavFood = () => {
  const [favFood, setFavFood] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setFavFood(prev => [...prev, input]);
    setInput("");
  };

  const handleRemove = (indexToRemove) => {
    setFavFood(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(favFood[index]);
  };

  const handleSave = () => {
    setFavFood(prev =>
      prev.map((item, index) =>
        index === editIndex ? editValue : item
      )
    );
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="max-w-60 flex flex-col items-center border p-3">
      <input
        type="text"
        placeholder="Enter your favourite food"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
      />

      <button className="w-full mb-3" onClick={handleAdd}>
        Add
      </button>

      <ul className="w-full">
        {favFood.map((food, index) => (
          <li key={index} className="flex items-center gap-2 mb-2">
            {editIndex === index ? (
              <>
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="flex-1 p-1 bg-gray-600 text-white"
                />
                <button onClick={handleSave}>✔</button>
              </>
            ) : (
              <>
                <span className="flex-1">{food}</span>
                <button onClick={() => handleEdit(index)}>-</button>
                <button onClick={() => handleRemove(index)}>x</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavFood;
