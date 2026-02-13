import React from 'react'
import { useState } from 'react';
import { Section, ShoppingCart } from 'lucide-react';

const ZustandProj = () => {

    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount((prev) => prev + 1);
    };

    const handleRemoveFromCart = () => {
        setCartCount((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className=''>
            <header
               className='flex justify-between border-2 border-white p-3 mb-4 bg-gray-800'
            >
                <h2 className=' text-3xl font-bold'>Scamkart</h2>
                <div className='flex gap-3'>
                    <ShoppingCart />
                    <h3> {cartCount}</h3>
                </div>
            </header>

            <main className=' flex gap-5'>

                <section
                    className='flex flex-col border-2 border-white p-5 w-full'
                >
                    <div className='bg-gray-800 p-3 py-5 font-semibold border-white border-2'>Products</div>
                    <div className='flex flex-col gap-3 mt-5'>

                        <div className='border-white border-1 px-3 flex gap-20 justify-between items-center p-3 rounded-lg'>
                            <p>Product 1</p>
                            <button onClick={handleAddToCart}>Add to Cart</button>
                        </div>

                        <div className='border-white border-1 px-3 flex gap-20 justify-between items-center p-3 rounded-lg'>
                            <p>Product 2</p>
                            <button onClick={handleAddToCart}>Add to Cart</button>
                        </div>

                    </div>

                </section>

                <section className='flex flex-col justify-center items-center border-2 border-white w-full p-5 gap-5'>
                   <div className='w-full top-0 border-2 border-white p-5 font-semibold bg-gray-800'>
                    Your Cart
                   </div>

                   <div>
                    List
                   </div>
                </section>
            </main>
        </div>
    );
}

export default ZustandProj