# Visual & UI Placement Guide – BERNSTEIN LLC.

> Source: `Prompts/06_SPECS.md`

## Logo
- File: `/public/logo.png`
- Placement: Top-left navigation
- Height: 20px desktop / 18px mobile
- Color: `#0F0F0F` on light backgrounds, `#F2EDE4` on dark backgrounds
- No border, no background, no shadow

## Homepage Hero
- File: `/public/images/hero.png`
- Style: Full-viewport, 100vh, `object-fit: cover`
- Overlay: `#0F0F0F` at 30% opacity (dark gradient)
- Text: Centered vertically and horizontally
- Headline: "Craft That Carries Its Weight." — Editorial New, weight 200, 72px desktop / 36px mobile, `#F2EDE4`
- CTA: "Explore the Collection" — Ghost style, transparent bg, 1px solid `#F2EDE4`, `border-radius: 0`

## Navigation
- Fixed top, full-width
- Background: transparent on hero / `#F2EDE4` on scroll
- Links: Suisse Int'l, weight 300, 12px, `letter-spacing: 0.1em`, uppercase
- Items: Shop / Collections / About / Stockists
- Right side: Search icon, Wishlist icon, Bag icon
- Mobile: Hamburger → full-screen overlay

## Product Cards (PLP)
- Image ratio: 3:4 portrait
- Primary: `/public/products/[slug]/01.jpg` — Hover: `02.jpg`
- Hover: crossfade 500ms ease
- Below image: Product name (13px, weight 300) + Price (13px, weight 400)
- No borders, shadows, or rounded corners
- Grid: 3 col desktop / 2 col tablet / 1 col mobile

## Product Detail Page (PDP)
- Gallery: vertical scroll left (desktop) / horizontal swipe (mobile)
- Main image: right side desktop / top mobile
- Size selector: text buttons, sharp corners, selected = 1px solid `#C8922A`
- Sold out: strikethrough, opacity 0.3, not clickable
- Add to Bag: full width, `#0F0F0F` bg, `#F2EDE4` text, 52px height, `border-radius: 0`
- Material callout: italic, 13px, `#4A4A35`

## Cart Drawer
- Slide-in from right, 420px desktop / 100vw mobile
- Background: `#F2EDE4`
- Header: "Your Bag" — Editorial New, 24px, weight 200
- Animation: `translateX(100%) → translateX(0)`, 400ms
- Empty state: "Your bag is empty." centered + link to Shop

## Buttons (Global)
- `border-radius: 0` — sharp corners, NO exceptions
- **Primary:** bg `#0F0F0F`, color `#F2EDE4` → Hover: bg `#C8922A`
- **Ghost:** bg transparent, 1px solid `#0F0F0F` → Hover: bg `#0F0F0F`, color `#F2EDE4`
- Height: 52px desktop / 48px mobile
- Font: Suisse Int'l, weight 300, 12px, `letter-spacing: 0.12em`, uppercase

## Typography (Global)
- Headings: Editorial New, weight 200, line-height 1.1
- Body: Suisse Int'l, weight 400, 15px, line-height 1.6
- Nav: Suisse Int'l, weight 300, 12px, `letter-spacing: 0.1em`, uppercase
- **No bold (weight 700) anywhere on the site**

## Section Spacing
| Breakpoint | Padding (top/bottom) |
|-----------|---------------------|
| Desktop | 128px |
| Tablet | 96px |
| Mobile | 64px |

## Animations (Global)
- Standard: 250ms `cubic-bezier(0.4, 0, 0.2, 1)`
- Page transition: fade + `translateY(20px) → 0`, 400ms
- Image hover: `scale(1.03)`, 600ms ease
- Cart drawer: slide from right, 400ms
- No bounce, no spring, no elastic
- Respect `prefers-reduced-motion`

## Product Data

### Loafer 01
| Field | Value |
|-------|-------|
| Slug | `loafer-01` |
| Name | "The Loafer — Cognac" |
| Price | €680 |
| Category | Footwear |
| Sizes | EU 39–44 |
| Material | Full-grain cognac leather, leather sole |

### Loafer 02
| Field | Value |
|-------|-------|
| Slug | `loafer-02` |
| Name | "The Loafer — Noir" |
| Price | €680 |
| Category | Footwear |
| Sizes | EU 39–44 |
| Material | Full-grain black leather, leather sole |

### Blazer 01
| Field | Value |
|-------|-------|
| Slug | `blazer-01` |
| Name | "The Blazer — Stone" |
| Price | €920 |
| Category | Ready-to-Wear |
| Sizes | XS–XL |
| Material | Italian wool blend, unlined |

## Footer
- Background: `#0F0F0F`, text `#F2EDE4`
- Columns: Shop / Company / Support / Legal
- Bottom: "BERNSTEIN LLC. — Made With Reason."
- Newsletter: inline input, ghost style, placeholder "Your email"
- Font: Suisse Int'l, 12px, weight 300
- Minimal separator lines only

## Edge Cases & Learnings
_None yet — update this section as discoveries are made._
