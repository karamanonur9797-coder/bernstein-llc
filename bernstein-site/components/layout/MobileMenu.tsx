"use client";

import Link from "next/link";
import { useEffect } from "react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuLinks = [
    { href: "/collections/all", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/lookbook", label: "Lookbook" },
    { href: "/about", label: "About" },
    { href: "/stockists", label: "Stockists" },
    { href: "/account", label: "Account" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
        <div
            className="fixed inset-0 z-[60] md:hidden"
            style={{
                pointerEvents: isOpen ? "auto" : "none",
                visibility: isOpen ? "visible" : "hidden",
            }}
        >
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(15,15,15,0.5)",
                    opacity: isOpen ? 1 : 0,
                    transition: "opacity var(--duration-macro) var(--ease-default)",
                }}
            />

            {/* Menu Panel */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "var(--color-noir)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--space-4)",
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                    transition:
                        "opacity var(--duration-macro) var(--ease-default), transform var(--duration-macro) var(--ease-default)",
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    aria-label="Close menu"
                    style={{
                        position: "absolute",
                        top: 24,
                        right: 24,
                        color: "var(--color-stone)",
                        padding: 8,
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Nav Links */}
                {menuLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className="text-editorial"
                        style={{
                            fontSize: "var(--text-lg)",
                            color: "var(--color-stone)",
                            letterSpacing: "-0.02em",
                            transition: "color var(--duration-micro) var(--ease-default)",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-bernstein)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-stone)")}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
