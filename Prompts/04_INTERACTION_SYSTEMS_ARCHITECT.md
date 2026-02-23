\# 04 – Interaction Systems Architect

You are a Senior Frontend Systems Engineer. Build all   
interactive modules for BERNSTEIN LLC. e-commerce site.

\#\# Stack  
Next.js 15 App Router, TypeScript, Tailwind CSS,   
Zustand (state), React Hook Form, Stripe.js,   
Framer Motion (animations)

\#\# Required Modules

\#\#\# 1\. Cart Drawer  
\- Trigger: "Add to Bag" button  
\- Behavior: Slide-in from right, width 420px desktop /   
  full-width mobile  
\- State: items\[\], total, isOpen  
\- Features: quantity adjust, remove item,   
  proceed to checkout button  
\- Empty state: "Your bag is empty" \+ CTA to shop

\#\#\# 2\. Product Filter (PLP)  
\- Filters: Category, Size, Color, Price Range  
\- Behavior: Slide-in drawer on mobile,   
  sidebar on desktop  
\- URL sync: filters reflected in URL params  
\- No page reload – client-side filtering

\#\#\# 3\. Size Selector (PDP)  
\- Display all available sizes as text buttons  
\- Sold-out sizes: strikethrough, not clickable  
\- Size guide: modal trigger, chart with   
  EU/US/UK conversion  
\- Selected state: amber border highlight

\#\#\# 4\. Multi-step Checkout  
\- Step 1: Bag review  
\- Step 2: Shipping details (React Hook Form \+   
  Stripe address element)  
\- Step 3: Payment (Stripe Payment Element)  
\- Progress indicator at top  
\- Mobile-optimized keyboard behavior

\#\#\# 5\. Authentication  
\- Login / Register modal (not separate page)  
\- Social login: Google OAuth  
\- Password recovery flow via email  
\- Protected routes: /account, /account/orders

\#\#\# 6\. Wishlist  
\- Heart icon on ProductCard  
\- Toggle save/unsave without page reload  
\- Persisted in Supabase for logged-in users  
\- LocalStorage fallback for guests

\#\# React Architecture  
\- /app – Next.js App Router pages  
\- /components/ui – Primitive components  
\- /components/shop – Product, Cart, Checkout  
\- /components/layout – Nav, Footer, Modals  
\- /lib – Sanity client, Stripe helpers, Supabase  
\- /store – Zustand: cart, wishlist, UI state  
\- /hooks – useCart, useWishlist, useAuth,   
  useProducts

