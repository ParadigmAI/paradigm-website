// Small list used by the header and footer. Kept separate from lib/solutions.ts so the full
// solutions copy is not shipped in client JavaScript on every page.
export const solutionsNav = [
  { slug: "job-shops", title: "Job shops and machine shops" },
  { slug: "logistics", title: "Freight, customs and distribution" },
  { slug: "solar-installers", title: "Solar installers" },
  { slug: "biotech-data", title: "Small biotech and diagnostics" },
] as const;
