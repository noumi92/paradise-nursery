# Paradise Nursery

A responsive houseplant shopping application built with React, Redux Toolkit, and Vite for the Paradise Nursery final project.

## Project links

- [Live application](https://noumi92.github.io/paradise-nursery/)
- [Public repository](https://github.com/noumi92/paradise-nursery)
- [Submission links](SUBMISSION.md#3-submit-these-urls)

## Features

- Landing page with a photographic background, company name, About Us text, and Get Started link.
- 18 distinct houseplants in three categories, with six plants per category.
- Each product displays a local thumbnail, name, USD price, and Add to Cart button.
- Add to Cart dispatches a Redux action and disables the button while the plant is in the cart.
- Shared navigation on all pages: Home, Plants, and Cart, with a live total-quantity badge.
- Cart displays thumbnails, names, unit prices, quantities, line totals, total plant count, and total price.
- Increase, decrease, and delete controls update Redux and all totals immediately.
- Decreasing a quantity of one removes the item. A removed plant can be added again.
- Checkout displays a Coming Soon message; Continue Shopping opens the catalog.
- Mobile layout, descriptive button labels, keyboard focus indicators, and empty-cart state.

## Run locally

Use Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open the local address printed by Vite. Do not double-click index.html: JSX needs the Vite build process.

```bash
npm test
npm run build
npm run preview
```

## Deploy and submit

See [SUBMISSION.md](SUBMISSION.md) for publishing instructions and exact submission URL patterns. The `.github/workflows/deploy.yml` workflow builds and publishes to GitHub Pages. Hash navigation and relative assets support repository subpaths without server-side rewrite rules.

## Project structure

| File | Purpose |
| --- | --- |
| `src/App.jsx` | Landing page and three-view hash navigation |
| `src/AboutUs.jsx` | Company information |
| `src/App.css` | Responsive styling and landing-page background image |
| `src/ProductList.jsx` | Three categories and product add controls |
| `src/CartSlice.jsx` | Redux cart actions, reducer, and derived selectors |
| `src/CartItem.jsx` | Shopping cart page and quantity controls |
| `src/Header.jsx` | Shared navbar and reactive cart count |
| `src/store.js` | Redux store configuration |
| `src/main.jsx` | React root and Redux Provider |
| `src/plants.js` | 18 products, prices, categories, and image paths |
| `public/images/` | Locally packaged product and background photographs |
| `tests/cart.test.mjs` | Reducer behavior and totals tests |

## Behavior and scope

This is a front-end demonstration. Prices and company copy are sample content. No payment, account, order submission, backend, tax, shipping, or inventory service is implemented. Cart state is kept in memory and resets on a full browser refresh. Checkout intentionally says Coming Soon, as required by the assignment.

Plant photo credits and license details are in [IMAGE-CREDITS.md](IMAGE-CREDITS.md). Photos are resized/cropped for display, and no remote product-image service is required at runtime. Google Fonts are optional; system font fallbacks keep the app usable without them.
