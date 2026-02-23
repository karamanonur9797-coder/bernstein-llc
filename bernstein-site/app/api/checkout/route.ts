import { NextResponse } from "next/server";
import Stripe from "stripe";

// Check if STRIPE_SECRET_KEY is set, otherwise use a dummy key for build/dev without env vars
const stripeKey = process.env.STRIPE_SECRET_KEY || "sk_test_dummy_key_do_not_use_in_prod";
const stripe = new Stripe(stripeKey, {
    apiVersion: "2023-10-16" as any,
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { items, email } = body;

        if (!items || items.length === 0) {
            return NextResponse.json(
                { error: "No items in cart" },
                { status: 400 }
            );
        }

        // Calculate total amount in cents
        // Custom logic can be added here to verify prices against the database
        const totalAmount = items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0) * 100;

        // Create a PaymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalAmount,
            currency: "eur",
            automatic_payment_methods: {
                enabled: true,
            },
            receipt_email: email,
        });

        return NextResponse.json({
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id
        });
    } catch (error: any) {
        console.error("Stripe API error:", error);
        // If it's an auth error because of dummy keys, gracefully return a mock secret for UI testing
        if (error.type === 'StripeAuthenticationError' && stripeKey.includes('dummy')) {
            return NextResponse.json({
                clientSecret: "pi_mock_secret_for_ui_testing_only_does_not_work",
                warn: "Using mock secret due to missing STRIPE_SECRET_KEY"
            });
        }

        return NextResponse.json(
            { error: "Failed to create payment intent" },
            { status: 500 }
        );
    }
}
