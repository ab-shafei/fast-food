import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}

interface CartStore {
  items: CartItem[];
  total: number;
  itemCount: number;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

// Helper functions
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      itemCount: 0,

      addToCart: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            // Update quantity if item exists
            const updatedItems = state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
            );
            return {
              items: updatedItems,
              total: calculateTotal(updatedItems),
              itemCount: calculateItemCount(updatedItems),
            };
          }

          // Add new item
          const newItems = [...state.items, { ...item, quantity: 1 }];
          return {
            items: newItems,
            total: calculateTotal(newItems),
            itemCount: calculateItemCount(newItems),
          };
        }),

      removeFromCart: (itemId) =>
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== itemId);
          return {
            items: newItems,
            total: calculateTotal(newItems),
            itemCount: calculateItemCount(newItems),
          };
        }),

      updateQuantity: (itemId, quantity) =>
        set((state) => {
          if (quantity < 1) {
            const newItems = state.items.filter((item) => item.id !== itemId);
            return {
              items: newItems,
              total: calculateTotal(newItems),
              itemCount: calculateItemCount(newItems),
            };
          }

          const newItems = state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item,
          );
          return {
            items: newItems,
            total: calculateTotal(newItems),
            itemCount: calculateItemCount(newItems),
          };
        }),

      clearCart: () =>
        set({
          items: [],
          total: 0,
          itemCount: 0,
        }),
    }),
    {
      name: "cart-storage", // unique name for localStorage
    },
  ),
);
