"use client";

import { useEffect, useRef, useState } from "react";
import { solutionsNav } from "@/lib/solutionsNav";

const links = [
  { href: "/#services", label: "What we do" },
  { href: "/#work", label: "Work" },
  { href: "/#how", label: "How it works" },
  { href: "/#why", label: "Why Paradigm" },
  { href: "/#portfolio", label: "Portfolios" },
  { href: "/#faq", label: "FAQ" },
];

function SolutionsMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="group/sol relative flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <a href="/solutions/" className="text-sm text-ink hover:text-carbon">
        Solutions
      </a>
      <button
        type="button"
        aria-label="Solutions menu"
        aria-expanded={open}
        aria-controls="solutions-menu"
        onClick={() => setOpen((v) => !v)}
        className="group/plus ml-1 flex h-6 w-6 items-center justify-center text-forest"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 12 12"
          aria-hidden="true"
          className="plus-icon transition-transform duration-300 ease-out group-hover/sol:rotate-45 group-hover/plus:rotate-45 group-aria-expanded/plus:rotate-45"
        >
          <path d="M6 1.2v9.6M1.2 6h9.6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div
          id="solutions-menu"
          className="absolute left-0 top-full z-50 w-72 pt-2"
        >
          <ul className="rounded-xl border border-line bg-paper p-2 shadow-lg">
            {solutionsNav.map((s) => (
              <li key={s.slug}>
                <a
                  href={`/solutions/${s.slug}/`}
                  className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-sprout hover:text-carbon"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-field/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="font-display text-xl font-medium tracking-tight">
          Paradigm
        </a>
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          <a href={links[0].href} className="text-sm text-ink hover:text-carbon">
            {links[0].label}
          </a>
          <SolutionsMenu />
          {links.slice(1).map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ink hover:text-carbon">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="/#contact" className="btn btn-primary hidden !h-10 sm:inline-flex">
            Talk to our team
          </a>
          <button
            type="button"
            className="btn btn-ghost !h-10 !px-4 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line/70 bg-field px-4 pb-4 lg:hidden">
          <ul className="flex flex-col">
            <li>
              <a href={links[0].href} className="block py-3 text-base" onClick={() => setOpen(false)}>
                {links[0].label}
              </a>
            </li>
            <li>
              <a href="/solutions/" className="block py-3 text-base" onClick={() => setOpen(false)}>
                Solutions
              </a>
              <ul className="border-l border-line pl-4">
                {solutionsNav.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`/solutions/${s.slug}/`}
                      className="block py-2 text-sm text-ink"
                      onClick={() => setOpen(false)}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            {links.slice(1).map((l) => (
              <li key={l.href}>
                <a href={l.href} className="block py-3 text-base" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/#contact"
                className="btn btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                Talk to our team
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
