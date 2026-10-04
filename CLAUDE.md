# Paradigm site: project memory

Living decision log. Update in the same session as any decision. Keep it free of personal names, emails and employer references.

## Stack
Next.js App Router, static export (`output: "export"`, `trailingSlash: true`, unoptimized images). Tailwind v4 tokens in `app/globals.css`. Fonts via `next/font` (Inter body, Fraunces display), chosen as free lookalikes of the reference design's licensed fonts. Hosted on GitHub Pages with custom domain `buildparadigm.com`.

## Why static
GitHub Pages has no backend. The contact form posts to Formspree via `@formspree/react` (form ID in `lib/site.ts`). The destination address lives in the Formspree dashboard, never in code.

## Rules that must hold
- No personal names, personal photos, personal emails, employer references or personal social links anywhere (page, meta, JSON-LD, alt text, file names, comments, commits, package.json).
- Only claims the owner confirmed. Numbers in use: team of 20 engineers; audit 2 to 3 weeks; build 4 to 8 weeks; Skillful.ly >90% noise filtered and 70 to 80% efficiency; Awesome Motive 60 to 70% third-party spend reduction, delivered within 7 months.
- Not stated: years in operation, delivery location, prices, PhD claims, client logos, client person names or photos.
- Banned words: world-class, cutting-edge, revolutionary, seamless, leverage, synergy, unlock, game-changing. No em dashes.
- Testimonials verbatim, title and company only. The Skillful.ly quote is trimmed to its first sentence.
- Awesome Motive is not PE-owned. Never call it PE-backed.
- Montaa is pre-launch. No launch language, no customers, no results.
- No email address is shown on the site.

## Booking link
`BOOKING_URL` in `lib/site.ts` is empty until the owner supplies a Google Calendar appointment scheduling link. While empty, all "Book a 30-minute call" buttons go to `/#contact`.

## Navigation
Internal links are absolute (`/#section`, `/privacy/`) so they work from legal pages.

## Motion
No scroll-triggered animation. Hover states only. `prefers-reduced-motion` respected.

## Deploy
Push to `main`. Workflow builds `out/` and deploys with `actions/deploy-pages`. DNS is applied by the owner (see private docs).
