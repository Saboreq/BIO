export const brand = {
  name: "Saboreq",
  wordmark: "saboreq",
  symbol: "S/",
  domain: "saboreq.xyz",
  tagline: "Custom software, game systems, automation, and infrastructure.",
};

export const contact = {
  email: "contact@saboreq.xyz",
  github: "https://github.com/Saboreq",
  discord: "https://discord.com/users/846992995886301184",
  linkedin: "",
};

export const nav = [
  { label: "Work", hash: "work" },
  { label: "Capabilities", hash: "capabilities" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export type ProjectStatus = "OPERATIONAL" | "IN DEVELOPMENT" | "EXPERIMENTAL";

export type ArtworkId =
  "sabhaven" | "sabcontrol" | "sabteams" | "horror" | "topology";

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
    id: "sabhaven",
    name: "SabHaven",
    category: "File Platform",
    status: "OPERATIONAL",
    summary: "Invite-only file portal with server-enforced private storage.",
    intro:
      "A production file portal that separates public downloads from owner-only private storage, with authorization enforced in Postgres and object storage rather than trusted to the interface.",
    sections: [
      {
        title: "Product",
        bullets: [
          "Anonymous browsing and short-lived public downloads",
          "Invite-only accounts, member uploads, and virtual folders",
          "Owner/admin dashboard for roles and scoped invitations",
        ],
      },
      {
        title: "Security architecture",
        bullets: [
          "Postgres and Storage row-level security",
          "Complete private-ancestor ownership checks",
          "Hashed invites and service-role Edge Functions",
        ],
      },
      {
        title: "Engineering",
        bullets: [
          "React and TypeScript interface deployed on Vercel",
          "Private Supabase bucket with 60-second signed URLs",
          "Source-level tests for authorization boundaries",
        ],
      },
    ],
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Edge Functions"],
    artwork: "sabhaven",
    accent: "#a78bfa",
    accentSoft: "rgba(139, 92, 246, 0.16)",
    year: "2026 — now",
    role: "Product, frontend, data model, security",
    github: "https://github.com/Saboreq/SabHaven",
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
          "Control interface for day-to-day administration",
        ],
      },
      {
        title: "Design goals",
        bullets: [
          "Safe operations instead of unrestricted console access",
          "Independent and replaceable modules",
          "A clear, auditable path for each action",
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
      "A custom PaperMC team plugin covering creation, invitations, configurable costs, persistent data, and team tags carried in player identity.",
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
          "Gradle build and PaperMC API integration",
          "State designed to survive restarts and player churn",
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
      "A multiplayer horror experience built on procedurally assembled rooms, a pursuing entity, and survival systems decided by the server rather than trusted to the client.",
    sections: [
      {
        title: "Systems",
        bullets: [
          "Procedural room assembly per run",
          "Entity behaviour across the generated layout",
          "Survival loop with shared objectives",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Server-authoritative state and validation",
          "Luau modules with clear responsibilities",
          "Multiplayer-first system design",
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
          "Cloudflare DNS in front of public services",
          "Nginx reverse proxy per application",
          "Pterodactyl panel driving game nodes",
        ],
      },
      {
        title: "Operations",
        bullets: [
          "Containerised services on Ubuntu",
          "Monitoring and controlled remote access",
          "Production hosting for projects on this site",
        ],
      },
    ],
    tech: ["Ubuntu", "Docker", "Nginx", "Pterodactyl"],
    artwork: "topology",
    accent: "#69d6a3",
    accentSoft: "rgba(105, 214, 163, 0.1)",
    year: "Ongoing",
    role: "Setup, deployment, operations",
    meta: "Internal infrastructure",
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
    title: "Windows software",
    summary: "Focused desktop tools for automation, data processing, and internal workflows.",
    items: ["C#", ".NET", "WinForms", "C++", "Windows"],
  },
  {
    title: "Web applications",
    summary: "Responsive interfaces backed by typed APIs, databases, and real access control.",
    items: ["React", "TypeScript", "Node.js", "PostgreSQL", "Supabase"],
  },
  {
    title: "Game systems",
    summary: "Server-authoritative gameplay and tooling for Roblox and PaperMC.",
    items: ["Luau", "Java", "PaperMC", "Multiplayer", "Persistence"],
  },
  {
    title: "Infrastructure & automation",
    summary: "Deployment, self-hosting, integrations, and repeatable operational workflows.",
    items: ["Ubuntu", "Docker", "Nginx", "Cloudflare", "AI APIs"],
  },
];

export const currentFocus = [
  { label: "Custom Windows and .NET software", state: "AVAILABLE" as const },
  { label: "SabHaven file platform", state: "LIVE" as const },
  { label: "Roblox multiplayer systems", state: "BUILDING" as const },
  { label: "Minecraft plugins and server tooling", state: "BUILDING" as const },
];

export const projectTypes = [
  "Windows / .NET tool",
  "Web application",
  "Roblox system",
  "Minecraft plugin",
  "Automation / integration",
  "Infrastructure",
  "Other",
];
