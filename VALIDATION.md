# Validation results

Validated locally against the production build served at `/paradise-nursery/`, matching a GitHub Pages repository subpath. This is not confirmation of a live GitHub Pages deployment.

- `npm test`: 2 tests passed; 0 failed. Cart reducer and derived totals cover adding, duplicate add protection, increases, decreases, zero removal, deletion, re-adding, and missing IDs.
- `npm run build`: passed with Vite 6.4.3.
- Headless Chromium browser flow: passed. All 18 product cards and 3 category groups render. Add buttons disable; badge updates; cart totals move from $40 to $58 and back; deletion and zero-removal work; removed products can be re-added; checkout shows Coming Soon; Continue Shopping navigates correctly; empty cart is handled.
- All 18 local product images decoded successfully in the browser.
- Mobile width 390px: no horizontal document overflow on Home, Plants, or Cart.
- No JavaScript page errors during the tested flow.
- Desktop and mobile screenshots saved in `screenshots/` and reviewed for layout.

A full reload resets the in-memory cart by design. Payment processing is intentionally unavailable. Publish and verify the live GitHub repository and Pages URLs before submitting the assignment.
