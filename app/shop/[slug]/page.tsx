import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { products } from "@/data/site";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  return product ? { title: product.name, description: product.description } : { title: "Sample Creation" };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  if (!product) notFound();
  return <div className="detail-page"><Link href="/shop" className="back-link"><ArrowLeft aria-hidden="true"/> Back to samples</Link><div className="detail-layout"><div className="detail-image"><Image src={product.image} alt={`${product.name} sample placeholder`} fill priority sizes="(max-width: 800px) 100vw, 55vw" style={{ objectPosition: product.imagePosition }}/></div><div className="detail-copy"><p className="eyebrow">Sample creation · Not live inventory</p><h1>{product.name}</h1>{product.price && <p className="detail-price">Sample price {product.price}</p>}<p className="lead">{product.description}</p><div className="delicate-rule"/><p>{product.details}</p><div className="handmade-note"><Heart aria-hidden="true"/><span><b>Made by hand</b>Actual pieces will have natural variations—the little differences that make handmade work special.</span></div><Link className="button button-primary" href="/custom-orders">Ask about something similar <ArrowRight aria-hidden="true"/></Link></div></div></div>;
}
