import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outputDir = path.join(root, "public", "product-images");

const images = [
  ["real_images/IMG_7211.jpeg", "wristlet-collection.webp"],
  ["real_images/IMG_7214.jpeg", "floral-wristlets.webp"],
  ["real_images/IMG_7216.jpeg", "maker-wristlets.webp"],
  ["real_images/IMG_7223.jpeg", "floral-bow-keychain.webp"],
  ["real_images/IMG_7284.jpeg", "pixel-hero-ornament.webp"],
  ["real_images/IMG_7287.jpeg", "merry-bright-ornament.webp"],
  ["real_images/IMG_7290.jpeg", "dear-santa-ornament.webp"],
  ["real_images/IMG_7297.jpeg", "santa-ornament.webp"],
  ["real_images/IMG_7303.jpeg", "christmas-goose-ornament.webp"],
  ["real_images/IMG_7305.jpeg", "tree-character-ornament.webp"],
  ["real_images/IMG_7318.jpeg", "evergreen-door-bow.webp"],
  ["real_images/IMG_7324.jpeg", "gingerbread-door-bow.webp"],
  ["real_images/IMG_7327.jpeg", "blue-door-bow.webp"],
  ["real_images/IMG_7333.jpeg", "buffalo-plaid-door-bow.webp"],
  ["branding_images/Handmade Creations Crafted with Care, One Piece at a Time.png", "brand-banner.webp"],
];

await mkdir(outputDir, { recursive: true });

await Promise.all(images.map(async ([source, destination]) => {
  await sharp(path.join(root, "public", source))
    .rotate()
    .resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(path.join(outputDir, destination));
}));

console.log(`Optimized ${images.length} images into ${outputDir}`);
