"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/site";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/icon";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Gesloten mobiel menu uit tab-order én toegankelijkheidsboom halen
  useEffect(() => {
    if (mobileMenuRef.current) mobileMenuRef.current.inert = !open;
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sluit mobiel menu bij navigatie
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Voorkom scrollen achter open menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink/5 bg-bone/80 backdrop-blur-md supports-[backdrop-filter]:bg-bone/70"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hoofdmenu">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-ink/5 text-ink"
                  : "text-ink/60 hover:bg-ink/5 hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/contact" variant="ghost" size="sm">
            Plan kennismaking
          </ButtonLink>
          <ButtonLink href="/werk" variant="primary" size="sm" iconRight="arrow-right">
            Bekijk werk
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-xl text-ink ring-1 ring-inset ring-ink/10 transition-colors hover:bg-ink/5 lg:hidden"
        >
          <Icon name={open ? "x" : "menu"} />
        </button>
      </div>

      {/* Mobiel menu */}
      <div
        className={cn(
          "lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          ref={mobileMenuRef}
          aria-hidden={!open}
          className={cn(
            "fixed inset-x-0 top-16 z-40 origin-top border-b border-ink/5 bg-bone px-5 pb-8 pt-2 shadow-card-lg transition-all duration-200",
            open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
          )}
        >
          <nav className="flex flex-col" aria-label="Mobiel menu">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium transition-colors",
                  isActive(item.href) ? "bg-ink/5 text-ink" : "text-ink/70 hover:bg-ink/5",
                )}
              >
                {item.label}
                <Icon name="arrow-up-right" className="h-4 w-4 text-ink/30" />
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <ButtonLink href="/contact" variant="ghost" size="md" className="w-full">
              Plan kennismaking
            </ButtonLink>
            <ButtonLink href="/werk" variant="primary" size="md" className="w-full" iconRight="arrow-right">
              Bekijk werk
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
