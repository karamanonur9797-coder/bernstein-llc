"use client";

import { Product } from "@/lib/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "var(--space-3)",
      }}
      className="product-grid"
    >
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}

      <style jsx>{`
        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: var(--space-4) !important;
          }
        }
      `}</style>
    </div>
  );
}
