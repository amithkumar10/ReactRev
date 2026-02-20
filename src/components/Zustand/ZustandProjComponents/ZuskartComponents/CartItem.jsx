const CartItem = ({ name, quantity }) => (
  <div className="flex justify-between border-b border-gray-500 p-2">
    <span>{name}</span>
    <span>Qty: {quantity}</span>
  </div>
);

export default CartItem;