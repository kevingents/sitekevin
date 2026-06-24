"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";

const CONSENT_KEY = "kvw-cookie-consent";

/**
 * Sticky CTA op mobiel: verschijnt zodra je voorbij de hero scrollt, maar pas
 * nadat de cookie-melding is weggeklikt — zo overlappen ze nooit.
 */
export function StickyCta() {
  const pathname = usePathname();
  const [scrolledPast, setScrolledPast] = useState(false);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    try {
      setConsent(!!window.localStorage.getItem(CONSENT_KEY));
    } catch {
      setConsent(true);
    }
    const onConsent = () => setConsent(true);
    const onScroll = () => setScrolledPast(window.scrollY > 700);
    onScroll();
    window.addEventListener("kvw-cookie-consent", onConsent);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("kvw-cookie-consent", onConsent);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const visible = scrolledPast && consent;

  // Niet tonen op de contactpagina zelf (redundant)
  if (pathname === "/contact") return null;

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 px-4 pb-4 transition-all duration-300 lg:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <Link
        href="/contact"
        tabIndex={visible ? 0 : -1}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-card-lg ring-1 ring-brand-600/20 transition-colors hover:bg-brand-600"
      >
        Plan kennismaking
        <Icon name="arrow-right" className="h-4 w-4" />
      </Link>
    </div>
  );
}
