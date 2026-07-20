# Saboreq Portfolio

The source code for [saboreq.xyz](https://saboreq.xyz), the client-facing website for **Saboreq**, a software development company delivering focused digital products for clients worldwide.

## Purpose

The site presents four clearly scoped services:

- professional websites;
- web applications;
- Windows tools built with C#, .NET, and WinForms;
- Roblox systems built with Luau and server-side validation.

It combines project case studies, estimated pricing, and a direct quote flow without mixing in unrelated hobby work.

## Public case studies

- **SabHaven** — An invite-only file portal for controlled public downloads and owner-only private storage.
- **SabTrace** — A lightweight cross-platform log analysis tool with severity, text, and regular-expression filtering, terminal summaries, JSON reports, and versioned downloads.
- **Saboreq Portfolio** — The responsive company website in this repository, including service positioning, project pages, estimated pricing, metadata, and deployment.

## Pricing model

USD is the primary display currency. EUR estimates use the latest available daily USD/EUR reference rate, with a dated fallback when the external rate cannot be reached.

Displayed values are estimates only. A written quote is provided after the project scope, complexity, integrations, supplied assets, and deadline are understood.

## Technology

- React 19
- TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS 4
- Nitro

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

1. Import the repository into Vercel.
2. Keep the repository root as the project root.
3. Leave install, build, and output settings on automatic detection.
4. Add `saboreq.xyz` and `www.saboreq.xyz` in Vercel domain settings.

Pushes to `main` trigger production deployments.

## Project structure

```text
public/                  Static files, favicon, and robots.txt
src/components/saboreq/ Portfolio sections and reusable interface elements
src/components/ui/       Toast interface
src/data/portfolio.ts    Brand, projects, services, pricing, and contact data
src/lib/                 Utilities and server error handling
src/routes/              Routes, metadata, and project pages
src/styles.css           Theme tokens and global styles
vite.config.ts           Application and deployment configuration
```

## Accuracy and privacy

Public claims remain tied to implemented and tested work. Security wording for SabHaven describes concrete controls and documented limitations rather than claiming independent certification or complete protection.

The repository avoids exposing credentials, private hostnames, internal ports, customer data, or other operational secrets.
