import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BrandMark, Wordmark, SabLinkButton } from "./primitives";
import { nav } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > 120 && y > lastY);
      lastY = y;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-sab-purple"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden
      />
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div
          className={cn(
            "border-b transition-colors duration-300",
            scrolled
              ? "border-sab-border bg-[rgba(8,8,11,0.85)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <nav
            className="mx-auto flex h-14 max-w-[1240px] items-center justify-between px-5 md:px-8"
            aria-label="Primary"
          >
            <a href="#top" className="flex items-center gap-2.5">
              <BrandMark size={30} />
              <Wordmark className="hidden sm:inline-flex text-[15px]" />
            </a>
            <ul className="hidden items-center gap-1 md:flex">
              {nav.map((item) => {
                const id = item.href.slice(1);
                const isActive = active === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "rounded-md px-3 py-1.5 text-[13.5px] transition-colors",
                        isActive
                          ? "text-sab-text"
                          : "text-sab-text-muted hover:text-sab-text",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-2">
              <SabLinkButton
                href="#contact"
                variant="secondary"
                size="sm"
                className="hidden md:inline-flex"
              >
                Start a conversation
                <ArrowUpRight className="h-3.5 w-3.5" />
              </SabLinkButton>
              <button
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-sab-border bg-sab-bg-elev text-sab-text md:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? (
                  <X className="h-4.5 w-4.5" />
                ) : (
                  <Menu className="h-4.5 w-4.5" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 right-0 top-14 border-b border-sab-border bg-sab-bg-elev/95 px-5 pb-6 pt-4 backdrop-blur-xl">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-[15px] text-sab-text-secondary hover:bg-sab-surface-hover hover:text-sab-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <SabLinkButton
              href="#contact"
              onClick={() => setOpen(false)}
              variant="primary"
              className="mt-3 w-full"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </SabLinkButton>
          </div>
        </div>
      )}
    </>
  );
}
