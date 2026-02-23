"use client";

const stockists = [
    {
        city: "Paris",
        stores: [
            { name: "Maison Plisson", address: "93 Boulevard Beaumarchais, 75003" },
        ],
    },
    {
        city: "London",
        stores: [
            { name: "Dover Street Market", address: "18-22 Haymarket, SW1Y 4DG" },
        ],
    },
    {
        city: "New York",
        stores: [
            { name: "Kith", address: "337 Lafayette St, 10012" },
        ],
    },
    {
        city: "Tokyo",
        stores: [
            { name: "United Arrows", address: "3-28-1 Jingumae, Shibuya" },
        ],
    },
    {
        city: "Berlin",
        stores: [
            { name: "Voo Store", address: "Oranienstraße 24, 10999" },
        ],
    },
    {
        city: "Milan",
        stores: [
            { name: "Antonia", address: "Via Cusani 5, 20121" },
        ],
    },
];

export default function StockistsPage() {
    return (
        <div style={{ paddingTop: 72 }}>
            <section className="section">
                <div className="container-site" style={{ maxWidth: 800 }}>
                    <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
                        <h1 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-2)" }}>
                            Stockists
                        </h1>
                        <p
                            style={{
                                fontSize: "var(--text-base)",
                                fontWeight: 300,
                                color: "var(--color-olive)",
                            }}
                        >
                            Find BERNSTEIN LLC. at select retailers worldwide.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "var(--space-6)",
                        }}
                        className="stockists-grid"
                    >
                        {stockists.map((region) => (
                            <div
                                key={region.city}
                                style={{
                                    paddingBottom: "var(--space-4)",
                                    borderBottom: "1px solid rgba(15,15,15,0.08)",
                                }}
                            >
                                <h2
                                    className="text-editorial"
                                    style={{
                                        fontSize: "var(--text-lg)",
                                        marginBottom: "var(--space-2)",
                                    }}
                                >
                                    {region.city}
                                </h2>
                                {region.stores.map((store) => (
                                    <div key={store.name}>
                                        <p style={{ fontSize: "var(--text-sm)", fontWeight: 400 }}>
                                            {store.name}
                                        </p>
                                        <p
                                            style={{
                                                fontSize: "var(--text-sm)",
                                                fontWeight: 300,
                                                color: "var(--color-olive)",
                                            }}
                                        >
                                            {store.address}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
        @media (max-width: 767px) {
          .stockists-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
}
