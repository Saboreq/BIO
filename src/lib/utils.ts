import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ProjectStatus } from "@/data/portfolio";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toneForStatus(s: ProjectStatus) {
  switch (s) {
    case "OPERATIONAL":
      return "success" as const;
    case "IN DEVELOPMENT":
      return "purple" as const;
    case "EXPERIMENTAL":
      return "warning" as const;
  }
}
