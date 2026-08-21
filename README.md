# Harbor Health

Harbor Health is a static-ready Next.js App Router foundation. Sprint 0 intentionally contains neutral placeholder content only; it does not provide clinical advice, collect patient information, or enable booking.

## Prerequisites

- Node.js 20.9 or later
- npm 10 or later

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e:install
npm run test:e2e
```

The browser baseline covers desktop and mobile navigation, keyboard focus visibility, and horizontal-overflow checks. It starts the local development server automatically.

## Environment configuration

Copy `.env.example` to `.env.local` only when a future approved integration needs public configuration. Do not add secrets to browser-visible `NEXT_PUBLIC_*` variables, commit `.env.local`, or put credentials in this repository.

## Deployment

This app can be deployed to any platform that supports Next.js. Configure the production environment in the deployment platform, run `npm run build` in CI, and serve with `npm run start`. Before connecting forms, scheduling, analytics, or clinical services, obtain the relevant privacy, security, and product approvals.

## Project structure

- `app/`: routes, metadata, global styles, and shared page layout
- `components/`: reusable site shell
- `e2e/`: Playwright browser baseline
- `.github/workflows/`: pull-request quality checks