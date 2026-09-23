import React, { useEffect, useState } from 'react';
import AboutUs from './AboutUs.jsx';
import Header from './Header.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';
const currentPage = () => window.location.hash === '#/cart' ? 'cart' : window.location.hash === '#/plants' ? 'plants' : 'home';
export default function App() {
  const [page, setPage] = useState(currentPage);
  useEffect(() => {
    const navigate = () => { setPage(currentPage()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);
  return <><a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); const main = document.getElementById('main-content'); main.setAttribute('tabindex', '-1'); main.focus(); }}>Skip to content</a><Header page={page}/>{page === 'home' ? <main id="main-content" className="landing"><div className="hero-content"><p className="eyebrow">A LITTLE GREEN. A LOT OF LIFE.</p><h1>Paradise<br/><em>Nursery</em></h1><div className="hero-rule"/><AboutUs/><a className="button hero-button" href="#/plants">Get Started <span aria-hidden="true">↗</span></a></div><div className="hero-caption">GROW YOUR OWN LITTLE PARADISE</div></main> : page === 'plants' ? <ProductList/> : <CartItem/>}<footer>Paradise Nursery <span>Bring nature home. · <a href="photo-credits.html">Photo credits</a></span></footer></>;
}
