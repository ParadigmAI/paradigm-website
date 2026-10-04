"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/caseStudies";

const TABS = [
  { key: "problem", label: "Problem" },
  { key: "built", label: "What we built" },
  { key: "result", label: "Result" },
] as const;

const tones = {
  forest: {
    card: "bg-gradient-to-br from-[#004e23] to-[#00311a] text-white hover:shadow-[0_0_0_1px_#5db368,0_24px_60px_-24px_rgba(48,157,75,0.7)]",
    body: "text-[#cfe6c8]",
    stat: "text-[#abd49e]",
    rule: "border-white/15",
    tabOn: "text-[#abd49e]",
    tabOff: "text-[#cfe6c8] hover:text-white",
    bar: "bg-[#5db368]",
    quote: "border-[#5db368]",
    quoteBy: "text-[#abd49e]",
    focus: "focus-visible:outline-[#abd49e]",
  },
  mint: {
    card: "bg-[#ceecbf] text-carbon hover:shadow-[0_24px_50px_-26px_rgba(0,78,35,0.5)]",
    body: "text-[#3d3c3a]",
    stat: "text-forest",
    rule: "border-forest/20",
    tabOn: "text-forest",
    tabOff: "text-[#3d3c3a] hover:text-carbon",
    bar: "bg-verdant",
    quote: "border-verdant",
    quoteBy: "text-[#3d3c3a]",
    focus: "focus-visible:outline-forest",
  },
} as const;

function useCountUp(targets: number[][], ref: React.RefObject<HTMLElement | null>) {
  const [vals, setVals] = useState(targets);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setVals(targets.map((t) => t.map(() => 0)));
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const step = (now: number) => {
          const p = Math.min(1, (now - t0) / 1400);
          const e = 1 - Math.pow(1 - p, 3);
          setVals(targets.map((t) => t.map((n) => Math.round(n * e))));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return vals;
}

export function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const t = tones[cs.tone];
  const uid = useId();
  const [active, setActive] = useState(0);
  const [bar, setBar] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const cardRef = useRef<HTMLElement>(null);
  const vals = useCountUp(cs.stats.map((s) => s.nums), cardRef);

  useLayoutEffect(() => {
    const place = () => {
      const b = tabRefs.current[active];
      if (b) setBar({ left: b.offsetLeft, width: b.offsetWidth });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let n = i;
    if (e.key === "ArrowRight") n = (i + 1) % TABS.length;
    else if (e.key === "ArrowLeft") n = (i + TABS.length - 1) % TABS.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = TABS.length - 1;
    else return;
    e.preventDefault();
    setActive(n);
    tabRefs.current[n]?.focus();
  };

  return (
    <article
      ref={cardRef}
      className={`case-card relative overflow-hidden rounded-[20px] p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 sm:p-8 ${t.card}`}
    >
      <span aria-hidden="true" className="case-orb case-orb-a" />
      <span aria-hidden="true" className="case-orb case-orb-b" />
      <span aria-hidden="true" className="case-orb case-orb-c" />

      <h3 className="relative font-display text-[1.875rem] font-medium leading-tight">{cs.name}</h3>

      <div className={`relative mt-12 grid grid-cols-2 gap-4 border-b pb-6 ${t.rule}`}>
        {cs.stats.map((s, i) => (
          <div key={s.label}>
            <p className={`font-display text-[2.5rem] font-medium leading-none tabular-nums ${t.stat}`}>
              {vals[i].map((n, j) => (
                <span key={j}>
                  {j > 0 ? s.joiner : ""}
                  {n}
                </span>
              ))}
              {s.suffix}
            </p>
            <p className={`mt-1.5 text-sm ${t.body}`}>{s.label}</p>
          </div>
        ))}
      </div>

      <div
        role="tablist"
        aria-label={`${cs.name} case study`}
        className={`relative mt-5 flex gap-1 border-b ${t.rule}`}
      >
        {TABS.map((tab, i) => (
          <button
            key={tab.key}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            id={`${uid}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${uid}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={`px-3 py-2.5 text-sm font-medium transition-colors ${
              active === i ? t.tabOn : t.tabOff
            } ${t.focus}`}
          >
            {tab.label}
          </button>
        ))}
        <span
          aria-hidden="true"
          className={`absolute -bottom-px h-0.5 rounded-full transition-[left,width] duration-300 ease-out ${t.bar}`}
          style={{ left: bar.left, width: bar.width }}
        />
      </div>

      <div className="relative min-h-[11.5rem]">
        {TABS.map((tab, i) => (
          <div
            key={tab.key}
            role="tabpanel"
            id={`${uid}-panel-${i}`}
            aria-labelledby={`${uid}-tab-${i}`}
            hidden={active !== i}
            className={`case-panel pt-4 ${t.body}`}
          >
            {tab.key === "result" ? (
              <ul className="list-disc space-y-2 pl-5">
                {cs.result.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            ) : (
              <p>{cs[tab.key]}</p>
            )}
          </div>
        ))}
      </div>

      {cs.quote && (
        <blockquote className={`relative mt-6 border-l-2 pl-4 ${t.quote}`}>
          <p>{cs.quote.text}</p>
          <footer className={`mt-2 text-sm ${t.quoteBy}`}>{cs.quote.by}</footer>
        </blockquote>
      )}
    </article>
  );
}
