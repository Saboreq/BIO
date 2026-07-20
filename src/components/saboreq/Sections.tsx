import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  currentFocus,
  projects,
  services,
  type Project,
  type ProjectStatus,
} from "@/data/portfolio";
import { cn, toneForStatus } from "@/lib/utils";

const statusDot: Record<ProjectStatus, string> = {
  OPERATIONAL: "bg-sab-success",
  "IN DEVELOPMENT": "bg-sab-purple",
  EXPERIMENTAL: "bg-sab-warning",
};

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const eur = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function WorkSection() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const rest = projects.filter((project) => project.id !== featured.id);

  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionLabel>01 / SELECTED WORK</SectionLabel>
        <div
          data-reveal="5"
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <h2 className="max-w-[640px] font-display text-[clamp(1.8rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-sab-text">
            Production work, explained clearly.
          </h2>
          <p className="text-[14px] text-sab-text-muted">
            Live projects with technical breakdowns and source links.
          </p>
        </div>

        <div data-reveal="6" className="mt-10">
          <FeaturedProject project={featured} />
        </div>

        {rest.length > 0 && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-sab-border bg-[rgba(11,11,16,0.8)]">
            {rest.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index + 2} />
            ))}
          </div>
        )}
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
            {project.tech.slice(0, 4).map((technology) => (
              <TechnicalTag key={technology}>{technology}</TechnicalTag>
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
        <span className={cn("h-1.5 w-1.5 rounded-full", statusDot[project.status])} />
        {project.status}
      </span>
      <ArrowUpRight className="h-4 w-4 text-sab-text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sab-purple-light" />
    </Link>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionLabel>02 / SERVICES</SectionLabel>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <SabCard
              key={service.title}
              hover={false}
              className="p-5 bg-[rgba(11,11,16,0.82)]"
            >
              <h3 className="font-display text-lg font-semibold text-sab-text">
                {service.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-sab-text-secondary">
                {service.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {service.items.map((item) => (
                  <TechnicalTag key={item}>{item}</TechnicalTag>
                ))}
              </div>
            </SabCard>
          ))}
        </div>
      </div>
    </section>
  );
}

type ExchangeRate = {
  rate: number;
  date: string;
};

function useUsdToEurRate() {
  const [exchangeRate, setExchangeRate] = useState<ExchangeRate>({
    rate: 0.876263,
    date: "2026-07-20",
  });

  useEffect(() => {
    const controller = new AbortController();

    void fetch("https://api.frankfurter.app/latest?from=USD&to=EUR", {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Exchange-rate request failed.");
        return response.json() as Promise<{
          date?: string;
          rates?: { EUR?: number };
        }>;
      })
      .then((result) => {
        const rate = result.rates?.EUR;
        if (
          typeof rate === "number" &&
          rate > 0 &&
          typeof result.date === "string"
        ) {
          setExchangeRate({ rate, date: result.date });
        }
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.warn("Could not refresh the USD/EUR estimate.", error);
      });

    return () => controller.abort();
  }, []);

  return exchangeRate;
}

function formatRateDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function PricingSection() {
  const exchangeRate = useUsdToEurRate();

  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionLabel>03 / ESTIMATED PRICING</SectionLabel>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-[700px] font-display text-[clamp(1.8rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-sab-text">
              Clear starting points. A scoped quote before work begins.
            </h2>
            <p className="mt-4 max-w-[700px] text-[15px] leading-[1.7] text-sab-text-secondary">
              USD is the base currency. EUR values are approximate and use the latest
              available daily exchange rate. Final pricing depends on scope,
              complexity, integrations, supplied assets, and deadline.
            </p>
          </div>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-sab-text-muted">
            1 USD ≈ {exchangeRate.rate.toFixed(4)} EUR · {formatRateDate(exchangeRate.date)}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <SabCard
              key={service.title}
              hover={false}
              className="flex flex-col p-6 bg-[rgba(11,11,16,0.96)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-sab-text-muted">
                    {service.title}
                  </p>
                  <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.025em] text-sab-text">
                    <span className="mr-2 text-sm font-medium text-sab-text-muted">
                      From
                    </span>
                    {usd.format(service.startingUsd)}
                  </p>
                  <p className="mt-1 text-[13px] text-sab-text-muted">
                    ≈ {eur.format(service.startingUsd * exchangeRate.rate)}
                  </p>
                </div>
                <div className="text-right">
                  <span className="block rounded-full border border-sab-border-purple bg-[rgba(139,92,246,0.08)] px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.11em] text-sab-purple-light">
                    Typical {usd.format(service.typicalMinUsd)}–{usd.format(service.typicalMaxUsd)}
                  </span>
                  <span className="mt-2 block text-[12px] text-sab-text-muted">
                    ≈ {eur.format(service.typicalMinUsd * exchangeRate.rate)}–{eur.format(service.typicalMaxUsd * exchangeRate.rate)}
                  </span>
                </div>
              </div>
              <p className="mt-5 text-[14px] leading-[1.65] text-sab-text-secondary">
                {service.details}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 self-start font-mono text-[12px] uppercase tracking-[0.1em] text-sab-purple-light transition-colors hover:text-sab-purple-bright"
              >
                Request a quote
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </SabCard>
          ))}
        </div>

        <p className="mt-5 text-[12px] leading-[1.65] text-sab-text-muted">
          Estimates exclude third-party hosting, paid services, marketplace fees,
          licences, and ongoing maintenance unless included in the written quote.
        </p>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionLabel>04 / ABOUT</SectionLabel>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(1.8rem,3.6vw,3rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-sab-text">
              Practical scope.
              <br />
              <span className="text-sab-text-secondary">Reliable delivery.</span>
            </h2>
            <p className="mt-6 max-w-[590px] text-[16px] leading-[1.75] text-sab-text-secondary">
              I am an independent software developer working through a registered
              Polish business. I build focused websites, web applications, Windows
              tools, and Roblox systems for English-speaking clients worldwide.
            </p>
            <p className="mt-6 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-sab-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-sab-success shadow-[0_0_0_3px_rgba(105,214,163,0.15)]" />
              Available for clearly scoped projects
            </p>
          </div>
          <div className="lg:col-span-5">
            <SabCard className="p-5 bg-[rgba(11,11,16,0.96)]">
              <div className="sab-label">CURRENT AVAILABILITY</div>
              <ul className="mt-4 space-y-2">
                {currentFocus.map((focus) => (
                  <li
                    key={focus.label}
                    className="flex items-center justify-between rounded-md border border-sab-border bg-sab-bg-soft px-3 py-2.5"
                  >
                    <span className="text-[14px] text-sab-text-secondary">
                      {focus.label}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-sab-purple-light">
                      {focus.state}
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
            hash="pricing"
            hashScrollIntoView={{ behavior: "instant", block: "start" }}
            className="hover:text-sab-text"
          >
            Pricing
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
            href="https://github.com/Saboreq"
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
