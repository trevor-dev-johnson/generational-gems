import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/site";

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <Link href={`/shop/${product.slug}`} className="product-image-wrap" aria-label={`View sample details for ${product.name}`}>
      <Image src={product.image} alt={`${product.name} sample placeholder`} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 30vw" style={{ objectPosition: product.imagePosition }} />
      <span>Sample creation</span>
    </Link>
    <div className="product-copy"><div><h3>{product.name}</h3>{product.price && <p className="price">Sample price {product.price}</p>}</div><p>{product.description}</p><Link href={`/shop/${product.slug}`}>View details <ArrowUpRight aria-hidden="true"/></Link></div>
  </article>
}
