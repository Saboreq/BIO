export const brand = {
  name: "Saboreq",
  wordmark: "saboreq",
  symbol: "S/",
  domain: "saboreq.xyz",
  tagline: "Custom websites, web applications, Windows tools, and Roblox systems.",
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
    id: "cloudflare-r2-uploader",
    name: "Cloudflare R2 Uploader",
    category: "Windows Application",
    status: "OPERATIONAL",
    summary: "Windows desktop client for Cloudflare R2 with resumable uploads and protected credentials.",
    intro:
      "A native Windows application for managing files in Cloudflare R2 object storage without a mounted drive, Worker, or background service. It handles large resumable uploads, complete object management, and local previews, while account credentials stay encrypted on the machine.",
    sections: [
      {
        title: "Uploads",
        bullets: [
          "Drag-and-drop file and folder uploads with destination and overwrite control",
          "Parallel multipart transfers that pause, resume, and survive restarts",
          "Post-upload verification and per-bucket profiles for separate accounts",
        ],
      },
      {
        title: "Object management",
        bullets: [
          "Paginated browser with folder navigation, filtering, sorting, and keyboard shortcuts",
          "Bulk downloads and deletions with a full preflight before anything is confirmed",
          "Built-in preview, object properties, public URLs, and expiring share links",
        ],
      },
      {
        title: "Security and delivery",
        bullets: [
          "Credentials encrypted per Windows user and kept out of settings and logs",
          "Per-user installer with consent-based updates verified by size and SHA-256",
          "Automated build, test, and release pipeline with documented publishing steps",
        ],
      },
    ],
    tech: ["C#", ".NET Framework 4.8", "WinForms", "Cloudflare R2 (S3 API)"],
    artwork: "sabhaven",
    accent: "#fb923c",
    accentSoft: "rgba(251, 146, 60, 0.14)",
    year: "2026",
    role: "Product design, .NET development, security model, release packaging",
    github: "https://github.com/Saboreq/CloudflareR2Uploader",
    meta: "v1.0.0 · open source",
    featured: true,
  },
  {
    id: "sabhaven",
    name: "SabHaven",
    category: "Web Application",
    status: "OPERATIONAL",
    summary: "Controlled public downloads with owner-only private storage.",
    intro:
      "An invite-only file portal built for controlled file delivery. Visitors can access public content, while signed-in members manage private files and folders that remain isolated from every other account.",
    sections: [
      {
        title: "Product",
        bullets: [
          "Public browsing with short-lived download links",
          "Invite-only accounts, member uploads, and virtual folders",
          "Role-based dashboard for members and invitation management",
        ],
      },
      {
        title: "Privacy and access",
        bullets: [
          "Private content remains owner-only across complete folder trees",
          "Invitations, roles, and destructive actions are validated server-side",
          "Private object storage with documented security boundaries",
        ],
      },
      {
        title: "Delivery",
        bullets: [
          "Responsive production application deployed for real use",
          "Automated checks for important authorization boundaries",
          "Documented setup, deployment, threat model, and limitations",
        ],
      },
    ],
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    artwork: "sabhaven",
    accent: "#a78bfa",
    accentSoft: "rgba(139, 92, 246, 0.16)",
    year: "2026 — now",
    role: "Product design, development, security model, deployment",
    github: "https://github.com/Saboreq/SabHaven",
    live: "https://files.saboreq.xyz",
    meta: "Live · invite-only",
  },
  {
    id: "sabtrace",
    name: "SabTrace",
    category: "Developer Tool",
    status: "OPERATIONAL",
    summary: "Fast log analysis for files, pipelines, and automated workflows.",
    intro:
      "A lightweight command-line tool that helps developers and system operators search logs, isolate important events, review severity statistics, and export structured reports without opening a full monitoring platform.",
    sections: [
      {
        title: "Log analysis",
        bullets: [
          "Search one or more files or read directly from a command pipeline",
          "Filter by severity, phrase, regular expression, or result limit",
          "Review readable terminal summaries or export structured JSON",
        ],
      },
      {
        title: "Reliable automation",
        bullets: [
          "Clear exit codes for scripts and automated workflows",
          "Tested parsing, filtering, result limits, and report generation",
          "Verified release archive with published checksum",
        ],
      },
      {
        title: "Availability",
        bullets: [
          "Versioned downloads for Windows, Linux, and macOS",
          "Lightweight executable with no third-party runtime dependencies",
          "Open-source codebase with documented usage and build instructions",
        ],
      },
    ],
    tech: ["C++20", "Command-line tools", "Log analysis", "JSON"],
    artwork: "sabtrace",
    accent: "#69d6a3",
    accentSoft: "rgba(105, 214, 163, 0.14)",
    year: "2026",
    role: "Product design, C++ development, testing, release delivery",
    github: "https://github.com/Saboreq/SabTrace",
    meta: "v0.1.0 · open source",
  },
  {
    id: "portfolio",
    name: "Saboreq Portfolio",
    category: "Professional Website",
    status: "OPERATIONAL",
    summary: "Responsive developer portfolio built to turn technical work into clear client offers.",
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
          "Fast navigation, page metadata, and accessible interactions",
          "Consistent visual system across desktop and mobile layouts",
        ],
      },
      {
        title: "Delivery",
        bullets: [
          "Search and social-sharing metadata",
          "Preview and production deployments",
          "Public source repository with documented setup",
        ],
      },
    ],
    tech: ["React", "TypeScript", "Responsive design", "Vercel"],
    artwork: "portfolio",
    accent: "#7dd3fc",
    accentSoft: "rgba(125, 211, 252, 0.12)",
    year: "2026 — now",
    role: "Brand positioning, design, development, deployment",
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
