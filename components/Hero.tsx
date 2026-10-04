const HEADLINE = "Your best people shouldn't be doing copy-paste.";

const blobs = [
  { cls: "left-[-120px] top-10 h-[520px] w-[520px]", bg: "#abd49e", x1: "120px", y1: "60px", x2: "40px", y2: "-40px", t: "19s", o: 0.75 },
  { cls: "right-[-100px] top-[-60px] h-[480px] w-[480px]", bg: "#e2f5da", x1: "-100px", y1: "90px", x2: "-30px", y2: "30px", t: "23s", o: 0.75 },
  { cls: "left-[38%] top-[120px] h-[420px] w-[420px]", bg: "#5db368", x1: "-80px", y1: "-50px", x2: "90px", y2: "40px", t: "27s", o: 0.4 },
];

export function Hero() {
  const words = HEADLINE.split(" ");
  return (
    <section id="top" className="aurora relative overflow-hidden bg-[#ecebe4]">
      {blobs.map((b, i) => (
        <div
          key={i}
          aria-hidden="true"
          className={`aurora-blob absolute rounded-full ${b.cls}`}
          style={
            {
              background: b.bg,
              "--x1": b.x1,
              "--y1": b.y1,
              "--x2": b.x2,
              "--y2": b.y2,
              "--t": b.t,
              "--o": b.o,
            } as React.CSSProperties
          }
        />
      ))}
      <div aria-hidden="true" className="aurora-grain" />
      <div aria-hidden="true" className="aurora-ring" style={{ "--i": 0 } as React.CSSProperties} />
      <div aria-hidden="true" className="aurora-ring" style={{ "--i": 1 } as React.CSSProperties} />
      <div aria-hidden="true" className="aurora-ring" style={{ "--i": 2 } as React.CSSProperties} />
      <div aria-hidden="true" className="aurora-sun" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-[300px] pt-16 text-center sm:px-6 md:pb-[260px] md:pt-24">
        <h1 className="h1 mx-auto max-w-3xl">
          {words.map((w, i) => (
            <span key={i}>
              <span className="aurora-word" style={{ "--w": i } as React.CSSProperties}>
                {w}
              </span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>
        <p
          className="aurora-rise mx-auto mt-5 max-w-2xl text-lg text-ink"
          style={{ "--i": 6 } as React.CSSProperties}
        >
          We find the slow, repetitive work holding your team back and build AI that takes it on,
          inside your own operations. Built in weeks, at a fixed price.
        </p>
        <div
          className="aurora-rise mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ "--i": 7 } as React.CSSProperties}
        >
          <a href="/#contact" className="btn btn-primary">
            Talk to our team
          </a>
          <a href="/#work" className="btn btn-ghost">
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}
