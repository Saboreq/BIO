import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import {
  SabCard,
  SectionLabel,
  StatusChip,
  TechnicalTag,
  SabLinkButton,
} from "@/components/saboreq/primitives";
import { Artwork } from "@/components/saboreq/artwork";
import { DetailSkeleton } from "@/components/saboreq/skeletons";
import { toneForStatus } from "@/lib/utils";
import { adjacentProjects, getProject, type Project } from "@/data/portfolio";

export const Route = createFileRoute("/work/$projectId")({
  loader: ({ params }) => {
    const project = getProject(params.projectId);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Saboreq` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.name} — Saboreq` },
          { property: "og:description", content: loaderData.summary },
        ]
      : [],
  }),
  pendingComponent: DetailSkeleton,
  component: ProjectPage,
});

const instantHash = { behavior: "instant", block: "start" } as const;

function ProjectPage() {
  const project = Route.useLoaderData();
  const { prev, next } = adjacentProjects(project.id);

  return (
    <main
      id="main"
      className="mx-auto max-w-[1240px] px-5 pb-20 pt-24 md:px-8 md:pt-32"
    >
      <Link
        to="/"
        hash="work"
        hashScrollIntoView={instantHash}
        className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-sab-text-muted transition-colors hover:text-sab-text"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All work
      </Link>

      <SabCard
        hover={false}
        className="vt-share mt-6 overflow-hidden p-0 bg-[rgba(11,11,16,0.96)]"
        style={{ viewTransitionName: `project-${project.id}` }}
      >
        <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-sab-text-muted">
                {project.category}
              </span>
              <StatusChip tone={toneForStatus(project.status)}>
                {project.status}
              </StatusChip>
            </div>
            <h1
              className="vt-share mt-5 font-display text-[clamp(2.1rem,4.5vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-sab-text"
              style={{ viewTransitionName: `project-title-${project.id}` }}
            >
              {project.name}
            </h1>
            <p className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-sab-text-secondary">
              {project.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <TechnicalTag key={t}>{t}</TechnicalTag>
              ))}
            </div>
            {(project.live || project.github) && (
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {project.live && (
                  <SabLinkButton href={project.live} external variant="primary">
                    Visit live
                    <ArrowUpRight className="h-4 w-4" />
                  </SabLinkButton>
                )}
                {project.github && (
                  <SabLinkButton
                    href={project.github}
                    external
                    variant="secondary"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </SabLinkButton>
                )}
              </div>
            )}
          </div>
          <div className="relative min-h-[220px] overflow-hidden border-t border-sab-border bg-sab-bg-elev lg:min-h-full lg:border-l lg:border-t-0">
            <div className="absolute inset-0 sab-grid-bg opacity-30" />
            <div
              className="vt-share relative h-full"
              style={{ viewTransitionName: `project-art-${project.id}` }}
            >
              <Artwork id={project.artwork} accent={project.accent} />
            </div>
          </div>
        </div>
      </SabCard>

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SectionLabel>BREAKDOWN</SectionLabel>
          <div className="grid gap-5 sm:grid-cols-2">
            {project.sections.map((s) => (
              <SabCard
                key={s.title}
                hover={false}
                className="p-5 bg-[rgba(11,11,16,0.8)]"
              >
                <h2 className="font-display text-[15px] font-semibold text-sab-text">
                  {s.title}
                </h2>
                <ul className="mt-3 space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2.5 text-[14px] leading-[1.55] text-sab-text-secondary"
                    >
                      <span
                        className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: project.accent }}
                        aria-hidden
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </SabCard>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4">
          <SectionLabel>FACTS</SectionLabel>
          <SabCard hover={false} className="p-5 bg-[rgba(11,11,16,0.8)]">
            <dl className="space-y-4">
              <Fact label="Status" value={project.status.toLowerCase()} />
              <Fact label="Timeframe" value={project.year} />
              <Fact label="Role" value={project.role} />
              {project.meta && <Fact label="Access" value={project.meta} />}
            </dl>
          </SabCard>
        </aside>
      </div>

      <nav
        aria-label="More projects"
        className="mt-16 grid gap-4 border-t border-sab-border pt-8 sm:grid-cols-2"
      >
        {prev && <AdjacentLink project={prev} direction="prev" />}
        {next && <AdjacentLink project={next} direction="next" />}
      </nav>
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-sab-text-muted">
        {label}
      </dt>
      <dd className="text-right text-[13.5px] capitalize text-sab-text-secondary">
        {value}
      </dd>
    </div>
  );
}

function AdjacentLink({
  project,
  direction,
}: {
  project: Project;
  direction: "prev" | "next";
}) {
  const isNext = direction === "next";
  return (
    <Link
      to="/work/$projectId"
      params={{ projectId: project.id }}
      className={`group flex items-center gap-3 rounded-xl border border-sab-border bg-[rgba(11,11,16,0.8)] p-4 transition-colors hover:border-sab-border-purple hover:bg-sab-surface-hover ${
        isNext ? "justify-end text-right sm:col-start-2" : ""
      }`}
    >
      {!isNext && (
        <ArrowLeft className="h-4 w-4 shrink-0 text-sab-text-faint transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span className="min-w-0">
        <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-sab-text-muted">
          {isNext ? "Next project" : "Previous project"}
        </span>
        <span
          className="vt-share mt-1 block truncate font-display text-[15px] font-semibold text-sab-text"
          style={{ viewTransitionName: `project-title-${project.id}` }}
        >
          {project.name}
        </span>
      </span>
      {isNext && (
        <ArrowRight className="h-4 w-4 shrink-0 text-sab-text-faint transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
