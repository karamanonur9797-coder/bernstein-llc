import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "BERNSTEIN LLC. privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
    return (
        <div style={{ paddingTop: 72 }}>
            <section className="section">
                <div className="container-site" style={{ maxWidth: 720 }}>
                    <h1 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-6)" }}>
                        Privacy Policy
                    </h1>

                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                        <LegalSection title="Data Collection">
                            We collect only the data necessary to process your orders and improve your
                            experience — name, email, shipping address, and payment information. We do
                            not sell your data to third parties.
                        </LegalSection>

                        <LegalSection title="Cookies">
                            We use essential cookies for cart functionality and analytics cookies
                            (anonymized) to understand how you use our site. You can disable non-essential
                            cookies at any time.
                        </LegalSection>

                        <LegalSection title="Payment Security">
                            All payment processing is handled by Stripe. We never store your card details
                            on our servers. All transactions are encrypted with TLS 1.3.
                        </LegalSection>

                        <LegalSection title="Your Rights">
                            Under GDPR, you have the right to access, correct, or delete your personal
                            data at any time. Contact us at privacy@bernstein-llc.com.
                        </LegalSection>

                        <LegalSection title="Contact">
                            For privacy-related inquiries, email privacy@bernstein-llc.com.
                        </LegalSection>
                    </div>

                    <p style={{ fontSize: 11, color: "var(--color-olive)", marginTop: "var(--space-8)" }}>
                        Last updated: February 2026
                    </p>
                </div>
            </section>
        </div>
    );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h2 style={{ fontSize: "var(--text-md)", marginBottom: "var(--space-1)" }}>{title}</h2>
            <p style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "var(--color-olive)", lineHeight: 1.7 }}>
                {children}
            </p>
        </div>
    );
}
