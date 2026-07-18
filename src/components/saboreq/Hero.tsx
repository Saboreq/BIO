import {
  ArrowRight,
  Github,
  Mail,
  MessageCircle,
  Linkedin,
} from "lucide-react";
import { SabLinkButton, StatusChip, SystemPanel } from "./primitives";
import { contact } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 sab-grid-bg opacity-50" />
        <div
          className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <StatusChip tone="success">
            AVAILABLE FOR SELECTED PROJECTS
          </StatusChip>
          <p className="sab-label mt-6">INDEPENDENT SOFTWARE DEVELOPER</p>
          <h1 className="mt-4 max-w-[680px] font-display text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-sab-text">
            I build systems that{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #f7f7f8 30%, #a78bfa 100%)",
              }}
            >
              work beyond the demo.
            </span>
          </h1>
          <p className="mt-6 max-w-[600px] font-mono text-[13px] text-sab-text-muted">
            Saboreq — software development, game systems, automation, and
            infrastructure.
          </p>
          <p className="mt-6 max-w-[620px] text-[17px] leading-[1.7] text-sab-text-secondary">
            I build practical digital systems, from polished web interfaces and
            server tooling to Roblox mechanics, Minecraft plugins, Discord
            automation, and self-hosted infrastructure.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <SabLinkButton href="#work" variant="primary">
              Explore selected work
              <ArrowRight className="h-4 w-4" />
            </SabLinkButton>
            <SabLinkButton href="#contact" variant="secondary">
              Start a conversation
            </SabLinkButton>
          </div>
          <div className="mt-10 flex items-center gap-3">
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
            {contact.linkedin && (
              <SocialLink href={contact.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
            )}
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroConsole />
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-sab-border bg-sab-bg-elev text-sab-text-secondary transition hover:border-sab-border-purple hover:text-sab-text"
    >
      {children}
    </a>
  );
}

function HeroConsole() {
  const modules = [
    { label: "GAME_SYSTEMS", state: "BUILDING", tone: "text-sab-purple-light" },
    { label: "SERVER_TOOLING", state: "ONLINE", tone: "text-sab-success" },
    { label: "WEB_SOFTWARE", state: "ACTIVE", tone: "text-sab-success" },
    { label: "AUTOMATION", state: "IDLE", tone: "text-sab-text-muted" },
  ];
  return (
    <SystemPanel label="saboreq.system" status="OPERATIONAL">
      <div className="space-y-4">
        <div>
          <div className="sab-label">IDENTITY</div>
          <div className="mt-1 font-display text-xl font-semibold text-sab-text">
            Saboreq
          </div>
          <div className="font-mono text-[11px] text-sab-text-muted">
            Independent developer
          </div>
        </div>
        <div className="space-y-1.5">
          {modules.map((m) => (
            <div
              key={m.label}
              className="flex items-center justify-between rounded-md border border-sab-border bg-sab-bg-soft px-2.5 py-2 font-mono text-[11px]"
            >
              <span className="text-sab-text-secondary">{m.label}</span>
              <span className={m.tone}>● {m.state}</span>
            </div>
          ))}
        </div>
        <div className="rounded-md border border-sab-border bg-black/40 px-2.5 py-2 font-mono text-[11px] text-sab-text-secondary">
          <span className="text-sab-text-faint">$</span> build --focus quality
          --ship reliable
        </div>
      </div>
    </SystemPanel>
  );
}
