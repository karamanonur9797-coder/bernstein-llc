import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "BERNSTEIN LLC. terms of service for using our website and purchasing products.",
};

export default function TermsPage() {
    return (
        <div style={{ paddingTop: 72 }}>
            <section className="section">
                <div className="container-site" style={{ maxWidth: 720 }}>
                    <h1 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-6)" }}>
                        Terms of Service
                    </h1>

                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                        <LegalSection title="General">
                            By accessing and using this website, you agree to be bound by these terms.
                            BERNSTEIN LLC. reserves the right to update these terms at any time.
                        </LegalSection>

                        <LegalSection title="Products & Pricing">
                            All prices are displayed in EUR unless otherwise specified. We reserve the
                            right to adjust prices without notice. Product images are representative;
                            minor variations in color and texture are natural characteristics of handmade goods.
                        </LegalSection>

                        <LegalSection title="Orders">
                            Placing an order constitutes an offer to purchase. We reserve the right to
                            decline any order. Order confirmation is sent via email upon successful
                            payment processing.
                        </LegalSection>

                        <LegalSection title="Intellectual Property">
                            All content on this site — including images, text, logos, and design — is
                            the property of BERNSTEIN LLC. and may not be reproduced without written
                            permission.
                        </LegalSection>

                        <LegalSection title="Governing Law">
                            These terms are governed by the laws of the European Union and the Federal
                            Republic of Germany.
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
