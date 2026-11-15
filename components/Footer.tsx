import Link from "next/link";
import { Facebook, Mail, Sprout } from "lucide-react";

export function Footer() {
  return <footer className="footer">
    <div className="footer-main">
      <div><div className="footer-mark"><Sprout aria-hidden="true"/> Generational Gems</div><p>A little creativity, a lot of love, and treasures worth sharing.</p></div>
      <div><h2>Explore</h2><Link href="/shop">Shop</Link><Link href="/our-story">Our Story</Link><Link href="/custom-orders">Custom Orders</Link></div>
      <div><h2>Say hello</h2><Link href="/contact"><Mail aria-hidden="true"/> Contact us</Link><span className="placeholder-link"><Facebook aria-hidden="true"/> Find us on Facebook</span></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Generational Gems</span><span>Handmade with heart</span></div>
  </footer>
}
