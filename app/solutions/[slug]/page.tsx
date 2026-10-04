import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPage } from "@/components/SolutionPage";
import { getSolution, solutions } from "@/lib/solutions";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.metaDescription,
    alternates: { canonical: `/solutions/${s.slug}/` },
    robots: s.indexable ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: s.seoTitle,
      description: s.metaDescription,
      url: `/solutions/${s.slug}/`,
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Paradigm" }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();
  return <SolutionPage s={s} />;
}
