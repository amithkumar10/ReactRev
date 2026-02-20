import { useCartStore } from "../Store/CartStore";
import CartItem from "./CartItem";

const CartSection = ({ products }) => {
  const cart = useCartStore((state) => state.cart); 
  const cartCount = useCartStore((state) => state.getTotal());

  return (
    <section className="flex flex-col relative border-2 border-white w-full gap-5">
      <div className="w-full sticky top-0 z-10 border-b-2 border-white p-5 font-semibold bg-gray-800">
        Your Cart ({cartCount})
      </div>

      <div className="flex flex-col p-5 gap-2 mt-3">
        {Object.keys(cart).length === 0 && <p className="text-gray-400">Cart is empty</p>}

        {Object.entries(cart).map(([productId, qty]) => {
          if (qty <= 0) return null; 
          const product = products.find((p) => p.id === productId);
          if (!product) return null;

          return (
            <CartItem
              key={productId}
              name={product.name}
              quantity={qty}
            />
          );
        })}
      </div>

      {cartCount > 0 && (
        <div className="flex flex-col justify-center items-center w-full">
          <button className="bg-blue-800 px-4 py-2 rounded text-white">
            Complete Payment
          </button>
        </div>
      )}
    </section>
  );
};

export default CartSection;
