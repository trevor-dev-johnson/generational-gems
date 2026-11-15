import type { Metadata } from "next";
import { ShopGrid } from "./shop-grid";

export const metadata: Metadata = { title: "Shop Sample Creations", description: "Browse sample handmade decor, gifts, seasonal pieces, and custom creation ideas." };
export default function ShopPage() { return <div className="page-shell"><header className="page-hero"><h1>Thoughtful things,<br/><em>made slowly.</em></h1><p>Sample pieces and prices—not live inventory.</p></header><ShopGrid/></div>; }
