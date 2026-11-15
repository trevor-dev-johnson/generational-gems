export const images = {
  hero: "/product-images/floral-bow-keychain.webp",
  wristlets: "/product-images/wristlet-collection.webp",
  floralWristlets: "/product-images/floral-wristlets.webp",
  ornaments: "/product-images/christmas-goose-ornament.webp",
  bows: "/product-images/gingerbread-door-bow.webp",
  makers: "/product-images/maker-wristlets.webp",
  brandBanner: "/product-images/brand-banner.webp",
} as const;

export const categories = [
  { name: "Door Bows", slug: "home-decor", image: images.bows },
  { name: "Key Fobs", slug: "handmade-gifts", image: images.floralWristlets },
  { name: "Holiday Ornaments", slug: "seasonal", image: images.ornaments },
  { name: "Little Treasures", slug: "little-treasures", image: images.hero },
  { name: "Custom Creations", slug: "custom", image: images.makers },
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
  { slug: "floral-wristlet-key-fob", name: "Floral Wristlet Key Fob", category: "handmade-gifts", description: "A soft fabric wristlet that keeps keys close and hands free.", details: "Shown in a mix of floral and patterned cottons with sturdy metal hardware. Fabric placement varies naturally from piece to piece.", image: "/product-images/floral-wristlets.webp", sample: true },
  { slug: "blue-floral-bow-keychain", name: "Blue Floral Bow Keychain", category: "little-treasures", description: "A wristlet and bow pairing in a delicate blue floral print.", details: "A cheerful matching set finished with silver-tone hardware. Ask about current fabric choices and coordinating combinations.", image: "/product-images/floral-bow-keychain.webp", imagePosition: "center 48%", sample: true },
  { slug: "pixel-hero-ornament", name: "Pixel Hero Ornament", category: "seasonal", description: "A playful hand-stitched character ornament for the tree.", details: "Cross-stitched, backed, and finished by hand. Character designs and colors may vary with each seasonal collection.", image: "/product-images/pixel-hero-ornament.webp", sample: true },
  { slug: "merry-bright-ornament", name: "Merry & Bright Ornament", category: "seasonal", description: "A colorful stitched greeting made for cheerful holiday branches.", details: "Hand-stitched on shaped fabric and finished with a hanging loop. Each piece carries the small variations of handmade work.", image: "/product-images/merry-bright-ornament.webp", sample: true },
  { slug: "dear-santa-ornament", name: "Dear Santa Ornament", category: "seasonal", description: "A nostalgic stitched note with a wonderfully cheeky message.", details: "A handmade cross-stitch ornament with character, texture, and a classic Christmas palette.", image: "/product-images/dear-santa-ornament.webp", sample: true },
  { slug: "christmas-goose-ornament", name: "Christmas Goose Ornament", category: "seasonal", description: "A festive little goose delivering a present beside the tree.", details: "Cross-stitched and assembled by hand for a playful, storybook addition to holiday decor.", image: "/product-images/christmas-goose-ornament.webp", sample: true },
  { slug: "gingerbread-door-bow", name: "Gingerbread Door Bow", category: "home-decor", description: "An oversized fabric bow sprinkled with tiny gingerbread friends.", details: "Designed to bring a soft handmade welcome to a front door. Final size, attachment, and fabric availability are confirmed by email.", image: "/product-images/gingerbread-door-bow.webp", sample: true },
  { slug: "buffalo-plaid-door-bow", name: "Buffalo Plaid Door Bow", category: "custom", description: "A generous black-and-white bow with cozy farmhouse character.", details: "A statement-size handmade door bow that can inspire a custom color or seasonal fabric request.", image: "/product-images/buffalo-plaid-door-bow.webp", sample: true },
];

export const contactEmail = "generationalgemsin@gmail.com";
