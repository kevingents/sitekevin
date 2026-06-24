/**
 * Centrale configuratie & content voor de site.
 * Eén bron van waarheid — pas hier aan, niet verspreid over pagina's.
 */

export const site = {
  name: "Willie",
  shortName: "Willie",
  // Officiële naam voor KvK, contracten en juridische pagina's
  legalName: "Kevin van Willigenburg",
  product: "Maatwerk software",
  tagline: "Maatwerk software die handmatig werk vervangt",
  description:
    "Ik bouw eigen systemen — portalen, kassa's, webshops en omnichannel — en koppel bestaande systemen, zodat losse tools één werkende stack worden. Voor branche, retail, klus, horeca en dienstverlening. AVG-compliant.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kevinvanwilligenburg.nl",
  email: "kevin@gents.nl",
  phoneDisplay: "+31 6 12 34 56 78",
  phoneHref: "+31612345678",
  locatie: "Nederland — op locatie of remote",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "",
  // Bedrijfsgegevens — vul aan zodra KvK/BTW bekend zijn
  kvk: "KvK 00000000",
  btw: "BTW NL0000.00.000.B00",
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Sectoren", href: "/sectoren" },
  { label: "Diensten", href: "/diensten" },
  { label: "Werk", href: "/werk" },
  { label: "Aanpak", href: "/aanpak" },
  { label: "Over", href: "/over" },
  { label: "Contact", href: "/contact" },
];

/** De universele kernproblemen die elk portaal oplost — "Herken je dit?" */
export const problems: { title: string; body: string; icon: string }[] = [
  {
    icon: "files",
    title: "Versnipperde informatie",
    body: "Gegevens staan in Excel, Outlook, op papier en in losse tools. Niemand weet welke versie klopt.",
  },
  {
    icon: "repeat",
    title: "Handmatige overdracht",
    body: "Kennis gaat van persoon naar persoon via kopiëren, plakken en hopen dat niets ontbreekt.",
  },
  {
    icon: "bell-off",
    title: "Geen signalering",
    body: "Een aflopend contract, een openstaande taak of een ontbrekend document valt pas op als het te laat is.",
  },
  {
    icon: "message-square-off",
    title: "Geen centrale communicatie",
    body: "Mail, WhatsApp en telefoon lopen door elkaar. Geen historie, geen dossier, geen overzicht.",
  },
  {
    icon: "table",
    title: "Excel als vangnet",
    body: "Voor alles wat de systemen niet doen draait een los Excel-bestand. Eén verkeerde cel en het klopt niet meer.",
  },
  {
    icon: "credit-card",
    title: "Stapel abonnementen",
    body: "Je betaalt elke maand aan zes tot acht softwareleveranciers — vaak voor tools die je maar half gebruikt en die niet met elkaar praten.",
  },
];

/** De rollen die in één portaal samenkomen (typisch 3–4). */
export const roles: { title: string; body: string; icon: string }[] = [
  {
    icon: "graduation-cap",
    title: "Medewerkers & leden",
    body: "Eigen omgeving met taken, documenten en voortgang. Werkt op de telefoon, geen losse mailtjes meer.",
  },
  {
    icon: "building-2",
    title: "Klanten & partners",
    body: "Zelf gegevens bijwerken en de status volgen. Minder bellen en mailen, meer zelfservice.",
  },
  {
    icon: "users",
    title: "Managers & coördinatoren",
    body: "Overzicht met signalen, planning en rapportage. Zien in één blik waar actie nodig is.",
  },
  {
    icon: "briefcase",
    title: "Binnendienst & admin",
    body: "Administratie, facturatie en AVG-dossier centraal. Minder handwerk, minder fouten, volledige historie.",
  },
];

/** Wat ik doe — drie poten. Niet alleen portalen: bouwen, koppelen én vervangen. */
export const capabilities: {
  icon: string;
  title: string;
  body: string;
  examples: string[];
}[] = [
  {
    icon: "code",
    title: "Eigen systemen bouwen",
    body: "Maatwerk software die om jouw proces heen past, niet andersom. Van een multi-rol portaal tot een kassa, webshop of omnichannel-oplossing.",
    examples: ["Portalen & SaaS", "Kassa (POS) & webshop", "Omnichannel retail"],
  },
  {
    icon: "plug",
    title: "Systemen koppelen",
    body: "Bestaande systemen met elkaar verbinden, zodat data één keer wordt ingevoerd en overal klopt. Geen dubbel werk, geen overtypen.",
    examples: ["Kassa ↔ webshop ↔ voorraad", "Exact / AFAS / Synergy", "DocuSign, HR & salaris"],
  },
  {
    icon: "layout-dashboard",
    title: "Handmatig werk vervangen",
    body: "Van Excel, Outlook-mapjes en een stapel losse abonnementen naar één werkende stack die meedenkt, signaleert en automatiseert. Je eigen software in plaats van eindeloze licentiekosten.",
    examples: ["Workflows & signalering", "Automatische facturatie", "Minder abonnementen"],
  },
];

/** Eigenaarschap — data en code in eigen beheer, geen vendor lock-in. */
export const ownership: { icon: string; title: string; body: string }[] = [
  {
    icon: "database",
    title: "Data in eigen beheer",
    body: "Al je gegevens op één plek, gehost in de EU en op elk moment exporteerbaar. Niet versnipperd over tien externe clouds van softwareleveranciers.",
  },
  {
    icon: "code",
    title: "Eigen code",
    body: "De maatwerk-software is van jou. Ik bouw en beheer het — met escrow als optie — maar je zit nergens aan vast.",
  },
  {
    icon: "lock",
    title: "Geen vendor lock-in",
    body: "Geen leverancier die de prijs opschroeft of de stekker eruit trekt. Jij houdt de regie over je systemen én je data.",
  },
];

/** Sectoren die ik bedien — gebruikt door de sector-filter én de detailpagina's. */
export type Sector = {
  slug: string;
  short: string; // korte label voor pills
  name: string;
  icon: string;
  tagline: string;
  voorbeelden: string;
  pijnpunten: { title: string; body: string }[];
  modules: string[];
  priceHint: string;
  relatedCaseSlug?: string;
};

export const sectors: Sector[] = [
  {
    slug: "branche",
    short: "Branche",
    name: "Branche-verenigingen",
    icon: "users",
    tagline:
      "BBL-administratie, leerbedrijven en regio-coördinatie in één portaal. Sollicitaties auto-routed, uren gesynchroniseerd, AVG geregeld.",
    voorbeelden: "CBM / SWV Meubel, OnderhoudNL, O&O-fondsen",
    pijnpunten: [
      { title: "Studentdata op zeven plekken", body: "Outlook-mapjes, Excel, Synergy en de P-schijf — welke versie klopt weet niemand zeker." },
      { title: "Geen signaal bij aflopende contracten", body: "Of een leercontract afloopt of een student zonder bedrijf zit, valt pas op bij toeval." },
      { title: "Overdracht per regio is handwerk", body: "Bij een nieuwe coördinator gaat kennis verloren en blijven dossiers onvindbaar." },
      { title: "AVG-risico's zonder dossier", body: "Persoonsgegevens verspreid, zonder verwerkingsregister of retentiebeleid." },
      { title: "Communicatie zonder historie", body: "Coördinatoren, bedrijven en binnendienst mailen los langs elkaar heen." },
    ],
    modules: ["BBL contract-flow", "Leerbedrijf-voorwaarden", "Regio-coördinatie", "Sollicitatie-routing", "Uren-synchronisatie", "AVG-dossier"],
    priceHint: "Projectprijs op maat — afhankelijk van het aantal studenten, regio's en integraties (Synergy, Cleverdesk).",
    relatedCaseSlug: "swv-meubel",
  },
  {
    slug: "retail",
    short: "Retail",
    name: "Retail & omnichannel",
    icon: "building-2",
    tagline:
      "Kassa, webshop, voorraad en filialen als één geheel. Online en winkel delen hetzelfde klantbeeld en dezelfde realtime voorraad — gebouwd én gekoppeld op maat.",
    voorbeelden: "Fashion- en multi-vestiging retail (zoals GENTS: kassa, webshop & omnichannel)",
    pijnpunten: [
      { title: "Roosters en voorraad in losse sheets", body: "Elke vestiging houdt eigen Excel-bestanden bij die niet met elkaar praten." },
      { title: "Hoofdkantoor mist realtime zicht", body: "Omzet, voorraad en bezetting per filiaal zijn pas dagen later bekend." },
      { title: "Uren niet gekoppeld aan salaris", body: "Gewerkte uren worden handmatig overgetypt richting de salarisadministratie." },
      { title: "Voorraadtransfers gaan op gevoel", body: "Producten verschuiven tussen filialen zonder centraal overzicht." },
      { title: "Medewerkers zonder mobiele toegang", body: "Rooster en mededelingen hangen aan het prikbord, niet op de telefoon." },
    ],
    modules: ["Kassa (POS)", "Webshop", "Omnichannel & één klantbeeld", "Realtime voorraad", "Filiaal-rooster", "Omzet-dashboard"],
    priceHint: "Projectprijs op maat — afhankelijk van het aantal vestigingen, kanalen en koppelingen (kassa, webshop, voorraad, HR).",
    relatedCaseSlug: "gents",
  },
  {
    slug: "klus",
    short: "Klus",
    name: "Klusplatformen",
    icon: "plug",
    tagline:
      "Slimme klusvraag-routing: postcode, skills en beschikbaarheid gematcht aan de juiste vakman. De klant ziet de voortgang, de vakman heeft alle info, het hoofdkantoor houdt grip.",
    voorbeelden: "Klus- en vakman-platformen (zoals KLUSR, Werkspot)",
    pijnpunten: [
      { title: "Klusvragen handmatig verdeeld", body: "Iemand zit met de hand klussen te koppelen aan beschikbare vakmensen." },
      { title: "Klant weet de status niet", body: "Zonder zicht op voortgang volgen telefoontjes en mailtjes 'hoe staat het ervoor?'." },
      { title: "Geen match op postcode en skills", body: "De juiste vakman vinden is zoeken in plaats van automatisch matchen." },
      { title: "Offertes los in de mail", body: "Prijsafspraken staan verspreid en zijn lastig terug te vinden." },
      { title: "Geen review- of kwaliteitssysteem", body: "Kwaliteit en betrouwbaarheid worden nergens gestructureerd vastgelegd." },
    ],
    modules: ["Geo-matching", "Prijsofferte-flow", "Voortgang voor klant", "Review-systeem", "Vakman-planning", "Facturatie"],
    priceHint: "Projectprijs op maat — afhankelijk van het aantal vakmensen, matching-logica en betaal-/offerte-flows.",
  },
  {
    slug: "horeca",
    short: "Horeca",
    name: "Horeca-ketens",
    icon: "briefcase",
    tagline:
      "Roosters per locatie, voorraad-transfers tussen vestigingen en uren via een app. De eigenaar ziet alle vestigingen in één dashboard.",
    voorbeelden: "Restaurantgroepen met 3+ vestigingen",
    pijnpunten: [
      { title: "Roosters per vestiging los geregeld", body: "Elke locatie plant apart, zonder overzicht over het geheel." },
      { title: "Voorraad en marges onzichtbaar", body: "Wat een locatie verdient of verspilt, is pas achteraf bekend." },
      { title: "Uren handmatig naar salaris", body: "Gewerkte uren worden overgetypt — foutgevoelig en tijdrovend." },
      { title: "Geen centraal dashboard", body: "De eigenaar moet per vestiging navragen hoe het loopt." },
      { title: "Transfers tussen locaties op gevoel", body: "Producten en personeel schuiven zonder centrale registratie." },
    ],
    modules: ["Rooster per locatie", "Voorraad per vestiging", "Tafel-omzet", "Marge-rapportage", "Uren-app", "Eigenaar-dashboard"],
    priceHint: "Projectprijs op maat — afhankelijk van het aantal vestigingen, kassakoppeling en planning-complexiteit.",
  },
  {
    slug: "diensten",
    short: "Dienstverlening",
    name: "Dienstverlening MKB",
    icon: "life-buoy",
    tagline:
      "Personeelsplanning per klant en locatie, automatische urenregistratie en facturatie, en een klant die de voortgang zelf kan volgen.",
    voorbeelden: "Schoonmaak, beveiliging en zorg op locatie",
    pijnpunten: [
      { title: "Planning in losse agenda's", body: "Per klant of locatie een eigen agenda, zonder centraal overzicht." },
      { title: "Uren en facturatie ontkoppeld", body: "Gewerkte uren en facturen worden los bijgehouden en met de hand gematcht." },
      { title: "Klant kan niets volgen", body: "Opdrachtgevers bellen voor status omdat er geen inzage is." },
      { title: "Contract-uren niet bewaakt", body: "Over- of onderschrijding van afgesproken uren valt pas bij de factuur op." },
      { title: "Multi-locatie wordt chaos", body: "Meer klanten en locaties betekent meer losse lijstjes." },
    ],
    modules: ["Klant-locaties", "Contract-uren", "Multi-locatie planning", "Automatische facturatie", "Voortgang voor klant", "Urenregistratie"],
    priceHint: "Projectprijs op maat — afhankelijk van het aantal klanten, locaties en de facturatie-koppeling.",
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}

/** Diensten op /diensten (universeel, prijs per project). */
export const services: {
  icon: string;
  title: string;
  body: string;
  price: string;
  bullets: string[];
}[] = [
  {
    icon: "layout-dashboard",
    title: "Eigen systemen & portalen",
    body: "Maatwerk software die om jouw proces past: een multi-rol portaal, maar net zo goed een kassa, webshop of omnichannel-oplossing. Inclusief migratie, training en go-live.",
    price: "Projectprijs op maat",
    bullets: ["Portalen, kassa (POS) & webshop", "Data-migratie uit Excel/Outlook", "Training & go-live begeleiding"],
  },
  {
    icon: "plug",
    title: "Systemen koppelen",
    body: "Bestaande systemen met elkaar verbinden, zodat data één keer wordt ingevoerd en overal klopt — kassa, webshop, voorraad, boekhouding en HR.",
    price: "Vaste prijs per koppeling",
    bullets: ["Kassa ↔ webshop ↔ voorraad", "Exact / AFAS / Synergy", "Cleverdesk, DocuSign & custom"],
  },
  {
    icon: "shield-check",
    title: "AVG-compliance",
    body: "Ingebouwde privacy: verwerkingsregister, DPA, audit-log en automatische retentie. Geen losse consultant nodig.",
    price: "Inbegrepen in het portaal",
    bullets: ["Verwerkingsregister & DPA", "Audit-log & retentie", "2FA + RBAC"],
  },
  {
    icon: "presentation",
    title: "Training",
    body: "Praktische begeleiding per rol, in jouw eigen omgeving. On-site of remote, met opnames en handleiding.",
    price: "€850 per dagdeel",
    bullets: ["Per rol op maat", "On-site of remote", "Opnames & handleiding"],
  },
  {
    icon: "life-buoy",
    title: "Onderhoud & support",
    body: "Doorlopend beheer, hosting, updates en een vast aanspreekpunt. Jij belt mij, niet een helpdesk-ticket.",
    price: "Maandbedrag op maat",
    bullets: ["Hosting & monitoring", "Updates & doorontwikkeling", "Vast aanspreekpunt"],
  },
  {
    icon: "code",
    title: "Custom development",
    body: "Extra features, integraties of rapportages buiten de standaard. Klein in onderhoud, groot tegen uurtarief.",
    price: "€95 – €125 / uur",
    bullets: ["Eigen wensen & features", "Extra rapportages", "Eigenaar van eigen code"],
  },
];

/** Vergelijking voor /aanpak — "waar staat het tussen?" */
export const comparison: {
  label: string;
  price: string;
  note: string;
  highlight?: boolean;
  tone?: "muted" | "normal" | "brand";
}[] = [
  { label: "Excel / Outlook", price: "€0", note: "maar het kost je elke week tijd en zekerheid", tone: "muted" },
  { label: "Standaard SaaS", price: "€5–50 p/gebruiker p/m", note: "snel, maar beperkt aanpasbaar — je betaalt voor wat je niet gebruikt" },
  { label: "Maatwerk software", price: "Projectprijs op maat", note: "volledig op maat, eigen code, AVG uit de doos — en geen stapel maandabonnementen meer", highlight: true, tone: "brand" },
  { label: "Middleware (Mendix / OutSystems)", price: "€50–150k licentie", note: "+ integratiekosten en vendor lock-in" },
  { label: "Custom enterprise dev", price: "€200k+", note: "12–24 maanden doorlooptijd" },
];

/** Wat de projectprijs bepaalt — /aanpak. */
export const priceFactors: { icon: string; title: string; body: string }[] = [
  { icon: "users", title: "Gebruikers & rollen", body: "Het aantal gebruikers en het aantal verschillende rollen met eigen rechten." },
  { icon: "plug", title: "Integraties", body: "Hoeveel en hoe complex de koppelingen met bestaande systemen zijn." },
  { icon: "database", title: "Datamigratie", body: "Welke bestaande systemen en bestanden gemigreerd en opgeschoond moeten worden." },
  { icon: "layout-dashboard", title: "Sector-modules", body: "De sector-specifieke functionaliteit die je nodig hebt." },
  { icon: "shield-check", title: "AVG & compliance", body: "De privacy-eisen en eventuele branche-specifieke compliance." },
];

/** FAQ over aanpak & prijs (uit de sales-FAQ). */
export const aanpakFaq: { q: string; a: string }[] = [
  { q: "Doe je alleen branche-verenigingen?", a: "Nee. Branche, retail, klusplatformen, horeca en dienstverlening — het patroon is altijd hetzelfde: van handmatig werk naar één portaal. De kern is universeel, de modules zijn sector-specifiek." },
  { q: "Hoe lang duurt de implementatie?", a: "Doorgaans 8 tot 12 weken, afhankelijk van de scope en het aantal integraties. Geen big bang: een gefaseerd traject met steeds een werkend tussenresultaat." },
  { q: "Wat als jij ermee stopt?", a: "De code blijft eigendom van de klant (escrow als optie) en de verwerkersovereenkomst regelt de overdracht. Geen vendor lock-in." },
  { q: "Van wie is mijn data?", a: "Altijd van jou. Je gegevens staan op één plek, gehost in de EU, en zijn op elk moment exporteerbaar. Geen versnippering over externe SaaS-clouds en geen lock-in — je houdt je data volledig in eigen beheer." },
  { q: "Wat als we extra wensen hebben?", a: "Klein valt binnen het onderhoud. Groter werk gaat tegen een transparant uurtarief van €95–€125, vooraf afgestemd." },
  { q: "Kan het op onze eigen servers draaien?", a: "Standaard draait het op Vercel en een EU-database. On-premise kan tegen meerprijs." },
  { q: "Hoe is AVG geregeld?", a: "Verwerkersovereenkomst, verwerkingsregister, audit-log en automatische retentie zitten standaard in het portaal. Dat bespaart al snel €5.000–€15.000 aan externe consultancy." },
  { q: "Hoe weten we dat het werkt?", a: "Er draait een live portaal bij een branchevereniging in de meubelindustrie (~400 BBL'ers). Een demo en een referentie-gesprek zijn beschikbaar." },
];

/** Flagship-case — anoniem geschreven, naam later in te vullen. */
export const swvCase = {
  klant: "Branchevereniging in de meubelindustrie",
  klantKort: "Branchevereniging meubel",
  intro:
    "Een landelijke branchevereniging beheert de BBL-opleiding voor de meubel- en houtsector. Honderden studenten, leerbedrijven en scholen, verspreid over acht regio's — jarenlang bijgehouden in Excel, Outlook en losse systemen.",
  scale: [
    { value: "~400", label: "BBL-studenten" },
    { value: "~300", label: "leerbedrijven" },
    { value: "~100", label: "scholen" },
    { value: "8", label: "regio's" },
  ],
  replaced: [
    "Outlook regiomappen",
    "Excel-administratie",
    "Cleverdesk",
    "Exact Synergy",
    "Exact Globe",
    "DocuSign",
    "P-schijf documenten",
  ],
  problemen: [
    { title: "Studentdata op zeven plekken", body: "Eén student stond in een Outlook-map, een Excel-tab, Synergy én op de P-schijf. Welke versie klopte, wist niemand zeker." },
    { title: "Geen signaal bij aflopende contracten", body: "Of een leercontract afliep of een student zonder bedrijf zat, viel pas op bij toeval. Er was geen automatische bewaking." },
    { title: "Overdracht per regio was handwerk", body: "Bij een nieuwe coördinator werd kennis met de hand overgedragen. Veel ging verloren, sommige dossiers bleven onvindbaar." },
    { title: "AVG-risico's zonder dossier", body: "Persoonsgegevens stonden verspreid, zonder verwerkingsregister of retentiebeleid. Een datalek was lastig te overzien." },
    { title: "Communicatie zonder historie", body: "Coördinatoren, bedrijven en binnendienst mailden los langs elkaar. Geen centraal dossier, geen overzicht van afspraken." },
  ],
  aanpak: [
    { week: "Week 1–2", title: "Inventarisatie & datamodel", body: "Alle bronnen in kaart, processen doorgelopen met binnendienst en coördinatoren, en een datamodel dat de hele keten dekt." },
    { week: "Week 3–6", title: "Portaal bouwen & data migreren", body: "Eén werkplek voor vier rollen. Data uit Excel en Outlook geïmporteerd, opgeschoond en ontdubbeld." },
    { week: "Week 7–9", title: "Integraties & AVG", body: "Koppelingen met de bestaande stack, verwerkingsregister, audit-log en automatische retentie ingebouwd." },
    { week: "Week 10–12", title: "Training & go-live", body: "Binnendienst en coördinatoren getraind, pilot per regio, en gefaseerd live met begeleiding." },
  ],
  resultaten: [
    { value: "6–8", label: "systemen vervangen door één portaal" },
    { value: "20–40u", label: "binnendienst bespaard per week" },
    { value: "400", label: "studenten in één dossier" },
    { value: "100%", label: "AVG-dossier op orde" },
  ],
  screenshots: [
    { title: "Studentdashboard", note: "Voortgang, documenten en contactmomenten per student." },
    { title: "Kaartenbak", note: "Regio-overzicht met signalen en openstaande acties." },
    { title: "Agenda", note: "Bezoeken en deadlines centraal, gedeeld per regio." },
    { title: "AVG-dossier", note: "Verwerkingsregister en retentie automatisch bijgehouden." },
  ],
} as const;

/** Tweede case — omnichannel retail. Feitelijk en bescheiden; details in overleg aan te scherpen. */
export const gentsCase = {
  slug: "gents",
  klant: "GENTS — herenmode",
  klantKort: "GENTS",
  type: "Omnichannel retail",
  intro:
    "GENTS verkoopt herenmode online én in de winkel. Kassa, webshop en voorraad waren losse eilanden — een klant online was een andere klant dan in de winkel, en de voorraad klopte zelden realtime. Doel: één keten waarin online en winkel samenwerken.",
  geleverd: ["Kassa (POS)", "Webshop", "Omnichannel-koppeling", "Realtime voorraad", "Eén klantbeeld"],
  problemen: [
    { title: "Webshop en kassa los van elkaar", body: "Online en winkel draaiden op eigen systemen die elkaars data niet kenden." },
    { title: "Voorraad niet realtime", body: "Wat online op voorraad stond, klopte niet altijd met wat er in de winkel lag." },
    { title: "Geen één klantbeeld", body: "Dezelfde klant online en in de winkel werd nergens herkend als dezelfde persoon." },
    { title: "Handwerk tussen kanalen", body: "Bestellingen, retouren en voorraad werden met de hand tussen systemen overgezet." },
  ],
  aanpak: [
    { week: "Bouwen", title: "Kassa & webshop op maat", body: "Een kassa- en webshop-laag die op het assortiment en de werkwijze van de winkel past." },
    { week: "Koppelen", title: "Kanalen verbinden", body: "Kassa, webshop en voorraad aan elkaar gekoppeld tot één realtime keten." },
    { week: "Samenvoegen", title: "Eén klantbeeld", body: "Online- en winkelklant samengebracht, zodat elke klant overal herkend wordt." },
    { week: "Automatiseren", title: "Voorraad & orders", body: "Voorraad, bestellingen en retouren lopen automatisch over alle kanalen." },
  ],
  resultaten: [
    { value: "1", label: "klantbeeld over online + winkel" },
    { value: "realtime", label: "voorraad over alle kanalen" },
    { value: "omnichannel", label: "kassa en webshop als één keten" },
    { value: "minder", label: "handwerk tussen systemen" },
  ],
  screenshots: [
    { title: "Kassa (POS)", note: "Afrekenen in de winkel, gekoppeld aan dezelfde voorraad als online." },
    { title: "Webshop", note: "Online bestellen met realtime voorraad en één klantaccount." },
    { title: "Voorraad", note: "Eén voorraad over winkel en webshop, automatisch bijgewerkt." },
    { title: "Klantbeeld", note: "Online- en winkelaankopen van dezelfde klant in één overzicht." },
  ],
} as const;

/** Case-index — gebruikt door sectorpagina's om naar de juiste case te verwijzen. */
export const cases: Record<string, { slug: string; klant: string; intro: string }> = {
  "swv-meubel": { slug: "swv-meubel", klant: swvCase.klant, intro: swvCase.intro },
  gents: { slug: gentsCase.slug, klant: gentsCase.klant, intro: gentsCase.intro },
};
