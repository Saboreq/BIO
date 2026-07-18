export const brand = {
  name: "Saboreq",
  wordmark: "saboreq",
  symbol: "S/",
  domain: "saboreq.xyz",
  tagline: "Software, game systems, automation, and infrastructure.",
};

export const contact = {
  email: "contact@saboreq.xyz",
  github: "https://github.com/Saboreq",
  discord: "https://discord.com/users/846992995886301184",
  linkedin: "",
};

export const nav = [
  { label: "Work", hash: "work" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export type ProjectStatus = "OPERATIONAL" | "IN DEVELOPMENT" | "EXPERIMENTAL";

export type ArtworkId =
  "filehaven" | "sabcontrol" | "sabteams" | "horror" | "topology";

export interface ProjectSection {
  title: string;
  bullets: string[];
}

export interface Project {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  /** One line for the home index. Keep under ~80 chars. */
  summary: string;
  /** One or two sentences opening the detail page. */
  intro: string;
  /** Short titled bullet groups for the detail page. */
  sections: ProjectSection[];
  tech: string[];
  artwork: ArtworkId;
  /** Per-project accent, stays inside the site palette. */
  accent: string;
  accentSoft: string;
  year: string;
  role: string;
  github?: string;
  live?: string;
  meta?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "filehaven",
    name: "Filehaven",
    category: "Web Platform",
    status: "OPERATIONAL",
    summary: "Invite-only file sharing with row-level-secured private storage.",
    intro:
      "An invite-only file platform that keeps public downloads and owner-only private storage strictly apart — enforced in the database, not the UI.",
    sections: [
      {
        title: "What it does",
        bullets: [
          "Public download area for released files",
          "Owner-only private storage next to it",
          "Invite-gated membership, no open signups",
        ],
      },
      {
        title: "How privacy is enforced",
        bullets: [
          "Postgres row-level security on every table",
          "Short-lived signed URLs for downloads",
          "No client-side-only access checks",
        ],
      },
      {
        title: "Build notes",
        bullets: [
          "React + TypeScript front end",
          "Supabase auth, storage, and database",
          "Deployed and in daily use",
        ],
      },
    ],
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    artwork: "filehaven",
    accent: "#a78bfa",
    accentSoft: "rgba(139, 92, 246, 0.16)",
    year: "2025 — now",
    role: "Design, build, operations",
    github: "https://github.com/Saboreq/Website",
    live: "https://files.saboreq.xyz",
    meta: "Live · invite-only",
    featured: true,
  },
  {
    id: "sabcontrol",
    name: "SabControl",
    category: "Minecraft · Infrastructure",
    status: "IN DEVELOPMENT",
    summary: "Modular server management: Paper plugin, Discord bridge, panel.",
    intro:
      "A modular Minecraft management system that connects a Paper plugin, Discord automation, and a focused control interface for safe server operations.",
    sections: [
      {
        title: "Components",
        bullets: [
          "Paper plugin exposing server operations",
          "Discord automation for routine actions",
          "Control interface for day-to-day admin",
        ],
      },
      {
        title: "Design goals",
        bullets: [
          "Safe operations over raw console access",
          "Modules stay independent and replaceable",
          "One clear path for every action",
        ],
      },
    ],
    tech: ["Java", "PaperMC", "Node.js", "Discord API"],
    artwork: "sabcontrol",
    accent: "#7dd3fc",
    accentSoft: "rgba(125, 211, 252, 0.12)",
    year: "2026",
    role: "Architecture, plugin, tooling",
    meta: "Private project",
  },
  {
    id: "sabteams",
    name: "SabTeams",
    category: "Minecraft Plugin",
    status: "IN DEVELOPMENT",
    summary:
      "PaperMC team system with invites, costs, and persistent identity.",
    intro:
      "A custom PaperMC team plugin: creation, invitations, configurable costs, persistent data, and team tags carried in player identity.",
    sections: [
      {
        title: "Features",
        bullets: [
          "Team creation and invitation flow",
          "Configurable creation and upkeep costs",
          "Team tags shown in player identity",
        ],
      },
      {
        title: "Under the hood",
        bullets: [
          "SQL-backed persistent team data",
          "Gradle build, PaperMC API",
          "Survives restarts and player churn",
        ],
      },
    ],
    tech: ["Java", "PaperMC", "Gradle", "SQL"],
    artwork: "sabteams",
    accent: "#f0abfc",
    accentSoft: "rgba(240, 171, 252, 0.12)",
    year: "2026",
    role: "Plugin development",
    meta: "Private project",
  },
  {
    id: "horror",
    name: "Roblox Horror Survival",
    category: "Game Systems",
    status: "IN DEVELOPMENT",
    summary: "Multiplayer horror with procedural rooms and a pursuing entity.",
    intro:
      "A multiplayer horror experience built on procedurally assembled rooms, a pursuing entity, and survival systems the server — not the client — decides.",
    sections: [
      {
        title: "Systems",
        bullets: [
          "Procedural room assembly per run",
          "Entity that hunts across the layout",
          "Survival loop with shared objectives",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Server-authoritative state and validation",
          "Luau, structured around clear modules",
          "Multiplayer-first from the start",
        ],
      },
    ],
    tech: ["Roblox Studio", "Luau", "Procedural", "Multiplayer"],
    artwork: "horror",
    accent: "#fb7185",
    accentSoft: "rgba(251, 113, 133, 0.1)",
    year: "2026",
    role: "Game systems, scripting",
    meta: "In development",
  },
  {
    id: "infra",
    name: "Self-Hosted Infrastructure",
    category: "Infrastructure",
    status: "OPERATIONAL",
    summary: "Linux hosting for game servers and web services, self-operated.",
    intro:
      "The Linux environment behind my projects: containers, reverse proxies, DNS routing, and monitoring for game servers and web services.",
    sections: [
      {
        title: "Topology",
        bullets: [
          "Cloudflare DNS in front of everything",
          "Nginx reverse proxy per service",
          "Pterodactyl panel driving game nodes",
        ],
      },
      {
        title: "Operations",
        bullets: [
          "Containerised services on Ubuntu",
          "Monitoring and secure remote access",
          "Hosts the projects on this site",
        ],
      },
    ],
    tech: ["Ubuntu", "Docker", "Nginx", "Pterodactyl"],
    artwork: "topology",
    accent: "#69d6a3",
    accentSoft: "rgba(105, 214, 163, 0.1)",
    year: "Ongoing",
    role: "Setup, operations",
    meta: "Internal tooling",
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function adjacentProjects(id: string): {
  prev: Project | undefined;
  next: Project | undefined;
} {
  const i = projects.findIndex((p) => p.id === id);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}

export const capabilities = [
  {
    title: "Software",
    summary: "Web interfaces backed by real APIs and typed data.",
    items: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL"],
  },
  {
    title: "Game systems",
    summary: "Server-authoritative gameplay on Roblox and PaperMC.",
    items: ["Luau", "Java", "PaperMC", "Multiplayer", "Procedural"],
  },
  {
    title: "Infrastructure",
    summary: "Self-hosted Linux, containers, and automation with AI APIs.",
    items: ["Ubuntu", "Docker", "Nginx", "Cloudflare", "AI APIs"],
  },
];

export const currentFocus = [
  { label: "Filehaven file sharing platform", state: "LIVE" as const },
  { label: "Roblox multiplayer horror experience", state: "BUILDING" as const },
  { label: "Minecraft plugins and server tooling", state: "BUILDING" as const },
  { label: "Self-hosted game infrastructure", state: "ACTIVE" as const },
];

export const projectTypes = [
  "Software",
  "Minecraft",
  "Roblox",
  "Infrastructure",
  "Automation",
  "Other",
];
