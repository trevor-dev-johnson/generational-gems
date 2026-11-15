import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, Sparkles } from "lucide-react";
import { categories, images, products } from "@/data/site";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return <>
    <section className="hero">
      <Image src={images.hero} alt="Sunlit craft studio with a handmade wreath, pottery, ribbon, and dried flowers" fill priority sizes="100vw"/>
      <div className="hero-wash"/><div className="hero-copy"><p className="eyebrow">Made by two generations</p><h1>Handmade with Love, <em>Shared Through Generations.</em></h1><p>Thoughtfully crafted treasures, charming little finds, and one-of-a-kind creations made with love by a mother-daughter duo.</p><div className="hero-actions"><Link className="button button-primary" href="/shop">Explore our creations <ArrowRight aria-hidden="true"/></Link><Link className="text-link light" href="/our-story">Meet the makers</Link></div></div>
      <div className="hero-note"><Leaf aria-hidden="true"/><span>Small-batch<br/>and made by hand</span></div>
    </section>

    <Reveal><section className="intro"><p className="script">From our hands to your home</p><h2>Little things, lovingly made.</h2><p>We believe the most meaningful treasures feel personal—the ones with a story in every stitch, brushstroke, and carefully chosen detail.</p><div className="values"><span><Heart aria-hidden="true"/> Family made</span><span><Leaf aria-hidden="true"/> Thoughtful details</span><span><Sparkles aria-hidden="true"/> One of a kind</span></div></section></Reveal>

    <Reveal><section className="categories section-pad"><div className="section-heading"><div><p className="eyebrow">Browse the shelves</p><h2>A Little Something<br/><em>for Everyone</em></h2></div><p>Warm, whimsical pieces for everyday corners, heartfelt gifts, and seasons worth celebrating.</p></div><div className="category-grid">{categories.map((category, i) => <Link href={`/shop?category=${category.slug}`} className={`category-item category-${i+1}`} key={category.slug}><Image src={category.image} alt={`${category.name} collection placeholder`} fill sizes="(max-width: 700px) 92vw, 33vw"/><span><b>0{i+1}</b>{category.name}<ArrowRight aria-hidden="true"/></span></Link>)}</div></section></Reveal>

    <Reveal><section className="featured section-pad"><div className="section-heading"><div><p className="eyebrow">A peek at the worktable</p><h2>Made by Hand,<br/><em>Made for You</em></h2></div><div><p>These sample creations show our style, not current inventory.</p><Link href="/shop" className="text-link">See all samples</Link></div></div><div className="product-grid">{products.slice(0, 6).map(product => <ProductCard key={product.slug} product={product}/>)}</div></section></Reveal>

    <Reveal><section className="story-band"><div className="story-image"><Image src={images.makers} alt="Mother and adult daughter tying ribbon on a handmade fabric ornament" fill sizes="(max-width: 800px) 100vw, 55vw"/></div><div className="story-copy"><p className="script">A shared tradition</p><h2>Two Generations.<br/>One Love for Creating.</h2><p>What began around a family table grew into Generational Gems—a mother and daughter sharing ideas, learning from one another, and making beautiful little things with a whole lot of heart.</p><Link className="button button-outline" href="/our-story">Read our story <ArrowRight aria-hidden="true"/></Link></div></section></Reveal>

    <Reveal><section className="custom-cta section-pad"><div><p className="eyebrow">Made especially for you</p><h2>Have something<br/><em>lovely in mind?</em></h2></div><div><p>Looking for a meaningful gift or a piece with your colors, story, or celebration woven in? We would love to hear what you’re dreaming up.</p><Link href="/custom-orders" className="button button-primary">Let’s create something <ArrowRight aria-hidden="true"/></Link></div></section></Reveal>

    <Reveal><section className="social section-pad"><div className="social-title"><p className="script">Follow along</p><h2>Come See What We’re Making</h2><p>Fresh ideas, works in progress, and little glimpses behind the scenes. Social links will be added before launch.</p></div><div className="social-grid">{[images.wreath, images.makers, images.ceramics, images.hero].map((src, i) => <div key={src} className={`social-tile tile-${i+1}`}><Image src={src} alt="Social post placeholder showing handmade craft inspiration" fill sizes="25vw"/><span>Post placeholder</span></div>)}</div></section></Reveal>
  </>;
}
