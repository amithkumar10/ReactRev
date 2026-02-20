import React from 'react';
import ProductItem from './ProductItem';
import { useCartStore } from '../Store/CartStore';

const ProductsList = ({ products }) => { 
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);

  return (
    <section className="flex flex-col relative border-2 border-white w-full">
      <div className="bg-gray-800 sticky top-0 z-10 p-5 font-semibold border-b-2 border-white">
        Products
      </div>

      <div className="flex flex-col gap-3 p-5 pt-16">
        {products.map((product) => {

          const quantity = useCartStore((state) => state.cart[product.id] || 0);

          return (
            <ProductItem
              key={product.id}
              name={product.name}
              quantity={quantity}
              onAdd={() => increment(product.id)}
              onRemove={() => decrement(product.id)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductsList;
