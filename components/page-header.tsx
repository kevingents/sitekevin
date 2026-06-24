import { type ReactNode } from "react";
import { Eyebrow } from "@/components/section";
import { type IconName } from "@/components/icon";

export function PageHeader({
  eyebrow,
  eyebrowIcon,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  eyebrowIcon?: IconName;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-x-0 -top-40 -z-10 h-[32rem] bg-gradient-to-b from-brand-50 via-bone to-bone"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 -top-10 -z-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page pb-6 pt-16 sm:pt-20 lg:pt-24">
        <div className="max-w-3xl animate-fade-up">
          <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink/65 sm:text-xl">
              {lead}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
