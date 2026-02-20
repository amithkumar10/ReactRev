import React from 'react';
import Header from './ZuskartComponents/Header';
import ProductsList from './ZuskartComponents/ProductList';
import CartSection from './ZuskartComponents/CartSection';

const Zuskart = () => {
  const products = [
    { id: 'product1', name: 'Product 1' },
    { id: 'product2', name: 'Product 2' },
  ];

  return (
    <div>
      <Header  />
      <main className="flex gap-5">
        <ProductsList products={products}  />
        <CartSection products={products} />
      </main>
    </div>
  );
};

export default Zuskart;