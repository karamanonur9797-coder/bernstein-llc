"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/data/products";
import ProductCard from "@/components/shop/ProductCard";

const HeroSection = ({
  imageUrl,
  showButton = false
}: {
  imageUrl: string;
  showButton?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <Link
      href="/collections/all"
      style={{
        display: "block",
        position: "relative",
        height: "100vh",
        minHeight: 600,
        overflow: "hidden",
        textDecoration: "none",
        cursor: "pointer",
        zIndex: 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hero Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 1.2s cubic-bezier(0.2, 0, 0.2, 1)",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#000",
          opacity: hovered ? 0.15 : 0.3,
          transition: "opacity 0.4s ease",
          zIndex: 1,
        }}
      />

      {/* Content */}
      {showButton && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <div
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: btnHovered ? "#F2EDE4" : "transparent",
              border: "1px solid #F2EDE4",
              color: btnHovered ? "#0F0F0F" : "#F2EDE4",
              fontWeight: 300,
              fontSize: "12px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "16px 32px",
              borderRadius: 0,
              height: "48px",
              transition: "all 250ms ease",
              whiteSpace: "nowrap",
            }}
          >
            SHOP ALL
          </div>
        </div>
      )}
    </Link>
  );
};

export default function HomePage() {
  return (
    <>
      {/* ============================================
          QUAD HERO SEQUENCE
          ============================================ */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Position 1 */}
        <HeroSection
          imageUrl="/images/hero.jpg"
          showButton={true}
        />

        {/* Position 2 */}
        <HeroSection
          imageUrl="/images/HERO_6.png"
        />

        {/* Position 3 (Moved from 2) */}
        <HeroSection
          imageUrl="/images/hero-1.jpg"
        />
      </div>

      {/* ============================================
          PRODUCT TEASER — 2×2 Grid
          ============================================ */}
      <section className="section">
        <div className="container-site">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "var(--space-6)",
            }}
          >
            <h2 style={{ fontSize: "var(--text-xl)" }}>What We Make</h2>
            <Link
              href="/collections/all"
              className="nav-link"
              style={{ color: "var(--color-bernstein)" }}
            >
              View All
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "var(--space-3)",
            }}
            className="teaser-grid"
          >
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          BRAND MANIFESTO
          ============================================ */}
      <section
        style={{
          backgroundColor: "var(--color-stone)",
          paddingTop: "var(--space-24)",
          paddingBottom: "var(--space-24)",
        }}
      >
        <div className="container-site" style={{ textAlign: "center" }}>
          <p
            className="text-editorial"
            style={{
              fontSize: "clamp(24px, 4vw, 52px)",
              color: "var(--color-noir)",
              fontWeight: 200,
              lineHeight: 1.15,
              maxWidth: 900,
              margin: "0 auto",
              letterSpacing: "-0.02em",
            }}
          >
            Built on a simple belief — that well-made things should be accessible
            to people who care about them.
          </p>
          <p
            style={{
              marginTop: "var(--space-4)",
              fontSize: "var(--text-sm)",
              color: "var(--color-noir)",
              opacity: 0.5,
              fontWeight: 300,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Based everywhere. Made with intent.
          </p>
        </div>
      </section>

      {/* ============================================
          EDITORIAL STRIP
          ============================================ */}
      <section className="section">
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-3)",
              minHeight: 500,
            }}
            className="editorial-grid"
          >
            {/* Image */}
            <div
              style={{
                backgroundColor: "var(--color-sand)",
                backgroundImage: "url(/images/hero-2.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 400,
              }}
            />

            {/* Text */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "var(--space-8) var(--space-6)",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 300,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-olive)",
                  marginBottom: "var(--space-2)",
                }}
              >
                SS26 Campaign
              </p>
              <h2
                className="text-editorial"
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  marginBottom: "var(--space-3)",
                }}
              >
                Material Matters.
              </h2>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: 300,
                  color: "var(--color-olive)",
                  lineHeight: 1.6,
                  maxWidth: 400,
                  marginBottom: "var(--space-4)",
                }}
              >
                Every piece starts with the material. Italian leathers. Japanese
                cottons. We source before we sketch — because craft begins at the
                source.
              </p>
              <Link href="/lookbook" className="btn btn-ghost" style={{ alignSelf: "flex-start" }}>
                View Lookbook
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 767px) {
          .teaser-grid {
            grid-template-columns: 1fr !important;
          }
          .editorial-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
