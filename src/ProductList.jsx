import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice.jsx';
import { categories, money } from './plants.js';
export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  return <main id="main-content" className="container catalog"><div className="page-intro"><div><p className="eyebrow">THE PLANT COLLECTION</p><h1>Find your new <em>green companion.</em></h1></div><p>Small pots. Big personality.<br/>A plant for every corner of your home.</p></div>{categories.map((category, index) => <section className="category" key={category.name} aria-labelledby={`category-${index}`}><div className="category-heading"><h2 id={`category-${index}`}><span>0{index + 1}</span>{category.name}</h2><p>{category.description}</p></div><div className="plant-grid">{category.plants.map(plant => {
    const added = items.some(item => item.id === plant.id);
    return <article className="plant-card" key={plant.id}><div className="plant-photo"><img src={plant.image} alt={plant.name} loading="lazy" width="480" height="480"/></div><div className="plant-info"><div className="plant-title"><h3>{plant.name}</h3><span>{money(plant.price)}</span></div><p>{plant.description}</p><button className={added ? 'add-button added' : 'add-button'} disabled={added} onClick={() => dispatch(addItem(plant))} aria-label={added ? `${plant.name} added to cart` : `Add ${plant.name} to cart`}>{added ? '✓ Added to Cart' : 'Add to Cart'}{!added && <span aria-hidden="true">+</span>}</button></div></article>;
  })}</div></section>)}</main>;
}
