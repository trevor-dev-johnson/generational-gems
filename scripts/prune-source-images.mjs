import { rm } from "node:fs/promises";
import path from "node:path";

const outputDir = path.join(process.cwd(), "out");

await Promise.all([
  rm(path.join(outputDir, "real_images"), { recursive: true, force: true }),
  rm(path.join(outputDir, "branding_images"), { recursive: true, force: true }),
]);

console.log("Removed source-resolution image folders from the static export");
