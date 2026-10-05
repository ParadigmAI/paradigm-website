import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// The job shops page moved to Quoteline. GitHub Pages cannot do server redirects, so this small
// page forwards visitors (meta refresh) and points search engines at the new address.
export const metadata: Metadata = {
  title: "Quoteline | Paradigm",
  alternates: { canonical: "/solutions/quoteline/" },
  robots: { index: false, follow: true },
};

export default function JobShopsMoved() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/solutions/quoteline/" />
      <Header />
      <main id="main" className="mx-auto max-w-2xl px-4 py-32 text-center sm:px-6">
        <h1 className="h1">This page has moved</h1>
        <p className="mt-4 text-ink">Job shops are now part of Quoteline.</p>
        <a href="/solutions/quoteline/" className="btn btn-primary mt-8">
          Go to Quoteline
        </a>
      </main>
      <Footer />
    </>
  );
}
