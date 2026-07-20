import { ArrowRight, Github, Mail, MessageCircle } from "lucide-react";
import { SabLinkButton } from "./primitives";
import { contact } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 sab-grid-bg opacity-50" />
        <div
          className="absolute -top-44 right-[8%] h-[560px] w-[560px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 60%)",
          }}
        />
        <svg
          viewBox="0 0 600 600"
          aria-hidden="true"
          className="absolute -right-40 top-8 hidden h-[520px] w-[520px] opacity-[0.16] lg:block"
          fill="none"
        >
          <circle cx="300" cy="300" r="180" stroke="rgba(167,139,250,0.35)" />
          <circle
            cx="300"
            cy="300"
            r="252"
            stroke="rgba(247,247,248,0.12)"
            strokeDasharray="2 10"
          />
          <circle cx="300" cy="300" r="120" stroke="rgba(247,247,248,0.1)" />
          <circle cx="447" cy="196" r="4" fill="#a78bfa" />
          <circle cx="184" cy="382" r="3" fill="rgba(247,247,248,0.4)" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <p
          data-reveal="1"
          className="flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-sab-text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sab-success shadow-[0_0_0_3px_rgba(105,214,163,0.15)]" />
          Saboreq software company · accepting scoped projects
        </p>
        <h1
          data-reveal="2"
          className="mt-6 max-w-[940px] font-display text-[clamp(2.6rem,6.5vw,5.6rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-sab-text"
        >
          Focused software built to{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(120deg, #f7f7f8 30%, #a78bfa 100%)",
            }}
          >
            solve a real problem.
          </span>
        </h1>
        <p
          data-reveal="3"
          className="mt-7 max-w-[720px] text-[17px] leading-[1.7] text-sab-text-secondary"
        >
          I run Saboreq, delivering professional websites, web applications,
          Windows .NET tools, and Roblox systems for clients worldwide.
        </p>
        <div data-reveal="4" className="mt-9 flex flex-wrap items-center gap-3">
          <SabLinkButton href="#work" variant="primary">
            View projects
            <ArrowRight className="h-4 w-4" />
          </SabLinkButton>
          <SabLinkButton href="#pricing" variant="secondary">
            View estimates
          </SabLinkButton>
          <SabLinkButton href="#contact" variant="secondary">
            Request a quote
          </SabLinkButton>
          <div className="ml-1 flex items-center gap-2">
            {contact.github && (
              <SocialLink href={contact.github} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialLink>
            )}
            {contact.email && (
              <SocialLink href={`mailto:${contact.email}`} label="Email">
                <Mail className="h-4 w-4" />
              </SocialLink>
            )}
            {contact.discord && (
              <SocialLink href={contact.discord} label="Discord">
                <MessageCircle className="h-4 w-4" />
              </SocialLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer noopener"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-sab-border bg-sab-bg-elev text-sab-text-secondary transition hover:border-sab-border-purple hover:text-sab-text"
    >
      {children}
    </a>
  );
}
