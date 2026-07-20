export const brand = {
  name: "Saboreq",
  wordmark: "saboreq",
  symbol: "S/",
  domain: "saboreq.xyz",
  tagline: "Websites, web applications, Windows tools, and Roblox systems.",
};

export const contact = {
  email: "contact@saboreq.xyz",
  github: "https://github.com/Saboreq",
  discord: "https://discord.com/users/846992995886301184",
  linkedin: "",
};

export const nav = [
  { label: "Work", hash: "work" },
  { label: "Services", hash: "services" },
  { label: "Pricing", hash: "pricing" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export type ProjectStatus = "OPERATIONAL" | "IN DEVELOPMENT" | "EXPERIMENTAL";
export type ArtworkId = "sabhaven" | "sabtrace" | "portfolio";

export interface ProjectSection {
  title: string;
  bullets: string[];
}

export interface Project {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  intro: string;
  sections: ProjectSection[];
  tech: string[];
  artwork: ArtworkId;
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
    category: "Web Application",
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
    id: "sabtrace",
    name: "SabTrace",
    category: "C++ Command-line Tool",
    status: "OPERATIONAL",
    summary: "Cross-platform log filtering, statistics, and JSON reporting in C++20.",
    intro:
      "A standalone, script-friendly log analyser that reads files or standard input, detects common severity levels, applies literal or regular-expression filters, and produces terminal statistics or structured JSON reports.",
    sections: [
      {
        title: "Command-line product",
        bullets: [
          "Plain-text analysis from multiple files or standard input",
          "Level, literal text, regex, case-insensitive, and result-limit filters",
          "Predictable exit codes for shell scripts and CI workflows",
        ],
      },
      {
        title: "Engineering",
        bullets: [
          "Modern C++20 with a separated core library and CLI layer",
          "Dependency-free tests for parsing, matching, limits, and JSON output",
          "CMake build, install rules, presets, and compiler warnings",
        ],
      },
      {
        title: "Delivery",
        bullets: [
          "GitHub Actions validation on GCC, MSVC, and Clang",
          "Versioned Windows, Linux, and macOS release archives",
          "Published SHA-256 checksums and verified Linux release binary",
        ],
      },
    ],
    tech: ["C++20", "CMake", "GitHub Actions", "GCC", "MSVC", "Clang"],
    artwork: "sabtrace",
    accent: "#69d6a3",
    accentSoft: "rgba(105, 214, 163, 0.14)",
    year: "2026",
    role: "Product, architecture, CLI, testing, release engineering",
    github: "https://github.com/Saboreq/SabTrace",
    meta: "v0.1.0 · open source",
  },
  {
    id: "portfolio",
    name: "Saboreq Portfolio",
    category: "Professional Website",
    status: "OPERATIONAL",
    summary: "Responsive portfolio that turns technical work into clear client offers.",
    intro:
      "The public website for Saboreq: a fast, accessible portfolio built to present services, estimated pricing, technical case studies, and a straightforward project enquiry path.",
    sections: [
      {
        title: "Business-focused structure",
        bullets: [
          "Clear services and estimated starting prices",
          "Project case studies with live and source links",
          "Focused enquiry flow for four supported project types",
        ],
      },
      {
        title: "Frontend",
        bullets: [
          "Responsive React and TypeScript interface",
          "TanStack Start routing and page metadata",
          "Tailwind CSS design system with accessible interactions",
        ],
      },
      {
        title: "Delivery",
        bullets: [
          "Structured data and social-sharing metadata",
          "Vercel preview and production deployments",
          "Public GitHub repository with documented setup",
        ],
      },
    ],
    tech: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Vite", "Vercel"],
    artwork: "portfolio",
    accent: "#7dd3fc",
    accentSoft: "rgba(125, 211, 252, 0.12)",
    year: "2026 — now",
    role: "Design, frontend, content, deployment",
    github: "https://github.com/Saboreq/BIO",
    live: "https://saboreq.xyz",
    meta: "Live · open source",
  },
];

export function getProject(id: string): Project | undefined {
  const normalizedId = id === "filehaven" ? "sabhaven" : id;
  return projects.find((project) => project.id === normalizedId);
}

export function adjacentProjects(id: string): {
  prev: Project | undefined;
  next: Project | undefined;
} {
  const normalizedId = id === "filehaven" ? "sabhaven" : id;
  const index = projects.findIndex((project) => project.id === normalizedId);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}

export interface Service {
  title: string;
  summary: string;
  startingUsd: number;
  typicalMinUsd: number;
  typicalMaxUsd: number;
  details: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: "Professional website",
    summary: "Clean, responsive websites for businesses, products, and personal brands.",
    startingUsd: 50,
    typicalMinUsd: 50,
    typicalMaxUsd: 150,
    details: "Best for a focused landing page, portfolio, brochure, or service website.",
    items: ["Responsive design", "Contact flow", "SEO metadata", "Deployment"],
  },
  {
    title: "Web application",
    summary: "Interactive applications with authentication, data, dashboards, or APIs.",
    startingUsd: 100,
    typicalMinUsd: 100,
    typicalMaxUsd: 500,
    details: "Final pricing depends on features, integrations, data model, and complexity.",
    items: ["React", "TypeScript", "APIs", "Databases"],
  },
  {
    title: "Windows .NET tool",
    summary: "Purpose-built desktop utilities that automate or simplify a workflow.",
    startingUsd: 100,
    typicalMinUsd: 100,
    typicalMaxUsd: 800,
    details: "Final pricing depends on screens, integrations, data processing, and packaging.",
    items: ["C#", ".NET", "WinForms", "Local data & APIs"],
  },
  {
    title: "Roblox system",
    summary: "Modular Luau systems for gameplay, interfaces, persistence, and server logic.",
    startingUsd: 50,
    typicalMinUsd: 50,
    typicalMaxUsd: 150,
    details: "Best for one clearly scoped system, feature, repair, or integration.",
    items: ["Luau", "Server validation", "Data persistence", "UI logic"],
  },
];

export const currentFocus = [
  { label: "Professional websites", state: "AVAILABLE" as const },
  { label: "Web applications", state: "AVAILABLE" as const },
  { label: "Windows and .NET tools", state: "AVAILABLE" as const },
  { label: "Roblox systems", state: "AVAILABLE" as const },
];

export const projectTypes = [
  "Professional website",
  "Web application",
  "Windows .NET tool",
  "Roblox system",
];
