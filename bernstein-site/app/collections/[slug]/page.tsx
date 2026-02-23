import { collections, getProductsByCollection, getCollectionBySlug } from "@/lib/data/products";
import FilterableProductGrid from "@/components/shop/FilterableProductGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import type { Metadata } from "next";
import { Suspense } from "react";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const collection = getCollectionBySlug(slug);
    return {
        title: collection ? collection.name : "Shop All",
        description: collection?.description || "Browse the full BERNSTEIN LLC. catalog.",
    };
}

export default async function CollectionPage({ params }: Props) {
    const { slug } = await params;
    const collection = getCollectionBySlug(slug);
    const collectionProducts = getProductsByCollection(slug);

    return (
        <div style={{ paddingTop: 72 }}>
            <section className="section">
                <div className="container-site">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Collections", href: "/collections" },
                            { label: collection?.name || "All Products" },
                        ]}
                    />

                    {/* Header */}
                    <div style={{ marginBottom: "var(--space-8)" }}>
                        <h1 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-1)" }}>
                            {collection?.name || "All Products"}
                        </h1>
                        <p
                            style={{
                                fontSize: "var(--text-base)",
                                fontWeight: 300,
                                color: "var(--color-olive)",
                            }}
                        >
                            {collection?.description ||
                                "Each piece designed with obsessive attention to material, cut, and longevity."}
                        </p>
                    </div>

                    <Suspense fallback={<div>Loading...</div>}>
                        <FilterableProductGrid initialProducts={collectionProducts} />
                    </Suspense>
                </div>
            </section>
        </div>
    );
}
