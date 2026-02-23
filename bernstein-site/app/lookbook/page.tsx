"use client";

import Link from "next/link";

const lookbookItems = [
    {
        image: "/images/lookbook-01.jpg",
        title: "The Foundation",
        subtitle: "Full-grain leather meets Italian craft.",
        link: "/products/loafer-02",
    },
    {
        image: "/images/lookbook-02.jpg",
        title: "Made to Move",
        subtitle: "Unlined tailoring for every occasion.",
        link: "/products/blazer-01",
    },
    {
        image: "/images/lookbook-03.jpg",
        title: "Details Matter",
        subtitle: "Hand-finished edges. Blake-stitched soles.",
        link: "/products/loafer-02",
    },
    {
        image: "/images/lookbook-04.jpg",
        title: "Day to Night",
        subtitle: "Pieces that transition with you.",
        link: "/collections/all",
    },
];

export default function LookbookPage() {
    return (
        <div style={{ paddingTop: 72 }}>
            {/* Hero */}
            <section
                style={{
                    backgroundColor: "var(--surface-overlay)",
                    paddingTop: "var(--space-16)",
                    paddingBottom: "var(--space-12)",
                    textAlign: "center",
                }}
            >
                <div className="container-site">
                    <p
                        style={{
                            fontSize: 11,
                            fontWeight: 300,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: "var(--color-on-dark)",
                            opacity: 0.5,
                            marginBottom: "var(--space-2)",
                        }}
                    >
                        SS26 Campaign
                    </p>
                    <h1
                        className="text-editorial"
                        style={{
                            fontSize: "clamp(36px, 5vw, 72px)",
                            color: "var(--color-on-dark)",
                            marginBottom: "var(--space-2)",
                        }}
                    >
                        Material Matters.
                    </h1>
                    <p
                        style={{
                            fontSize: "var(--text-base)",
                            color: "var(--color-on-dark)",
                            opacity: 0.6,
                            fontWeight: 300,
                        }}
                    >
                        A visual exploration of craft, texture, and intent.
                    </p>
                </div>
            </section>

            {/* Lookbook Grid */}
            <section className="section">
                <div className="container-site">
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                        {lookbookItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: index % 2 === 0 ? "2fr 1fr" : "1fr 2fr",
                                    gap: "var(--space-3)",
                                    textDecoration: "none",
                                    minHeight: 500,
                                }}
                                className="lookbook-item"
                            >
                                {index % 2 === 0 ? (
                                    <>
                                        <div
                                            style={{
                                                backgroundColor: "var(--color-sand)",
                                                backgroundImage: `url(${item.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                minHeight: 400,
                                            }}
                                        />
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                padding: "var(--space-6) var(--space-3)",
                                            }}
                                        >
                                            <h2
                                                className="text-editorial"
                                                style={{
                                                    fontSize: "var(--text-lg)",
                                                    marginBottom: "var(--space-1)",
                                                }}
                                            >
                                                {item.title}
                                            </h2>
                                            <p
                                                style={{
                                                    fontSize: "var(--text-sm)",
                                                    fontWeight: 300,
                                                    color: "var(--color-olive)",
                                                }}
                                            >
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                padding: "var(--space-6) var(--space-3)",
                                                textAlign: "right",
                                            }}
                                        >
                                            <h2
                                                className="text-editorial"
                                                style={{
                                                    fontSize: "var(--text-lg)",
                                                    marginBottom: "var(--space-1)",
                                                }}
                                            >
                                                {item.title}
                                            </h2>
                                            <p
                                                style={{
                                                    fontSize: "var(--text-sm)",
                                                    fontWeight: 300,
                                                    color: "var(--color-olive)",
                                                }}
                                            >
                                                {item.subtitle}
                                            </p>
                                        </div>
                                        <div
                                            style={{
                                                backgroundColor: "var(--color-sand)",
                                                backgroundImage: `url(${item.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                minHeight: 400,
                                            }}
                                        />
                                    </>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
        @media (max-width: 767px) {
          .lookbook-item {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
}
