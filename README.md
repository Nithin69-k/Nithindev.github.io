# Nithin K — Portfolio

Premium futuristic developer portfolio built with TanStack Start (React 19 + Vite 7).

## Run locally

```bash
npm install        # or bun install
npm run dev        # starts dev server on http://localhost:8080
```

## Deploy to Vercel

This app uses Nitro under the hood, which has first-class Vercel support.
The `vite.config.ts` already pins the Nitro preset to `vercel`, so the build
emits `.vercel/output` automatically on any CI environment.

1. Push this repo to GitHub (Lovable: GitHub → Connect / Push).
2. In Vercel, click **Add New → Project** and import the repo.
3. Set **Framework Preset** to **Other**.
4. Build Command: `npm run build` (Install Command: `npm install`).
5. Deploy — Vercel detects `.vercel/output` and serves the SSR app + static
   assets. All routes (including deep links) work out of the box.

`vercel.json` is included for security headers and is otherwise optional.

### Images / certificates not visible on Vercel

Images, portrait, and certificates are hosted on the Lovable CDN under
`/__l5e/assets-v1/...`. On Vercel, those paths are proxied to the stable
Lovable URL via a `rewrites` rule in `vercel.json` — no extra setup needed.
If you fork the project, update the project ID in that rewrite destination
to match your own Lovable project.

## Tech stack

- TanStack Start v1 (file-based routing in `src/routes/`)
- Tailwind CSS v4 (design tokens in `src/styles.css`)
- Custom premium component suite in `src/components/Premium.tsx`