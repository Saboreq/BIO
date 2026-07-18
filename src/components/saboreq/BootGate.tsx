import { useEffect } from "react";
import { BrandMark } from "./primitives";
import { HomeSkeleton } from "./skeletons";

export const BOOT_FLAG = "sab-booted";

/**
 * Pre-paint script for the document head. Decides before first paint whether
 * this visit gets the boot loading screen (first visit per session, motion
 * allowed), so there is no flash and no hydration mismatch.
 */
export const bootScript = `(function(){try{if(location.pathname==="/"&&!sessionStorage.getItem("${BOOT_FLAG}")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("sab-booting")}}catch(e){}})()`;

const SHOW_MS = 1050;
const FADE_MS = 520;
const REVEAL_MS = 1500;

/**
 * First-visit loading screen: a shimmer placeholder mirror of the page that
 * settles into the real content. Shown once per session.
 */
export function BootGate() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("sab-booting")) return;

    const timers: number[] = [];
    const t = (fn: () => void, ms: number) =>
      timers.push(window.setTimeout(fn, ms));

    t(() => {
      root.classList.add("sab-boot-leaving", "sab-revealing");
      try {
        sessionStorage.setItem(BOOT_FLAG, "1");
      } catch {
        /* storage unavailable — boot simply repeats next visit */
      }
    }, SHOW_MS);
    t(() => {
      root.classList.remove("sab-booting", "sab-boot-leaving");
    }, SHOW_MS + FADE_MS);
    t(
      () => {
        root.classList.remove("sab-revealing");
      },
      SHOW_MS + FADE_MS + REVEAL_MS,
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="sab-boot-overlay" aria-hidden="true">
      <HomeSkeleton />
      <div className="sab-boot-brand">
        <BrandMark size={34} />
        <span className="sab-boot-line">
          <span className="sab-boot-line-fill" />
        </span>
      </div>
    </div>
  );
}
