import { softwareStack } from "@/lib/site";
import { Icon } from "@/components/icon";

/**
 * Concrete software in twee bakken: koppelen (houden & verbinden) en
 * vervangen (maatwerk neemt het over → abonnement opzeggen).
 */
export function SoftwareStack() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {/* Koppelen */}
      <div className="flex flex-col rounded-3xl border border-ink/8 bg-white p-7 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white">
            <Icon name="plug" className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-ink">Koppelen</h3>
            <p className="text-sm text-ink/55">wat je houdt — wij verbinden het</p>
          </div>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {softwareStack.koppelen.map((t) => (
            <li
              key={t}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-sm font-medium text-ink/75 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-6 flex items-center gap-1.5 text-xs leading-relaxed text-ink/45">
          <Icon name="check-circle" className="h-3.5 w-3.5 text-emerald-500" />
          Je systemen van waarheid blijven — ze gaan alleen met elkaar praten.
        </p>
      </div>

      {/* Vervangen */}
      <div className="flex flex-col rounded-3xl border border-brand/20 bg-gradient-to-br from-brand-50 to-white p-7 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand text-white shadow-glow">
            <Icon name="credit-card" className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-ink">Vervangen</h3>
            <p className="text-sm text-ink/55">bespaar de maandkosten</p>
          </div>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {softwareStack.vervangen.map((t) => (
            <li
              key={t}
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3.5 py-1.5 text-sm font-medium text-ink/55 shadow-sm"
            >
              <Icon name="x" className="h-3.5 w-3.5 text-brand-500" strokeWidth={2.5} />
              <span className="line-through decoration-brand/40">{t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 flex items-center gap-1.5 text-xs leading-relaxed text-ink/50">
          <Icon name="credit-card" className="h-3.5 w-3.5 text-brand-600" />
          Maandabonnementen die maatwerk overneemt — en die je opzegt.
        </p>
      </div>
    </div>
  );
}
