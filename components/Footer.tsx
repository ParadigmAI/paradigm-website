import { solutionsNav } from "@/lib/solutionsNav";

export function Footer() {
  return (
    <footer className="border-t border-line bg-field">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 text-sm text-ink sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-medium text-carbon">Paradigm</p>
          <p>&copy; 2026 Paradigm</p>
        </div>
        <nav aria-label="Solutions">
          <p className="font-medium text-carbon">
            <a href="/solutions/" className="hover:underline">
              Solutions
            </a>
          </p>
          <ul className="mt-2 space-y-1">
            {solutionsNav.map((s) => (
              <li key={s.slug}>
                <a href={`/solutions/${s.slug}/`} className="hover:text-carbon">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Legal" className="flex gap-6 md:flex-col md:gap-1">
          <a href="/privacy/" className="hover:text-carbon">
            Privacy policy
          </a>
          <a href="/terms/" className="hover:text-carbon">
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
}
