export const images = {
  hero: "/images/workshop-hero.webp",
  wreath: "/images/botanical-wreath.webp",
  ceramics: "/images/ceramic-treasures.webp",
  makers: "/images/makers-hands.webp",
} as const;

export const categories = [
  { name: "Home Decor", slug: "home-decor", image: images.wreath },
  { name: "Handmade Gifts", slug: "handmade-gifts", image: images.ceramics },
  { name: "Seasonal Favorites", slug: "seasonal", image: images.makers },
  { name: "Little Treasures", slug: "little-treasures", image: images.ceramics },
  { name: "Custom Creations", slug: "custom", image: images.wreath },
] as const;

export type Product = {
  slug: string;
  name: string;
  category: (typeof categories)[number]["slug"];
  description: string;
  details: string;
  price?: string;
  image: string;
  imagePosition?: string;
  sample: true;
};

export const products: Product[] = [
  { slug: "meadowlight-wreath", name: "Meadowlight Wreath", category: "home-decor", price: "$48", description: "Dried blooms and quiet sage tones for a welcoming doorway.", details: "A sample of the botanical, gathered style we love. Final materials and sizing will vary with each handmade piece.", image: images.wreath, sample: true },
  { slug: "pressed-botanical-dish", name: "Pressed Botanical Dish", category: "little-treasures", price: "$18", description: "A softly shaped catchall with a hand-pressed floral detail.", details: "A sample concept for rings, keys, or tiny keepsakes. Each handmade dish would have its own organic shape and botanical impression.", image: images.ceramics, sample: true },
  { slug: "hearthside-bud-vase", name: "Hearthside Bud Vase", category: "handmade-gifts", price: "$24", description: "A petite, earthy vessel made for one thoughtful stem.", details: "A sample gift idea with warm, speckled texture and an intentionally imperfect silhouette.", image: images.ceramics, imagePosition: "70% center", sample: true },
  { slug: "gathered-bloom-wreath", name: "Gathered Bloom Wreath", category: "seasonal", price: "$54", description: "A seasonal circle of everlasting flowers and field greens.", details: "A sample seasonal direction. Palette and botanicals can shift throughout the year or inspire a custom request.", image: images.wreath, imagePosition: "35% center", sample: true },
  { slug: "little-leaf-dish", name: "Little Leaf Dish", category: "handmade-gifts", price: "$16", description: "A small sage dish with a tender, scalloped edge.", details: "A sample hostess or just-because gift. Because pieces are handmade, each one would be naturally unique.", image: images.ceramics, imagePosition: "20% center", sample: true },
  { slug: "memory-star-ornament", name: "Memory Star Ornament", category: "seasonal", price: "$22", description: "Soft linen, careful stitching, and ribbon for generations of holidays.", details: "A sample ornament that could be personalized through a future custom order. No personalization is currently sold online.", image: images.makers, sample: true },
  { slug: "garden-table-set", name: "Garden Table Set", category: "home-decor", description: "A coordinated group of organic ceramics for the coziest corners.", details: "A sample styling set showing how several small handmade pieces could live together. Pricing would depend on the final selection.", image: images.ceramics, sample: true },
  { slug: "made-for-you-keepsake", name: "Made-for-You Keepsake", category: "custom", description: "A personal piece shaped around a story, season, or celebration.", details: "A sample custom-order concept. Share your idea and we will use email to discuss feasibility, timing, and a quote.", image: images.makers, imagePosition: "center 45%", sample: true },
];

export const contactEmail = "hello@example.com"; // Replace before launch.
