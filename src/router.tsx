import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

/**
 * Direction-aware view-transition types, consumed by
 * `:active-view-transition-type(...)` rules in styles.css:
 *   vt-forward  home -> project detail
 *   vt-back     project detail -> home
 *   vt-lateral  project detail -> project detail (prev/next)
 *   vt-none     same-path navigation (hash/search only) — instant
 */
function transitionTypes({
  fromLocation,
  toLocation,
}: {
  fromLocation?: { pathname: string };
  toLocation?: { pathname: string };
}): Array<string> {
  const from = fromLocation?.pathname ?? "/";
  const to = toLocation?.pathname ?? "/";
  if (from === to) return ["vt-none"];
  const fromDetail = from.startsWith("/work");
  const toDetail = to.startsWith("/work");
  if (fromDetail && toDetail) return ["vt-lateral"];
  if (toDetail) return ["vt-forward"];
  if (fromDetail) return ["vt-back"];
  return ["vt-forward"];
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPreload: "intent",
    defaultViewTransition: { types: transitionTypes },
    defaultPendingMs: 180,
    defaultPendingMinMs: 320,
  });

  return router;
};
