"use client";

export default function AboutPage() {
    return (
        <div style={{ paddingTop: 72 }}>
            {/* Hero */}
            <section
                style={{
                    backgroundColor: "var(--color-noir)",
                    paddingTop: "var(--space-16)",
                    paddingBottom: "var(--space-16)",
                    textAlign: "center",
                }}
            >
                <div className="container-site">
                    <h1
                        className="text-editorial"
                        style={{
                            fontSize: "clamp(36px, 5vw, 72px)",
                            color: "var(--color-stone)",
                            marginBottom: "var(--space-3)",
                        }}
                    >
                        Made With Reason.
                    </h1>
                    <p
                        style={{
                            fontSize: "var(--text-base)",
                            color: "var(--color-stone)",
                            opacity: 0.7,
                            fontWeight: 300,
                            maxWidth: 550,
                            margin: "0 auto",
                            lineHeight: 1.6,
                        }}
                    >
                        BERNSTEIN LLC. is built on a simple belief — that well-made things
                        should be accessible to people who care about them.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section">
                <div
                    className="container-site"
                    style={{ maxWidth: 720, textAlign: "center" }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "var(--space-4)",
                        }}
                    >
                        <div>
                            <h2 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-2)" }}>
                                The Beginning
                            </h2>
                            <p
                                style={{
                                    fontSize: "var(--text-base)",
                                    fontWeight: 300,
                                    color: "var(--color-olive)",
                                    lineHeight: 1.7,
                                }}
                            >
                                We started with a question: why does caring about what you wear
                                require spending beyond reason? Every seam, sole, and stitch we
                                produce is an answer to that question. We partner directly with
                                ateliers in Italy and Portugal — small, family-run workshops where
                                skill has been passed down for generations.
                            </p>
                        </div>

                        <div>
                            <h2 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-2)" }}>
                                Craft Over Scale
                            </h2>
                            <p
                                style={{
                                    fontSize: "var(--text-base)",
                                    fontWeight: 300,
                                    color: "var(--color-olive)",
                                    lineHeight: 1.7,
                                }}
                            >
                                We don&apos;t chase trends or flood the market. We release small
                                collections built around enduring shapes and honest materials.
                                Full-grain leather. Italian wool. Japanese cotton. Every piece is
                                designed to improve with age — not end up in a landfill.
                            </p>
                        </div>

                        <div>
                            <h2 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-2)" }}>
                                Based Everywhere
                            </h2>
                            <p
                                style={{
                                    fontSize: "var(--text-base)",
                                    fontWeight: 300,
                                    color: "var(--color-olive)",
                                    lineHeight: 1.7,
                                }}
                            >
                                BERNSTEIN LLC. is a globally distributed team of designers,
                                makers, and thinkers. We have no flagship and no headquarters —
                                just a shared commitment to making things that carry their weight.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section
                style={{ backgroundColor: "var(--color-sand)" }}
                className="section"
            >
                <div className="container-site">
                    <h2
                        style={{
                            fontSize: "var(--text-lg)",
                            textAlign: "center",
                            marginBottom: "var(--space-8)",
                        }}
                    >
                        What We Stand For
                    </h2>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "var(--space-6)",
                            textAlign: "center",
                        }}
                        className="values-grid"
                    >
                        {[
                            {
                                title: "Material First",
                                text: "We source before we sketch. The material dictates the design, not the other way around.",
                            },
                            {
                                title: "Built to Last",
                                text: "Every piece is constructed to age gracefully — designed for decades, not seasons.",
                            },
                            {
                                title: "Honest Pricing",
                                text: "No markups for marketing. You pay for the craft, the material, and nothing else.",
                            },
                        ].map((value) => (
                            <div key={value.title}>
                                <h3
                                    className="text-editorial"
                                    style={{
                                        fontSize: "var(--text-md)",
                                        marginBottom: "var(--space-1)",
                                    }}
                                >
                                    {value.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "var(--text-sm)",
                                        fontWeight: 300,
                                        color: "var(--color-olive)",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {value.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
        @media (max-width: 767px) {
          .values-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-4) !important;
          }
        }
      `}</style>
        </div>
    );
}
