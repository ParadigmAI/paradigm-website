export function PageSection({
  id,
  tone = "field",
  children,
}: {
  id?: string;
  tone?: "field" | "canvas";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={tone === "canvas" ? "bg-canvas" : "bg-field"}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">{children}</div>
    </section>
  );
}
