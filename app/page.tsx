import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Orbs } from "@/components/Orbs";
import { ContactForm } from "@/components/ContactForm";
import { bookExternal, bookHref } from "@/lib/site";

const MONTAA_URL = "https://miranthajayatilake.github.io/montaa/";

function BookButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={bookHref}
      {...(bookExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`btn btn-primary ${className}`}
    >
      Book a call
    </a>
  );
}

function Section({
  id,
  tone = "field",
  children,
}: {
  id: string;
  tone?: "field" | "canvas";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={tone === "canvas" ? "bg-canvas" : "bg-field"}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">{children}</div>
    </section>
  );
}

const problems = [
  {
    t: "Pilots stall.",
    d: "Many AI pilots never reach production. They look good in a demo and then sit.",
  },
  {
    t: "Rented tools leave nothing behind.",
    d: "When you stop paying for the subscription, the workflow and the savings go with it.",
  },
  {
    t: "No one has time to pick.",
    d: "Your team is busy running the business. Working out which AI use case is worth doing first is a project of its own.",
  },
];

const steps = [
  { n: "1", t: "30-minute call", d: "We learn how your business runs and where time or money leaks." },
  { n: "2", t: "Audit, 2 to 3 weeks", d: "We map workflows and rank the top three use cases by dollar impact." },
  { n: "3", t: "Build, 4 to 8 weeks", d: "We build the top use case and put it into production." },
  {
    n: "4",
    t: "Handover and training",
    d: "Your team learns to run it. Ongoing support is available by separate agreement.",
  },
];

const why = [
  {
    t: "We build for production, not demos",
    d: "The goal is a system your team uses on Monday, not a prototype for a board meeting.",
  },
  {
    t: "You own everything",
    d: "Code, models and data are yours. Nothing is rented back to you.",
  },
  {
    t: "Your data stays in your cloud",
    d: "We build and deploy inside your own cloud environment. Private, self-hosted models are available when data must not go to a public AI provider. We sign NDAs.",
  },
];

const shortWork = [
  {
    c: "QuestionPro",
    d: "An AI tool that predicts how people will respond to survey questions, using past survey responses.",
  },
  { c: "Salus", d: "A low-code builder that lets teams assemble generative AI apps faster." },
  {
    c: "IdeaScale",
    d: "An AI assistant that helps users search thousands of submitted ideas and find the ones worth acting on.",
  },
  {
    c: "Datasource.ai",
    d: "An AI moderator for a large Discord community, answering questions and monitoring ads.",
  },
];

const testimonials = [
  {
    q: "Our collaboration with Paradigm was transformative, as their team demonstrated exceptional knowledge and expertise in AI applications. They played a key role in our strategic decisions, making them an invaluable partner in our journey towards digital innovation",
    a: "CEO/Founder, QuestionPro, Texas, USA",
  },
  {
    q: "I would like to express my gratitude to the Paradigm team that played an instrumental role in the successful launch of our datathon platform. Their expertise, guidance, and support have been invaluable throughout our journey. They offered us insightful advice, helping us shape our vision and refine our strategies.",
    a: "Founder, Datasource.ai, Athens, Greece",
  },
  {
    q: "Paradigm is one of the best AI/ML groups I have worked with. They built our Gen AI product from scratch along with a lot of innovative tooling around the product. The value Paradigm provides compared to the cost is exceptional.",
    a: "CTO/Co-founder, Trymata, CA, USA",
  },
];

const faqs = [
  {
    q: "How fast can we start?",
    a: "Within a week of the call, we can scope the audit and agree a start date.",
  },
  {
    q: "How is pricing structured?",
    a: "Fixed price per stage, agreed up front. The audit has one price and the build has another, set after the audit. There are no hourly bills and no surprises. We do not publish prices because each business is different.",
  },
  {
    q: "Who owns the IP?",
    a: "You do. Code, models and data are yours from day one.",
  },
  {
    q: "How do you handle our data and security?",
    a: "We build and deploy inside your own cloud, so your data stays in your environment. Where data cannot go to a public AI provider, we can deploy private, self-hosted models. We sign NDAs. Anything more specific, such as certifications or access policies, we discuss on the call.",
  },
  { q: "Do you sign NDAs?", a: "Yes." },
  {
    q: "What if the audit shows AI is not worth it?",
    a: "We tell you. You only pay for the audit.",
  },
  {
    q: "What industries do you work in?",
    a: "We work across industries, because the workflow matters more than the sector. Most of our work so far is in software and SaaS, and we are focused on services, distribution, healthcare administration, insurance and logistics.",
  },
  {
    q: "What do we need from you?",
    a: "Someone who knows the workflow, access to the people and systems involved, and a decision-maker who can approve a plan.",
  },
];

const card = "rounded-card border border-line bg-paper p-6 sm:p-8";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        {/* 1. Hero */}
        <section id="top" className="bg-canvas">
          <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 text-center sm:px-6 md:pb-24 md:pt-24">
            <h1 className="h1 mx-auto max-w-3xl">
              AI that cuts cost and adds revenue inside your business
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink">
              We find the AI use case worth doing first, build it into your operations at a fixed
              price, and hand over everything we make.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BookButton />
              <a href="/#work" className="btn btn-ghost">
                See our work
              </a>
            </div>
            <div className="mt-14">
              <Orbs />
            </div>
          </div>
        </section>

        {/* 2. Problem */}
        <Section id="problem">
          <h2 className="h2 max-w-2xl">
            Most AI work never reaches the part of the business that pays for it
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {problems.map((p) => (
              <li key={p.t} className={card}>
                <h3 className="h3">{p.t}</h3>
                <p className="mt-3 text-ink">{p.d}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 3. What we do */}
        <Section id="services" tone="canvas">
          <h2 className="h2">Three ways to work with us</h2>
          <p className="mt-3 text-ink">Fixed price, agreed up front.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className={card}>
              <p className="text-sm font-medium text-forest">2 to 3 weeks</p>
              <h3 className="h3 mt-2">AI opportunity audit</h3>
              <p className="mt-3 text-ink">
                We map your workflows, find where AI saves or earns the most, and rank the top three
                use cases by dollar impact. You get a plan, not a slide deck.
              </p>
            </article>
            <article className={card}>
              <p className="text-sm font-medium text-forest">4 to 8 weeks</p>
              <h3 className="h3 mt-2">Build and deploy</h3>
              <p className="mt-3 text-ink">
                We build the top use case, put it into production, and train your team. Everything
                we build (code, models, data) belongs to you.
              </p>
              <p className="mt-3 text-ink">
                Examples of what we build: a private model API that runs inside your own cloud, and
                a private assistant that answers questions over your own documents.
              </p>
            </article>
            <article className={card}>
              <p className="text-sm font-medium text-forest">For PE firms</p>
              <h3 className="h3 mt-2">Repeat across the portfolio</h3>
              <p className="mt-3 text-ink">
                We reuse what worked at one company in the next, faster and cheaper each time.
              </p>
            </article>
          </div>
          <p className="mt-8 text-ink">
            <strong className="font-medium text-carbon">Startup founder?</strong> We also build AI
            products for startups.{" "}
            <a href="/#contact" className="link">
              Tell us what you are making.
            </a>
          </p>
        </Section>

        {/* 4. Proof */}
        <Section id="work">
          <h2 className="h2">Work that changed how the business runs</h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className={card}>
              <h3 className="h3">Skillful.ly</h3>
              <dl className="mt-5 space-y-4 text-ink">
                <div>
                  <dt className="text-sm font-medium text-carbon">Problem</dt>
                  <dd className="mt-1">
                    Hiring teams were buried in candidates who were never going to be a fit, and
                    building skills in new hires took too much time.
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-carbon">What we built</dt>
                  <dd className="mt-1">
                    AI role-playing simulations. One model plays a real customer, another model
                    critiques and refines its replies, so candidates and employees practise realistic
                    situations that can be tailored by industry. We built all of the product&rsquo;s
                    features and its simulation engine.
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-carbon">Result</dt>
                  <dd className="mt-1">
                    <ul className="list-disc space-y-2 pl-5">
                      <li>
                        More than 90% of the noise in the candidate pool was filtered out by the
                        simulations, so hiring teams spent their time on people worth meeting.
                      </li>
                      <li>
                        In the learning and development stage after hire, teams using the platform
                        ran 70 to 80% more efficiently.
                      </li>
                      <li>Skillful.ly has since been adopted by S&amp;P 500 companies.</li>
                    </ul>
                  </dd>
                </div>
              </dl>
              <blockquote className="mt-6 border-l-2 border-verdant pl-4">
                <p>
                  &ldquo;Paradigm&rsquo;s expertise was pivotal in our journey into AI, propelling us
                  forward at record speed.&rdquo;
                </p>
                <footer className="mt-2 text-sm text-ink">CEO/Co-founder, Skillful.ly, CA, USA</footer>
              </blockquote>
            </article>

            <article className={card}>
              <h3 className="h3">Awesome Motive</h3>
              <dl className="mt-5 space-y-4 text-ink">
                <div>
                  <dt className="text-sm font-medium text-carbon">Problem</dt>
                  <dd className="mt-1">
                    Awesome Motive and the businesses in its portfolio were paying for a long list of
                    third-party applications, and that spend kept adding to burn. The software was
                    also built for the average customer, not for each business&rsquo;s own pain
                    points.
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-carbon">What we built</dt>
                  <dd className="mt-1">
                    In-house versions of the software they relied on, built from scratch, plus custom
                    versions for their portfolio businesses. We also worked inside their teams to find
                    each business&rsquo;s specific pain points and build calibrated AI solutions that
                    fit how those teams work.
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-carbon">Result</dt>
                  <dd className="mt-1">
                    <ul className="list-disc space-y-2 pl-5">
                      <li>Spend on third-party software reduced by 60 to 70%.</li>
                      <li>Delivered within 7 months.</li>
                      <li>Everything built is their IP.</li>
                      <li>The applications run privately in their own cloud environments.</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </article>
          </div>

          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {shortWork.map((w) => (
              <li key={w.c} className={card + " !p-6"}>
                <h3 className="h3">{w.c}</h3>
                <p className="mt-2 text-ink">{w.d}</p>
              </li>
            ))}
          </ul>

          <h3 className="h3 mt-16">What clients say</h3>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.a}>
                <blockquote className="h-full rounded-card bg-canvas p-6">
                  <p>&ldquo;{t.q}&rdquo;</p>
                  <footer className="mt-4 text-sm text-ink">{t.a}</footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </Section>

        {/* 5. How it works */}
        <Section id="how" tone="canvas">
          <h2 className="h2">Four steps, each with a clear end point</h2>
          <ol className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-5 hidden h-px bg-line md:block"
            />
            {steps.map((s) => (
              <li key={s.n} className="relative">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-forest text-base font-medium text-white">
                  {s.n}
                </span>
                <h3 className="h3 mt-4">{s.t}</h3>
                <p className="mt-2 text-ink">{s.d}</p>
              </li>
            ))}
          </ol>
          <p className="h2 mt-14 text-forest">You own the code, models and data.</p>
        </Section>

        {/* 6. Why Paradigm */}
        <Section id="why">
          <h2 className="h2">What you can count on</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {why.map((w) => (
              <li key={w.t} className={card}>
                <h3 className="h3">{w.t}</h3>
                <p className="mt-3 text-ink">{w.d}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 7. For PE firms */}
        <Section id="portfolio" tone="canvas">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="h2">Most AI activity across a portfolio does not move EBITDA</h2>
              <p className="mt-4 text-lg text-ink">
                We start with one real problem at one company, prove the result, then repeat it
                across the portfolio.
              </p>
              <p className="mt-6 text-ink">
                Awesome Motive: third-party software spend cut by 60 to 70%, delivered within 7
                months.
              </p>
              <BookButton className="mt-8" />
            </div>
            <ul className="space-y-5">
              <li className={card}>
                <h3 className="h3">Starts small, fixed price</h3>
                <p className="mt-2 text-ink">One audit, one use case, one price agreed up front.</p>
              </li>
              <li className={card}>
                <h3 className="h3">Assets stay with the portfolio company</h3>
                <p className="mt-2 text-ink">Everything we build is theirs.</p>
              </li>
              <li className={card}>
                <h3 className="h3">One team across companies</h3>
                <p className="mt-2 text-ink">
                  The same engineers carry what worked from one business to the next.
                </p>
              </li>
            </ul>
          </div>
        </Section>

        {/* 8. Lab */}
        <Section id="lab">
          <div className="rounded-card border border-line bg-paper p-8 sm:p-10">
            <p className="inline-block rounded-full bg-sprout px-3 py-1 text-sm font-medium text-forest">
              Pre-launch
            </p>
            <h2 className="h2 mt-4">From our lab: Montaa</h2>
            <p className="mt-4 max-w-3xl text-lg text-ink">
              Montaa is a decision-support tool our R&amp;D team is building. It stress-tests
              high-stakes decisions that involve more than one party, such as a funding round, an
              acquisition or a negotiation. It models the other side&rsquo;s incentives, plays out
              thousands of possible outcomes, and shows which move holds up best.
            </p>
            <p className="mt-4 max-w-3xl text-ink">
              Montaa is in development. There are no customer results yet, and we are talking to
              design partners.
            </p>
            <a
              href={MONTAA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost mt-6"
            >
              Read the concepts
            </a>
          </div>
        </Section>

        {/* 9. FAQ */}
        <Section id="faq" tone="canvas">
          <h2 className="h2">Questions we hear</h2>
          <div className="mt-10 max-w-3xl divide-y divide-line border-y border-line">
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
        </Section>

        {/* 10. Final CTA */}
        <Section id="contact">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h2">Tell us the one process that costs you the most time.</h2>
            <p className="mt-4 text-lg text-ink">We will tell you in 30 minutes if AI can fix it.</p>
            <BookButton className="mt-8" />
          </div>
          <div className="mx-auto mt-14 max-w-2xl rounded-card border border-line bg-paper p-6 sm:p-8">
            <h3 className="h3">Prefer to write? Send a note.</h3>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
