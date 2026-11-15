"use client";

import { useEffect, useMemo, useState } from "react";
import { categories, products } from "@/data/site";
import { ProductCard } from "@/components/ProductCard";

export function ShopGrid() {
  const [active, setActive] = useState("all");
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("category");
    const frame = window.requestAnimationFrame(() => {
      if (requested && categories.some(category => category.slug === requested)) setActive(requested);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);
  const filtered = useMemo(() => active === "all" ? products : products.filter(p => p.category === active), [active]);
  return <section className="shop-section" aria-labelledby="shop-heading"><h2 id="shop-heading" className="sr-only">Handmade creations</h2><div className="filters" role="group" aria-label="Filter handmade creations by category"><button aria-pressed={active === "all"} onClick={() => setActive("all")}>All creations</button>{categories.map(c => <button aria-pressed={active === c.slug} onClick={() => setActive(c.slug)} key={c.slug}>{c.name}</button>)}</div><p className="result-count" aria-live="polite">Showing {filtered.length} {filtered.length === 1 ? "creation" : "creations"}</p>{filtered.length ? <div className="product-grid">{filtered.map(product => <ProductCard key={product.slug} product={product}/>)}</div> : <div className="empty-state"><h3>Nothing on this shelf just yet.</h3><p>Try another collection, or tell us what you have in mind.</p></div>}</section>;
}
