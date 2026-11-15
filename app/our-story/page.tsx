import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Lightbulb, Scissors } from "lucide-react";
import { images } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Our Story", description: "Meet the mother-daughter makers behind Generational Gems." };
export default function StoryPage() { return <>
  <section className="story-hero"><div className="story-hero-copy"><p className="script">Made together</p><h1>A love for creating,<br/><em>passed from one pair<br/>of hands to another.</em></h1></div><div className="story-hero-image"><Image src={images.makers} alt="Two generations crafting a fabric ornament together" fill priority sizes="(max-width: 800px) 100vw, 58vw"/></div></section>
  <Reveal><section className="story-chapter section-pad"><p className="eyebrow">Our beginning</p><div><h2>The best ideas often begin around the kitchen table.</h2><p>Generational Gems is a small family business built by a mother and daughter who have always loved making things. We trade ideas, teach each other little tricks, and turn ordinary materials into pieces that feel warm, useful, and full of personality.</p><p>Our story is still being written. Before launch, this page will be updated with the owners’ real names, memories, and the moments that made crafting together feel like something worth sharing.</p></div></section></Reveal>
  <Reveal><section className="process section-pad"><div className="section-heading"><div><p className="eyebrow">Our creative process</p><h2>From a spark<br/><em>to something special</em></h2></div></div><div className="process-list"><div><Lightbulb aria-hidden="true"/><span>01</span><h3>We imagine</h3><p>A color, a season, or a story becomes the first little spark.</p></div><div><Scissors aria-hidden="true"/><span>02</span><h3>We make</h3><p>Materials are chosen, shaped, stitched, painted, and adjusted by hand.</p></div><div><Heart aria-hidden="true"/><span>03</span><h3>We share</h3><p>The finished piece finds a home where it can become part of another story.</p></div></div></section></Reveal>
  <Reveal><section className="story-final"><Image src={images.hero} alt="Warm, sunlit handmade craft studio" fill sizes="100vw"/><div><p className="script">Thank you for stopping by</p><h2>We’re so glad you’re here.</h2><Link className="button button-light" href="/shop">Browse our samples <ArrowRight aria-hidden="true"/></Link></div></section></Reveal>
  </>; }
