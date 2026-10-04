// Small list used by the header and footer. Kept separate from lib/solutions.ts so the full
// solutions copy is not shipped in client JavaScript on every page.
export const solutionsNav = [
  { slug: "job-shops", title: "Quoteline" },
  { slug: "logistics", title: "Paperflow" },
  { slug: "solar-installers", title: "Packet Ready" },
  { slug: "biotech-data", title: "LabFlow" },
] as const;
