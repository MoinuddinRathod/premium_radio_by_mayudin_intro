import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/* ---------------------------------- Reveal --------------------------------- */

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------ Section heading ---------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : "text-left"}`}>
      <Reveal>
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse-dot" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------------------------- Globe ---------------------------------- */

// Cyan = station marker, amber = "now playing" — matching the live app's legend
const STATIONS: Array<{ lon: number; lat: number; color: string }> = [
  { lon: 139.7, lat: 35.7, color: "#22d3ee" }, // Tokyo
  { lon: -0.12, lat: 51.5, color: "#22d3ee" }, // London
  { lon: -74.0, lat: 40.7, color: "#22d3ee" }, // New York
  { lon: 151.2, lat: -33.9, color: "#22d3ee" }, // Sydney
  { lon: 36.8, lat: -1.3, color: "#22d3ee" }, // Nairobi
  { lon: 13.4, lat: 52.5, color: "#22d3ee" }, // Berlin
  { lon: -43.2, lat: -22.9, color: "#22d3ee" }, // Rio
  { lon: 55.3, lat: 25.3, color: "#22d3ee" }, // Dubai
  { lon: -122.4, lat: 47.6, color: "#22d3ee" }, // Seattle
  { lon: 79.2, lat: 20.4, color: "#fbbf24" }, // India — MY RADIO DJ (now playing)
];

export function Globe({ className = "" }: { className?: string }) {
  const r = 150;
  const cx = 200;
  const cy = 200;
  const dots: Array<{ x: number; y: number; o: number; z: number; k: string }> = [];
  let i = 0;
  for (let lat = -75; lat <= 75; lat += 12) {
    for (let lon = -180; lon < 180; lon += 10) {
      const radLat = (lat * Math.PI) / 180;
      const radLon = (lon * Math.PI) / 180;
      const z = Math.cos(radLat) * Math.cos(radLon);
      if (z < 0.08) continue;
      const x = cx + r * Math.cos(radLat) * Math.sin(radLon);
      const y = cy - r * Math.sin(radLat);
      dots.push({ x, y, o: 0.18 + z * 0.6, z, k: `d${i++}` });
    }
  }

  const project = (lon: number, lat: number) => {
    const radLat = (lat * Math.PI) / 180;
    const radLon = (lon * Math.PI) / 180;
    return { x: cx + r * Math.cos(radLat) * Math.sin(radLon), y: cy - r * Math.sin(radLat) };
  };

  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="Interactive globe of live radio stations">
      <defs>
        <radialGradient id="globeBody" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#2a3054" />
          <stop offset="55%" stopColor="#131735" />
          <stop offset="100%" stopColor="#0a0c1e" />
        </radialGradient>
        <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(251,146,60,0.16)" />
          <stop offset="100%" stopColor="rgba(251,146,60,0)" />
        </radialGradient>
      </defs>

      {/* ambient glow */}
      <circle cx={cx} cy={cy} r={230} fill="url(#globeGlow)" className="animate-glow-breathe" />

      {/* orbit rings */}
      <g className="animate-orbit" style={{ transformOrigin: "200px 200px" }}>
        <ellipse cx={cx} cy={cy} rx={196} ry={64} fill="none" stroke="rgba(251,146,60,0.35)" strokeWidth="1" strokeDasharray="3 7" />
        <circle cx={cx + 196} cy={cy} r={4} fill="#fb923c" />
      </g>
      <g className="animate-orbit-rev" style={{ transformOrigin: "200px 200px" }}>
        <ellipse cx={cx} cy={cy} rx={212} ry={88} fill="none" stroke="rgba(167,139,250,0.22)" strokeWidth="1" strokeDasharray="2 8" />
        <circle cx={cx - 212} cy={cy} r={3} fill="#a78bfa" />
      </g>

      {/* sphere */}
      <circle cx={cx} cy={cy} r={r} fill="url(#globeBody)" stroke="rgba(148,163,184,0.22)" strokeWidth="1" />

      {/* meridians */}
      {[0, 45, 90, 135].map((a) => (
        <ellipse
          key={a}
          cx={cx}
          cy={cy}
          rx={r}
          ry={r * 0.42}
          fill="none"
          stroke="rgba(148,163,184,0.10)"
          strokeWidth="0.75"
          transform={`rotate(${a} ${cx} ${cy})`}
        />
      ))}
      <ellipse cx={cx} cy={cy} rx={r * 0.42} ry={r} fill="none" stroke="rgba(148,163,184,0.10)" strokeWidth="0.75" />

      {/* dotted surface */}
      {dots.map((d) => (
        <circle key={d.k} cx={d.x} cy={d.y} r={1.1 + d.z * 1.3} fill="#8fa3ff" opacity={d.o} />
      ))}

      {/* station markers */}
      {STATIONS.map((s, idx) => {
        const p = project(s.lon, s.lat);
        return (
          <g key={idx}>
            <circle cx={p.x} cy={p.y} r={10} fill={s.color} opacity={0.14}>
              <animate attributeName="r" values="4;14;4" dur="3.2s" begin={`${idx * 0.35}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.22;0;0.22" dur="3.2s" begin={`${idx * 0.35}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={p.x} cy={p.y} r={3} fill={s.color} />
            <circle cx={p.x} cy={p.y} r={1.4} fill="#fff" opacity={0.85} />
          </g>
        );
      })}

      {/* rim light */}
      <ellipse cx={cx} cy={cy} rx={r} ry={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
    </svg>
  );
}

/* -------------------------------- Equalizer -------------------------------- */

export function Equalizer({
  bars = 5,
  active = true,
  className = "",
}: {
  bars?: number;
  active?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-end gap-[3px] ${className}`} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="w-[3px] origin-bottom animate-eq rounded-full bg-gradient-to-t from-orange-500 to-amber-300"
          style={{
            height: `${8 + ((i * 7) % 14)}px`,
            animationDelay: `${i * 0.14}s`,
            animationPlayState: active ? "running" : "paused",
          }}
        />
      ))}
    </div>
  );
}

/* --------------------------------- CountUp --------------------------------- */

export function CountUp({
  to,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 1.8,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
}

/* --------------------------------- Logo mark -------------------------------- */

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 shadow-[0_8px_24px_-6px_rgba(249,115,22,0.6)] ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-[55%] w-[55%] text-ink-950" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="12" cy="12" r="3.4" fill="currentColor" />
        <path d="M12 3v3.2M12 17.8V21M3 12h3.2M17.8 12H21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </span>
  );
}
