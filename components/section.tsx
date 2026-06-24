import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/icon";

export function Eyebrow({
  children,
  icon,
  className,
  tone = "dark",
}: {
  children: ReactNode;
  icon?: IconName;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
        tone === "dark"
          ? "bg-brand/10 text-brand-600 ring-1 ring-inset ring-brand/15"
          : "bg-white/10 text-brand-200 ring-1 ring-inset ring-white/15",
        className,
      )}
    >
      {icon ? <Icon name={icon} className="h-3.5 w-3.5" /> : null}
      {children}
    </span>
  );
}

/** Gecentreerde of links-uitgelijnde sectiekop. */
export function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  lead,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  eyebrowIcon?: IconName;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <div className={align === "center" ? "mx-auto" : ""}>
          <Eyebrow icon={eyebrowIcon} tone={tone}>
            {eyebrow}
          </Eyebrow>
        </div>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold tracking-tight sm:text-4xl",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "text-pretty text-lg leading-relaxed",
            tone === "dark" ? "text-ink/65" : "text-white/65",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/** Standaard sectie-spacing wrapper. */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}
