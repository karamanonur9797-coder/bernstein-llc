"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function AccountPage() {
    const { isAuthenticated, user, logout, openAuthModal } = useAuthStore();
    const router = useRouter();
    const [hasHydrated, setHasHydrated] = useState(false);

    // Set hydrated state on mount
    useEffect(() => {
        setHasHydrated(true);
    }, []);

    // Automatically open modal if not authenticated
    useEffect(() => {
        if (hasHydrated && !isAuthenticated) {
            openAuthModal('login');
        }
    }, [hasHydrated, isAuthenticated, openAuthModal]);

    if (!hasHydrated) {
        return <div style={{ paddingTop: 72, minHeight: "60vh" }}></div>;
    }

    if (!isAuthenticated) {
        return (
            <div style={{ paddingTop: 72, minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-2)" }}>Please sign in</h1>
                    <p style={{ color: "var(--color-olive)", marginBottom: "var(--space-4)" }}>You must be logged in to view your account.</p>
                    <button onClick={() => openAuthModal('login')} className="btn btn-primary">
                        Sign In / Register
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: 72 }}>
            <section className="section">
                <div className="container-site" style={{ maxWidth: 800 }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        marginBottom: "var(--space-8)",
                        borderBottom: "1px solid rgba(15,15,15,0.1)",
                        paddingBottom: "var(--space-4)"
                    }}>
                        <div>
                            <h1 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-1)" }}>
                                Account
                            </h1>
                            <p style={{ fontSize: "var(--text-base)", color: "var(--color-olive)", fontWeight: 300 }}>
                                Welcome back, {user?.firstName}
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                logout();
                                router.push("/");
                            }}
                            className="btn btn-ghost"
                            style={{ padding: "8px 16px" }}
                        >
                            Log Out
                        </button>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-6)" }}>
                        {/* Profile Info */}
                        <div>
                            <h2 className="text-editorial" style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-4)" }}>Profile Information</h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", borderBottom: "1px solid rgba(15,15,15,0.05)", paddingBottom: "var(--space-1)" }}>
                                    <span style={{ fontSize: "var(--text-sm)", color: "var(--color-olive)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Name</span>
                                    <span style={{ fontSize: "var(--text-sm)" }}>{user?.firstName} {user?.lastName}</span>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", borderBottom: "1px solid rgba(15,15,15,0.05)", paddingBottom: "var(--space-1)" }}>
                                    <span style={{ fontSize: "var(--text-sm)", color: "var(--color-olive)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Email</span>
                                    <span style={{ fontSize: "var(--text-sm)" }}>{user?.email}</span>
                                </div>
                            </div>
                        </div>

                        {/* Order History */}
                        <div style={{ marginTop: "var(--space-4)" }}>
                            <h2 className="text-editorial" style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-4)" }}>Order History</h2>
                            <div style={{ padding: "var(--space-8)", backgroundColor: "var(--color-sand)", textAlign: "center" }}>
                                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-olive)" }}>You haven't placed any orders yet.</p>
                                <Link href="/collections/all" className="btn btn-ghost" style={{ marginTop: "var(--space-2)" }}>
                                    Start Browsing
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
