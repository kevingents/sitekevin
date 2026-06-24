export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

/** Eenvoudige, leesbare opmaak voor juridische tekst (geen typography-plugin nodig). */
export function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-col gap-10">
        {sections.map((s, i) => (
          <section key={s.heading}>
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              <span className="mr-2 text-ink/30">{i + 1}.</span>
              {s.heading}
            </h2>
            {s.paragraphs?.map((p, j) => (
              <p key={j} className="mt-3 text-pretty leading-relaxed text-ink/70">
                {p}
              </p>
            ))}
            {s.bullets ? (
              <ul className="mt-3 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-ink/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
