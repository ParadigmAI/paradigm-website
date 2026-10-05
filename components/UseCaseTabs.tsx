"use client";

import { useId, useRef, useState } from "react";
import { ILLUSTRATION_CAPTION } from "@/lib/solutions";

const badgeOk = "rounded-full bg-sprout px-2 py-0.5 text-xs font-medium text-forest";
const badgeWarn = "rounded-full bg-[#fdf0d0] px-2 py-0.5 text-xs font-medium text-[#6b4a00]";
const panel = "rounded-xl border border-line bg-paper p-4";
const label = "text-[11px] font-medium uppercase tracking-wide text-ink";

type Line = { text: string; flag?: "ok" | "check" };

type UseCase = {
  tab: string;
  channel: string;
  requestTitle: string;
  request: string[];
  quoteTitle: string;
  quote: Line[];
  alt: string;
};

// All data below is invented sample data: no real companies, people or prices.
const useCases: UseCase[] = [
  {
    tab: "Job shops and machine shops",
    channel: "Email",
    requestTitle: "RFQ email with a drawing",
    request: [
      "From: Sample Buyer",
      "Subject: RFQ, Sample Part A",
      "Quantity: 250",
      "Material: 6061 aluminium",
      "Due: sample date",
      "Attachment: drawing-sample.pdf",
    ],
    quoteTitle: "Draft quote",
    quote: [
      { text: "Sample Part A, Qty 250", flag: "ok" },
      { text: "Material: 6061 aluminium", flag: "check" },
      { text: "Tolerance note from drawing", flag: "check" },
      { text: "Unit price: from your price list" },
    ],
    alt: "Illustration of sample data: an RFQ email with a drawing on the left and a drafted quote on the right, with two fields flagged for review.",
  },
  {
    tab: "Sign and print shops",
    channel: "Text message",
    requestTitle: "Request for banners",
    request: [
      "From: Sample Customer",
      "“Hi, we need 20 banners, 3 by 6 ft, matte finish, installed by [sample date].”",
    ],
    quoteTitle: "Draft quote",
    quote: [
      { text: "Banners, 3 by 6 ft, Qty 20", flag: "ok" },
      { text: "Finish: matte", flag: "ok" },
      { text: "Install by sample date", flag: "check" },
      { text: "Unit price: from your price list" },
    ],
    alt: "Illustration of sample data: a text message asking for 20 banners on the left and a drafted quote on the right, with the install date flagged for review.",
  },
  {
    tab: "Caterers and event services",
    channel: "Web form",
    requestTitle: "Request for an event",
    request: [
      "From: Sample Host",
      "Guests: 80",
      "Menu preferences: vegetarian options",
      "Date: sample date",
      "Venue: Sample Hall",
    ],
    quoteTitle: "Draft quote",
    quote: [
      { text: "Guests: 80", flag: "ok" },
      { text: "Menu: vegetarian options", flag: "check" },
      { text: "Venue: Sample Hall", flag: "ok" },
      { text: "Per-guest price: from your price list" },
    ],
    alt: "Illustration of sample data: a web form request for an event of 80 guests on the left and a drafted quote on the right, with the menu flagged for review.",
  },
];

export function UseCaseTabs() {
  const uid = useId();
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let n = i;
    if (e.key === "ArrowRight") n = (i + 1) % useCases.length;
    else if (e.key === "ArrowLeft") n = (i + useCases.length - 1) % useCases.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = useCases.length - 1;
    else return;
    e.preventDefault();
    setActive(n);
    refs.current[n]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Who Quoteline is for"
        className="flex flex-wrap gap-2"
      >
        {useCases.map((u, i) => (
          <button
            key={u.tab}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`${uid}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${uid}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === i
                ? "border-forest bg-forest text-white"
                : "border-line bg-paper text-ink hover:border-growth hover:bg-sprout hover:text-carbon"
            }`}
          >
            {u.tab}
          </button>
        ))}
      </div>

      {useCases.map((u, i) => (
        <div
          key={u.tab}
          role="tabpanel"
          id={`${uid}-panel-${i}`}
          aria-labelledby={`${uid}-tab-${i}`}
          hidden={active !== i}
          className="case-panel mt-6"
        >
          <figure>
            <div role="img" aria-label={`${u.alt} ${ILLUSTRATION_CAPTION}.`} className="rounded-2xl bg-sand p-4 sm:p-5">
              <div aria-hidden="true" className="grid gap-3 md:grid-cols-2">
                <div className={panel}>
                  <div className="flex items-center justify-between gap-2">
                    <p className={label}>{u.requestTitle}</p>
                    <span className={badgeOk}>{u.channel}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-ink">
                    {u.request.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-ink">Illustrative example, sample data</p>
                </div>
                <div className={panel}>
                  <p className={label}>{u.quoteTitle}</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {u.quote.map((q) => (
                      <li key={q.text} className="flex items-center justify-between gap-2">
                        <span className={q.flag ? "" : "text-ink"}>{q.text}</span>
                        {q.flag === "ok" && <span className={badgeOk}>Matched</span>}
                        {q.flag === "check" && <span className={badgeWarn}>Needs review</span>}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-2">
                    <span className="rounded-md bg-carbon px-3 py-1.5 text-xs text-white">Approve</span>
                    <span className="rounded-md border border-line px-3 py-1.5 text-xs">Edit</span>
                  </div>
                </div>
              </div>
            </div>
            <figcaption className="mt-2 text-xs text-ink">{ILLUSTRATION_CAPTION}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}
