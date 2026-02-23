"use client";

import Link from "next/link";
import { useState } from "react";
import { Product, formatPrice } from "@/lib/data/products";
import { useWishlistStore } from "@/store/wishlistStore";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [hovered, setHovered] = useState(false);
    const { addItem, removeItem, isInWishlist } = useWishlistStore();
    const inWishlist = isInWishlist(product.slug);

    return (
        <Link
            href={`/products/${product.slug}`}
            className="group block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ textDecoration: "none" }}
        >
            {/* Image Container – 3:4 ratio */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "133.33%", /* 4/3 ratio */
                    overflow: "hidden",
                    backgroundColor: "var(--color-sand)",
                }}
            >
                {/* Primary Image */}
                <img
                    src={product.images[0]}
                    alt={product.name}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: hovered ? 0 : 1,
                        transition: `opacity 500ms ease, transform var(--duration-image) ease`,
                        transform: hovered ? "scale(1.03)" : "scale(1)",
                    }}
                />
                {/* Hover Image */}
                {product.images[1] && (
                    <img
                        src={product.images[1]}
                        alt={`${product.name} - alternate view`}
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            opacity: hovered ? 1 : 0,
                            transition: `opacity 500ms ease, transform var(--duration-image) ease`,
                            transform: hovered ? "scale(1.03)" : "scale(1)",
                        }}
                    />
                )}

                {/* Wishlist Toggle Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (inWishlist) {
                            removeItem(product.slug);
                        } else {
                            addItem(product);
                        }
                    }}
                    aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
                    style={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        zIndex: 10,
                        padding: 8,
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: inWishlist ? "var(--color-bernstein)" : "var(--color-noir)",
                        opacity: hovered || inWishlist ? 1 : 0,
                        transform: hovered || inWishlist ? "translateY(0)" : "translateY(-10px)",
                        transition: "all 300ms ease",
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </button>
            </div>

            {/* Product Info */}
            <div style={{ paddingTop: "var(--space-1)" }}>
                <p
                    style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: 300,
                        color: "var(--color-noir)",
                    }}
                >
                    {product.name}
                </p>
                <p
                    style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: 400,
                        color: "var(--color-noir)",
                        marginTop: 2,
                    }}
                >
                    {formatPrice(product.price, product.currency)}
                </p>
            </div>
        </Link>
    );
}
