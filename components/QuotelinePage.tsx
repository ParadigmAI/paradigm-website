import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageSection } from "@/components/PageSection";
import { FlowSteps } from "@/components/ExampleFlow";
import { UseCaseTabs } from "@/components/UseCaseTabs";
import { ContactForm } from "@/components/ContactForm";
import { faqsFor, type Solution } from "@/lib/solutions";
import { BOOKING_LABEL, BOOKING_URL, SITE_URL } from "@/lib/site";

const card = "rounded-card border border-line bg-paper p-6 sm:p-8";
const TAGLINE = "Every quote request, from every inbox, drafted into a quote you approve.";

export function QuotelinePage({ s }: { s: Solution }) {
  const faqs = faqsFor(s);
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
        { "@type": "ListItem", position: 3, name: s.name, item: `${SITE_URL}/solutions/${s.slug}/` },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main id="main">
        {/* 1. Hero */}
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
              <span className="text-sm text-ink">for custom-order businesses</span>
            </p>
            <h1 className="h1 mt-5 max-w-3xl">{s.headline}</h1>
            <p className="mt-5 max-w-2xl text-lg text-ink">
              Quoteline gathers requests from your email, web form and messages, and drafts the
              quote for you to approve.
            </p>
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

        {/* 2. In your words */}
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

        {/* 3 + 4. What we build + flow */}
        <PageSection tone="canvas">
          <h2 className="h2">What we build</h2>
          <p className="mt-4 max-w-3xl font-display text-2xl leading-snug">{TAGLINE}</p>
          <p className="mt-4 max-w-3xl text-lg text-ink">{s.build}</p>
          <div className="mt-10">
            <p className="text-ink">{s.flowIntro}</p>
            <div className="mt-4">
              <FlowSteps steps={s.flow} />
            </div>
          </div>
        </PageSection>

        {/* 5 + 6. Who it is for + visuals */}
        <PageSection>
          <h2 className="h2">Who it is for</h2>
          <p className="mt-4 max-w-3xl text-lg text-ink">
            Any small business that answers requests for custom quotes. Here is how a request could
            look in three kinds of business.
          </p>
          <div className="mt-8">
            <UseCaseTabs />
          </div>
        </PageSection>

        {/* 7. How it works + timeline */}
        <PageSection tone="canvas">
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

        {/* 8. What we need */}
        <PageSection>
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

        {/* 9. FAQ */}
        <PageSection tone="canvas">
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

        {/* 10. CTA block + form */}
        <PageSection id="contact">
          <div className="mx-auto max-w-2xl rounded-card bg-sprout p-6 text-left sm:p-8">
            <h2 className="h2 text-forest">{s.ctaLine}</h2>
            <p className="mt-3 text-[#2b3a2e]">
              We are taking a small number of design partners. You get a pilot on your own requests
              at a reduced fixed price, and we shape the product around how you quote.
            </p>
            {BOOKING_URL && (
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-6"
              >
                {BOOKING_LABEL}
              </a>
            )}
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
