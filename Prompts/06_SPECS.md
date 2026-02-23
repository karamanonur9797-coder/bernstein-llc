\# SPECS.md – BERNSTEIN LLC. Visual & UI Placement Guide

\---

\#\# Logo  
\- File: /public/logo.png  
\- Placement: Top-left navigation  
\- Height: 20px desktop / 18px mobile  
\- Color: \#0F0F0F on light backgrounds  
\- Color: \#F2EDE4 on dark backgrounds  
\- No border, no background, no shadow

\---

\#\# Homepage Hero  
\- File: /public/images/hero.png  
\- Style: Full-viewport, 100vh, object-fit: cover  
\- Overlay: \#0F0F0F at 30% opacity (dark gradient)  
\- Text position: Centered, vertically and horizontally  
\- Headline: "Craft That Carries Its Weight."  
\- Headline style: Editorial New, font-weight 200,   
  72px desktop / 36px mobile, color \#F2EDE4  
\- CTA Button: "Explore the Collection"  
  Ghost style: transparent background,   
  1px solid \#F2EDE4, color \#F2EDE4  
  No rounded corners (border-radius: 0\)

\---

\#\# Navigation  
\- Style: Fixed top, full-width  
\- Background: transparent on hero / \#F2EDE4 on scroll  
\- Links: Suisse Int'l, font-weight 300,   
  12px, letter-spacing 0.1em, uppercase  
\- Links: Shop / Collections / About / Stockists  
\- Right side: Search icon, Wishlist icon, Bag icon  
\- Mobile: Hamburger menu → full-screen overlay

\---

\#\# Product Cards (PLP)  
\- Image ratio: 3:4 portrait  
\- Primary image: /public/products/\[slug\]/01.jpg  
\- Hover image: /public/products/\[slug\]/02.jpg  
\- Hover behavior: crossfade 500ms ease  
\- Below image: Product name (13px, weight 300\)   
  \+ Price (13px, weight 400\)  
\- No card border, no shadow, no rounded corners  
\- Grid: 3 columns desktop / 2 columns tablet /   
  1 column mobile

\---

\#\# Product Detail Page (PDP)  
\- Main image: /public/products/\[slug\]/01.jpg  
\- Gallery images: 02.jpg, 03.jpg, 04.jpg  
\- Gallery style: Vertical scroll on left (desktop) /   
  horizontal swipe (mobile)  
\- Large image: right side desktop / top mobile  
\- Size selector: Text buttons, sharp corners  
  Selected state: 1px solid \#C8922A (amber border)  
  Sold out: strikethrough, opacity 0.3, not clickable  
\- Add to Bag button: Full width, \#0F0F0F background,  
  \#F2EDE4 text, font-weight 300, letter-spacing 0.1em  
  Height: 52px, border-radius: 0  
\- Material callout: italic, 13px, \#4A4A35

\---

\#\# Cart Drawer  
\- Style: Slide-in from RIGHT  
\- Width: 420px desktop / 100vw mobile  
\- Background: \#F2EDE4 (warm off-white)  
\- Header: "Your Bag" – Editorial New, 24px, weight 200  
\- Close: X button top-right \+ backdrop click to close  
\- Animation: translateX(100%) → translateX(0),   
  400ms cubic-bezier(0.4, 0, 0.2, 1\)  
\- Checkout button: Full width, \#0F0F0F, same as   
  Add to Bag button style  
\- Empty state: "Your bag is empty." centered,   
  13px \+ link to Shop

\---

\#\# Buttons (Global)  
\- Border-radius: 0 (sharp corners, NO exceptions)  
\- Primary: background \#0F0F0F, color \#F2EDE4  
\- Secondary (Ghost): background transparent,   
  border 1px solid \#0F0F0F, color \#0F0F0F  
\- Hover Primary: background \#C8922A,   
  color \#F2EDE4, transition 250ms  
\- Hover Ghost: background \#0F0F0F,   
  color \#F2EDE4, transition 250ms  
\- Height: 52px desktop / 48px mobile  
\- Font: Suisse Int'l, weight 300,   
  12px, letter-spacing 0.12em, uppercase

\---

\#\# Typography (Global)  
\- All headings: Editorial New, font-weight 200  
\- Body text: Suisse Int'l, font-weight 400, 15px  
\- Navigation: Suisse Int'l, font-weight 300,   
  12px, letter-spacing 0.1em, uppercase  
\- No bold (weight 700\) anywhere on the site  
\- Line height headings: 1.1  
\- Line height body: 1.6

\---

\#\# Section Spacing  
\- Desktop: padding-top 128px / padding-bottom 128px  
\- Tablet: padding-top 96px / padding-bottom 96px  
\- Mobile: padding-top 64px / padding-bottom 64px

\---

\#\# Animations (Global)  
\- Standard transition: 250ms cubic-bezier(0.4, 0, 0.2, 1\)  
\- Page transition: fade \+ translateY(20px) →   
  translateY(0), 400ms  
\- Image hover: scale(1.03), 600ms ease  
\- Cart drawer: slide from right, 400ms  
\- No bounce, no spring, no elastic effects  
\- Respect prefers-reduced-motion:   
  all transitions disabled if active

\---

\#\# Products

\#\#\# Loafer 01  
\- Slug: loafer-01  
\- Name: "The Loafer — Cognac"  
\- Price: €680  
\- Category: Footwear  
\- Primary: /public/products/loafer-01/01.jpg  
\- Hover: /public/products/loafer-01/02.jpg  
\- Gallery: 03.jpg, 04.jpg  
\- Sizes: EU 39, 40, 41, 42, 43, 44  
\- Material: Full-grain cognac leather, leather sole

\#\#\# Loafer 02  
\- Slug: loafer-02  
\- Name: "The Loafer — Noir"  
\- Price: €680  
\- Category: Footwear  
\- Primary: /public/products/loafer-02/01.jpg  
\- Hover: /public/products/loafer-02/02.jpg  
\- Gallery: 03.jpg, 04.jpg  
\- Sizes: EU 39, 40, 41, 42, 43, 44  
\- Material: Full-grain black leather, leather sole

\#\#\# Blazer 01  
\- Slug: blazer-01  
\- Name: "The Blazer — Stone"  
\- Price: €920  
\- Category: Ready-to-Wear  
\- Primary: /public/products/blazer-01/01.jpg  
\- Hover: /public/products/blazer-01/02.jpg  
\- Gallery: 03.jpg, 04.jpg  
\- Sizes: XS, S, M, L, XL  
\- Material: Italian wool blend, unlined

\---

\#\# Footer  
\- Background: \#0F0F0F  
\- Text color: \#F2EDE4  
\- Columns: Shop / Company / Support / Legal  
\- Bottom line: "BERNSTEIN LLC. — Made With Reason."  
\- Newsletter input: inline, ghost style,   
  placeholder "Your email"  
\- Font: Suisse Int'l, 12px, weight 300  
\- No heavy dividers – minimal separator lines only

