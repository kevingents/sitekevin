import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * Wordmark + monogram. SVG-mark (geen afbeelding nodig), schaalt mee.
 * `tone` past de kleuren aan voor lichte of donkere achtergrond.
 */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "relative grid h-9 w-9 place-items-center rounded-xl text-sm font-bold tracking-tight transition-transform duration-200 group-hover:-translate-y-0.5",
          "bg-gradient-to-br from-brand to-brand-600 text-base text-white shadow-glow",
        )}
      >
        W
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-white" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[0.95rem] font-semibold tracking-tight",
            isLight ? "text-white" : "text-ink",
          )}
        >
          {site.name}
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.7rem] font-medium",
            isLight ? "text-white/60" : "text-ink/50",
          )}
        >
          Maatwerk software
        </span>
      </span>
    </Link>
  );
}
