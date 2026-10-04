import type { MockKind } from "@/lib/solutions";
import { ILLUSTRATION_CAPTION } from "@/lib/solutions";

const badgeOk = "rounded-full bg-sprout px-2 py-0.5 text-xs font-medium text-forest";
const badgeWarn = "rounded-full bg-[#fdf0d0] px-2 py-0.5 text-xs font-medium text-[#6b4a00]";
const panel = "rounded-xl border border-line bg-paper p-4";
const label = "text-[11px] font-medium uppercase tracking-wide text-ink";

function Dot({ ok }: { ok: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${ok ? "bg-verdant" : "bg-[#e0a82e]"}`}
    />
  );
}

function RfqMock() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className={panel}>
        <p className={label}>RFQ email</p>
        <p className="mt-2 text-sm font-medium">Subject: RFQ, Sample Part A</p>
        <ul className="mt-2 space-y-1 text-sm text-ink">
          <li>Part: Sample Part A, Qty 250</li>
          <li>Material: 6061 aluminium</li>
          <li>Due: sample date</li>
          <li>Attachment: drawing-sample.pdf</li>
        </ul>
      </div>
      <div className={panel}>
        <p className={label}>Draft quote</p>
        <ul className="mt-2 space-y-2 text-sm">
          <li className="flex items-center justify-between gap-2">
            <span>Sample Part A, Qty 250</span>
            <span className={badgeOk}>Matched</span>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>Material: 6061 aluminium</span>
            <span className={badgeWarn}>Needs review</span>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>Tolerance note</span>
            <span className={badgeWarn}>Needs review</span>
          </li>
          <li className="flex items-center justify-between gap-2 text-ink">
            <span>Unit price: from your rate sheet</span>
          </li>
        </ul>
        <div className="mt-3 flex gap-2">
          <span className="rounded-md bg-carbon px-3 py-1.5 text-xs text-white">Approve</span>
          <span className="rounded-md border border-line px-3 py-1.5 text-xs">Edit</span>
        </div>
      </div>
    </div>
  );
}

function InvoiceMock() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className={panel}>
        <p className={label}>Document</p>
        <p className="mt-2 text-sm font-medium">Sample Supplier Co</p>
        <p className="text-sm text-ink">Invoice SAMPLE-0001</p>
        <div className="mt-3 space-y-1.5" aria-hidden="true">
          <div className="h-2 w-5/6 rounded bg-line" />
          <div className="h-2 w-4/6 rounded bg-line" />
          <div className="h-2 w-3/6 rounded bg-line" />
          <div className="h-2 w-5/6 rounded bg-line" />
        </div>
      </div>
      <div className={panel}>
        <div className="flex items-center justify-between gap-2">
          <p className={label}>Extracted fields</p>
          <span className={badgeWarn}>3 exceptions</span>
        </div>
        <ul className="mt-2 space-y-2 text-sm">
          <li className="flex items-center justify-between gap-2">
            <span>Supplier</span>
            <span className={badgeOk}>High</span>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>Invoice number</span>
            <span className={badgeOk}>High</span>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>PO match</span>
            <span className={badgeWarn}>Check</span>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>Total</span>
            <span className={badgeOk}>High</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function PacketMock() {
  const items: [string, boolean][] = [
    ["Site plan: complete", true],
    ["Single-line diagram: complete", true],
    ["Equipment specs: complete", true],
    ["Utility form: needs signature", false],
    ["Site photos: missing", false],
  ];
  return (
    <div className={panel}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium">Sample Project 01, packet check</p>
        <span className={badgeWarn}>2 items to fix</span>
      </div>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map(([t, ok]) => (
          <li key={t} className="flex items-center gap-2.5">
            <Dot ok={ok} />
            <span className={ok ? "" : "text-[#6b4a00]"}>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PipelineMock() {
  const stages: [string, boolean][] = [
    ["Ingest", true],
    ["Clean", true],
    ["Link public data", true],
    ["Analyse", false],
    ["Report", false],
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className={panel}>
        <p className={label}>Pipeline stages</p>
        <ol className="mt-2 space-y-2 text-sm">
          {stages.map(([t, done]) => (
            <li key={t} className="flex items-center gap-2.5">
              <Dot ok={done} />
              <span>{t}</span>
              <span className="ml-auto text-xs text-ink">{done ? "Done" : "Queued"}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className={panel}>
        <p className={label}>Report preview: Sample dataset A</p>
        <div className="mt-3 flex h-24 items-end gap-2" aria-hidden="true">
          {[40, 64, 52, 82, 58].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-growth" style={{ height: `${h}%` }} />
          ))}
        </div>
        <p className="mt-2 text-xs text-ink">Scientists review before anything is shared.</p>
      </div>
    </div>
  );
}

const mocks: Record<MockKind, { el: React.ReactNode; alt: string }> = {
  rfq: {
    el: <RfqMock />,
    alt: "Illustration of a sample screen: an RFQ email on the left and a drafted quote on the right with some fields flagged for review. Illustrative concept, sample data.",
  },
  invoice: {
    el: <InvoiceMock />,
    alt: "Illustration of a sample screen: a document on the left and extracted fields with confidence marks on the right, with three exceptions queued. Illustrative concept, sample data.",
  },
  packet: {
    el: <PacketMock />,
    alt: "Illustration of a sample packet checklist with complete items in green and items needing attention in amber. Illustrative concept, sample data.",
  },
  pipeline: {
    el: <PipelineMock />,
    alt: "Illustration of sample pipeline stages and a sample report preview. Illustrative concept, sample data.",
  },
};

export function ExampleFlow({
  intro,
  steps,
  mock,
}: {
  intro: string;
  steps: string[];
  mock: MockKind;
}) {
  const m = mocks[mock];
  return (
    <div className="mt-10">
      <p className="text-ink">{intro}</p>

      <figure className="mt-4">
        <ol
          aria-label={`Example flow (${ILLUSTRATION_CAPTION})`}
          className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-0"
        >
          {steps.map((s, i) => (
            <li
              key={s}
              className="relative flex flex-1 items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3 text-sm md:mx-0 md:rounded-none md:first:rounded-l-xl md:last:rounded-r-xl md:[&:not(:first-child)]:border-l-0"
            >
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-medium text-white"
              >
                {i + 1}
              </span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
        <figcaption className="mt-2 text-xs text-ink">{ILLUSTRATION_CAPTION}</figcaption>
      </figure>

      <figure className="mt-8">
        <div role="img" aria-label={m.alt} className="rounded-2xl bg-sand p-4 sm:p-5">
          <div aria-hidden="true">{m.el}</div>
        </div>
        <figcaption className="mt-2 text-xs text-ink">{ILLUSTRATION_CAPTION}</figcaption>
      </figure>
    </div>
  );
}
