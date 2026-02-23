# Design System – BERNSTEIN LLC.

> Source: `Prompts/02_VISUAL_SYSTEM_ARCHITECT.md`

## Brand Personality
LUXURY / WARM MINIMAL / ARTISANAL

## Brand Reference
Aimé Leon Dore (relaxed, cultural, community-driven) meets Bottega Veneta (craft, texture, quiet luxury). Accessible price point but uncompromising in aesthetics.

## Color System

### Primary
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bernstein` | `#C8922A` | Bernstein/Amber – Namesake accent |
| `--color-noir` | `#0F0F0F` | Near Black |
| `--color-stone` | `#F2EDE4` | Warm Off-White |

### Secondary
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-cognac` | `#8B4513` | Deep Leather Brown |
| `--color-olive` | `#4A4A35` | Muted Olive |
| `--color-sand` | `#D4C5A9` | Warm Sand |

### Semantic
| Token | Hex |
|-------|-----|
| `--color-success` | `#3D6B4F` |
| `--color-error` | `#8B2E2E` |
| `--color-neutral-100` | `#FAFAF8` |
| `--color-neutral-900` | `#1A1A18` |

**Dark Mode:** Invert stone ↔ noir, keep amber as accent.

## Typography

| Token | Size | Usage |
|-------|------|-------|
| `--text-xs` | 11px | Legal, labels |
| `--text-sm` | 13px | Navigation, captions |
| `--text-base` | 15px | Body copy |
| `--text-md` | 18px | Sub-headlines |
| `--text-lg` | 24px | Section titles |
| `--text-xl` | 36px | Page titles |
| `--text-2xl` | 52px | Hero sub |
| `--text-3xl` | 72px | Hero headline |
| `--text-4xl` | 96px | Statement type |

- **Heading font:** "Editorial New" (thin, editorial serif)
- **Body font:** "Suisse Int'l" (neutral grotesque)

## Spatial System (8px base)

| Token | Value |
|-------|-------|
| `--space-1` | 8px |
| `--space-2` | 16px |
| `--space-3` | 24px |
| `--space-4` | 32px |
| `--space-6` | 48px |
| `--space-8` | 64px |
| `--space-12` | 96px |
| `--space-16` | 128px |
| `--space-24` | 192px (section padding) |

## Component Library (30+)
NavBar, MobileMenu, HeroFullscreen, HeroSplit, ProductCard, ProductCardHover, ProductGrid, ProductImageGallery, SizeSelector, ColorSwatch, AddToCartButton, CartDrawer, CartItem, CartSummary, CheckoutStep, CheckoutForm, OrderSummary, LookbookGrid, EditorialCard, CollectionBanner, SizeGuideModal, QuickViewModal, WishlistButton, SearchOverlay, FilterDrawer, FilterTag, AccountDashboard, OrderHistory, NewsletterBar, Toast, LoadingSpinner, Breadcrumb, Footer, CookieBanner, PageTransition

## Motion Principles
- Transition duration: 250ms (micro), 400ms (macro)
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- No bounce, no elastic – only ease-in-out
- Page transitions: fade + 20px vertical slide
- Cart drawer: slide-in from right, 400ms
- Image hover: `scale(1.03)`, 600ms ease

## Responsive Breakpoints

| Token | Value | Target |
|-------|-------|--------|
| `--bp-sm` | 390px | Mobile |
| `--bp-md` | 768px | Tablet |
| `--bp-lg` | 1280px | Desktop |
| `--bp-xl` | 1920px | Wide |

## Accessibility
- All text: WCAG AA minimum (4.5:1 contrast)
- Focus states: 2px amber outline
- Reduced motion: respect `prefers-reduced-motion`

## Edge Cases & Learnings
_None yet — update this section as discoveries are made._
