# Generational Gems

A warm, editorial boutique website for a mother-daughter handmade crafts business. Built with Next.js App Router, TypeScript, Tailwind CSS, and local structured data. The site exports to static HTML for Cloudflare Pages and does not require a server, database, checkout provider, or paid service.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify and build

```bash
npm run lint
npm run typecheck
npm run build
```

The production-ready static site is written to `out/`.

## Publish through GitHub and Cloudflare Pages

1. Create an empty GitHub repository. Do not add a README or starter files there.
2. From this project folder, run:

   ```bash
   git init
   git add .
   git commit -m "Build Generational Gems website"
   git branch -M main
   git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
   git push -u origin main
   ```

3. In Cloudflare, open **Workers & Pages**, choose **Create application**, then **Pages** and **Connect to Git**.
4. Select the repository and use these settings:

   | Setting | Value |
   | --- | --- |
   | Production branch | `main` |
   | Framework preset | Next.js (Static HTML Export) |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | repository root / blank |

5. Deploy. Cloudflare will provide a temporary `*.pages.dev` address.

No domain is hardcoded. After a real domain is purchased, add it from the Pages project's **Custom domains** screen and follow Cloudflare's ownership/DNS prompts. Update canonical metadata only after the final domain is known.

## Edit products and categories

All inventory examples, categories, image paths, and the contact email are centralized in [`data/site.ts`](data/site.ts).

- Update a product by editing its object in `products`.
- Add a product by copying an existing object and giving it a unique URL-safe `slug`.
- Keep `sample: true` while availability is confirmed by email rather than through online checkout.
- Remove `price` when pricing is not ready.
- Category values must match one of the slugs in `categories`.

Product detail routes are generated at build time from this file. Run `npm run build` after changes.

## Replace photos

Original uploaded photography lives locally in the git-ignored `public/real_images/` and `public/branding_images/` folders. The web-ready versions used by the site live in the versioned `public/product-images/` folder.

- Run `node scripts/optimize-real-images.mjs` after replacing or adding source photos.
- Keep the descriptive filenames in `public/product-images/` aligned with the paths in `data/site.ts`.
- Product photos are stored as optimized WebP files for faster page loads.
- The production build automatically removes the source-resolution folders from `out/`, so only optimized derivatives are deployed.

The original generated placeholders remain in `assets/source-images/` and `public/images/` for reference, but the visible site now uses the real product photography. Keep filenames lowercase and web-friendly, and update descriptive alt text if a photo’s subject changes.

## Forms

The Contact and Custom Orders forms validate in the browser, then open a prefilled draft addressed to `generationalgemsin@gmail.com` in the visitor's email app. Nothing is submitted automatically and there is no hidden backend.

## Information needed before launch

- Owners' names and approved mother-daughter story
- Current prices and availability
- Additional lifestyle photography, if desired
- Confirmed custom-order policies and typical lead times
- Social profile links, if any
- Shipping/pickup area and any business policies that should be shown
- Purchased domain, only when ready
