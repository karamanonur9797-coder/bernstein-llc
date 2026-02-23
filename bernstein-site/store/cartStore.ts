import { create } from "zustand";

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  total: number;

  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (slug: string, size: string) => void;
  updateQuantity: (slug: string, size: string, quantity: number) => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
}

const calculateTotal = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  isOpen: false,
  total: 0,

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find(
        (i) => i.slug === item.slug && i.size === item.size
      );
      let newItems: CartItem[];
      if (existing) {
        newItems = state.items.map((i) =>
          i.slug === item.slug && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        newItems = [...state.items, { ...item, quantity: 1 }];
      }
      return { items: newItems, total: calculateTotal(newItems), isOpen: true };
    }),

  removeItem: (slug, size) =>
    set((state) => {
      const newItems = state.items.filter(
        (i) => !(i.slug === slug && i.size === size)
      );
      return { items: newItems, total: calculateTotal(newItems) };
    }),

  updateQuantity: (slug, size, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        const newItems = state.items.filter(
          (i) => !(i.slug === slug && i.size === size)
        );
        return { items: newItems, total: calculateTotal(newItems) };
      }
      const newItems = state.items.map((i) =>
        i.slug === slug && i.size === size ? { ...i, quantity } : i
      );
      return { items: newItems, total: calculateTotal(newItems) };
    }),

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  clearCart: () => set({ items: [], total: 0 }),
}));
