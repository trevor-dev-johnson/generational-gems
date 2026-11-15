import type { Metadata } from "next";
import { ShopGrid } from "./shop-grid";

export const metadata: Metadata = { title: "Shop Handmade Creations", description: "Browse handmade key fobs, stitched ornaments, door bows, and custom creation ideas." };
export default function ShopPage() { return <div className="page-shell"><header className="page-hero"><h1>Thoughtful things,<br/><em>made slowly.</em></h1><p>Real pieces from our worktable. Ask about current availability.</p></header><ShopGrid/></div>; }
