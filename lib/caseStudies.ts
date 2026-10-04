export type Stat = { nums: number[]; joiner?: string; suffix: string; label: string };

export type CaseStudy = {
  name: string;
  tone: "forest" | "mint";
  stats: Stat[];
  problem: string;
  built: string;
  result: string[];
  quote?: { text: string; by: string };
};

export const caseStudies: CaseStudy[] = [
  {
    name: "Skillful.ly",
    tone: "forest",
    stats: [
      { nums: [90], suffix: "%+", label: "of candidate noise filtered out" },
      { nums: [70, 80], joiner: " to ", suffix: "%", label: "more efficient teams after hire" },
    ],
    problem:
      "Hiring teams were buried in candidates who were never going to be a fit, and building skills in new hires took too much time.",
    built:
      "AI role-playing simulations. One model plays a real customer, another model critiques and refines its replies, so candidates and employees practise realistic situations that can be tailored by industry. We built all of the product’s features and its simulation engine.",
    result: [
      "More than 90% of the noise in the candidate pool was filtered out by the simulations, so hiring teams spent their time on people worth meeting.",
      "In the learning and development stage after hire, teams using the platform ran 70 to 80% more efficiently.",
      "Skillful.ly has since been adopted by S&P 500 companies.",
    ],
    quote: {
      text: "“Paradigm’s expertise was pivotal in our journey into AI, propelling us forward at record speed.”",
      by: "CEO/Co-founder, Skillful.ly, CA, USA",
    },
  },
  {
    name: "Awesome Motive",
    tone: "mint",
    stats: [
      { nums: [60, 70], joiner: " to ", suffix: "%", label: "less third-party software spend" },
      { nums: [12], suffix: " weeks", label: "to deliver" },
    ],
    problem:
      "Awesome Motive and the businesses in its portfolio were paying for a long list of third-party applications, and that spend kept adding to burn. The software was also built for the average customer, not for each business’s own pain points.",
    built:
      "In-house versions of the software they relied on, built from scratch, plus custom versions for their portfolio businesses. We also worked inside their teams to find each business’s specific pain points and build calibrated AI solutions that fit how those teams work.",
    result: [
      "Spend on third-party software reduced by 60 to 70%.",
      "Delivered in 12 weeks.",
      "Everything built is their IP.",
      "The applications run privately in their own cloud environments.",
    ],
  },
];
