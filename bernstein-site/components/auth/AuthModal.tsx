"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/store/authStore";
import { useForm, SubmitHandler } from "react-hook-form";

type AuthFormInputs = {
    email: string;
    password?: string;
    firstName?: string;
    lastName?: string;
};

export default function AuthModal() {
    const { isAuthModalOpen, closeAuthModal, authModalView, setAuthModalView, login } = useAuthStore();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<AuthFormInputs>();

    // Mock authentication submission
    const onSubmit: SubmitHandler<AuthFormInputs> = async (data) => {
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (authModalView === 'login') {
            // Mock successful login
            login({
                id: "user_123",
                email: data.email,
                firstName: "Guest",
                lastName: "User"
            });
            reset();
        } else if (authModalView === 'register') {
            // Mock successful registration
            login({
                id: "user_new",
                email: data.email,
                firstName: data.firstName || "Guest",
                lastName: data.lastName || "User"
            });
            reset();
        } else {
            // Forgot password flow
            alert(`Password reset instructions sent to ${data.email}`);
            setAuthModalView('login');
        }
        setIsLoading(false);
    };

    return (
        <AnimatePresence>
            {isAuthModalOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeAuthModal}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 100,
                            backgroundColor: "rgba(15,15,15,0.6)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "var(--space-4)",
                        }}
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                backgroundColor: "var(--color-stone)",
                                width: "100%",
                                maxWidth: 440,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                                display: "flex",
                                flexDirection: "column",
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
                                    {authModalView === 'login' && "Sign In"}
                                    {authModalView === 'register' && "Create Account"}
                                    {authModalView === 'forgot_password' && "Reset Password"}
                                </h2>
                                <button
                                    onClick={closeAuthModal}
                                    style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>

                            <div style={{ padding: "var(--space-4)" }}>
                                {/* Mock Google Auth Button */}
                                {(authModalView === 'login' || authModalView === 'register') && (
                                    <>
                                        <button
                                            type="button"
                                            className="btn btn-ghost"
                                            onClick={() => {
                                                login({ id: "g_123", email: "google.user@example.com", firstName: "Google", lastName: "User" });
                                            }}
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: "var(--space-2)",
                                                border: "1px solid rgba(15,15,15,0.15)",
                                                marginBottom: "var(--space-4)",
                                            }}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                            </svg>
                                            Continue with Google
                                        </button>
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            textAlign: "center",
                                            color: "var(--color-olive)",
                                            fontSize: 11,
                                            marginBottom: "var(--space-4)",
                                        }}>
                                            <div style={{ flex: 1, height: 1, backgroundColor: "rgba(15,15,15,0.08)" }}></div>
                                            <span style={{ padding: "0 var(--space-2)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Or</span>
                                            <div style={{ flex: 1, height: 1, backgroundColor: "rgba(15,15,15,0.08)" }}></div>
                                        </div>
                                    </>
                                )}

                                <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                                    {authModalView === 'register' && (
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-2)" }}>
                                            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                                <label htmlFor="authFirstName" style={labelStyle}>First Name</label>
                                                <input {...register("firstName", { required: "First name required" })} id="authFirstName" placeholder="John" style={inputStyle(errors.firstName ? 'error' : 'default')} />
                                                {errors.firstName && <span style={errorStyle}>{errors.firstName.message}</span>}
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                                <label htmlFor="authLastName" style={labelStyle}>Last Name</label>
                                                <input {...register("lastName", { required: "Last name required" })} id="authLastName" placeholder="Doe" style={inputStyle(errors.lastName ? 'error' : 'default')} />
                                                {errors.lastName && <span style={errorStyle}>{errors.lastName.message}</span>}
                                            </div>
                                        </div>
                                    )}

                                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                        <label htmlFor="authEmail" style={labelStyle}>Email</label>
                                        <input {...register("email", { required: "Email required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } })} id="authEmail" type="email" placeholder="john@example.com" style={inputStyle(errors.email ? 'error' : 'default')} />
                                        {errors.email && <span style={errorStyle}>{errors.email.message}</span>}
                                    </div>

                                    {(authModalView === 'login' || authModalView === 'register') && (
                                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <label htmlFor="authPassword" style={labelStyle}>Password</label>
                                                {authModalView === 'login' && (
                                                    <button
                                                        type="button"
                                                        onClick={() => setAuthModalView('forgot_password')}
                                                        style={{ background: "none", border: "none", color: "var(--color-olive)", fontSize: 11, cursor: "pointer", textDecoration: "underline" }}
                                                    >
                                                        Forgot?
                                                    </button>
                                                )}
                                            </div>
                                            <input {...register("password", { required: "Password required", minLength: { value: 6, message: "Min 6 characters" } })} id="authPassword" type="password" placeholder="••••••••" style={inputStyle(errors.password ? 'error' : 'default')} />
                                            {errors.password && <span style={errorStyle}>{errors.password.message}</span>}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="btn btn-primary"
                                        style={{ width: "100%", marginTop: "var(--space-2)" }}
                                    >
                                        {isLoading ? (
                                            <span style={{ display: "inline-block", width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 1s linear infinite" }}></span>
                                        ) : (
                                            <>
                                                {authModalView === 'login' && "Sign In"}
                                                {authModalView === 'register' && "Create Account"}
                                                {authModalView === 'forgot_password' && "Send Reset Link"}
                                            </>
                                        )}
                                    </button>
                                </form>

                                <div style={{ marginTop: "var(--space-4)", textAlign: "center", fontSize: "var(--text-sm)", color: "var(--color-olive)" }}>
                                    {authModalView === 'login' && (
                                        <p>
                                            Don't have an account?{" "}
                                            <button onClick={() => setAuthModalView('register')} style={{ background: "none", border: "none", color: "var(--color-bernstein)", cursor: "pointer", padding: 0, textDecoration: "underline" }}>
                                                Sign up
                                            </button>
                                        </p>
                                    )}
                                    {authModalView === 'register' && (
                                        <p>
                                            Already have an account?{" "}
                                            <button onClick={() => setAuthModalView('login')} style={{ background: "none", border: "none", color: "var(--color-bernstein)", cursor: "pointer", padding: 0, textDecoration: "underline" }}>
                                                Log in
                                            </button>
                                        </p>
                                    )}
                                    {authModalView === 'forgot_password' && (
                                        <p>
                                            Remember your password?{" "}
                                            <button onClick={() => setAuthModalView('login')} style={{ background: "none", border: "none", color: "var(--color-bernstein)", cursor: "pointer", padding: 0, textDecoration: "underline" }}>
                                                Log in
                                            </button>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// Inline styles for react-hook-form inputs
const labelStyle = {
    fontSize: 11,
    fontWeight: 300,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--color-olive)",
};

const inputStyle = (state: 'default' | 'error') => ({
    width: "100%",
    height: 48,
    padding: "0 var(--space-2)",
    border: state === 'error' ? "1px solid var(--color-error)" : "1px solid rgba(15,15,15,0.15)",
    backgroundColor: "transparent",
    color: "var(--color-noir)",
    fontSize: "var(--text-sm)",
    fontFamily: "var(--font-suisse), sans-serif",
    fontWeight: 300,
    borderRadius: 0,
    outline: "none",
});

const errorStyle = {
    fontSize: 11,
    color: "var(--color-error)",
};
