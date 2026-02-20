import React from 'react'

const ProductItem = ({ name, quantity, onAdd, onRemove }) => (
  <div className="border border-white px-3 flex justify-between items-center p-3 rounded-lg">
    <p>{name}</p>
    <div className="flex gap-2 justify-center items-center">
      <button onClick={onAdd}>+</button>
      <span>{quantity}</span>
      <button onClick={onRemove}>-</button>
    </div>
  </div>
);

export default ProductItem;