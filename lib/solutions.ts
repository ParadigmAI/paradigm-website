// Solutions section copy. Source: owner's "Solutions section copy" file (v1 + v2 addendum).
// Rules baked in: no personal names, no results or metrics on these pages (delivery proof was
// removed at the owner's request), pilot / design partner wording, never "live", "deployed" or
// "customers". Pricing stays a placeholder and is
// NOT rendered until approved (see PRICE_BAND_APPROVED).

export const PRICE_BAND_PLACEHOLDER = "[PRICE BAND - TBD]";
export const PRICE_BAND_APPROVED = false;

export const ILLUSTRATION_CAPTION = "Illustrative concept, sample data";

export const DESIGN_PARTNER_BLURB =
  "We are taking on a small number of design partners per industry. You get a pilot on your own documents at a reduced fixed price, and we shape the product around your workflow.";

export type MockKind = "rfq" | "invoice" | "packet" | "pipeline";

export type Solution = {
  slug: "job-shops" | "logistics" | "solar-installers" | "biotech-data";
  indexable: boolean;
  /** Product-style name used in the menu, cards, footer and breadcrumbs. */
  name: string;
  /** Who it is for (the industry label). */
  industry: string;
  cardText: string;
  seoTitle: string;
  metaDescription: string;
  headline: string;
  problems: string[];
  build: string;
  flowIntro: string;
  flow: string[];
  mock: MockKind;
  steps: string[];
  timeline: string;
  need: string[];
  faqs: { q: string; a: string }[];
  /** Pricing FAQ, kept here with the placeholder; only rendered if PRICE_BAND_APPROVED. */
  pricingFaq: { q: string; a: string };
  ctaLine: string;
};

export const solutions: Solution[] = [
  {
    slug: "job-shops",
    indexable: true,
    name: "Quoteline",
    industry: "Job shops and machine shops",
    cardText: "Turn RFQ emails and drawings into draft quotes in minutes.",
    seoTitle: "RFQ to Quote Automation for Job Shops | Paradigm",
    metaDescription:
      "Draft quotes from RFQ emails and drawings in minutes. A person approves every quote.",
    headline: "Quote more RFQs without hiring another estimator.",
    problems: [
      "RFQs sit in my inbox for days.",
      "Our best estimator is the bottleneck.",
      "We lose jobs because we quote too slowly.",
    ],
    build:
      "An assistant that reads incoming RFQ emails and attachments, pulls out part details, quantities, materials and deadlines, and drafts a quote in your format using your own rates and past quotes. Your estimator reviews and approves. Nothing goes to a customer without a person.",
    flowIntro: "How an RFQ could move through the system:",
    flow: [
      "RFQ email arrives",
      "Reads attachments and drawing notes",
      "Extracts part, material, quantity, due date",
      "Drafts quote from your rate sheet",
      "Estimator reviews and approves",
      "Quote sent",
    ],
    mock: "rfq",
    steps: [
      "Week 1: we review 20-30 of your past RFQs and quotes.",
      "Weeks 2-4: we build the draft-quote flow in your email and quoting tool.",
      "Weeks 4-6: run side by side with your estimator, tune it, then start a pilot.",
    ],
    timeline: "4 to 6 weeks (target, depends on how clean your history is).",
    need: [
      "Sample RFQs",
      "Past quotes",
      "Your rate sheet",
      "One person to review drafts",
    ],
    faqs: [
      { q: "Does it replace my estimator?", a: "No. It prepares the first draft; they approve." },
      {
        q: "What about complex drawings?",
        a: "We start with the simple, repeat parts and flag the rest for a person.",
      },
      { q: "Who owns it?", a: "You own what we build for you." },
      {
        q: "Does it send quotes itself?",
        a: "No, not unless you choose that later.",
      },
    ],
    pricingFaq: { q: "Pricing", a: PRICE_BAND_PLACEHOLDER },
    ctaLine: "Send us three recent RFQs and we will show a draft quote.",
  },
  {
    slug: "logistics",
    indexable: true,
    name: "Paperflow",
    industry: "Freight, customs and distribution",
    cardText: "Stop re-typing invoices, entries and bills into your system.",
    seoTitle: "Document Automation for Freight, Customs and Distribution | Paradigm",
    metaDescription:
      "AI that reads invoices, entries and bills and posts them into your system. Fixed price, pilot in weeks.",
    headline: "Stop re-typing paperwork into your system.",
    problems: [
      "My team spends hours a day keying invoices and bills.",
      "Month-end is a mess of exceptions.",
      "Our system is fine. The data entry is the problem.",
    ],
    build:
      "A document reader that extracts data from supplier invoices, customs entries, bills of lading and purchase orders, checks it against your rules, and posts clean records into your existing tools. Your team only handles exceptions.",
    flowIntro: "How a document could move through the system:",
    flow: [
      "Invoice or entry PDF in",
      "Fields extracted",
      "Checked against your rules and PO",
      "Clean record posted to your system",
      "Exceptions to a review queue",
    ],
    mock: "invoice",
    steps: [
      "Week 1: map one document process on one page; collect 50 sample documents.",
      "Weeks 2-5: build and test on your samples; measure accuracy on your own documents.",
      "Weeks 5-8: start a pilot for one process, with exception review by your team.",
    ],
    timeline: "4 to 8 weeks for one process.",
    need: [
      "Sample documents",
      "System access (read/write to one workflow)",
      "One process owner",
    ],
    faqs: [
      {
        q: "Which systems?",
        a: "We connect to common ERP, accounting and forwarding tools; confirm on the call.",
      },
      {
        q: "Accuracy?",
        a: "We report accuracy on your own sample before the pilot starts.",
      },
      {
        q: "Data privacy?",
        a: "Your documents stay in your environment or a private setup we agree on.",
      },
    ],
    pricingFaq: { q: "Pricing", a: PRICE_BAND_PLACEHOLDER },
    ctaLine: "Talk to our team to map one paperwork process.",
  },
  {
    slug: "solar-installers",
    indexable: false,
    name: "Packet Ready",
    industry: "Solar installers",
    cardText: "Cut the interconnection and permit paperwork per project.",
    seoTitle:
      "Interconnection and Permit Paperwork Automation for Solar Installers | Paradigm",
    metaDescription:
      "Prepare interconnection and permit packets faster, with a person checking each one.",
    headline: "Less paperwork between signed contract and installed system.",
    problems: [
      "Every utility wants a different form.",
      "Permit packets eat my admin's week.",
      "A small error sends the application back for weeks.",
    ],
    build:
      "A system that gathers project data (design files, site details, equipment specs), fills the right utility and permit forms, and flags missing or inconsistent items before submission. Your coordinator reviews each packet.",
    flowIntro: "How a project could move through the system:",
    flow: [
      "Signed project",
      "Design and equipment data gathered",
      "Utility and permit forms filled",
      "Completeness check flags missing items",
      "Coordinator reviews and submits",
    ],
    mock: "packet",
    steps: [
      "Week 1: review 10 recent packets and the utilities you work with.",
      "Weeks 2-5: build packet preparation for your top 1-2 utilities.",
      "Weeks 5-8: run on real projects with review, then extend.",
    ],
    timeline: "6 to 8 weeks (target; depends on number of utilities).",
    need: [
      "Sample packets",
      "Templates per utility",
      "Access to your design/CRM tool",
    ],
    faqs: [
      {
        q: "Do you submit to the utility?",
        a: "Not at first; we prepare, your team submits.",
      },
      {
        q: "Which states?",
        a: "Start with your top utilities; we confirm coverage on the call.",
      },
    ],
    pricingFaq: { q: "Pricing", a: PRICE_BAND_PLACEHOLDER },
    ctaLine: "Talk to our team and bring one recent packet.",
  },
  {
    slug: "biotech-data",
    indexable: false,
    name: "LabFlow",
    industry: "Small biotech and diagnostics",
    cardText: "Clean, connected data and analysis pipelines without hiring a team.",
    seoTitle: "Data Engineering Sprints for Small Biotech | Paradigm",
    metaDescription:
      "Connect, clean and analyze your research data in a focused 4 to 8 week sprint.",
    headline: "Get your research data working together, without building a data team.",
    problems: [
      "Our data is spread across spreadsheets, instruments and public databases.",
      "Our scientists spend their time wrangling files, not analyzing.",
      "We can't hire a full bioinformatics team yet.",
    ],
    build:
      "A focused sprint that sets up a clean data pipeline: ingesting your instrument and lab files, linking them to public databases and literature, and producing repeatable analysis and reports. Delivered as code and documentation you own.",
    flowIntro: "How data could move through the pipeline:",
    flow: [
      "Instrument files and spreadsheets in",
      "Cleaned and linked to public databases",
      "Repeatable analysis",
      "Report your scientists review",
    ],
    mock: "pipeline",
    steps: [
      "Week 1: scope one question and the data behind it with your scientists.",
      "Weeks 2-5: build the pipeline and checks.",
      "Weeks 5-8: handover, documentation and a working repeatable report.",
    ],
    timeline: "4 to 8 weeks (target).",
    need: [
      "One scientist or lead as the point of contact",
      "Sample data",
      "Agreement on privacy and data handling up front",
    ],
    faqs: [
      {
        q: "Do you do the science?",
        a: "No, we build the data and analysis tooling; your scientists own interpretation.",
      },
      {
        q: "Is our data safe?",
        a: "Work happens under your NDA and in your environment.",
      },
    ],
    pricingFaq: { q: "Pricing", a: PRICE_BAND_PLACEHOLDER },
    ctaLine: "Talk to our team to scope one data question.",
  },
];

export const solutionsIndex = {
  seoTitle: "AI Solutions by Industry | Paradigm",
  metaDescription:
    "Fixed-scope AI systems for job shops, logistics, solar installers and biotech teams. Built in weeks, owned by you.",
  headline: "AI that does one job in your business, and does it every day.",
  sub: "We pick one workflow, build it on your own documents, and run it with you. Fixed scope, pilot in 4 to 8 weeks.",
  howTitle: "How we work",
  how: [
    "Scope one workflow on a 30-minute call.",
    "Pilot on a sample of your own documents.",
    "Extend it to real work, with a human approving anything important.",
  ],
  ctaLine: "Not sure which fits? Talk to our team.",
};

export const faqsFor = (s: Solution) =>
  PRICE_BAND_APPROVED ? [...s.faqs, s.pricingFaq] : s.faqs;

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
