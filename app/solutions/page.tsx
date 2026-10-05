import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageSection } from "@/components/PageSection";
import { solutions, solutionsIndex as ix } from "@/lib/solutions";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: ix.seoTitle,
  description: ix.metaDescription,
  alternates: { canonical: "/solutions/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: ix.seoTitle,
    description: ix.metaDescription,
    url: "/solutions/",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Paradigm" }],
  },
};

const card = "rounded-card border border-line bg-paper p-6 sm:p-8";

export default function SolutionsIndex() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions/` },
    ],
  };
  return (
    <>
      <Header />
      <main id="main">
        <section className="bg-canvas">
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 md:pb-20">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />
            <h1 className="h1 mt-10 max-w-3xl">{ix.headline}</h1>
            <p className="mt-5 max-w-2xl text-lg text-ink">{ix.sub}</p>
          </div>
        </section>

        <PageSection>
          {solutions.slice(0, 1).map((s) => (
            <a
              key={s.slug}
              href={`/solutions/${s.slug}/`}
              className="group relative block overflow-hidden rounded-[20px] bg-gradient-to-br from-[#004e23] to-[#00311a] p-8 text-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_#5db368,0_24px_60px_-24px_rgba(48,157,75,0.7)] sm:p-10"
            >
              <span aria-hidden="true" className="case-orb case-orb-a" />
              <span aria-hidden="true" className="case-orb case-orb-b" />
              <span aria-hidden="true" className="case-orb case-orb-c" />
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-[#abd49e]">
                Lead solution
              </span>
              <p className="mt-5 max-w-xl text-sm text-[#cfe6c8]">
                For {s.industry.toLowerCase()}
              </p>
              <h2 className="mt-1 font-display text-4xl font-medium leading-tight">{s.name}</h2>
              <p className="mt-3 max-w-2xl text-lg text-[#cfe6c8]">{s.cardText}</p>
              <span className="mt-6 inline-block text-sm font-medium text-[#abd49e] group-hover:underline">
                See what we build
              </span>
            </a>
          ))}
          <ul className="mt-5 grid gap-5 md:grid-cols-3">
            {solutions.slice(1).map((s) => (
              <li key={s.slug}>
                <a
                  href={`/solutions/${s.slug}/`}
                  className="group block h-full rounded-card border border-line bg-paper p-6 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-growth hover:bg-sprout"
                >
                  <span aria-hidden="true" className="mini-dot mb-4 block h-3 w-3 rounded-full bg-leaf" />
                  <p className="text-sm text-ink">For {s.industry.toLowerCase()}</p>
                  <h2 className="h3 mt-1">{s.name}</h2>
                  <p className="mt-2 text-ink">{s.cardText}</p>
                  <span className="mt-5 inline-block text-sm font-medium text-forest group-hover:underline">
                    See what we build
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </PageSection>

        <PageSection tone="canvas">
          <h2 className="h2">{ix.howTitle}</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {ix.how.map((step, i) => (
              <li key={step} className={card}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-sm font-medium text-white">
                  {i + 1}
                </span>
                <p className="mt-4 text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </PageSection>

        <PageSection>
          <div className="text-center">
            <p className="font-display text-2xl">{ix.ctaLine}</p>
            <a href="/#contact" className="btn btn-primary mt-6">
              Talk to our team
            </a>
          </div>
        </PageSection>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
