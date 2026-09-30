# Vercel deployment (frontend only)

Deploy the Vite app as its own static Vercel project. The frontend uses local fixture data, so it does not need the Express server or the API function for this deployment.

## Deploy

1. Import this repository into Vercel.
2. In **Project Settings → Build and Deployment**, set **Root Directory** to `client` and save.
3. Remove any dashboard-level Install Command, Build Command, or Output Directory overrides so Vercel uses `client/vercel.json`.
4. Redeploy. The configured commands install the client dependencies, run the TypeScript/Vite production build, and publish the `dist` directory.

The SPA rewrite in `client/vercel.json` serves the app entry point on client-side routes. The `api/` and `server/` directories are outside this Vercel project's root and are not deployed. No environment variables are required for the current frontend.

## Local development

The Express server under `server/` remains available for local development using the root `npm run install:all` and `npm run dev` scripts. It is intentionally not part of this frontend-only Vercel deployment.
