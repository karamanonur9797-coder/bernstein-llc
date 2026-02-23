"use client";

import { useCartStore, CartItem } from "@/store/cartStore";
import { formatPrice } from "@/lib/data/products";
import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
    const { items, total, isOpen, closeCart, removeItem, updateQuantity } = useCartStore();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        onClick={closeCart}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 70,
                            backgroundColor: "rgba(15,15,15,0.4)",
                            pointerEvents: "auto",
                        }}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        role="dialog"
                        aria-label="Shopping bag"
                        style={{
                            position: "fixed",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 80,
                            width: "min(420px, 100vw)",
                            backgroundColor: "var(--color-stone)",
                            display: "flex",
                            flexDirection: "column",
                            boxShadow: "-10px 0 30px rgba(0,0,0,0.1)",
                        }}
                    >
                        {/* Header */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "var(--space-4) var(--space-4)",
                                borderBottom: "1px solid rgba(15,15,15,0.08)",
                            }}
                        >
                            <h2
                                className="text-editorial"
                                style={{ fontSize: "var(--text-lg)", fontWeight: 200 }}
                            >
                                Your Bag
                            </h2>
                            <button onClick={closeCart} aria-label="Close bag" style={{ padding: 8, background: "none", border: "none", cursor: "pointer" }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {/* Items */}
                        <div style={{ flex: 1, overflowY: "auto", padding: "var(--space-4)" }}>
                            {items.length === 0 ? (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        gap: "var(--space-4)",
                                    }}
                                >
                                    <p style={{ fontSize: "var(--text-sm)", color: "var(--color-olive)", fontWeight: 300 }}>
                                        Your bag is empty.
                                    </p>
                                    <Link
                                        href="/collections/all"
                                        onClick={closeCart}
                                        className="btn btn-primary"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Continue Shopping
                                    </Link>
                                </div>
                            ) : (
                                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                                    {items.map((item: CartItem) => (
                                        <div
                                            key={`${item.slug}-${item.size}`}
                                            style={{
                                                display: "flex",
                                                gap: "var(--space-4)",
                                                paddingBottom: "var(--space-4)",
                                                borderBottom: "1px solid rgba(15,15,15,0.06)",
                                            }}
                                        >
                                            {/* Thumbnail */}
                                            <div
                                                style={{
                                                    width: 90,
                                                    height: 120,
                                                    backgroundColor: "var(--color-sand)",
                                                    flexShrink: 0,
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                />
                                            </div>

                                            {/* Details */}
                                            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                                    <p style={{ fontSize: "var(--text-sm)", fontWeight: 300, paddingRight: 10 }}>{item.name}</p>
                                                    <button
                                                        onClick={() => removeItem(item.slug, item.size)}
                                                        aria-label={`Remove ${item.name}`}
                                                        style={{
                                                            fontSize: 11,
                                                            color: "var(--color-olive)",
                                                            background: "none",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            textDecoration: "underline",
                                                            fontFamily: "var(--font-suisse), sans-serif",
                                                            flexShrink: 0,
                                                        }}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                                <p style={{ fontSize: 11, color: "var(--color-olive)", fontWeight: 300 }}>Size: {item.size}</p>
                                                <p style={{ fontSize: "var(--text-sm)", fontWeight: 400 }}>
                                                    {formatPrice(item.price)}
                                                </p>

                                                {/* Quantity */}
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "var(--space-2)",
                                                        marginTop: "auto",
                                                    }}
                                                >
                                                    <div style={{
                                                        display: "flex",
                                                        border: "1px solid rgba(15,15,15,0.15)",
                                                        alignItems: "center",
                                                        height: 32
                                                    }}>
                                                        <button
                                                            onClick={() => updateQuantity(item.slug, item.size, item.quantity - 1)}
                                                            style={{
                                                                width: 32,
                                                                height: "100%",
                                                                background: "transparent",
                                                                border: "none",
                                                                cursor: "pointer",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                fontSize: 14,
                                                                color: "var(--color-noir)",
                                                            }}
                                                        >
                                                            −
                                                        </button>
                                                        <span style={{ fontSize: 13, minWidth: 24, textAlign: "center", fontWeight: 300 }}>
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.slug, item.size, item.quantity + 1)}
                                                            style={{
                                                                width: 32,
                                                                height: "100%",
                                                                background: "transparent",
                                                                border: "none",
                                                                cursor: "pointer",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                fontSize: 14,
                                                                color: "var(--color-noir)",
                                                            }}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div
                                style={{
                                    padding: "var(--space-4)",
                                    borderTop: "1px solid rgba(15,15,15,0.08)",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "var(--space-3)",
                                    backgroundColor: "var(--color-stone)",
                                    boxShadow: "0 -4px 20px rgba(0,0,0,0.02)",
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <span style={{ fontSize: "var(--text-sm)", fontWeight: 300 }}>Subtotal</span>
                                    <span style={{ fontSize: "var(--text-md)", fontWeight: 400 }}>
                                        {formatPrice(total)}
                                    </span>
                                </div>
                                <p style={{ fontSize: 12, color: "var(--color-olive)", fontWeight: 300 }}>
                                    Shipping & taxes calculated at checkout.
                                </p>
                                <Link
                                    href="/checkout"
                                    onClick={closeCart}
                                    className="btn btn-primary"
                                    style={{ width: "100%", textAlign: "center", textDecoration: "none", padding: "16px", marginTop: "var(--space-1)" }}
                                >
                                    Proceed to Checkout
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
