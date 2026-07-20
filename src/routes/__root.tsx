import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/saboreq/Navigation";
import { Footer } from "@/components/saboreq/Sections";
import { BackToTop, EasterEgg, SkipLink } from "@/components/saboreq/Extras";
import { BootGate, bootScript } from "@/components/saboreq/BootGate";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="sab-label">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-sab-text">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-sab-text-secondary">
          This page doesn&apos;t exist or has moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            viewTransition
            className="inline-flex h-10 items-center justify-center rounded-[10px] bg-sab-purple px-4 text-sm font-medium text-white transition-colors hover:bg-sab-purple-light"
          >
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold text-sab-text">
          This page didn&apos;t load
        </h1>
        <p className="mt-2 text-sm text-sab-text-secondary">
          Something went wrong on this end. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-10 items-center justify-center rounded-[10px] bg-sab-purple px-4 text-sm font-medium text-white transition-colors hover:bg-sab-purple-light"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-[10px] border border-sab-border bg-sab-bg-elev px-4 text-sm font-medium text-sab-text transition-colors hover:border-sab-border-purple"
          >
            Go home
          </a>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Saboreq — Custom Software, Websites & Digital Products" },
        {
          name: "description",
          content:
            "Saboreq is a software development company building professional websites, web applications, Windows .NET tools, and Roblox systems for clients worldwide.",
        },
        { name: "author", content: "Saboreq" },
        { name: "theme-color", content: "#050507" },
        {
          property: "og:title",
          content: "Saboreq — Focused Software for Real Problems",
        },
        {
          property: "og:description",
          content:
            "Custom websites, web applications, Windows .NET tools, and Roblox systems with clear scope, direct communication, and accountable delivery.",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Saboreq" },
        { property: "og:url", content: "https://saboreq.xyz" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        { rel: "canonical", href: "https://saboreq.xyz" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
        },
      ],
      scripts: [
        { children: bootScript },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "Saboreq",
                url: "https://saboreq.xyz",
                email: "contact@saboreq.xyz",
                description:
                  "Software development company building websites, web applications, Windows tools, and Roblox systems.",
                founder: {
                  "@type": "Person",
                  name: "Saboreq",
                  jobTitle: "Software Developer",
                },
                knowsAbout: [
                  "Professional websites",
                  "Web applications",
                  "C#",
                  ".NET",
                  "WinForms",
                  "C++",
                  "React",
                  "TypeScript",
                  "Roblox Luau",
                ],
                sameAs: ["https://github.com/Saboreq"],
              },
              {
                "@type": "WebSite",
                name: "Saboreq",
                url: "https://saboreq.xyz",
                publisher: {
                  "@type": "Organization",
                  name: "Saboreq",
                },
              },
            ],
          }),
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col bg-sab-bg text-sab-text selection:bg-sab-purple/40">
        <SkipLink />
        <BootGate />
        <Navigation />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
        <BackToTop />
        <EasterEgg />
        <Toaster position="bottom-right" theme="dark" />
        <div
          className="sab-noise vt-noise pointer-events-none fixed inset-0 z-[90]"
          aria-hidden="true"
        />
      </div>
    </QueryClientProvider>
  );
}
