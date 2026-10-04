import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageSection } from "@/components/PageSection";
import { ExampleFlow } from "@/components/ExampleFlow";
import { ContactForm } from "@/components/ContactForm";
import {
  DESIGN_PARTNER_BLURB,
  faqsFor,
  type Solution,
} from "@/lib/solutions";
import { SITE_URL } from "@/lib/site";

const card = "rounded-card border border-line bg-paper p-6 sm:p-8";

export function SolutionPage({ s }: { s: Solution }) {
  const faqs = faqsFor(s);
  const url = `${SITE_URL}/solutions/${s.slug}/`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions/` },
        { "@type": "ListItem", position: 3, name: s.name, item: url },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="bg-canvas">
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 md:pb-20">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions/" },
                { label: s.name },
              ]}
            />
            <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="rounded-full bg-sprout px-3 py-1 text-sm font-medium text-forest">
                {s.name}
              </span>
              <span className="text-sm text-ink">for {s.industry.toLowerCase()}</span>
            </p>
            <h1 className="h1 mt-5 max-w-3xl">{s.headline}</h1>
            <p className="mt-5 max-w-2xl text-lg text-ink">{s.metaDescription}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn btn-primary">
                Talk to our team
              </a>
              <a href="#contact" className="btn btn-ghost">
                Become a design partner
              </a>
            </div>
          </div>
        </section>

        {/* In your words */}
        <PageSection>
          <h2 className="h2">In your words</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {s.problems.map((p) => (
              <li key={p} className={card}>
                <p className="font-display text-xl leading-snug">&ldquo;{p}&rdquo;</p>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* What we build + example flow */}
        <PageSection tone="canvas">
          <h2 className="h2">What we build</h2>
          <p className="mt-4 max-w-3xl text-lg text-ink">{s.build}</p>
          <ExampleFlow intro={s.flowIntro} steps={s.flow} mock={s.mock} />
        </PageSection>

        {/* How it works + typical timeline */}
        <PageSection>
          <h2 className="h2">How it works</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {s.steps.map((step, i) => (
              <li key={step} className={card}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-sm font-medium text-white">
                  {i + 1}
                </span>
                <p className="mt-4 text-ink">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-card bg-sprout px-6 py-4 text-forest">
            <span className="font-medium">Typical timeline: </span>
            {s.timeline}
          </div>
        </PageSection>

        {/* What we need from you */}
        <PageSection tone="canvas">
          <h2 className="h2">What we need from you</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {s.need.map((n) => (
              <li key={n} className="flex items-start gap-3 rounded-card border border-line bg-paper px-5 py-4">
                <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-leaf" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* FAQ */}
        <PageSection>
          <h2 className="h2">Questions</h2>
          <div className="mt-8 max-w-3xl divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-medium">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="text-2xl leading-none text-forest transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-ink">{f.a}</p>
              </details>
            ))}
          </div>
        </PageSection>

        {/* Final CTA band: design-partner box + form */}
        <PageSection id="contact">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h2">{s.ctaLine}</h2>
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-card bg-sprout p-6 text-left sm:p-8">
            <h3 className="h3 text-forest">Become a design partner</h3>
            <p className="mt-2 text-[#2b3a2e]">{DESIGN_PARTNER_BLURB}</p>
          </div>
          <div className="mx-auto mt-6 max-w-2xl rounded-card border border-line bg-paper p-6 sm:p-8">
            <ContactForm topic={s.slug} processField />
          </div>
        </PageSection>
      </main>
      <Footer />
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}
