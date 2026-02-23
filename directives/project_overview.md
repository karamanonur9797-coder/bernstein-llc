# Project Overview – BERNSTEIN LLC.

> Source: `Prompts/01_SYSTEM_ARCHITECT.md`

## Goal
Build a high-performance e-commerce website for BERNSTEIN LLC. – a global luxury ready-to-wear and footwear brand.

## Target Audience
Design-conscious urban consumers, age 25–40, gender-neutral, globally distributed. Familiar with brands like ALD, Bottega Veneta, Lemaire. Shops on mobile and desktop equally.

## Core Capabilities
1. Product catalog (RTW + Loafer collections)
2. Global checkout with multi-currency (EUR, USD, GBP)
3. Size guide system with fit recommendations
4. Editorial lookbook / campaign pages
5. Customer account + order history

## Sitemap
- Homepage
- Collections (RTW / Loafer / All)
- Product Listing Page (PLP)
- Product Detail Page (PDP)
- Lookbook / Editorial
- About BERNSTEIN
- Stockists
- Account (Login, Register, Dashboard, Orders)
- Cart + Checkout (3-step: Bag → Details → Payment)
- FAQ / Care Instructions
- Legal (Privacy, Terms, Returns)

## User Journey Paths
- **Path A:** Homepage → PLP → PDP → Cart → Checkout
- **Path B:** Editorial/Lookbook → PDP → Cart → Checkout
- **Path C:** Direct PDP link (social traffic) → Size Guide → Cart → Checkout

## Data Entities
- **Product:** name, slug, category, price, sizes, colors, images[], description, material, care
- **Collection:** name, season, products[]
- **Order:** items[], customer, status, shipping
- **Customer:** email, address[], orders[], wishlist[]

## API Surface
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/products` | Catalog with filters |
| GET | `/api/products/[slug]` | Single product |
| GET | `/api/collections` | All collections |
| POST | `/api/checkout` | Initiate Stripe session |
| POST | `/api/auth/[...nextauth]` | Authentication |
| GET | `/api/orders` | Customer order history |

## Technology Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + custom design tokens
- **CMS:** Sanity.io (product + editorial content)
- **Payments:** Stripe (multi-currency)
- **Auth:** NextAuth.js
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel (Edge Network, global CDN)
- **Image CDN:** Cloudinary

## Performance Benchmarks
- LCP < 2.0s
- FID < 100ms
- CLS < 0.1
- Mobile PageSpeed Score > 90

## SEO Framework
- URL pattern: `/collections/[season]/[slug]`
- Schema: Product, BreadcrumbList, Organization
- OG tags for all PDP and Editorial pages
- `sitemap.xml` auto-generated via Next.js

## Edge Cases & Learnings
_None yet — update this section as discoveries are made._
