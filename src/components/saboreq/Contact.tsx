import { useState } from "react";
import { toast } from "sonner";
import { Copy, Github, Mail, MessageCircle, Send } from "lucide-react";
import { SabButton, SabCard, SectionLabel, StatusChip } from "./primitives";
import { contact, projectTypes } from "@/data/portfolio";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: projectTypes[0],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<string>("");

  const set = (k: keyof typeof form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k])
      setErrors((e) => {
        const n = { ...e };
        delete n[k];
        return n;
      });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please share your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "A valid email helps me reply.";
    if (form.message.trim().length < 20)
      e.message = "A bit more context helps (20+ characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      setStatus("Please fix the highlighted fields.");
      return;
    }
    const subject = encodeURIComponent(
      `[${form.type}] Project inquiry from ${form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\n\n${form.message}`,
    );
    const href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    try {
      window.location.href = href;
      setStatus("Your email application should now be open.");
      toast.success("Opening your email application");
    } catch {
      setStatus("Could not open your email app. Use the copy buttons below.");
      toast.error("Couldn't open your email app.");
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    toast.success("Email copied to clipboard");
  };
  const copyMessage = async () => {
    const text = `From: ${form.name} <${form.email}>\nType: ${form.type}\n\n${form.message}`;
    await navigator.clipboard.writeText(text);
    toast.success("Message copied to clipboard");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 sab-grid-bg opacity-25" />
      </div>
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionLabel>06 / CONTACT</SectionLabel>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-sab-text">
              Have a system worth building?
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-sab-text-secondary max-w-[520px]">
              Share what you are trying to create, improve, automate, or
              operate. Include the goal, current state, constraints, and what a
              successful result should look like.
            </p>
            <div className="mt-8 space-y-3">
              <ContactCard
                icon={<Mail className="h-4 w-4" />}
                label="EMAIL"
                value={contact.email}
                href={`mailto:${contact.email}`}
                primary
                extra={
                  <button
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-sab-border text-sab-text-muted hover:border-sab-border-purple hover:text-sab-text"
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </button>
                }
              />
              {contact.github && (
                <ContactCard
                  icon={<Github className="h-4 w-4" />}
                  label="GITHUB"
                  value={contact.github.replace("https://", "")}
                  href={contact.github}
                />
              )}
              {contact.discord && (
                <ContactCard
                  icon={<MessageCircle className="h-4 w-4" />}
                  label="DISCORD"
                  value="Message on Discord"
                  href={contact.discord}
                />
              )}
            </div>
          </div>

          <SabCard className="lg:col-span-7 p-6 md:p-8 bg-[rgba(11,11,16,0.96)]">
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" id="c-name" error={errors.name}>
                  <input
                    id="c-name"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    onBlur={validate}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "err-name" : undefined}
                    className="input"
                  />
                </Field>
                <Field label="Email" id="c-email" error={errors.email}>
                  <input
                    id="c-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    onBlur={validate}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                    className="input"
                  />
                </Field>
              </div>
              <Field label="Project type" id="c-type">
                <select
                  id="c-type"
                  value={form.type}
                  onChange={(e) => set("type", e.target.value)}
                  className="input"
                >
                  {projectTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="Message" id="c-msg" error={errors.message}>
                <textarea
                  id="c-msg"
                  rows={6}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  onBlur={validate}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-msg" : undefined}
                  className="input resize-none"
                  placeholder="Goal, current state, constraints, and what success looks like."
                />
              </Field>
              <div className="flex flex-wrap items-center gap-3">
                <SabButton type="submit" variant="primary">
                  Send via email
                  <Send className="h-4 w-4" />
                </SabButton>
                <SabButton
                  type="button"
                  variant="secondary"
                  onClick={copyMessage}
                >
                  Copy message
                  <Copy className="h-3.5 w-3.5" />
                </SabButton>
                <div
                  aria-live="polite"
                  role="status"
                  className="font-mono text-[11.5px] text-sab-text-muted"
                >
                  {status}
                </div>
              </div>
            </form>
            <style>{`
              .input {
                width: 100%;
                background-color: var(--sab-bg-soft, #08080b);
                border: 1px solid var(--sab-border);
                color: var(--sab-text);
                border-radius: 10px;
                padding: 10px 12px;
                font-size: 14.5px;
                transition: border-color 200ms;
              }
              .input:hover { border-color: var(--sab-border-strong); }
              .input:focus { outline: none; border-color: var(--sab-purple); box-shadow: 0 0 0 3px rgba(139,92,246,0.15); }
              select.input { appearance: none; background-image: linear-gradient(45deg, transparent 50%, #a78bfa 50%), linear-gradient(-45deg, transparent 50%, #a78bfa 50%); background-position: calc(100% - 18px) 50%, calc(100% - 12px) 50%; background-size: 6px 6px, 6px 6px; background-repeat: no-repeat; padding-right: 32px; }
              select.input option { background: #0e0e14; color: #f7f7f8; }
            `}</style>
          </SabCard>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-sab-text-muted"
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          id={`err-${id.replace(/^c-/, "")}`}
          className="mt-1 font-mono text-[11px] text-sab-danger"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  primary,
  extra,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  primary?: boolean;
  extra?: React.ReactNode;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-xl border p-4 transition-colors ${primary ? "border-sab-border-purple bg-[rgba(139,92,246,0.05)]" : "border-sab-border bg-sab-bg-elev hover:border-sab-border-purple"}`}
    >
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noreferrer noopener"
        className="flex flex-1 items-center gap-3"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-sab-border bg-sab-bg-soft text-sab-purple-light">
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-sab-text-muted">
            {label}
          </span>
          <span className="block truncate text-[14.5px] text-sab-text">
            {value}
          </span>
        </span>
      </a>
      {extra}
    </div>
  );
}

export { StatusChip };
