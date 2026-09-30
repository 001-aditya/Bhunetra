# Vercel deployment

The repository is configured to deploy from its root directory. The Vercel build installs the client dependencies, runs the TypeScript and Vite production build, and publishes `client/dist`. Client-side routes are rewritten to `index.html`, and the mock API is served from a Vercel Function.

## Deploy

1. Import this repository into Vercel.
2. Set the project Root Directory to the repository root (not `client`).
3. Leave the build, install, and output settings at their `vercel.json` defaults.
4. Deploy. The current prototype does not require environment variables.

## Deployed API

- `GET /api/health`
- `GET /api/watersheds`
- `GET /api/watershed/:id`
- `GET /api/alerts`

These endpoints return sample fixture data. The current frontend also reads local fixtures directly; deploying the API does not switch the screens to live data. The Express server under `server/` remains available for local development using the root `npm run install:all` and `npm run dev` scripts.

This deployment is a static prototype plus mock serverless API; it does not include a production database, authentication, image uploads, or satellite/AI processing services.
