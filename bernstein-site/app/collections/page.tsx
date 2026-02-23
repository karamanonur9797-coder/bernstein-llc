"use client";

import Link from "next/link";
import { collections } from "@/lib/data/products";

export default function CollectionsPage() {
    const displayCollections = collections.filter((c) => c.slug !== "all");

    return (
        <div style={{ paddingTop: 72 }}>
            <section className="section">
                <div className="container-site">
                    {/* Header */}
                    <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
                        <h1 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-2)" }}>
                            What We Make
                        </h1>
                        <p
                            style={{
                                fontSize: "var(--text-base)",
                                fontWeight: 300,
                                color: "var(--color-olive)",
                                maxWidth: 500,
                                margin: "0 auto",
                            }}
                        >
                            Each piece designed with obsessive attention to material, cut, and longevity.
                        </p>
                    </div>

                    {/* Collection Cards */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "var(--space-3)",
                        }}
                        className="collection-grid"
                    >
                        {displayCollections.map((collection) => (
                            <Link
                                key={collection.slug}
                                href={`/collections/${collection.slug}`}
                                style={{
                                    position: "relative",
                                    display: "block",
                                    overflow: "hidden",
                                    textDecoration: "none",
                                }}
                            >
                                <div
                                    style={{
                                        paddingTop: "120%",
                                        backgroundColor: "var(--color-sand)",
                                        backgroundImage: `url(${collection.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        transition: "transform var(--duration-image) ease",
                                    }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(to top, rgba(15,15,15,0.6), transparent)",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-end",
                                        padding: "var(--space-4)",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 300,
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            color: "var(--color-on-dark)",
                                            opacity: 0.6,
                                            marginBottom: 4,
                                        }}
                                    >
                                        {collection.season}
                                    </p>
                                    <h2
                                        className="text-editorial"
                                        style={{
                                            fontSize: "var(--text-lg)",
                                            color: "var(--color-on-dark)",
                                        }}
                                    >
                                        {collection.name}
                                    </h2>
                                    <p
                                        style={{
                                            fontSize: "var(--text-sm)",
                                            color: "var(--color-on-dark)",
                                            opacity: 0.7,
                                            fontWeight: 300,
                                            marginTop: 4,
                                        }}
                                    >
                                        {collection.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* View All Link */}
                    <div style={{ textAlign: "center", marginTop: "var(--space-8)" }}>
                        <Link href="/collections/all" className="btn btn-ghost">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        @media (max-width: 767px) {
          .collection-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
}
