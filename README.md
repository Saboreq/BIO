# Saboreq Portfolio

The source code for [saboreq.xyz](https://saboreq.xyz), a professional portfolio for custom software development, game systems, automation, and self-hosted infrastructure.

## Positioning

The site presents Saboreq as an independent software developer available for clearly scoped commercial projects, including:

- custom Windows utilities and internal tools built with C#, .NET, WinForms, and C++;
- web applications backed by typed APIs, databases, authentication, and deployment;
- Roblox and Minecraft gameplay, plugin, and server systems;
- automation, integrations, and self-hosted infrastructure.

The interface uses a restrained black-and-purple visual system inspired by modern developer tools and control panels. It prioritizes real projects, concise technical information, accessibility, and fast performance without stock imagery or heavy animation libraries.

## Featured work

- **SabHaven** — An invite-only file portal with Supabase Auth, Postgres and Storage row-level security, role-aware administration, private object storage, short-lived signed downloads, and server-side invite handling.
- **SabControl** — Minecraft server management tooling combining PaperMC, Discord automation, and infrastructure controls.
- **SabTeams** — A custom PaperMC team system with invitations, configurable costs, persistent data, and player tags.
- **Roblox Horror Survival** — A multiplayer horror project with procedural environments and server-authoritative gameplay systems.
- **Self-Hosted Infrastructure** — Linux-based hosting built around containers, reverse proxies, DNS routing, monitoring, and Pterodactyl.

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

The development server prints the local URL in the terminal.

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
4. Leave the install, build, and output settings on automatic detection.
5. Add `saboreq.xyz` and `www.saboreq.xyz` in the Vercel domain settings.

Future pushes to the production branch trigger automatic deployments.

## Project structure

```text
public/                  Static files, favicon, and robots.txt
src/components/saboreq/ Portfolio sections and reusable interface elements
src/components/ui/       Toast interface
src/data/portfolio.ts    Brand, projects, capabilities, and contact data
src/lib/                 Utilities and server error handling
src/routes/              TanStack Start routes and metadata
src/styles.css           Theme tokens and global styles
vite.config.ts           Vite, TanStack Start, Tailwind, Nitro, and React setup
```

## Content maintenance

Most visible portfolio content is stored in `src/data/portfolio.ts`. Update that file to change:

- contact information and social links;
- project case studies and technical tags;
- commercial capabilities;
- current focus;
- project enquiry categories.

Site-wide design tokens and reusable styles are defined in `src/styles.css`.

## Accuracy and privacy

Portfolio claims should remain tied to implemented or actively developed work. Security wording for SabHaven intentionally describes concrete controls rather than claiming independent certification or complete protection.

The public portfolio avoids exposing server addresses, credentials, private hostnames, internal ports, customer data, or other operational secrets.
