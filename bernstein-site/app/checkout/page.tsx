"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/data/products";
import type { CartItem } from "@/store/cartStore";
import { useForm, SubmitHandler } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "@/components/checkout/PaymentForm";

// Initialize Stripe outside component to avoid recreating it
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_dummy_key");

const steps = ["Bag", "Details", "Payment"];

// react-hook-form types
type ShippingFormInputs = {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    postal: string;
    country: string;
};

export default function CheckoutPage() {
    const { items, total } = useCartStore();
    const [currentStep, setCurrentStep] = useState(0);
    const [clientSecret, setClientSecret] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        getValues,
    } = useForm<ShippingFormInputs>({ mode: "onBlur" });

    const onSubmit: SubmitHandler<ShippingFormInputs> = async (data) => {
        // Create payment intent
        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    items,
                    email: data.email,
                }),
            });
            const result = await res.json();

            if (result.clientSecret) {
                setClientSecret(result.clientSecret);
                setCurrentStep(2); // Go to payment
            } else {
                alert("Failed to initialize payment. Please try again.");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{ paddingTop: 72 }}>
            <section className="section">
                <div className="container-site" style={{ maxWidth: 960 }}>
                    <h1
                        style={{
                            fontSize: "var(--text-xl)",
                            textAlign: "center",
                            marginBottom: "var(--space-6)",
                        }}
                    >
                        Checkout
                    </h1>

                    {/* Progress Indicator */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "var(--space-4)",
                            marginBottom: "var(--space-8)",
                        }}
                    >
                        {steps.map((step, i) => (
                            <button
                                key={step}
                                onClick={() => {
                                    if (i < currentStep) setCurrentStep(i);
                                    if (i === 1 && currentStep === 0 && items.length > 0) setCurrentStep(1);
                                    if (i === 2 && currentStep === 1 && isValid) handleSubmit(onSubmit)();
                                }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "var(--space-1)",
                                    background: "none",
                                    border: "none",
                                    cursor: (i < currentStep || (i === 1 && items.length > 0) || (i === 2 && isValid)) ? "pointer" : "default",
                                    fontFamily: "var(--font-suisse), sans-serif",
                                    fontSize: 12,
                                    fontWeight: 300,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color:
                                        i === currentStep
                                            ? "var(--color-noir)"
                                            : i < currentStep
                                                ? "var(--color-bernstein)"
                                                : "var(--color-olive)",
                                    opacity: i === currentStep ? 1 : 0.6,
                                    transition: "color var(--duration-micro) var(--ease-default)",
                                }}
                            >
                                <span
                                    style={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: "50%",
                                        border:
                                            i <= currentStep
                                                ? "1px solid var(--color-bernstein)"
                                                : "1px solid rgba(15,15,15,0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 11,
                                        backgroundColor:
                                            i < currentStep ? "var(--color-bernstein)" : "transparent",
                                        color: i < currentStep ? "var(--color-stone)" : "inherit",
                                    }}
                                >
                                    {i < currentStep ? "✓" : i + 1}
                                </span>
                                {step}
                            </button>
                        ))}
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 360px",
                            gap: "var(--space-8)",
                        }}
                        className="checkout-grid"
                    >
                        {/* Main Content */}
                        <div>
                            {/* Step 1: Bag Review */}
                            {currentStep === 0 && (
                                <div>
                                    <h2 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-3)" }}>
                                        Review Your Bag
                                    </h2>
                                    {items.length === 0 ? (
                                        <div style={{ textAlign: "center", padding: "var(--space-8) 0" }}>
                                            <p style={{ color: "var(--color-olive)", marginBottom: "var(--space-2)" }}>
                                                Your bag is empty.
                                            </p>
                                            <Link href="/collections/all" className="btn btn-ghost">
                                                Continue Shopping
                                            </Link>
                                        </div>
                                    ) : (
                                        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                                            {items.map((item: CartItem) => (
                                                <div
                                                    key={`${item.slug}-${item.size}`}
                                                    style={{
                                                        display: "flex",
                                                        gap: "var(--space-2)",
                                                        paddingBottom: "var(--space-3)",
                                                        borderBottom: "1px solid rgba(15,15,15,0.06)",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: 100,
                                                            height: 133,
                                                            backgroundColor: "var(--color-sand)",
                                                            flexShrink: 0,
                                                        }}
                                                    >
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                        />
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <p style={{ fontSize: "var(--text-sm)", fontWeight: 300 }}>{item.name}</p>
                                                        <p style={{ fontSize: 11, color: "var(--color-olive)" }}>
                                                            Size: {item.size} · Qty: {item.quantity}
                                                        </p>
                                                        <p style={{ fontSize: "var(--text-sm)", fontWeight: 400, marginTop: 4 }}>
                                                            {formatPrice(item.price * item.quantity)}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                            <button
                                                onClick={() => setCurrentStep(1)}
                                                className="btn btn-primary"
                                                style={{ width: "100%", marginTop: "var(--space-2)" }}
                                            >
                                                Continue to Shipping
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Step 2: Shipping Details */}
                            {currentStep === 1 && (
                                <div>
                                    <h2 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-3)" }}>
                                        Shipping Details
                                    </h2>
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "var(--space-2)",
                                        }}
                                    >
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-2)" }}>
                                            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                                <label htmlFor="firstName" style={labelStyle}>First Name</label>
                                                <input {...register("firstName", { required: "First name specifies" })} id="firstName" placeholder="John" style={inputStyle(errors.firstName ? 'error' : 'default')} />
                                                {errors.firstName && <span style={errorStyle}>{errors.firstName.message}</span>}
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                                <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                                                <input {...register("lastName", { required: "Last name specifies" })} id="lastName" placeholder="Doe" style={inputStyle(errors.lastName ? 'error' : 'default')} />
                                                {errors.lastName && <span style={errorStyle}>{errors.lastName.message}</span>}
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                            <label htmlFor="email" style={labelStyle}>Email</label>
                                            <input {...register("email", { required: "Email specifies", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } })} id="email" type="email" placeholder="john@example.com" style={inputStyle(errors.email ? 'error' : 'default')} />
                                            {errors.email && <span style={errorStyle}>{errors.email.message}</span>}
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                            <label htmlFor="address" style={labelStyle}>Address</label>
                                            <input {...register("address", { required: "Address specifies" })} id="address" placeholder="123 Street Name" style={inputStyle(errors.address ? 'error' : 'default')} />
                                            {errors.address && <span style={errorStyle}>{errors.address.message}</span>}
                                        </div>
                                        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "var(--space-2)" }}>
                                            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                                <label htmlFor="city" style={labelStyle}>City</label>
                                                <input {...register("city", { required: "City specifies" })} id="city" placeholder="Berlin" style={inputStyle(errors.city ? 'error' : 'default')} />
                                                {errors.city && <span style={errorStyle}>{errors.city.message}</span>}
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                                <label htmlFor="postal" style={labelStyle}>Postal Code</label>
                                                <input {...register("postal", { required: "Postal code specifies" })} id="postal" placeholder="10115" style={inputStyle(errors.postal ? 'error' : 'default')} />
                                                {errors.postal && <span style={errorStyle}>{errors.postal.message}</span>}
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                            <label htmlFor="country" style={labelStyle}>Country</label>
                                            <input {...register("country", { required: "Country specifies" })} id="country" placeholder="Germany" style={inputStyle(errors.country ? 'error' : 'default')} />
                                            {errors.country && <span style={errorStyle}>{errors.country.message}</span>}
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            style={{ width: "100%", marginTop: "var(--space-2)" }}
                                        >
                                            Continue to Payment
                                        </button>
                                    </form>
                                </div>
                            )}

                            {/* Step 3: Payment */}
                            {currentStep === 2 && (
                                <div>
                                    <h2 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-3)" }}>
                                        Payment
                                    </h2>
                                    {clientSecret ? (
                                        <Elements
                                            stripe={stripePromise}
                                            options={{
                                                clientSecret,
                                                appearance: {
                                                    theme: 'flat',
                                                    variables: {
                                                        fontFamily: 'Inter, sans-serif',
                                                        colorText: '#0f0f0f',
                                                    }
                                                }
                                            }}
                                        >
                                            <PaymentForm total={total} />
                                        </Elements>
                                    ) : (
                                        <div style={{ padding: "var(--space-4)", textAlign: "center" }}>
                                            Loading payment methods...
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Order Summary Sidebar */}
                        <div
                            style={{
                                backgroundColor: "var(--color-stone)",
                                padding: "var(--space-4)",
                                alignSelf: "flex-start",
                                position: "sticky",
                                top: 96,
                                border: "1px solid rgba(15,15,15,0.05)"
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: "var(--text-sm)",
                                    fontWeight: 300,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    marginBottom: "var(--space-4)",
                                    paddingBottom: "var(--space-2)",
                                    borderBottom: "1px solid rgba(15,15,15,0.08)",
                                }}
                            >
                                Order Summary
                            </h3>
                            {items.map((item: CartItem) => (
                                <div
                                    key={`${item.slug}-${item.size}`}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        fontSize: "var(--text-sm)",
                                        fontWeight: 300,
                                        marginBottom: 12,
                                    }}
                                >
                                    <span>
                                        {item.name} <span style={{ color: "var(--color-olive)", fontSize: 11 }}>× {item.quantity}</span>
                                    </span>
                                    <span>{formatPrice(item.price * item.quantity)}</span>
                                </div>
                            ))}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: "var(--space-4)",
                                    paddingTop: "var(--space-3)",
                                    borderTop: "1px solid rgba(15,15,15,0.1)",
                                    fontSize: "var(--text-sm)",
                                }}
                            >
                                <span style={{ fontWeight: 300 }}>Shipping</span>
                                <span style={{ fontWeight: 300 }}>Free</span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: "var(--space-2)",
                                    paddingTop: "var(--space-2)",
                                    borderTop: "1px solid rgba(15,15,15,0.1)",
                                    fontSize: "var(--text-md)",
                                }}
                            >
                                <span style={{ fontWeight: 400 }}>Total</span>
                                <span style={{ fontWeight: 400 }}>{formatPrice(total)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        @media (max-width: 767px) {
          .checkout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
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
