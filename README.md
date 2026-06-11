# Nithin K — Portfolio

Premium futuristic developer portfolio built with TanStack Start (React 19 + Vite 7).

## Run locally

```bash
npm install        # or bun install
npm run dev        # starts dev server on http://localhost:8080
```

## Deploy to Vercel

This app uses Nitro under the hood, which has first-class Vercel support.

1. Push this repo to GitHub (Lovable: GitHub → Connect / Push).
2. In Vercel, click **Add New → Project** and import the repo.
3. Set **Framework Preset** to **Other**.
4. Add an Environment Variable: `NITRO_PRESET = vercel`
5. Build Command: `npm run build` (Install Command: `npm install`).
6. Deploy — Nitro emits the `.vercel/output` directory automatically and
   Vercel serves the SSR app + static assets.

No `vercel.json` is required. All routes (including deep links) work out of
the box because the server renders every route.

## Tech stack

- TanStack Start v1 (file-based routing in `src/routes/`)
- Tailwind CSS v4 (design tokens in `src/styles.css`)
- Custom premium component suite in `src/components/Premium.tsx`