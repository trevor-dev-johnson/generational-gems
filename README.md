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

All sample inventory, categories, prices, image paths, and the contact email are centralized in [`data/site.ts`](data/site.ts).

- Update a product by editing its object in `products`.
- Add a product by copying an existing object and giving it a unique URL-safe `slug`.
- Keep `sample: true` until the listing represents real approved inventory.
- Remove `price` when pricing is not ready.
- Category values must match one of the slugs in `categories`.
- Replace `hello@example.com` in `contactEmail` before launch.

Product detail routes are generated at build time from this file. Run `npm run build` after changes.

## Replace photos

Optimized, web-ready placeholders live in `public/images/`:

- `workshop-hero.webp`
- `botanical-wreath.webp`
- `ceramic-treasures.webp`
- `makers-hands.webp`

The high-resolution generated PNG sources are kept in `assets/source-images/` and are not included in the deployed site. You can overwrite a public WebP with an optimized replacement of the same name, or add a new file and update the `images` map in [`data/site.ts`](data/site.ts). Keep filenames lowercase and web-friendly. Use descriptive alt text in the component if the subject changes. For best performance, use WebP or optimized JPEG/PNG files sized close to their displayed dimensions.

## Forms

The Contact and Custom Orders forms validate in the browser, then open a prefilled draft in the visitor's email app. Nothing is submitted automatically and there is no hidden backend. Replace the placeholder email before launch and test the handoff on a phone and desktop computer with a configured mail app.

## Information needed before launch

- Owners' names and approved mother-daughter story
- Real contact email and preferred response-time wording
- Current product names, descriptions, prices, and availability
- Final product and lifestyle photography
- Confirmed custom-order policies and typical lead times
- Social profile links, if any
- Shipping/pickup area and any business policies that should be shown
- Purchased domain, only when ready
