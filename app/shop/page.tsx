import type { Metadata } from "next";
import { ShopGrid } from "./shop-grid";

export const metadata: Metadata = { title: "Shop Sample Creations", description: "Browse sample handmade decor, gifts, seasonal pieces, and custom creation ideas." };
export default function ShopPage() { return <div className="page-shell"><header className="page-hero"><p className="eyebrow">The sample collection</p><h1>Thoughtful things,<br/><em>made slowly.</em></h1><p>Explore examples of our style. These pieces and prices are placeholders—not live inventory or online listings.</p></header><ShopGrid/></div>; }
