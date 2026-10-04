import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <h1 className="h1">{title}</h1>
        <p className="mt-3 text-sm text-ink">Last updated: October 2026. Draft, not legal advice.</p>
        <div className="mt-10 space-y-5 text-ink [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-carbon [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
