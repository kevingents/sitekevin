import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combineert Tailwind-classes en lost conflicten netjes op. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
