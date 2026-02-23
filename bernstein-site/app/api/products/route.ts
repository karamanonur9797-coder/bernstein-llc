import { NextResponse } from "next/server";
import { products } from "@/lib/data/products";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const collection = searchParams.get("collection");

    let filtered = [...products];

    if (category) {
        filtered = filtered.filter(
            (p) => p.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (collection) {
        filtered = filtered.filter(
            (p) => p.collection.toLowerCase() === collection.toLowerCase()
        );
    }

    return NextResponse.json({ products: filtered, total: filtered.length });
}
