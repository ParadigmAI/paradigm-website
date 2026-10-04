import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-2xl px-4 py-32 text-center sm:px-6">
        <h1 className="h1">That page is not here</h1>
        <p className="mt-4 text-ink">The page may have moved. The home page has everything.</p>
        <a href="/" className="btn btn-primary mt-8">
          Go to the home page
        </a>
      </main>
      <Footer />
    </>
  );
}
