"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "@/lib/data/products";
import ProductGrid from "./ProductGrid";
import { motion, AnimatePresence } from "framer-motion";

interface FilterableProductGridProps {
    initialProducts: Product[];
}

export default function FilterableProductGrid({ initialProducts }: FilterableProductGridProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Read from URL
    const selectedCategory = searchParams.get("category") || "";
    const selectedSize = searchParams.get("size") || "";
    const selectedColor = searchParams.get("color") || "";
    const selectedPrice = searchParams.get("price") || "";

    // Derived unique values for filter options
    const categories = Array.from(new Set(initialProducts.map((p) => p.category)));
    const sizes = Array.from(new Set(initialProducts.flatMap((p) => p.sizes))).sort();
    // Mock colors derived from names (since there's no explicit color field in our mock data)
    const colors = ["Noir", "Stone", "Black"];
    const priceRanges = ["Under €500", "€500 - €800", "Over €800"];

    const updateFilter = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) params.set(key, value);
        else params.delete(key);
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    const filteredProducts = initialProducts.filter((product) => {
        if (selectedCategory && product.category !== selectedCategory) return false;
        if (selectedSize && !product.sizes.includes(selectedSize)) return false;
        if (selectedColor && !product.name.includes(selectedColor)) return false;
        if (selectedPrice) {
            if (selectedPrice === "Under €500" && product.price >= 500) return false;
            if (selectedPrice === "€500 - €800" && (product.price < 500 || product.price > 800)) return false;
            if (selectedPrice === "Over €800" && product.price <= 800) return false;
        }
        return true;
    });

    return (
        <>
            {/* Filter Bar */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "var(--space-4)",
                    paddingBottom: "var(--space-2)",
                    borderBottom: "1px solid rgba(15,15,15,0.08)",
                }}
            >
                <p style={{ fontSize: 11, fontWeight: 300, color: "var(--color-olive)" }}>
                    {filteredProducts.length} product
                    {filteredProducts.length !== 1 ? "s" : ""}
                </p>
                <button
                    onClick={() => setIsFilterOpen(true)}
                    className="nav-link"
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                    }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="16" y2="12" />
                        <line x1="4" y1="18" x2="12" y2="18" />
                    </svg>
                    Filter
                </button>
            </div>

            {/* Grid */}
            <ProductGrid products={filteredProducts} />

            {/* Filter Drawer Overlay */}
            <AnimatePresence>
                {isFilterOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsFilterOpen(false)}
                            style={{
                                position: "fixed",
                                inset: 0,
                                zIndex: 70,
                                backgroundColor: "rgba(15,15,15,0.4)",
                            }}
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                zIndex: 80,
                                width: "min(340px, 100vw)",
                                backgroundColor: "var(--color-stone)",
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "10px 0 30px rgba(0,0,0,0.1)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "var(--space-4)",
                                    borderBottom: "1px solid rgba(15,15,15,0.08)",
                                }}
                            >
                                <h2 className="text-editorial" style={{ fontSize: "var(--text-lg)" }}>
                                    Filters
                                </h2>
                                <button
                                    onClick={() => setIsFilterOpen(false)}
                                    style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>

                            <div style={{ flex: 1, overflowY: "auto", padding: "var(--space-4)" }}>
                                {/* Category Filter */}
                                <div style={{ marginBottom: "var(--space-6)" }}>
                                    <h3 style={{ fontSize: "var(--text-sm)", marginBottom: "var(--space-2)", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-olive)" }}>Category</h3>
                                    {categories.map((cat) => (
                                        <label key={cat} style={{ display: "block", marginBottom: 8, fontSize: "var(--text-base)", fontWeight: 300, cursor: "pointer" }}>
                                            <input
                                                type="radio"
                                                name="category"
                                                checked={selectedCategory === cat}
                                                onChange={() => updateFilter("category", selectedCategory === cat ? "" : cat)}
                                                style={{ marginRight: 8 }}
                                            />
                                            {cat}
                                        </label>
                                    ))}
                                </div>

                                {/* Size Filter */}
                                <div style={{ marginBottom: "var(--space-6)" }}>
                                    <h3 style={{ fontSize: "var(--text-sm)", marginBottom: "var(--space-2)", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-olive)" }}>Size</h3>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                        {sizes.map((sz) => (
                                            <button
                                                key={sz}
                                                onClick={() => updateFilter("size", selectedSize === sz ? "" : sz)}
                                                style={{
                                                    border: selectedSize === sz ? "1px solid var(--color-bernstein)" : "1px solid rgba(15,15,15,0.15)",
                                                    backgroundColor: selectedSize === sz ? "rgba(200, 146, 42, 0.05)" : "transparent",
                                                    color: selectedSize === sz ? "var(--color-bernstein)" : "var(--color-noir)",
                                                    padding: "6px 12px",
                                                    fontSize: 12,
                                                    cursor: "pointer",
                                                    transition: "all 0.2s ease",
                                                }}
                                            >
                                                {sz}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Color Filter */}
                                <div style={{ marginBottom: "var(--space-6)" }}>
                                    <h3 style={{ fontSize: "var(--text-sm)", marginBottom: "var(--space-2)", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-olive)" }}>Color</h3>
                                    {colors.map((c) => (
                                        <label key={c} style={{ display: "flex", alignItems: "center", marginBottom: 8, fontSize: "var(--text-base)", fontWeight: 300, cursor: "pointer" }}>
                                            <input
                                                type="radio"
                                                name="color"
                                                checked={selectedColor === c}
                                                onChange={() => updateFilter("color", selectedColor === c ? "" : c)}
                                                style={{ marginRight: 8 }}
                                            />
                                            <span
                                                style={{
                                                    display: "inline-block",
                                                    width: 14,
                                                    height: 14,
                                                    borderRadius: "50%",
                                                    backgroundColor: c === "Noir" || c === "Black" ? "#0f0f0f" : "#d3cec3",
                                                    marginRight: 8,
                                                    border: "1px solid rgba(15,15,15,0.1)",
                                                }}
                                            />
                                            {c}
                                        </label>
                                    ))}
                                </div>

                                {/* Price Filter */}
                                <div>
                                    <h3 style={{ fontSize: "var(--text-sm)", marginBottom: "var(--space-2)", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-olive)" }}>Price</h3>
                                    {priceRanges.map((pr) => (
                                        <label key={pr} style={{ display: "block", marginBottom: 8, fontSize: "var(--text-base)", fontWeight: 300, cursor: "pointer" }}>
                                            <input
                                                type="radio"
                                                name="price"
                                                checked={selectedPrice === pr}
                                                onChange={() => updateFilter("price", selectedPrice === pr ? "" : pr)}
                                                style={{ marginRight: 8 }}
                                            />
                                            {pr}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div style={{ padding: "var(--space-4)", borderTop: "1px solid rgba(15,15,15,0.08)" }}>
                                <button
                                    onClick={() => router.replace("?", { scroll: false })}
                                    className="btn btn-ghost"
                                    style={{ width: "100%", textAlign: "center", marginBottom: "var(--space-2)" }}
                                >
                                    Clear All
                                </button>
                                <button
                                    onClick={() => setIsFilterOpen(false)}
                                    className="btn btn-primary"
                                    style={{ width: "100%", textAlign: "center" }}
                                >
                                    View Results ({filteredProducts.length})
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
