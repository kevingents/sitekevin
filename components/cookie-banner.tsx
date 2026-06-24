"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";

const KEY = "kvw-cookie-consent";

/**
 * Lichte, privacy-vriendelijke melding. De site gebruikt cookieloze analytics,
 * dus dit is een informatieve melding — geen tracking-toestemming vereist.
 */
export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(KEY)) {
        // korte vertraging zodat de pagina eerst rustig laadt
        const t = window.setTimeout(() => setShow(true), 600);
        return () => window.clearTimeout(t);
      }
    } catch {
      /* localStorage niet beschikbaar — banner overslaan */
    }
  }, []);

  function dismiss() {
    try {
      window.localStorage.setItem(KEY, "1");
    } catch {
      /* negeren */
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-ink/10 bg-white/95 p-4 shadow-card-lg backdrop-blur sm:flex-row sm:items-center sm:gap-4 sm:p-5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
          <Icon name="shield-check" className="h-5 w-5" />
        </span>
        <p className="flex-1 text-sm leading-relaxed text-ink/65">
          Deze site gebruikt alleen cookieloze, privacy-vriendelijke statistieken —
          geen tracking, geen advertentie-cookies. Meer in de{" "}
          <Link href="/privacy" className="font-semibold text-brand-600 hover:text-brand-700">
            privacyverklaring
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-ink-700"
        >
          Begrepen
        </button>
      </div>
    </div>
  );
}
