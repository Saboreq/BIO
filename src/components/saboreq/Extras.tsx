import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`vt-fab fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-sab-border bg-sab-bg-elev/95 text-sab-text backdrop-blur transition-all duration-300 hover:border-sab-border-purple ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

export function EasterEgg() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    console.log(
      "%c Built with focus and persistence by Saboreq. ",
      "color:#a78bfa;background:#0b0b10;padding:6px 10px;border-radius:6px;font-family:JetBrains Mono, monospace;",
    );
    let on = false;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable)
      )
        return;
      if (e.key === "p" || e.key === "P") {
        on = !on;
        document.documentElement.classList.toggle("sab-ambient", on);
        toast(on ? "Ambient signal increased." : "Ambient signal normalized.");
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <style>{`
      .sab-ambient body::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: -1;
        background: radial-gradient(circle at 20% 20%, rgba(139,92,246,0.18), transparent 55%),
                    radial-gradient(circle at 80% 80%, rgba(109,40,217,0.16), transparent 55%);
        transition: opacity 500ms ease;
      }
    `}</style>
  );
}

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:border focus:border-sab-border-purple focus:bg-sab-bg-elev focus:px-3 focus:py-2 focus:text-sm focus:text-sab-text"
    >
      Skip to content
    </a>
  );
}
