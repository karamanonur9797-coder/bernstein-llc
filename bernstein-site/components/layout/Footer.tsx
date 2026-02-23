"use client";

import Link from "next/link";

const footerColumns = [
    {
        title: "Shop",
        links: [
            { href: "/collections/all", label: "All Products" },
            { href: "/collections/footwear", label: "Footwear" },
            { href: "/collections/rtw", label: "Ready-to-Wear" },
            { href: "/lookbook", label: "Lookbook" },
        ],
    },
    {
        title: "Company",
        links: [
            { href: "/about", label: "About" },
            { href: "/stockists", label: "Stockists" },
        ],
    },
    {
        title: "Support",
        links: [
            { href: "/faq", label: "FAQ" },
            { href: "/returns", label: "Returns" },
            { href: "/faq", label: "Care Instructions" },
        ],
    },
    {
        title: "Legal",
        links: [
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms of Service" },
            { href: "/returns", label: "Return Policy" },
        ],
    },
];

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "var(--surface-overlay)",
                color: "var(--color-on-dark)",
                paddingTop: "var(--space-12)",
                paddingBottom: "var(--space-6)",
            }}
        >
            <div className="container-site">
                {/* Newsletter */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "var(--space-2)",
                        marginBottom: "var(--space-12)",
                    }}
                >
                    <p
                        className="text-editorial"
                        style={{ fontSize: "var(--text-lg)", letterSpacing: "-0.02em" }}
                    >
                        Join the list.
                    </p>
                    <p style={{ fontSize: "var(--text-sm)", opacity: 0.6 }}>
                        No noise, just drops.
                    </p>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        style={{
                            display: "flex",
                            marginTop: "var(--space-2)",
                            maxWidth: 400,
                            width: "100%",
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Your email"
                            aria-label="Email address"
                            style={{
                                flex: 1,
                                height: 48,
                                padding: "0 var(--space-2)",
                                background: "transparent",
                                border: "1px solid rgba(242,237,228,0.3)",
                                borderRight: "none",
                                color: "var(--color-on-dark)",
                                fontFamily: "var(--font-suisse), sans-serif",
                                fontSize: 12,
                                fontWeight: 300,
                                letterSpacing: "0.1em",
                                borderRadius: 0,
                                outline: "none",
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                height: 48,
                                padding: "0 var(--space-3)",
                                background: "var(--color-stone)",
                                color: "var(--color-noir)",
                                border: "none",
                                fontFamily: "var(--font-suisse), sans-serif",
                                fontSize: 12,
                                fontWeight: 300,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                borderRadius: 0,
                                transition: "background var(--duration-micro) var(--ease-default)",
                            }}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Columns */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "var(--space-4)",
                        paddingBottom: "var(--space-8)",
                        borderBottom: "1px solid rgba(242,237,228,0.12)",
                    }}
                    className="footer-grid"
                >
                    {footerColumns.map((col) => (
                        <div key={col.title}>
                            <p
                                style={{
                                    fontSize: 12,
                                    fontWeight: 300,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    marginBottom: "var(--space-2)",
                                    opacity: 0.5,
                                }}
                            >
                                {col.title}
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                                {col.links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        style={{
                                            fontSize: "var(--text-sm)",
                                            color: "var(--color-on-dark)",
                                            opacity: 0.7,
                                            fontWeight: 300,
                                            transition: "opacity var(--duration-micro) var(--ease-default)",
                                        }}
                                        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                                            ((e.target as HTMLElement).style.opacity = "1")
                                        }
                                        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                                            ((e.target as HTMLElement).style.opacity = "0.7")
                                        }
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom tagline */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "var(--space-4)",
                        flexWrap: "wrap",
                        gap: "var(--space-2)",
                    }}
                >
                    <p style={{ fontSize: 12, fontWeight: 300, opacity: 0.5 }}>
                        BERNSTEIN LLC. — Made With Reason.
                    </p>
                    <p style={{ fontSize: 11, fontWeight: 300, opacity: 0.3 }}>
                        © {new Date().getFullYear()} BERNSTEIN LLC. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Responsive footer grid */}
            <style jsx>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
        </footer>
    );
}
