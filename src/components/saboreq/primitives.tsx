import * as React from "react";
import { cn } from "@/lib/utils";

type Div = React.HTMLAttributes<HTMLDivElement>;

export function SabCard({
  className,
  children,
  hover = true,
  topEdge = false,
  ...rest
}: Div & { hover?: boolean; topEdge?: boolean }) {
  return (
    <div
      className={cn(
        "sab-card",
        hover && "sab-card-hover",
        topEdge && "sab-top-edge",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function StatusChip({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "success" | "purple" | "warning" | "danger" | "neutral";
  className?: string;
}) {
  const dotColor: Record<string, string> = {
    success: "bg-sab-success shadow-[0_0_0_3px_rgba(105,214,163,0.15)]",
    purple: "bg-sab-purple shadow-[0_0_0_3px_rgba(139,92,246,0.18)]",
    warning: "bg-sab-warning shadow-[0_0_0_3px_rgba(240,185,90,0.15)]",
    danger: "bg-sab-danger shadow-[0_0_0_3px_rgba(239,113,133,0.15)]",
    neutral: "bg-white/40",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-sab-border bg-sab-bg-soft px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-sab-text-secondary",
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dotColor[tone])} />
      {children}
    </span>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-8 bg-sab-border-strong" />
      <span className="sab-label">{children}</span>
    </div>
  );
}

export function TechnicalTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-sab-border bg-sab-bg-soft px-2 py-1 font-mono text-[11px] text-sab-text-secondary">
      {children}
    </span>
  );
}

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
};

export function SabButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: BtnProps) {
  const sizes = size === "sm" ? "h-9 px-3.5 text-sm" : "h-11 px-5 text-[15px]";
  const variants: Record<string, string> = {
    primary:
      "bg-sab-purple text-white border border-sab-purple-light/40 shadow-[0_8px_28px_-12px_rgba(139,92,246,0.7),inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-sab-purple-light hover:-translate-y-[1px]",
    secondary:
      "bg-sab-bg-elev text-sab-text border border-sab-border hover:border-sab-border-purple hover:bg-sab-surface-hover",
    ghost: "bg-transparent text-sab-text-secondary hover:text-sab-text",
  };
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[10px] font-medium transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sab-purple focus-visible:ring-offset-2 focus-visible:ring-offset-sab-bg disabled:opacity-50 disabled:pointer-events-none",
        sizes,
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function SabLinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...rest
}: {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const sizes = size === "sm" ? "h-9 px-3.5 text-sm" : "h-11 px-5 text-[15px]";
  const variants: Record<string, string> = {
    primary:
      "bg-sab-purple text-white border border-sab-purple-light/40 shadow-[0_8px_28px_-12px_rgba(139,92,246,0.7),inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-sab-purple-light hover:-translate-y-[1px]",
    secondary:
      "bg-sab-bg-elev text-sab-text border border-sab-border hover:border-sab-border-purple hover:bg-sab-surface-hover",
    ghost: "bg-transparent text-sab-text-secondary hover:text-sab-text",
  };
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[10px] font-medium transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none",
        sizes,
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

export function BrandMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[9px] border border-sab-border bg-sab-bg-elev font-mono text-[13px] font-semibold text-sab-text sab-top-edge",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span>
        S<span className="text-sab-purple">/</span>
      </span>
    </span>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-display text-[17px] font-semibold tracking-tight text-sab-text",
        className,
      )}
    >
      saboreq
      <span className="h-1.5 w-1.5 rounded-[2px] bg-sab-purple" aria-hidden />
    </span>
  );
}
