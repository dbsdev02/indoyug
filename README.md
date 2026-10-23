# Indoyug Clean Tech LLP — Website

Multi-page React website for Indoyug Clean Tech LLP (cleanroom equipment, laboratory furniture, SS modular furniture, HVAC and turnkey projects).

**Stack:** React 18 · Vite 5 · TypeScript · Tailwind CSS 3 · React Router 6 · Framer Motion · Lucide · React Hook Form + Zod · react-helmet-async
**Output:** every route is **prerendered to static HTML** at build time (real content, per-page title/meta/canonical/Open Graph/JSON-LD), then hydrated into a single-page app.

---

## Run locally

```bash
npm install
cp .env.example .env        # optional — see "Environment variables"
npm run dev                 # http://localhost:5173
```

## Build & preview

```bash
npm run build               # type-check → vite build → prerender 72 routes + sitemap + robots + redirects
npx serve dist              # or any static server that serves dir/index.html
```

`npm run build` writes to `dist/`:

| File | Purpose |
|---|---|
| `*/index.html` | Prerendered HTML for every page (58 indexable + utility routes) |
| `404.html` | Branded not-found page (served with HTTP 404) |
| `sitemap.xml`, `robots.txt` | Generated from the data files; drafts/placeholders excluded |
| `_redirects` | Netlify: 301s from old WordPress URLs + 404 handling |
| `vercel.json` | Vercel: same redirects, clean URLs |
| `.htaccess` | Apache/cPanel: same redirects, directory index, `ErrorDocument 404` |

## Environment variables

| Variable | Purpose |
|---|---|
| `VITE_SITE_URL` | Canonical domain, e.g. `https://www.indoyug.in` (canonicals, OG, sitemap) |
| `VITE_ENQUIRY_ENDPOINT` | URL that receives form POSTs (see below). **Empty = forms show an honest "not connected" error with phone/email — never a fake success.** |
| `VITE_SHOW_EDITOR_NOTES` | `true` while reviewing (shows amber "content pending" notes for the Indoyug team). **Set to `false` at launch.** |

Anything prefixed `VITE_` is shipped to the browser — never put secrets in these.

## Enquiry forms & backend

- Forms: Request a Quote (full, with file upload), product enquiry (every product page), contact, manufacturing, turnkey project, quality, industry pages.
- Client: Zod validation, accessible errors, honeypot + minimum fill-time spam checks, loading state, 20 s timeout.
- Success is shown **only** when the backend returns `200 {"ok": true, "reference": "…"}`; the `/thank-you` page refuses to show a confirmation if visited directly.
- `server/enquiry-handler.mjs` is a reference Node/Express backend: re-validates and sanitises input, re-checks spam signals, rate-limits per IP, accepts one attachment (≤10 MB, whitelisted types) and emails the enquiry via SMTP. Credentials stay in server-side env vars. Any equivalent (serverless function, PHP mailer, CRM webhook) works if it honours the same JSON contract.

## Deploy

1. Set `VITE_SITE_URL`, `VITE_ENQUIRY_ENDPOINT`, `VITE_SHOW_EDITOR_NOTES=false`.
2. `npm run build`.
3. Upload `dist/` to the host (Netlify, Vercel, Cloudflare Pages, or cPanel `public_html` — `.htaccess` is included).
4. Submit `https://www.indoyug.in/sitemap.xml` in Google Search Console.
5. Verify the old-URL redirects (`/about/`, `/fume-hoods/`, `/biosafety-cabinet/`, …) return 301.

## Project structure

```
src/
  components/
    common/     SEO, Breadcrumbs, PageHero, SectionHeading, ProductCard, IndustryCard, ProjectCard,
                CTASection, Accordion, Reveal, Notice/EditorNote, ImagePlaceholder, ProductImage
    forms/      EnquiryForm (quote / product / contact / short variants)
    layout/     Header (sticky, mega menu), MegaMenu, MobileMenu, Footer, ScrollToTop, nav
    products/   ProductGallery, ProductSpecifications, RelatedProducts
  data/         company, categories, products (35), industries (7), projects, resources, articles, faqs
  layouts/      MainLayout
  lib/          enquiry (form client), search (site search index), lazyPage, utils
  pages/        22 page components (one per route) + LegalPage template
  routes/       pages (route table), manifest (URLs for sitemap/prerender), preload
  types/        shared content types (CMS-ready)
  entry-server.tsx  build-time prerender entry
scripts/prerender.mjs   prerender + sitemap + robots + redirects
server/enquiry-handler.mjs  reference backend
public/assets/{brand,products,manufacturing,industries,projects,resources}
```

To add a product: append an object to `src/data/products.ts`. Its detail page, catalogue card, search entry, mega-menu link, sitemap URL and prerendered HTML are generated automatically.

## Content rules followed

- All specifications come from the brochure (V5). Where none are published the page says **"Specifications available on request"**.
- Products the brochure only lists (no dedicated page) show a "detailed information coming soon" notice and a labelled photo placeholder — no stock photos of other manufacturers' equipment.
- No prices, ratings, reviews, testimonials, client names, certificates or ISO/cGMP compliance claims are published. Product schema contains only name/description/image/brand/brochure specs.
- Gallery items are labelled **"Brochure imagery"** and set to `noindex` until replaced by approved case studies.
- Insights articles are marked **"Editorial draft · pending technical review"** and `noindex` until an engineer sets `reviewStatus: 'approved'`.
- Legal pages are drafts with sections flagged **"Legal review required"**.

See `CONTENT-GAPS.md` for what Indoyug needs to supply before launch.
