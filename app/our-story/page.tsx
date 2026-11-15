import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Lightbulb, Scissors } from "lucide-react";
import { images } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Our Story", description: "Meet the mother-daughter makers behind Generational Gems." };
export default function StoryPage() { return <>
  <section className="story-hero"><div className="story-hero-copy"><h1>A love for making,<br/><em>shared between us.</em></h1></div><div className="story-hero-image"><Image src={images.makers} alt="Handmade floral fabric wristlet key fobs held together" fill priority sizes="(max-width: 800px) 100vw, 58vw"/></div></section>
  <Reveal><section className="story-chapter section-pad"><div><h2>The best ideas often begin around the kitchen table.</h2><p>Generational Gems is a mother-daughter business built on shared ideas, small lessons, and the simple joy of making something by hand.</p></div></section></Reveal>
  <Reveal><section className="process section-pad"><div className="section-heading compact-heading"><div><h2>From a spark<br/><em>to something special</em></h2></div></div><div className="process-list"><div><Lightbulb aria-hidden="true"/><span>01</span><h3>We imagine</h3><p>A color, a season, or a story starts the idea.</p></div><div><Scissors aria-hidden="true"/><span>02</span><h3>We make</h3><p>Each piece is shaped and finished by hand.</p></div><div><Heart aria-hidden="true"/><span>03</span><h3>We share</h3><p>It leaves our table ready to become part of yours.</p></div></div></section></Reveal>
  <Reveal><section className="story-final"><Image src={images.hero} alt="Blue floral wristlet and matching handmade bow keychain" fill sizes="100vw"/><div><h2>We’re so glad you’re here.</h2><Link className="button button-light" href="/shop">Browse our creations <ArrowRight aria-hidden="true"/></Link></div></section></Reveal>
  </>; }
