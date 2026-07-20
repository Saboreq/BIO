# Saboreq Portfolio

The source code for [saboreq.xyz](https://saboreq.xyz), a professional portfolio for focused software services and public project case studies.

## Positioning

The site presents Saboreq as an independent software developer available for clearly scoped commercial projects:

- professional websites;
- web applications;
- Windows tools built with C#, .NET, WinForms, and related technologies;
- Roblox systems built with Luau and server-authoritative patterns.

The portfolio intentionally excludes unrelated hobby projects and avoids presenting broad technology lists without a clear service outcome.

## Public case studies

- **SabHaven** — An invite-only file portal with Supabase Auth, Postgres and Storage row-level security, role-aware administration, private object storage, short-lived signed downloads, and server-side invite handling.
- **Saboreq Portfolio** — The responsive React and TypeScript website in this repository, including project pages, service positioning, USD-first estimated pricing, current EUR conversion, metadata, structured data, and Vercel deployment.

## Pricing model

USD is the canonical display currency. EUR estimates are converted in the browser using the latest available daily USD/EUR rate, with a dated fallback value when the external rate cannot be reached.

Displayed values are estimates only. A written quote is provided after the project scope, complexity, integrations, supplied assets, and deadline are understood.

## Technology

- React 19
- TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS 4
- Nitro
- Lucide React
- Sonner

## Local development

### Requirements

- Node.js 20 or newer
- npm 10 or newer

### Setup

```bash
npm install
npm run dev
```

### Production build

```bash
npm run build
```

### Code quality

```bash
npm run lint
npm run format
```

## Deployment

The project is configured for Vercel through Nitro.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Keep the root directory set to the repository root.
4. Leave install, build, and output settings on automatic detection.
5. Add `saboreq.xyz` and `www.saboreq.xyz` in Vercel domain settings.

Future pushes to `main` trigger production deployments.

## Project structure

```text
public/                  Static files, favicon, and robots.txt
src/components/saboreq/ Portfolio sections and reusable interface elements
src/components/ui/       Toast interface
src/data/portfolio.ts    Brand, projects, services, pricing, and contact data
src/lib/                 Utilities and server error handling
src/routes/              TanStack Start routes and metadata
src/styles.css           Theme tokens and global styles
vite.config.ts           Vite, TanStack Start, Tailwind, Nitro, and React setup
```

## Accuracy and privacy

Portfolio claims remain tied to implemented work. Security wording for SabHaven describes concrete controls rather than claiming independent certification, end-to-end encryption, or complete protection.

The public portfolio avoids exposing credentials, private hostnames, internal ports, customer data, or other operational secrets.
