# Paradigm site: developer notes

Public-safe notes for working on this repo. Keep this file free of personal names, emails, employer references and internal planning. Update it in the same change as any code or content decision.

## Stack
Next.js App Router (TypeScript), static export (`output: "export"`, `trailingSlash: true`, unoptimized images), Tailwind CSS v4 with tokens in `app/globals.css`, React 19, `@formspree/react`. Fonts via `next/font/google` (Inter body, Fraunces headlines). No backend, database or analytics.

## Code map
- `app/layout.tsx`: fonts, metadata, Open Graph, Organization JSON-LD (no personal fields), skip link
- `app/page.tsx`: all page sections; FAQ, problem, steps and "why" data live inline
- `app/globals.css`: tokens, type classes (`.h1 .h2 .h3`), buttons (`.btn*` inside `@layer components`), hero (`.aurora-*`), case cards, reduced-motion rules
- `components/`: `Header` (client), `Hero`, `CaseStudyCard` (client), `ContactForm` (client), `Footer`, `LegalPage`
- `lib/site.ts`: site URL, name, Formspree form ID
- `lib/caseStudies.ts`: case study data (text and numbers)
- `lib/solutions.ts`: copy for /solutions and the four industry pages (server only); `lib/solutionsNav.ts`: slim list for header/footer
- `app/solutions/page.tsx` and `app/solutions/[slug]/page.tsx`, `components/SolutionPage.tsx`, `ExampleFlow.tsx`, `Breadcrumb.tsx`, `PageSection.tsx`: Solutions section
- `public/`: `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`, `og.png`
- `.github/workflows/deploy.yml`: build and deploy to GitHub Pages on push to `main`

## Rules for content
- No personal names, photos, emails or social links anywhere (page, meta, JSON-LD, alt text, file names, comments).
- Only claims that have been confirmed. Numbers in use: audit 2 to 3 weeks; build 4 to 8 weeks; Skillful.ly more than 90% of candidate noise filtered and teams 70 to 80% more efficient; Awesome Motive third-party spend cut 60 to 70%, delivered in 12 weeks. Not stated: team size, years in operation, location, prices. FAQ industries answer: work across industries, most work in software and SaaS, same approach for operations-heavy businesses.
- Banned words: world-class, cutting-edge, revolutionary, seamless, leverage, synergy, unlock, game-changing. No em dashes.
- Testimonials are verbatim, title and company only.
- Awesome Motive is not PE-owned. Case studies carry no external links. Montaa is pre-launch: no launch language, customers or results.
- All buttons read "Talk to our team" and go to `/#contact`. No email address is shown.

## Solutions section
Solutions have names: Quoteline (job-shops), Paperflow (logistics), Packet Ready (solar-installers), LabFlow (biotech-data). Names live in `lib/solutions.ts` (`name`, `industry`) and `lib/solutionsNav.ts`; slugs and SEO titles stay industry-based. The names are not trademark-checked.
Pre-product framing: pages describe what we build, never what exists. Use "we build", "pilot", "design partner"; never "live", "deployed", "customers", "trusted by". Each page has an example flow and a mock screen labelled "Illustrative concept, sample data". No results, metrics or delivery-proof block appear on these pages (removed at the owner's request). Pricing text stays hidden until `PRICE_BAND_APPROVED` is set to true in `lib/solutions.ts`. `solar-installers` and `biotech-data` are `noindex` and are left out of `public/sitemap.xml` until approved. Solution-page forms add a hidden `topic` (the slug) and an optional "What document or process takes the most time?" field.

## Design
Light theme, warm canvas and off-white surfaces, near-black text, one green accent. Buttons stay in `@layer components` so utilities can override them. Colour utilities need a token in `globals.css` (for example `--color-leaf`). No scroll-triggered content animation; hover states, the hero intro, floating orbs and the stat count-up only; all respect `prefers-reduced-motion`.

## Contact form
Posts to Formspree (`FORMSPREE_FORM_ID` in `lib/site.ts`) with an inline success message. Required: name, email, company. Optional: role, message. Hidden `_gotcha` honeypot. The destination address is configured in Formspree, never in code.

## Build and deploy
```bash
npm install
npm run dev        # local
npm run build      # static export to ./out
```
Pushing to `main` deploys to GitHub Pages at https://buildparadigm.com (custom domain via `public/CNAME`, HTTPS enforced). The default `github.io/<repo>/` URL cannot render the site because assets load from `/`.

## After every deploy
Check the live page with `curl`, confirm the changed text, and confirm `/`, `/privacy/`, `/terms/`, `robots.txt`, `sitemap.xml` and `og.png` return 200 and an unknown path returns 404. Run a Lighthouse pass when visuals change (target performance 90+).

## Internal links
Always absolute (`/#section`, `/privacy/`) so they work from the legal pages.
