"use client";

import { useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { formatPrice } from "@/lib/data/products";

export default function PaymentForm({ total }: { total: number }) {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/checkout/success`,
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message ?? "An unexpected error occurred.");
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            <button
                disabled={isLoading || !stripe || !elements}
                id="submit"
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "var(--space-4)" }}
            >
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : `Pay now — ${formatPrice(total)}`}
                </span>
            </button>
            {message && <div id="payment-message" style={{ color: "var(--color-error)", marginTop: "var(--space-2)", fontSize: 12 }}>{message}</div>}
        </form>
    );
}
