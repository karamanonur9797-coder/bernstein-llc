\# 01 – Systems Architect

You are a Senior Platform Architect at a world-class web   
infrastructure company. Architect a high-performance   
e-commerce website for BERNSTEIN LLC. – a global luxury   
ready-to-wear and footwear brand.

\#\# Context  
\- Primary audience: Design-conscious urban consumers,   
  age 25–40, gender-neutral, globally distributed.   
  Familiar with brands like ALD, Bottega Veneta, Lemaire.   
  Shops on mobile and desktop equally.  
\- Core capabilities required:  
  1\. Product catalog (RTW \+ Loafer collections)  
  2\. Global checkout with multi-currency (EUR, USD, GBP)  
  3\. Size guide system with fit recommendations  
  4\. Editorial lookbook / campaign pages  
  5\. Customer account \+ order history  
\- Technical priorities: PERFORMANCE, SEO, RESPONSIVENESS,   
  SCALABILITY

\#\# Deliverables  
1\. Information Architecture – Full sitemap:  
   \- Homepage  
   \- Collections (RTW / Loafer / All)  
   \- Product Listing Page (PLP)  
   \- Product Detail Page (PDP)  
   \- Lookbook / Editorial  
   \- About BERNSTEIN  
   \- Stockists  
   \- Account (Login, Register, Dashboard, Orders)  
   \- Cart \+ Checkout (3-step: Bag → Details → Payment)  
   \- FAQ / Care Instructions  
   \- Legal (Privacy, Terms, Returns)

2\. User Journey Mapping – Three conversion paths:  
   \- Path A: Homepage → PLP → PDP → Cart → Checkout  
   \- Path B: Editorial/Lookbook → PDP → Cart → Checkout  
   \- Path C: Direct PDP link (social traffic) →   
     Size Guide → Cart → Checkout

3\. Data Architecture – Entities:  
   \- Product (name, slug, category, price, sizes,   
     colors, images\[\], description, material, care)  
   \- Collection (name, season, products\[\])  
   \- Order (items\[\], customer, status, shipping)  
   \- Customer (email, address\[\], orders\[\], wishlist\[\])

4\. API Surface Definition:  
   \- GET /api/products – catalog with filters  
   \- GET /api/products/\[slug\] – single product  
   \- GET /api/collections – all collections  
   \- POST /api/checkout – initiate Stripe session  
   \- POST /api/auth/\[...nextauth\] – authentication  
   \- GET /api/orders – customer order history

5\. Component Inventory – Minimum 30 UI components   
   (see 04\_interaction\_systems.md for full list)

6\. Technology Stack:  
   \- Framework: Next.js 15 (App Router)  
   \- Styling: Tailwind CSS \+ custom design tokens  
   \- CMS: Sanity.io (product \+ editorial content)  
   \- Payments: Stripe (multi-currency)  
   \- Auth: NextAuth.js  
   \- Database: Supabase (PostgreSQL)  
   \- Deployment: Vercel (Edge Network, global CDN)  
   \- Image CDN: Cloudinary

7\. Performance Benchmarks:  
   \- LCP \< 2.0s  
   \- FID \< 100ms  
   \- CLS \< 0.1  
   \- Mobile PageSpeed Score \> 90

8\. SEO Framework:  
   \- URL: /collections/\[season\]/\[slug\]  
   \- Schema: Product, BreadcrumbList, Organization  
   \- OG tags for all PDP and Editorial pages  
   \- Sitemap.xml auto-generated via Next.js

