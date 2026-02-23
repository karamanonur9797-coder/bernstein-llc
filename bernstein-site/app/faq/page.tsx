import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ",
    description: "Frequently asked questions about BERNSTEIN LLC. products, shipping, sizing, and more.",
};

const faqs = [
    {
        question: "What materials do you use?",
        answer:
            "We source exclusively from recognized European tanneries and mills. Our leather is full-grain — never corrected or bonded. Ready-to-wear uses Italian wool blends, Japanese cottons, and Portuguese linens. Every material is chosen for how it ages, not just how it looks on day one.",
    },
    {
        question: "How does sizing run?",
        answer:
            "Our footwear runs true to European sizing. We recommend ordering your usual EU size. For ready-to-wear, our cuts lean slightly relaxed — if you prefer a closer fit, consider sizing down. Detailed measurements are available on each product page.",
    },
    {
        question: "Do you ship internationally?",
        answer:
            "Yes. We ship worldwide via DHL Express. All orders include tracking. Delivery typically takes 3–5 business days within Europe and 5–8 business days internationally. Import duties, if applicable, are the responsibility of the buyer.",
    },
    {
        question: "What is your return policy?",
        answer:
            "We accept returns within 30 days of delivery. Items must be unworn and in original packaging. We provide a prepaid return label for all EU orders. For international returns, shipping is at the customer's cost. Refunds are processed within 5 business days of receiving the return.",
    },
    {
        question: "How long does delivery take?",
        answer:
            "EU orders arrive within 3–5 business days. UK and US orders typically arrive within 5–7 business days. All other international orders are delivered within 7–10 business days. You'll receive tracking immediately upon dispatch.",
    },
    {
        question: "Are your products made ethically?",
        answer:
            "Yes. We work exclusively with small, family-run ateliers in Italy, Portugal, and Spain. We visit each workshop personally. Fair wages, reasonable hours, and safe working conditions are non-negotiable. We produce in small batches to avoid overproduction and waste.",
    },
    {
        question: "Can I change or cancel my order?",
        answer:
            "If your order hasn't shipped yet, we can modify or cancel it — just reach out within 2 hours of placing it. Once dispatched, we can no longer make changes, but you can return the item upon delivery.",
    },
    {
        question: "How do I care for my pieces?",
        answer:
            "Each product page includes specific care instructions. As a general rule: store leather goods with shoe trees, condition quarterly, and avoid prolonged moisture. Ready-to-wear should be dry cleaned or gently hand washed, depending on the fabric. Steam to refresh between wears.",
    },
];

export default function FAQPage() {
    return (
        <div style={{ paddingTop: 72 }}>
            <section className="section">
                <div className="container-site" style={{ maxWidth: 720 }}>
                    <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
                        <h1 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-2)" }}>
                            Frequently Asked Questions
                        </h1>
                        <p
                            style={{
                                fontSize: "var(--text-base)",
                                fontWeight: 300,
                                color: "var(--color-olive)",
                            }}
                        >
                            Everything you need to know about our products, shipping, and
                            policies.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                style={{
                                    borderBottom: "1px solid rgba(15,15,15,0.08)",
                                    padding: "var(--space-3) 0",
                                }}
                            >
                                <summary
                                    style={{
                                        fontSize: "var(--text-base)",
                                        fontWeight: 300,
                                        cursor: "pointer",
                                        listStyle: "none",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    {faq.question}
                                    <span
                                        style={{
                                            fontSize: "var(--text-lg)",
                                            fontWeight: 200,
                                            color: "var(--color-bernstein)",
                                            flexShrink: 0,
                                            marginLeft: "var(--space-2)",
                                        }}
                                    >
                                        +
                                    </span>
                                </summary>
                                <p
                                    style={{
                                        fontSize: "var(--text-sm)",
                                        fontWeight: 300,
                                        color: "var(--color-olive)",
                                        lineHeight: 1.7,
                                        marginTop: "var(--space-2)",
                                        paddingRight: "var(--space-4)",
                                    }}
                                >
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
