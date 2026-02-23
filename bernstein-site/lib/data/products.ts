export interface Product {
    slug: string;
    name: string;
    price: number;
    currency: string;
    category: "Footwear" | "Ready-to-Wear";
    collection: string;
    images: string[];
    sizes: string[];
    soldOutSizes: string[];
    material: string;
    care: string;
    description: string;
}

export interface Collection {
    slug: string;
    name: string;
    season: string;
    description: string;
    image: string;
    products: string[]; // product slugs
}

export const products: Product[] = [
    {
        slug: "loafer-02",
        name: "Pápia Boat Shoe",
        price: 680,
        currency: "EUR",
        category: "Footwear",
        collection: "footwear",
        images: [
            "/products/loafer-02/01.webp",
            "/products/loafer-02/02.webp",
            "/products/loafer-02/03.webp",
            "/products/loafer-02/04.webp",
        ],
        sizes: ["EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"],
        soldOutSizes: [],
        material: "Full-grain black leather, leather sole",
        care: "Store with shoe trees. Condition leather quarterly. Avoid prolonged moisture exposure.",
        description:
            "• Black boat shoe\n• Calf leather upper\n• Vibram lug outsole\n• Calfskin lining\n• Leather & synthetic insole\n• Metal eyelets with leather laces\n• Features engraved gold tone logo\n• LWG certified Italian calf leather\n• Handmade in Italy",
    },
    {
        slug: "blazer-01",
        name: "World's Borough Leather Flight Jacket",
        price: 920,
        currency: "EUR",
        category: "Ready-to-Wear",
        collection: "rtw",
        images: [
            "/products/blazer-01/01.jpg",
            "/products/blazer-01/02.webp",
            "/products/blazer-01/03.jpg",
            "/products/blazer-01/04.jpg",
            "/products/blazer-01/05.webp",
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        soldOutSizes: ["XS"],
        material: "Italian wool blend, unlined",
        care: "Dry clean only. Hang on a wide-shouldered hanger. Steam to refresh.",
        description:
            "• Brown leather jacket\n• Cowhide leather\n• Printed artwork at back & chest\n• Antique brass hardware throughout\n• Regular fit\n• Snap placket with concealed two way zip closure at front\n• Two single welt hand pockets at front with snap closure\n• One slip pocket at interior with woven ALD military label\n• Custom twill lining\n• Ribbed wool cuffs & hem\n• Body: 100% Bovine Leather\n• Lining: 100% Acetate\n• Professional leather clean only\n• Made in Turkey",
    },
    {
        slug: "knit-01",
        name: "Multi Color Knit Track Sweater",
        price: 380,
        currency: "EUR",
        category: "Ready-to-Wear",
        collection: "rtw",
        images: [
            "/products/knit-01/01.webp",
            "/products/knit-01/03.webp",
            "/products/knit-01/04.jpg",
            "/products/knit-01/05.webp",
        ],
        sizes: ["S", "M", "L", "XL"],
        soldOutSizes: ["S"],
        material: "100% Cotton Knit",
        care: "Hand wash cold. Dry flat. Do not hang.",
        description:
            "• Multi-color full-zip sweater\n• Jacquard striped combed cotton fabric\n• Regular fit\n• Two way zip closure at front\n• Ribbed collar, cuffs, & hem\n• 100% Cotton\n• Dry clean only",
    },
    {
        slug: "cap-01",
        name: "GORE-TEX Unisphere Hat",
        price: 120,
        currency: "EUR",
        category: "Ready-to-Wear",
        collection: "rtw",
        images: [
            "/products/cap-01/01.webp",
            "/products/cap-01/02.webp",
            "/products/cap-01/04.webp",
            "/products/cap-01/05.webp",
        ],
        sizes: ["OS"],
        soldOutSizes: [],
        material: "100% Cotton Twill",
        care: "Spot clean only.",
        description:
            "• Dark navy hat\n• GORE-TEX laminate fabric is fully waterproof & breathable\n• Embroidered GORE-TEX & Aimé Leon Dore logos at front\n• Embroidered Aimé Leon Dore logo at back\n• 5-panel construction\n• Stitched eyelets\n• Adjustable snapback closure",
    }
];

export const collections: Collection[] = [
    {
        slug: "footwear",
        name: "Footwear",
        season: "SS26",
        description: "Hand-finished leather loafers built to last a decade.",
        image: "/products/loafer-02/01.webp",
        products: ["loafer-02"],
    },
    {
        slug: "rtw",
        name: "Ready-to-Wear",
        season: "SS26",
        description: "Unlined tailoring and essentials in natural fabrics.",
        image: "/products/blazer-01/01.jpg",
        products: ["blazer-01", "knit-01", "cap-01"],
    },
    {
        slug: "all",
        name: "All Products",
        season: "SS26",
        description:
            "Each piece designed with obsessive attention to material, cut, and longevity.",
        image: "/products/loafer-02/01.webp",
        products: ["loafer-02", "blazer-01", "knit-01", "cap-01"],
    },
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
    return collections.find((c) => c.slug === slug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
    const collection = getCollectionBySlug(collectionSlug);
    if (!collection) return products;
    return products.filter((p) => collection.products.includes(p.slug));
}

export function formatPrice(price: number, currency: string = "EUR"): string {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
    }).format(price);
}
