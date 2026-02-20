import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const Suskart = () => {
    const products = [
        { id: 'product1', name: 'Product 1' },
        { id: 'product2', name: 'Product 2' },
    ];


    const [cart, setCart] = useState({});


    const addToCart = (productId) => {
        setCart((prev) => ({
            ...prev,
            [productId]: (prev[productId] || 0) + 1,
        }));
    };

console.log(cart);
    const removeFromCart = (productId) => {
        setCart((prev) => {
            const qty = prev[productId] || 0;
            if (qty <= 1) {
                const updated = { ...prev };
                delete updated[productId];
                return updated;
            }
            
            return { ...prev, [productId]: qty - 1 };
        });
    };

    const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

    return (
        <div className="">
            <header className="flex justify-between border-2 border-white p-3 mb-4 bg-gray-800">
                <h2 className="text-3xl font-bold">Suskart</h2>
                <div className="flex gap-3 items-center">
                    <ShoppingCart />
                    <h3>{cartCount}</h3>
                </div>
            </header>

            <main className="flex gap-5">


                <section className="flex flex-col relative border-2 border-white w-full">
                    <div className="bg-gray-800 sticky top-0 z-10 p-5 font-semibold border-b-2 border-white">
                        Products
                    </div>

                    <div className="flex flex-col gap-3 p-5 pt-16">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="border border-white px-3 flex justify-between items-center p-3 rounded-lg"
                            >
                                <p>{product.name}</p>
                                <div className="flex gap-2 justify-center items-center">
                                    <button onClick={() => addToCart(product.id)}>+</button>
                                    <span>{cart[product.id] || 0}</span>
                                    <button onClick={() => removeFromCart(product.id)}>-</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                <section className="flex flex-col relative border-2 border-white w-full gap-5">
                    <div className="w-full sticky top-0 z-10 border-b-2 border-white p-5 font-semibold bg-gray-800">
                        Your Cart ({cartCount})
                    </div>

                    <div className="flex flex-col p-5 gap-2 mt-3">
                        {Object.keys(cart).length === 0 && <p className="text-gray-400">Cart is empty</p>}
                        {Object.entries(cart).map(([productId, qty]) => (
                            <div key={productId} className="flex justify-between border-b border-gray-500 p-2">
                                <span>{products.find((p) => p.id === productId).name}</span>
                                <span>Qty: {qty}</span>
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-col justify-center items-center w-full'>
                        {cartCount > 0 && (
                            <button
                                onClick={() => alert("Something Sus! Check the code!!")}
                                className="bg-blue-800 px-4 py-2 rounded text-white"
                            >
                                Complete Payment
                            </button>
                        )}

                    </div>
                </section>
            </main>
        </div>
    );
};

export default Suskart;
