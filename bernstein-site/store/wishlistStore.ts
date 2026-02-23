import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/lib/data/products';

interface WishlistState {
    items: Product[];
    addItem: (product: Product) => void;
    removeItem: (slug: string) => void;
    isInWishlist: (slug: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product) => {
                const currentItems = get().items;
                const exists = currentItems.some((item) => item.slug === product.slug);

                if (!exists) {
                    set({ items: [...currentItems, product] });
                }
            },
            removeItem: (slug) => {
                set({ items: get().items.filter((item) => item.slug !== slug) });
            },
            isInWishlist: (slug) => {
                return get().items.some((item) => item.slug === slug);
            }
        }),
        {
            name: 'bernstein-wishlist-storage',
        }
    )
);
