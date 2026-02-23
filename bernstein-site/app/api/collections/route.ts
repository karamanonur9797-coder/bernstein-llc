import { NextResponse } from "next/server";
import { collections } from "@/lib/data/products";

export async function GET() {
    return NextResponse.json({ collections });
}
