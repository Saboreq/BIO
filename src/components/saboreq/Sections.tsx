import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import {
  SabButton,
  SabCard,
  SectionLabel,
  StatusChip,
  TechnicalTag,
} from "./primitives";
import { Artwork } from "./artwork";
import {
  capabilities,
  currentFocus,
  projects,
  type Project,
  type ProjectStatus,
} from "@/data/portfolio";
import { cn, toneForStatus } from "@/lib/utils";

const statusDot: Record<ProjectStatus, string> = {
  OPERATIONAL: "bg-sab-success",
  "IN DEVELOPMENT": "bg-sab-purple",
  EXPERIMENTAL: "bg-sab-warning",
};

export function WorkSection() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.id !== featured.id);

  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionLabel>01 / SELECTED WORK</SectionLabel>
        <div
          data-reveal="5"
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <h2 className="max-w-[560px] font-display text-[clamp(1.8rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-sab-text">
            Selected work.
          </h2>
          <p className="text-[14px] text-sab-text-muted">
            Real projects — each one has its own page.
          </p>
        </div>

        <div data-reveal="6" className="mt-10">
          <FeaturedProject project={featured} />
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-sab-border bg-[rgba(11,11,16,0.8)]">
          {rest.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Link
      to="/work/$projectId"
      params={{ projectId: project.id }}
      className="group block"
      aria-label={`${project.name} — open project page`}
    >
      <SabCard
        className="vt-share grid overflow-hidden p-0 bg-[rgba(11,11,16,0.96)] lg:grid-cols-2"
        style={{ viewTransitionName: `project-${project.id}` }}
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b border-sab-border bg-sab-bg-elev lg:aspect-auto lg:min-h-[300px] lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 sab-grid-bg opacity-30" />
          <div
            className="vt-share relative h-full transition-transform duration-500 group-hover:scale-[1.015]"
            style={{ viewTransitionName: `project-art-${project.id}` }}
          >
            <Artwork id={project.artwork} accent={project.accent} />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 md:p-8">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-sab-text-muted">
              {project.category}
            </span>
            <StatusChip tone={toneForStatus(project.status)}>
              {project.status}
            </StatusChip>
          </div>
          <h3
            className="vt-share font-display text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-tight text-sab-text"
            style={{ viewTransitionName: `project-title-${project.id}` }}
          >
            {project.name}
          </h3>
          <p className="max-w-[440px] text-[15px] leading-[1.65] text-sab-text-secondary">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <TechnicalTag key={t}>{t}</TechnicalTag>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between pt-3">
            <span className="font-mono text-[11px] text-sab-text-faint">
              {project.meta}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-sab-purple-light transition-colors group-hover:text-sab-purple-bright">
              Open project
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </SabCard>
    </Link>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      to="/work/$projectId"
      params={{ projectId: project.id }}
      className={cn(
        "vt-share group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-sab-border px-5 py-5 transition-colors last:border-b-0 hover:bg-sab-surface-hover md:grid-cols-[48px_minmax(0,1.1fr)_minmax(0,1.4fr)_150px_auto] md:gap-6 md:px-7",
      )}
      style={{ viewTransitionName: `project-${project.id}` }}
      aria-label={`${project.name} — open project page`}
    >
      <span className="font-mono text-[12px] text-sab-text-faint">
        {String(index).padStart(2, "0")}
      </span>
      <span className="min-w-0">
        <span
          className="vt-share block truncate font-display text-[17px] font-semibold text-sab-text transition-colors group-hover:text-sab-purple-bright"
          style={{ viewTransitionName: `project-title-${project.id}` }}
        >
          {project.name}
        </span>
        <span className="mt-0.5 block text-[13px] text-sab-text-muted md:hidden">
          {project.category}
        </span>
      </span>
      <span className="hidden truncate text-[14px] text-sab-text-secondary md:block">
        {project.summary}
      </span>
      <span className="hidden items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-sab-text-muted md:flex">
        <span
          className={cn("h-1.5 w-1.5 rounded-full", statusDot[project.status])}
        />
        {project.status}
      </span>
      <ArrowUpRight className="h-4 w-4 text-sab-text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sab-purple-light" />
    </Link>
  );
}

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionLabel>02 / CAPABILITIES</SectionLabel>
        <div className="grid gap-x-10 gap-y-8 border-t border-sab-border pt-8 md:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.title}>
              <h3 className="font-display text-lg font-semibold text-sab-text">
                {c.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-[1.6] text-sab-text-secondary">
                {c.summary}
              </p>
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {c.items.map((i) => (
                  <TechnicalTag key={i}>{i}</TechnicalTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionLabel>03 / ABOUT</SectionLabel>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(1.8rem,3.6vw,3rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-sab-text">
              Curious enough to explore.
              <br />
              <span className="text-sab-text-secondary">
                Disciplined enough to finish.
              </span>
            </h2>
            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-sab-text-secondary">
              Independent developer focused on practical systems: focused
              interfaces, maintainable architecture, and infrastructure I run
              myself.
            </p>
            <p className="mt-6 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-sab-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-sab-success shadow-[0_0_0_3px_rgba(105,214,163,0.15)]" />
              Available for selected collaborations
            </p>
          </div>
          <div className="lg:col-span-5">
            <SabCard className="p-5 bg-[rgba(11,11,16,0.96)]">
              <div className="sab-label">CURRENT FOCUS</div>
              <ul className="mt-4 space-y-2">
                {currentFocus.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center justify-between rounded-md border border-sab-border bg-sab-bg-soft px-3 py-2.5"
                  >
                    <span className="text-[14px] text-sab-text-secondary">
                      {f.label}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-sab-purple-light">
                      {f.state}
                    </span>
                  </li>
                ))}
              </ul>
            </SabCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-sab-border py-8">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-5 px-5 md:flex-row md:items-center md:px-8">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-sab-border bg-sab-bg-elev font-mono text-[11px] text-sab-text">
            S<span className="text-sab-purple">/</span>
          </span>
          <span className="text-[13px] text-sab-text-secondary">
            © {new Date().getFullYear()} saboreq.xyz
          </span>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11.5px] uppercase tracking-[0.12em] text-sab-text-muted"
        >
          <Link
            to="/"
            hash="work"
            hashScrollIntoView={{ behavior: "instant", block: "start" }}
            className="hover:text-sab-text"
          >
            Work
          </Link>
          <Link
            to="/"
            hash="contact"
            hashScrollIntoView={{ behavior: "instant", block: "start" }}
            className="hover:text-sab-text"
          >
            Contact
          </Link>
          <a
            href="https://github.com/saboreq"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-sab-text"
          >
            GitHub <Github className="ml-1 inline h-3 w-3" aria-hidden />
          </a>
        </nav>
        <SabButton
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top ↑
        </SabButton>
      </div>
    </footer>
  );
}
