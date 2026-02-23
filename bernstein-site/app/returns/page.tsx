import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Return Policy",
    description: "BERNSTEIN LLC. return and exchange policy — 30-day hassle-free returns.",
};

export default function ReturnsPage() {
    return (
        <div style={{ paddingTop: 72 }}>
            <section className="section">
                <div className="container-site" style={{ maxWidth: 720 }}>
                    <h1 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-6)" }}>
                        Return Policy
                    </h1>

                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                        <LegalSection title="30-Day Returns">
                            We accept returns within 30 days of delivery. Items must be unworn, unwashed,
                            and in their original packaging with all tags attached.
                        </LegalSection>

                        <LegalSection title="How to Return">
                            Email returns@bernstein-llc.com with your order number. We&apos;ll send you a
                            prepaid return label (EU orders) or return instructions (international orders).
                            Pack the item securely and drop it off at your nearest DHL point.
                        </LegalSection>

                        <LegalSection title="Refunds">
                            Refunds are processed within 5 business days of receiving your return. The
                            refund will be issued to the original payment method. Shipping costs are
                            non-refundable for international orders.
                        </LegalSection>

                        <LegalSection title="Exchanges">
                            For size exchanges, contact us within 30 days. We&apos;ll ship the new size as
                            soon as we receive the original item. Exchange shipping is free within the EU.
                        </LegalSection>

                        <LegalSection title="Damaged or Defective Items">
                            If you receive a damaged or defective item, contact us immediately at
                            support@bernstein-llc.com. We&apos;ll arrange a replacement or full refund at no cost.
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
