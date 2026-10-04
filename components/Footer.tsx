export function Footer() {
  return (
    <footer className="border-t border-line bg-field">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-ink sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-lg font-medium text-carbon">Paradigm</p>
          <p>&copy; 2026 Paradigm</p>
        </div>
        <nav aria-label="Legal" className="flex gap-6">
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
