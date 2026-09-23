import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from './CartSlice.jsx';
export function CartIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M3 3h2l2.4 12h11.8l2-8H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>; }
export default function Header({ page }) {
  const quantity = useSelector(selectTotalQuantity);
  return <header className="site-header"><a className="brand" href="#/" aria-label="Paradise Nursery home"><span className="brand-mark" aria-hidden="true">P<span>•</span></span><span>PARADISE<small>NURSERY</small></span></a><nav aria-label="Main navigation"><a href="#/" aria-current={page === 'home' ? 'page' : undefined}>Home</a><a href="#/plants" aria-current={page === 'plants' ? 'page' : undefined}>Plants</a><a className="cart-link" href="#/cart" aria-current={page === 'cart' ? 'page' : undefined}><CartIcon/><span>Cart</span><span className="cart-count" aria-label={`${quantity} plants in cart`} aria-live="polite">{quantity}</span></a></nav></header>;
}
