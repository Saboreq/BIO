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
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type ProjectStatus =
  "IN DEVELOPMENT" | "PRIVATE" | "EXPERIMENTAL" | "OPERATIONAL" | "PROTOTYPE";

export interface Project {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  description: string;
  tech: string[];
  preview: "filehaven" | "sabcontrol" | "sabteams" | "horror" | "topology";
  github?: string;
  live?: string;
  meta?: string;
}

export const projects: Project[] = [
  {
    id: "filehaven",
    name: "Filehaven",
    category: "Web Platform",
    status: "OPERATIONAL",
    description:
      "An invite-only file sharing platform separating public downloads from owner-only private storage, with privacy enforced by Postgres row-level security and short-lived signed downloads.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    preview: "filehaven",
    github: "https://github.com/Saboreq/Website",
    live: "https://app.saboreq.xyz",
    meta: "Live · invite-only membership",
  },
  {
    id: "sabcontrol",
    name: "SabControl",
    category: "Minecraft / Infrastructure",
    status: "IN DEVELOPMENT",
    description:
      "A modular Minecraft management system combining a Paper plugin, Discord automation, and a focused control interface for safe server operations.",
    tech: ["Java", "PaperMC", "Node.js", "Discord API"],
    preview: "sabcontrol",
    meta: "Private project",
  },
  {
    id: "sabteams",
    name: "SabTeams",
    category: "Minecraft Plugin",
    status: "IN DEVELOPMENT",
    description:
      "A custom PaperMC team system with creation, invitations, configurable costs, persistent data, and team tags in player identity.",
    tech: ["Java", "PaperMC", "Gradle", "SQL"],
    preview: "sabteams",
    meta: "Private project",
  },
  {
    id: "horror",
    name: "Roblox Horror Survival",
    category: "Game Systems",
    status: "IN DEVELOPMENT",
    description:
      "A multiplayer horror experience built around procedurally assembled rooms, a pursuing entity, and server-authoritative survival systems.",
    tech: ["Roblox Studio", "Luau", "Procedural", "Multiplayer"],
    preview: "horror",
    meta: "Case study unavailable",
  },
  {
    id: "infra",
    name: "Self-Hosted Game Infrastructure",
    category: "Infrastructure",
    status: "OPERATIONAL",
    description:
      "A Linux hosting environment for game servers and web services using containers, reverse proxies, DNS routing, and monitoring.",
    tech: ["Ubuntu", "Docker", "Nginx", "Pterodactyl"],
    preview: "topology",
    meta: "Internal tooling",
  },
];

export const capabilities = [
  {
    title: "Software",
    summary:
      "Web and product interfaces backed by real APIs, typed data, and maintainable architecture.",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Python",
      "Java",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
      "UI implementation",
    ],
  },
  {
    title: "Game Systems",
    summary:
      "Server-authoritative gameplay, procedural systems, and multiplayer logic on Roblox and PaperMC.",
    items: [
      "Roblox Studio",
      "Luau",
      "Minecraft",
      "PaperMC",
      "Velocity",
      "Plugin architecture",
      "Multiplayer systems",
      "Procedural environments",
    ],
  },
  {
    title: "Infrastructure & Automation",
    summary:
      "Self-hosted Linux environments, containers, and automation workflows including AI APIs.",
    items: [
      "Linux",
      "Ubuntu",
      "Docker",
      "Nginx",
      "Pterodactyl",
      "Cloudflare",
      "Discord integrations",
      "Workflow automation",
      "VPS management",
      "AI APIs",
    ],
  },
];

export const currentFocus = [
  { label: "Filehaven file sharing platform", state: "LIVE" as const },
  { label: "Roblox multiplayer horror experience", state: "BUILDING" as const },
  { label: "Minecraft plugins and server tooling", state: "BUILDING" as const },
  { label: "Self-hosted game infrastructure", state: "ACTIVE" as const },
];

export const experience = [
  {
    title: "Independent Software Development",
    date: "ONGOING",
    description:
      "Building web platforms, backend integrations, and deployment workflows through independent projects, including a live invite-only file sharing platform.",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    title: "Game Systems Development",
    date: "ONGOING",
    description:
      "Developing Roblox gameplay systems and Minecraft server tooling with focus on multiplayer reliability and maintainable logic.",
    tags: ["Luau", "Roblox", "Java", "PaperMC"],
  },
  {
    title: "Self-Hosted Infrastructure",
    date: "ONGOING",
    description:
      "Operating Linux servers, containers, reverse proxies, DNS routes, monitoring, and secure remote access.",
    tags: ["Ubuntu", "Docker", "Nginx", "Cloudflare"],
  },
  {
    title: "AI-Assisted Workflows",
    date: "WORKING METHOD",
    description:
      "Using AI models, APIs, and local tools to improve research, implementation, and repetitive development workflows while retaining manual review and technical control.",
    tags: ["AI APIs", "Local Models", "Automation"],
  },
];

export const projectTypes = [
  "Software",
  "Minecraft",
  "Roblox",
  "Infrastructure",
  "Automation",
  "Other",
];
