import { ArrowUpRight, Github } from "lucide-react";
import {
  SabCard,
  SectionLabel,
  StatusChip,
  TechnicalTag,
  SabLinkButton,
} from "./primitives";
import { PREVIEWS } from "./previews";
import {
  capabilities,
  currentFocus,
  experience,
  projects,
  type ProjectStatus,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

function toneForStatus(s: ProjectStatus) {
  switch (s) {
    case "OPERATIONAL":
      return "success" as const;
    case "IN DEVELOPMENT":
      return "purple" as const;
    case "EXPERIMENTAL":
      return "warning" as const;
    case "PROTOTYPE":
      return "warning" as const;
    case "PRIVATE":
      return "neutral" as const;
  }
}

export function WorkSection() {
  const spans: Record<string, string> = {
    filehaven: "lg:col-span-7",
    sabcontrol: "lg:col-span-5",
    sabteams: "lg:col-span-5",
    horror: "lg:col-span-7",
    infra: "lg:col-span-6 lg:col-start-4",
  };
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionLabel>01 / SELECTED WORK</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-12">
          <h2 className="lg:col-span-7 font-display text-[clamp(1.9rem,4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-sab-text">
            Systems, tools, and experiments built with a clear purpose.
          </h2>
          <p className="lg:col-span-5 self-end text-[15.5px] leading-[1.75] text-sab-text-secondary">
            A short selection across web platforms, game systems, Minecraft
            tooling, and self-hosted infrastructure. Only real projects, no
            invented metrics.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              className={spans[p.id] ?? "lg:col-span-6"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  className,
}: {
  project: (typeof projects)[number];
  className?: string;
}) {
  const Preview = PREVIEWS[project.preview];
  const tech = project.tech.slice(0, 4);
  return (
    <SabCard
      className={cn(
        "group flex flex-col overflow-hidden p-0 bg-[rgba(11,11,16,0.96)] transition-[transform,border-color] duration-300 hover:-translate-y-[2px]",
        className,
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-sab-border bg-sab-bg-elev">
        <div className="absolute inset-0 sab-grid-bg opacity-30" />
        <div className="relative h-full transition-transform duration-500 group-hover:scale-[1.02]">
          <Preview />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3.5 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-sab-text-muted">
            {project.category}
          </span>
          <StatusChip tone={toneForStatus(project.status)}>
            {project.status}
          </StatusChip>
        </div>
        <h3 className="font-display text-[1.35rem] font-semibold leading-tight text-sab-text">
          {project.name}
        </h3>
        <p className="text-[14.5px] leading-[1.6] text-sab-text-secondary">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <TechnicalTag key={t}>{t}</TechnicalTag>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-mono text-[11px] text-sab-text-faint">
            {project.meta ?? ""}
          </span>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.name} source`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-sab-border text-sab-text-secondary hover:border-sab-border-purple hover:text-sab-text"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 font-mono text-[11px] text-sab-purple-light hover:text-sab-purple-bright"
              >
                Visit <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </SabCard>
  );
}

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionLabel>02 / CAPABILITIES</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-12">
          <h2 className="lg:col-span-7 font-display text-[clamp(1.9rem,4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-sab-text">
            One workflow across interface, logic, games, and infrastructure.
          </h2>
          <p className="lg:col-span-5 self-end text-[15.5px] leading-[1.75] text-sab-text-secondary">
            Three focused areas, one continuous workflow. AI APIs are a working
            tool inside infrastructure and automation, not a separate product.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {capabilities.map((c, idx) => (
            <SabCard key={c.title} className="p-6 bg-[rgba(11,11,16,0.96)]">
              <div className="sab-label">{`0${idx + 1} / ${c.title.toUpperCase()}`}</div>
              <h3 className="mt-3 font-display text-xl font-semibold text-sab-text">
                {c.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.7] text-sab-text-secondary">
                {c.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.items.map((i) => (
                  <TechnicalTag key={i}>{i}</TechnicalTag>
                ))}
              </div>
            </SabCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionLabel>03 / ABOUT</SectionLabel>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-sab-text">
              Curious enough to explore.
              <br />
              <span className="text-sab-text-secondary">
                Disciplined enough to finish.
              </span>
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.75] text-sab-text-secondary max-w-[640px]">
              <p>
                I am an independent developer focused on practical systems
                across software, game development, automation, and
                infrastructure.
              </p>
              <p>
                I prefer focused interfaces, maintainable architecture, secure
                infrastructure, and features that solve real problems instead of
                adding noise.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <SabCard className="p-5 bg-[rgba(11,11,16,0.96)]">
              <div className="flex items-center justify-between">
                <div className="sab-label">CURRENT FOCUS</div>
                <StatusChip tone="purple">LIVE</StatusChip>
              </div>
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
            <SabCard className="p-5 bg-[rgba(11,11,16,0.96)]">
              <div className="flex items-center gap-2">
                <StatusChip tone="success">AVAILABLE</StatusChip>
                <span className="sab-label">FOR SELECTED COLLABORATIONS</span>
              </div>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-sab-text-secondary">
                Open to focused software, automation, game-system, and
                infrastructure projects where clear implementation matters.
              </p>
            </SabCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionLabel>04 / EXPERIENCE</SectionLabel>
        <h2 className="max-w-[820px] font-display text-[clamp(1.9rem,4vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-sab-text">
          Experience built through real systems and repeated iteration.
        </h2>
        <div className="relative mt-12 pl-6 md:pl-10">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-sab-border md:left-4" />
          <div className="space-y-4">
            {experience.map((e, i) => {
              const secondary = e.title === "AI-Assisted Workflows";
              return (
                <div key={e.title} className="relative">
                  <span
                    className={cn(
                      "absolute -left-[18px] top-6 h-1.5 w-1.5 rounded-full md:-left-[26px]",
                      secondary ? "bg-sab-text-faint" : "bg-sab-purple",
                    )}
                  />
                  <SabCard
                    className={cn(
                      "p-5 bg-[rgba(11,11,16,0.96)]",
                      secondary && "opacity-90",
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3
                        className={cn(
                          "font-display font-semibold",
                          secondary
                            ? "text-lg text-sab-text-secondary"
                            : "text-xl text-sab-text",
                        )}
                      >
                        {e.title}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-sab-text-muted">
                        {e.date}
                      </span>
                    </div>
                    <p className="mt-2.5 max-w-[720px] text-[14.5px] leading-[1.65] text-sab-text-secondary">
                      {e.description}
                    </p>
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {e.tags.slice(0, 4).map((t) => (
                        <TechnicalTag key={t}>{t}</TechnicalTag>
                      ))}
                    </div>
                  </SabCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-sab-border py-10">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-sab-border bg-sab-bg-elev font-mono text-[11px] text-sab-text">
                S<span className="text-sab-purple">/</span>
              </span>
              <span className="font-display text-[14px] font-semibold text-sab-text">
                saboreq
              </span>
            </div>
            <p className="mt-3 text-[13.5px] leading-[1.65] text-sab-text-secondary">
              Software, game systems, automation, and infrastructure.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11.5px] uppercase tracking-[0.12em] text-sab-text-muted"
          >
            <a href="#work" className="hover:text-sab-text">
              Work
            </a>
            <a href="#capabilities" className="hover:text-sab-text">
              Capabilities
            </a>
            <a href="#contact" className="hover:text-sab-text">
              Contact
            </a>
            <a
              href="https://github.com/saboreq"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-sab-text"
            >
              GitHub
            </a>
            <a href="mailto:hello@saboreq.xyz" className="hover:text-sab-text">
              Email
            </a>
          </nav>
          <SabLinkButton href="#top" variant="secondary" size="sm">
            Back to top ↑
          </SabLinkButton>
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-sab-border pt-4 font-mono text-[11px] text-sab-text-muted md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} · saboreq.xyz</span>
          <span>Designed and built with focus, code, and caffeine.</span>
        </div>
      </div>
    </footer>
  );
}
