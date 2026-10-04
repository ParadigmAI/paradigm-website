# Paradigm website

Static marketing site for Paradigm. Next.js (static export), Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to ./out
```

## Deploy

Pushes to `main` build and deploy to GitHub Pages through `.github/workflows/deploy.yml`.
The custom domain is set by `public/CNAME`.

## Configuration

`lib/site.ts` holds the contact form ID. Every "Talk to our team" button goes to the contact form
(`/#contact`).
