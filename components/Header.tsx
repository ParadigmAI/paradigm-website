"use client";

import { useState } from "react";
import { bookExternal, bookHref } from "@/lib/site";

const links = [
  { href: "/#services", label: "What we do" },
  { href: "/#work", label: "Work" },
  { href: "/#how", label: "How it works" },
  { href: "/#why", label: "Why Paradigm" },
  { href: "/#portfolio", label: "Portfolios" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-field/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="font-display text-xl font-medium tracking-tight">
          Paradigm
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ink hover:text-carbon">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={bookHref}
            {...(bookExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="btn btn-primary hidden !h-10 sm:inline-flex"
          >
            Book a call
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
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-3 text-base"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={bookHref}
                {...(bookExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="btn btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                Book a call
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
