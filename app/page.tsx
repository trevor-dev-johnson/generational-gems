import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, images, products } from "@/data/site";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return <>
    <section className="hero">
      <Image src={images.hero} alt="Blue floral fabric wristlet and matching bow keychain handmade by Generational Gems" fill priority sizes="100vw"/>
      <div className="hero-wash"/><div className="hero-copy"><h1>Little treasures, <em>made with love.</em></h1><p>Handmade gifts and cozy finds, crafted by a mother-daughter duo.</p><div className="hero-actions"><Link className="button button-primary" href="/shop">Shop Our Creations <ArrowRight aria-hidden="true"/></Link><Link className="text-link light" href="/our-story">Meet the makers</Link></div></div>
    </section>

    <Reveal><section className="categories section-pad"><div className="section-heading compact-heading"><div><h2>A Little Something<br/><em>for Everyone</em></h2></div></div><div className="category-grid">{categories.map((category, i) => <Link href={`/shop?category=${category.slug}`} className={`category-item category-${i+1}`} key={category.slug}><Image src={category.image} alt={`${category.name} handmade collection`} fill sizes="(max-width: 700px) 78vw, 33vw"/><span><b>0{i+1}</b>{category.name}<ArrowRight aria-hidden="true"/></span></Link>)}</div></section></Reveal>

    <Reveal><section className="featured section-pad"><div className="section-heading"><div><h2>Fresh from<br/><em>the worktable</em></h2></div><div><p>Real handmade pieces—ask about current availability.</p><Link href="/shop" className="text-link">See all creations</Link></div></div><div className="product-grid">{products.slice(0, 6).map(product => <ProductCard key={product.slug} product={product}/>)}</div></section></Reveal>

    <Reveal><section className="story-band"><div className="story-image"><Image src={images.makers} alt="Three floral fabric wristlet key fobs displayed by hand" fill sizes="(max-width: 800px) 100vw, 55vw"/></div><div className="story-copy"><h2>Made<br/>together.</h2><p>We’re a mother-daughter team turning favorite fabrics and playful ideas into useful little treasures.</p><Link className="button button-outline" href="/our-story">Read our story <ArrowRight aria-hidden="true"/></Link></div></section></Reveal>

    <Reveal><section className="custom-cta section-pad"><div><h2>Have something<br/><em>lovely in mind?</em></h2></div><div><p>Tell us what you’re dreaming up, and we’ll see what we can make together.</p><Link href="/custom-orders" className="button button-primary">Start a custom order <ArrowRight aria-hidden="true"/></Link></div></section></Reveal>

    <Reveal><div className="brand-banner"><Image src={images.brandBanner} alt="Handmade Creations — Crafted with Care, One Piece at a Time" width={851} height={315}/></div></Reveal>

    <Reveal><section className="social section-pad"><div className="social-title"><h2>Come See What We’re Making</h2><p>Fabric favorites, hand-stitched details, and a little holiday cheer.</p></div><div className="social-grid">{[images.wristlets, images.ornaments, images.bows, images.hero].map((src, i) => <div key={src} className={`social-tile tile-${i+1}`}><Image src={src} alt="A real handmade Generational Gems creation" fill sizes="(max-width: 600px) 50vw, 25vw"/></div>)}</div></section></Reveal>
  </>;
}
