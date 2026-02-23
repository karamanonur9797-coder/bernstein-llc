"use client";

import { useWishlistStore } from "@/store/wishlistStore";
import ProductGrid from "@/components/shop/ProductGrid";
import Link from "next/link";

export default function WishlistPage() {
    const { items } = useWishlistStore();

    return (
        <div style={{ paddingTop: 72 }}>
            <section className="section">
                <div className="container-site">
                    <h1
                        style={{
                            fontSize: "var(--text-xl)",
                            textAlign: "center",
                            marginBottom: "var(--space-8)",
                        }}
                    >
                        Wishlist
                    </h1>

                    {items.length === 0 ? (
                        <div style={{ textAlign: "center", padding: "var(--space-12) 0" }}>
                            <p style={{ color: "var(--color-olive)", marginBottom: "var(--space-4)" }}>
                                Your wishlist is currently empty.
                            </p>
                            <Link href="/collections/all" className="btn btn-primary">
                                Explore Products
                            </Link>
                        </div>
                    ) : (
                        <ProductGrid products={items} />
                    )}
                </div>
            </section>
        </div>
    );
}
