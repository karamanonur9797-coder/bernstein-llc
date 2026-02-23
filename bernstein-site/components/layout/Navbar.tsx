"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import { useAuthStore } from "@/store/authStore";
import MobileMenu from "./MobileMenu";
import CartDrawer from "../shop/CartDrawer";
import AuthModal from "../auth/AuthModal";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const navLinks = [
    { href: "/collections/all", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About" },
    { href: "/stockists", label: "Stockists" },
];

export default function Navbar() {
    const pathname = usePathname();
    const isHomepage = pathname === "/";
    const { scrollDirection, isAtTop } = useScrollDirection();
    const isVisible = scrollDirection === "visible";
    const shouldBeTransparent = isHomepage && isAtTop;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { items, toggleCart } = useCartStore();
    const { isAuthenticated, openAuthModal } = useAuthStore();
    const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50"
                style={{
                    backgroundColor: shouldBeTransparent ? "transparent" : "var(--color-stone)",
                    borderBottom: shouldBeTransparent ? "none" : "1px solid var(--color-sand)",
                    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
                    opacity: isVisible ? 1 : 0,
                    transition: "transform 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease, background-color 400ms ease, border-bottom 400ms ease",
                }}
            >
                <div className="container-site flex items-center justify-between" style={{ height: 72 }}>
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0" aria-label="BERNSTEIN LLC. Home" style={{ display: "block", textDecoration: "none" }}>
                        <span
                            className="text-editorial"
                            style={{
                                display: "inline-flex",
                                alignItems: "baseline",
                                textTransform: "uppercase",
                                fontSize: "var(--logo-size, 16px)",
                                letterSpacing: "0.08em",
                                lineHeight: 1.1,
                                color: shouldBeTransparent ? "var(--color-stone)" : "var(--color-noir)",
                                transition: "all var(--duration-macro) var(--ease-default)",
                            }}
                        >
                            <span style={{ fontWeight: 700 }}>BERNSTEIN</span>
                            <span style={{ fontWeight: 200, marginLeft: "0.4em" }}>LLC.</span>
                        </span>
                        <style jsx>{`
                            .text-editorial {
                                --logo-size: 16px;
                            }
                            @media (min-width: 768px) {
                                .text-editorial {
                                    --logo-size: 18px;
                                }
                            }
                        `}</style>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center" style={{ gap: "var(--space-4)" }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="nav-link"
                                style={{
                                    color: shouldBeTransparent ? "var(--color-stone)" : "var(--color-noir)",
                                    transition: "color var(--duration-micro) var(--ease-default)",
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    {/* Right Icons */}
                    <div className="flex items-center" style={{ gap: "var(--space-2)" }}>
                        {/* Search */}
                        <button
                            aria-label="Search"
                            className="p-2"
                            style={{
                                color: shouldBeTransparent ? "var(--color-stone)" : "var(--color-noir)",
                                transition: "color var(--duration-micro) var(--ease-default)",
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="11" cy="11" r="7" />
                                <path d="M16 16l5 5" />
                            </svg>
                        </button>

                        {/* Wishlist */}
                        <Link
                            href="/wishlist"
                            aria-label="Wishlist"
                            className="p-2 hidden md:block relative"
                            style={{
                                color: shouldBeTransparent ? "var(--color-stone)" : "var(--color-noir)",
                                transition: "color var(--duration-micro) var(--ease-default)",
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </Link>

                        {/* Account / Auth */}
                        {isAuthenticated ? (
                            <Link
                                href="/account"
                                aria-label="Account"
                                className="p-2 hidden md:block"
                                style={{
                                    color: shouldBeTransparent ? "var(--color-stone)" : "var(--color-noir)",
                                    transition: "color var(--duration-micro) var(--ease-default)",
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </Link>
                        ) : (
                            <button
                                onClick={() => openAuthModal('login')}
                                aria-label="Sign In"
                                className="p-2 hidden md:block"
                                style={{
                                    color: shouldBeTransparent ? "var(--color-stone)" : "var(--color-noir)",
                                    transition: "color var(--duration-micro) var(--ease-default)",
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </button>
                        )}

                        {/* Bag */}
                        <button
                            onClick={toggleCart}
                            aria-label={`Shopping bag, ${itemCount} items`}
                            className="p-2 relative"
                            style={{
                                color: shouldBeTransparent ? "var(--color-stone)" : "var(--color-noir)",
                                transition: "color var(--duration-micro) var(--ease-default)",
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 01-8 0" />
                            </svg>
                            {itemCount > 0 && (
                                <span
                                    className="absolute flex items-center justify-center"
                                    style={{
                                        top: 2,
                                        right: 0,
                                        width: 16,
                                        height: 16,
                                        borderRadius: "50%",
                                        backgroundColor: "var(--color-bernstein)",
                                        color: "var(--color-stone)",
                                        fontSize: 9,
                                        fontWeight: 400,
                                    }}
                                >
                                    {itemCount}
                                </span>
                            )}
                        </button>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open menu"
                            className="p-2 md:hidden"
                            style={{
                                color: shouldBeTransparent ? "var(--color-stone)" : "var(--color-noir)",
                                transition: "color var(--duration-micro) var(--ease-default)",
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
            <CartDrawer />
            <AuthModal />
        </>
    );
}
