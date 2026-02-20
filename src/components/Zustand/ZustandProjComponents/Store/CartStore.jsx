import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: {}, 
  increment: (productId) =>
    set((state) => ({
      cart: {
        ...state.cart,
        [productId]: (state.cart[productId] || 0) + 1,
      },
    })),

  decrement: (productId) =>
    set((state) => ({
      cart: {
        ...state.cart,
        [productId]: Math.max((state.cart[productId] || 0) - 1, 0),
      },
    })),

  getQuantity: (productId) => get().cart[productId] || 0, 

  getTotal: () => {
    const cart = get().cart;
    return Object.values(cart).reduce((total, qty) => total + qty, 0);
  }
}));
