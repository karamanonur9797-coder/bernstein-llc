"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { products, getProductBySlug, formatPrice, Product } from "@/lib/data/products";
import { useCartStore } from "@/store/cartStore";
import SizeSelector from "@/components/shop/SizeSelector";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductCard from "@/components/shop/ProductCard";
import SizeGuideModal from "@/components/shop/SizeGuideModal"; // Added import

export default function ProductDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const product = getProductBySlug(slug);
    const { addItem } = useCartStore();

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [activeImage, setActiveImage] = useState(0);
    const [sizeError, setSizeError] = useState(false);
    const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false); // Added state

    if (!product) {
        return (
            <div style={{ paddingTop: 72 }}>
                <div className="section container-site" style={{ textAlign: "center" }}>
                    <h1>Product not found</h1>
                </div>
            </div>
        );
    }

    const handleAddToBag = () => {
        if (!selectedSize) {
            setSizeError(true);
            return;
        }
        setSizeError(false);
        addItem({
            slug: product.slug,
            name: product.name,
            price: product.price,
            size: selectedSize,
            image: product.images[0],
        });
    };

    const relatedProducts = products.filter(
        (p) => p.slug !== product.slug && p.category === product.category
    );

    return (
        <div style={{ paddingTop: 72 }}>
            <section className="section">
                <div className="container-site">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: product.category, href: `/collections/${product.collection}` },
                            { label: product.name },
                        ]}
                    />

                    {/* PDP Layout */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "var(--space-6)",
                        }}
                        className="pdp-grid"
                    >
                        {/* Image Gallery */}
                        <div>
                            {/* Main Image */}
                            <div
                                style={{
                                    width: "100%",
                                    paddingTop: "133.33%",
                                    position: "relative",
                                    backgroundColor: "var(--color-sand)",
                                    marginBottom: "var(--space-1)",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={product.images[activeImage]}
                                    alt={`${product.name} - Image ${activeImage + 1}`}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "opacity 400ms ease",
                                    }}
                                />
                            </div>

                            {/* Thumbnails */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: "var(--space-1)",
                                    overflowX: "auto",
                                }}
                            >
                                {product.images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImage(i)}
                                        style={{
                                            width: 72,
                                            height: 96,
                                            flexShrink: 0,
                                            border:
                                                activeImage === i
                                                    ? "1px solid var(--color-bernstein)"
                                                    : "1px solid transparent",
                                            padding: 0,
                                            cursor: "pointer",
                                            overflow: "hidden",
                                            backgroundColor: "var(--color-sand)",
                                            borderRadius: 0,
                                            transition: "border-color var(--duration-micro) var(--ease-default)",
                                        }}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${i + 1}`}
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "var(--space-3)",
                                paddingTop: "var(--space-2)",
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                        fontSize: 11,
                                        fontWeight: 300,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        color: "var(--color-olive)",
                                        marginBottom: 4,
                                    }}
                                >
                                    {product.category}
                                </p>
                                <h1 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-1)" }}>
                                    {product.name}
                                </h1>
                                <p style={{ fontSize: "var(--text-md)", fontWeight: 400 }}>
                                    {formatPrice(product.price, product.currency)}
                                </p>
                            </div>

                            <p
                                style={{
                                    fontSize: "var(--text-base)",
                                    fontWeight: 300,
                                    color: "var(--color-olive)",
                                    lineHeight: 1.6,
                                    whiteSpace: "pre-wrap",
                                }}
                            >
                                {product.description}
                            </p>

                            {/* Material Callout */}
                            <p
                                style={{
                                    fontSize: "var(--text-sm)",
                                    fontStyle: "italic",
                                    color: "var(--color-olive)",
                                }}
                            >
                                Full-grain leather. Hand-finished edges. Built to last a decade.
                            </p>

                            {/* Size Selection */}
                            <div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "var(--space-1)",
                                    }}
                                >
                                    <p style={{ fontSize: "var(--text-sm)", fontWeight: 300 }}>
                                        Size {selectedSize && `— ${selectedSize}`}
                                    </p>
                                    <button
                                        onClick={() => setIsSizeGuideOpen(true)}
                                        className="nav-link"
                                        style={{
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            color: "var(--color-bernstein)",
                                            fontSize: 11,
                                        }}
                                    >
                                        Find Your Fit
                                    </button>
                                </div>
                                <SizeSelector
                                    sizes={product.sizes}
                                    soldOutSizes={product.soldOutSizes}
                                    selectedSize={selectedSize}
                                    onSelect={(size) => {
                                        setSelectedSize(size);
                                        setSizeError(false);
                                    }}
                                />
                                {sizeError && (
                                    <p
                                        style={{
                                            fontSize: 11,
                                            color: "var(--color-error)",
                                            marginTop: 4,
                                        }}
                                    >
                                        Please select a size.
                                    </p>
                                )}
                            </div>

                            <SizeGuideModal
                                isOpen={isSizeGuideOpen}
                                onClose={() => setIsSizeGuideOpen(false)}
                                category={product.category}
                            />

                            {/* Add to Bag */}
                            <button
                                onClick={handleAddToBag}
                                className="btn btn-primary"
                                style={{ width: "100%", marginTop: "var(--space-1)" }}
                            >
                                Add to Bag
                            </button>

                            {/* Trust Line */}
                            <p
                                style={{
                                    fontSize: 11,
                                    color: "var(--color-olive)",
                                    textAlign: "center",
                                    fontWeight: 300,
                                }}
                            >
                                Free shipping worldwide. 30-day returns. No questions asked.
                            </p>

                            {/* Care */}
                            <details
                                style={{
                                    borderTop: "1px solid rgba(15,15,15,0.08)",
                                    paddingTop: "var(--space-2)",
                                }}
                            >
                                <summary
                                    style={{
                                        fontSize: "var(--text-sm)",
                                        fontWeight: 300,
                                        cursor: "pointer",
                                        listStyle: "none",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    Care Instructions
                                    <span>+</span>
                                </summary>
                                <p
                                    style={{
                                        fontSize: "var(--text-sm)",
                                        fontWeight: 300,
                                        color: "var(--color-olive)",
                                        marginTop: "var(--space-1)",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {product.care}
                                </p>
                            </details>
                        </div>
                    </div>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <div style={{ marginTop: "var(--space-16)" }}>
                            <h2
                                style={{
                                    fontSize: "var(--text-lg)",
                                    marginBottom: "var(--space-4)",
                                    textAlign: "center",
                                }}
                            >
                                You May Also Like
                            </h2>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: `repeat(${Math.min(relatedProducts.length, 3)}, 1fr)`,
                                    gap: "var(--space-3)",
                                    maxWidth: 900,
                                    margin: "0 auto",
                                }}
                            >
                                {relatedProducts.map((p) => (
                                    <ProductCard key={p.slug} product={p} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <style jsx>{`
        @media (max-width: 767px) {
          .pdp-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
}
