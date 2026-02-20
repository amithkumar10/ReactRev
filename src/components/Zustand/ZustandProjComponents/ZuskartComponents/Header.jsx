import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../Store/CartStore';

const Header = () => {
  // const cart = useCartStore((state) => state.cart);
  const cartCount = useCartStore((state) => state.getTotal());

  return (
    <header className="flex justify-between border-2 border-white p-3 mb-4 bg-gray-800">
      <h2 className="text-3xl font-bold">Zuskart</h2>
      <div className="flex gap-3 items-center">
        <ShoppingCart />
        <h3>{cartCount}</h3>
      </div>
    </header>
  );
};

export default Header;
