import { cn } from "@/lib/utils";

/** Shimmer placeholder block — same loading language as Filehaven. */
export function Sk({
  className,
  w,
  style,
}: {
  className?: string;
  w?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("sk", className)}
      style={w ? { width: w, ...style } : style}
    />
  );
}

/** Placeholder mirror of a project detail page, shown while a route loads. */
export function DetailSkeleton() {
  return (
    <main
      id="main"
      className="mx-auto max-w-[1240px] px-5 pb-24 pt-28 md:px-8 md:pt-36"
      aria-busy="true"
    >
      <span className="sr-only">Loading project…</span>
      <div className="sk-stagger" aria-hidden="true">
        <Sk className="h-3.5" w="88px" />
        <div className="mt-6 flex items-center gap-3">
          <Sk className="h-3" w="140px" />
          <Sk className="h-3" w="90px" />
        </div>
        <Sk className="mt-4 h-12 md:h-16" w="min(560px, 80%)" />
        <Sk className="mt-5 h-4" w="min(680px, 95%)" />
        <Sk className="mt-2.5 h-4" w="min(520px, 75%)" />
        <div className="mt-6 flex gap-2">
          <Sk className="h-7" w="76px" />
          <Sk className="h-7" w="92px" />
          <Sk className="h-7" w="84px" />
        </div>
        <Sk className="mt-10 h-[240px] w-full md:h-[320px]" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Sk className="h-40" />
          <Sk className="h-40" />
          <Sk className="h-40" />
        </div>
      </div>
    </main>
  );
}

/** Placeholder mirror of the home page, used inside the boot screen. */
export function HomeSkeleton() {
  return (
    <div className="mx-auto max-w-[1240px] px-5 md:px-8" aria-hidden="true">
      <div className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Sk className="h-[30px] w-[30px] rounded-[9px]" />
          <Sk className="hidden h-3.5 sm:block" w="84px" />
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <Sk className="h-3" w="42px" />
          <Sk className="h-3" w="48px" />
          <Sk className="h-3" w="56px" />
          <Sk className="h-9 rounded-[10px]" w="150px" />
        </div>
        <Sk className="h-9 w-9 rounded-md md:hidden" />
      </div>
      <div className="pt-20 md:pt-28">
        <Sk className="h-3" w="220px" />
        <Sk className="mt-7 h-12 md:h-[72px]" w="min(640px, 92%)" />
        <Sk className="mt-3 h-12 md:h-[72px]" w="min(480px, 70%)" />
        <Sk className="mt-7 h-4" w="min(560px, 85%)" />
        <div className="mt-9 flex gap-3">
          <Sk className="h-11 rounded-[10px]" w="170px" />
          <Sk className="h-11 rounded-[10px]" w="150px" />
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <Sk className="h-40 md:h-52" />
          <div className="hidden flex-col gap-3 md:flex">
            <Sk className="h-12" />
            <Sk className="h-12" />
            <Sk className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
