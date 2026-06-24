import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/icon";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-glow hover:bg-brand-600 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-ink text-white hover:bg-ink-700 hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "bg-transparent text-ink ring-1 ring-inset ring-ink/15 hover:bg-ink/5 hover:ring-ink/25",
  light:
    "bg-white/10 text-white ring-1 ring-inset ring-white/20 backdrop-blur hover:bg-white/15",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base [height:3.25rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconRight?: IconName;
  children: ReactNode;
  className?: string;
};

function content(icon: IconName | undefined, iconRight: IconName | undefined, children: ReactNode) {
  return (
    <>
      {icon ? <Icon name={icon} className="h-4 w-4" /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} className="h-4 w-4" /> : null}
    </>
  );
}

/** Link-knop (interne of externe href). */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {content(icon, iconRight, children)}
    </Link>
  );
}

/** Echte <button> (forms, acties). */
export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {content(icon, iconRight, children)}
    </button>
  );
}
