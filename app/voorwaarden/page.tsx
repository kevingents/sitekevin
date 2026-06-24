import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Icon } from "@/components/icon";
import { LegalSections, type LegalSection } from "@/components/legal-sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "De algemene voorwaarden voor opdrachten en samenwerking.",
};

const sections: LegalSection[] = [
  {
    heading: "Definities",
    paragraphs: [
      `In deze voorwaarden betekent "opdrachtnemer" ${site.name} (${site.kvk}), en "opdrachtgever" de partij die een opdracht verstrekt. "Opdracht" is de overeengekomen levering van een maatwerk portaal en/of bijbehorende diensten.`,
    ],
  },
  {
    heading: "Toepasselijkheid",
    paragraphs: [
      "Deze voorwaarden gelden voor alle offertes, opdrachten en overeenkomsten, tenzij schriftelijk anders is afgesproken. Afwijkingen gelden alleen wanneer ze schriftelijk zijn bevestigd.",
    ],
  },
  {
    heading: "Offertes en opdrachtbevestiging",
    paragraphs: [
      "Offertes zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld. Een opdracht komt tot stand door een schriftelijke opdrachtbevestiging (Statement of Work) waarin scope, prijs en tijdlijn zijn vastgelegd.",
    ],
  },
  {
    heading: "Prijzen en betaling",
    paragraphs: [
      "Bouwprojecten worden tegen een vaste projectprijs uitgevoerd: 50% bij de start, 50% bij oplevering. Onderhoud en hosting worden apart als maandbedrag gefactureerd. Meerwerk buiten de overeengekomen scope wordt vooraf afgestemd en tegen het geldende uurtarief (€95–€125) gefactureerd. Alle bedragen zijn exclusief btw. Betaaltermijn: 14 dagen.",
    ],
  },
  {
    heading: "Uitvoering",
    paragraphs: [
      "De opdracht wordt naar beste inzicht en vermogen uitgevoerd. Opdrachtgever zorgt tijdig voor de benodigde informatie, toegang en medewerking. Genoemde doorlooptijden (doorgaans 8–12 weken) zijn indicatief en geen fatale termijnen.",
    ],
  },
  {
    heading: "Oplevering en acceptatie",
    paragraphs: [
      "Na oplevering heeft opdrachtgever een redelijke termijn om te testen. Gebreken die binnen de afgesproken scope vallen worden kosteloos hersteld. Ingebruikname van het portaal geldt als acceptatie.",
    ],
  },
  {
    heading: "Intellectueel eigendom",
    paragraphs: [
      "Na volledige betaling verkrijgt opdrachtgever het gebruiksrecht op de geleverde maatwerk-code. Code-eigendom en een eventuele escrow-regeling worden in de opdrachtbevestiging vastgelegd. Generieke componenten en kennis blijven van opdrachtnemer.",
    ],
  },
  {
    heading: "Aansprakelijkheid",
    paragraphs: [
      "De aansprakelijkheid is beperkt tot het factuurbedrag van de betreffende opdracht, en in elk geval tot het bedrag dat de beroeps- en bedrijfsaansprakelijkheidsverzekering uitkeert. Opdrachtnemer is niet aansprakelijk voor indirecte schade of gevolgschade.",
    ],
  },
  {
    heading: "Geheimhouding en AVG",
    paragraphs: [
      "Beide partijen behandelen vertrouwelijke informatie vertrouwelijk. Worden er persoonsgegevens verwerkt, dan sluiten partijen een verwerkersovereenkomst (DPA) conform de AVG. Verwerkingsregister, audit-log en retentie zijn standaard onderdeel van het portaal.",
    ],
  },
  {
    heading: "Duur en opzegging",
    paragraphs: [
      "Het onderhoudsabonnement loopt per jaar en is daarna maandelijks opzegbaar met een opzegtermijn van één maand. Bij beëindiging werkt opdrachtnemer mee aan een nette overdracht en export van de data.",
    ],
  },
  {
    heading: "Toepasselijk recht",
    paragraphs: [
      "Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement van opdrachtnemer.",
    ],
  },
];

export default function VoorwaardenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Voorwaarden"
        eyebrowIcon="file-check"
        title="Algemene voorwaarden"
        lead="De spelregels voor opdrachten en samenwerking — kort, leesbaar en zonder verrassingen."
      />
      <Section className="pt-8 sm:pt-10">
        <div className="mx-auto mb-10 flex max-w-3xl items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Conceptversie als startpunt — laat deze voorwaarden juridisch
            controleren en vul de bedrijfsgegevens aan voordat je ze gebruikt.
          </span>
        </div>
        <LegalSections sections={sections} />
      </Section>
    </>
  );
}
