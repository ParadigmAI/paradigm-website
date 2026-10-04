const orbs = [
  { size: 64, bg: "radial-gradient(circle at 32% 28%, #ffffff 0%, #e2f5da 38%, #abd49e 100%)" },
  { size: 96, bg: "radial-gradient(circle at 34% 28%, #f4f4f1 0%, #abd49e 45%, #309d4b 100%)" },
  { size: 136, bg: "radial-gradient(circle at 36% 28%, #ffffff 0%, #abd49e 40%, #5db368 72%, #004e23 100%)" },
  { size: 96, bg: "radial-gradient(circle at 34% 28%, #f4f4f1 0%, #ceecbf 45%, #5db368 100%)" },
  { size: 64, bg: "radial-gradient(circle at 32% 28%, #ffffff 0%, #e2f5da 40%, #abd49e 100%)" },
];

export function Orbs() {
  return (
    <div
      aria-hidden="true"
      className="flex items-end justify-center gap-3 sm:gap-6 md:gap-8"
    >
      {orbs.map((o, i) => (
        <div
          key={i}
          className={`orb shrink-0 ${i > 0 && i < 4 ? "" : "hidden sm:block"}`}
          style={{
            width: `min(${o.size}px, 18vw)`,
            aspectRatio: "1",
            background: o.bg,
            boxShadow: "0 24px 48px -16px rgba(0, 78, 35, 0.28), inset 0 -8px 16px rgba(0,0,0,0.06)",
          }}
        />
      ))}
    </div>
  );
}
