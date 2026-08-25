import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Globe2,
  Zap,
  Heart,
  Compass,
  Disc3,
  MonitorSmartphone,
  Search,
  Play,
  Pause,
  CheckCircle2,
  MapPin,
  Waves,
  Signal,
  Moon,
  SunMoon,
  Command,
  ExternalLink,
} from "lucide-react";
import { APP_LINK } from "../config";
import { Reveal, SectionHeading, Globe, Equalizer, CountUp } from "./ui";

/* ------------------------------- Social proof ------------------------------- */

// Real stations from the live app's directory
const TICKER = [
  "102.7 KIIS FM",
  "Classic Vinyl HD",
  "RTL · France",
  "France Info",
  "MANGORADIO",
  "BBC World Service",
  "CNN",
  "Radio Paradise Main Mix",
  "Arabesk FM",
  "Europe 1",
  "101 SMOOTH JAZZ",
  "Deutschlandfunk",
  "WALM · Old Time Radio",
  "Z100 New York",
  "Dance Wave!",
  "DAMAR TURK FM",
  "Nostalgie HQ",
  "RFM",
  "SWR3",
  "Fox News Radio",
  "NPR 24 Hour Program",
  "Virgin Radio Türkiye",
  "FUN Radio",
  "Adroit Jazz Underground",
  "The Big 80s Station",
  "80s80s Radio",
];

const STATS: Array<{
  to: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sub: string;
}> = [
    { to: 4000, suffix: "", label: "Live stations on the globe", sub: "top 4000 broadcasters by popularity" },
    { to: 60, suffix: "+", label: "Countries & territories", sub: "every continent, every timezone" },
    { to: 40, suffix: "+", label: "Genres to wander", sub: "jazz, news, lo-fi, 80s, world & more" },
    { to: 0, decimals: 0, prefix: "$", suffix: "", label: "Cost to listen", sub: "free, no account, no install" },
  ];

export function SocialProof() {
  return (
    <section aria-label="Social proof" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="glass grid grid-cols-2 gap-y-10 rounded-[2rem] px-6 py-10 sm:px-10 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl font-medium tracking-tight text-white sm:text-[2.75rem]">
                  <span className="text-gradient-warm">
                    <CountUp to={s.to} decimals={s.decimals ?? 0} suffix={s.suffix} prefix={s.prefix ?? ""} />
                  </span>
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-200">{s.label}</p>
                <p className="mx-auto mt-1 max-w-[200px] text-xs leading-relaxed text-slate-500">{s.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* marquee */}
        <Reveal delay={0.15} className="mt-14">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-600">
            A few of the stations you'll find on the dial
          </p>
          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-marquee gap-3">
              {[...TICKER, ...TICKER].map((t, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm text-slate-400 transition-colors duration-300 hover:border-orange-400/30 hover:text-orange-200"
                >
                  <Signal className="h-3.5 w-3.5 text-orange-400/70" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Features --------------------------------- */

const FEATURES = [
  {
    icon: Globe2,
    title: "The Living Globe",
    body: "Spin the Earth and watch stations light up city by city. Every marker is a live signal — tap it and the world starts talking.",
    accent: "from-amber-400/20 to-orange-500/5 text-orange-300",
  },
  {
    icon: Zap,
    title: "Instant Tuning",
    body: "No buffering, no menus, no fuss. Tap a marker and sound fills the room in under a second — just like the old dial, only faster.",
    accent: "from-yellow-400/20 to-amber-500/5 text-yellow-300",
  },
  {
    icon: Heart,
    title: "One-Tap Favorites",
    body: "Build your own private frequency list. Presets, recents, and loved stations follow you to every device, forever.",
    accent: "from-rose-400/20 to-pink-500/5 text-rose-300",
  },
  {
    icon: Compass,
    title: "City-to-City Discovery",
    body: "Browse by country, genre, or language. From Alpine folk to Amapiano, there's a signal with your name on it.",
    accent: "from-violet-400/20 to-indigo-500/5 text-violet-300",
  },
  {
    icon: Disc3,
    title: "Beautiful Now Playing",
    body: "Album art, live metadata, and a glowing waveform for every broadcast. It looks as good as it sounds.",
    accent: "from-sky-400/20 to-blue-500/5 text-sky-300",
  },
  {
    icon: MonitorSmartphone,
    title: "Everywhere You Are",
    body: "Works in any browser, on any screen. No installs, no accounts required — open the page and you're on air.",
    accent: "from-emerald-400/20 to-teal-500/5 text-emerald-300",
  },
  {
    icon: Moon,
    title: "Sleep Timer",
    body: "Drift off to a distant broadcast and let it fade out on its own — the bedside radio ritual, quietly modernised.",
    accent: "from-indigo-400/20 to-violet-500/5 text-indigo-300",
  },
  {
    icon: SunMoon,
    title: "Day & Night Modes",
    body: "A luminous daylight view and a deep midnight one. The globe glows differently at 3 p.m. than it does at 3 a.m.",
    accent: "from-amber-400/20 to-yellow-500/5 text-amber-300",
  },
  {
    icon: Command,
    title: "⌘K Instant Search",
    body: "Hit ⌘K and search 3999+ stations by name, country, or genre. Keyboard-first, for the impatient and the curious.",
    accent: "from-slate-300/20 to-slate-500/5 text-slate-200",
  },
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[130px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why it feels different"
          title={
            <>
              Everything you loved about radio.
              <br />
              <span className="text-gradient-warm italic">Nothing you didn't.</span>
            </>
          }
          sub="No feeds. No algorithms shouting at you. Just a globe, a dial, and 3999+ live signals from around the world — designed to feel as warm as the original, and as smooth as the best apps you use."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="h-full">
              <article className="card-glow group h-full p-7">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${f.accent} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  <f.icon className="h-5.5 w-5.5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{f.body}</p>
                <span className="mt-5 block h-px w-full bg-gradient-to-r from-orange-400/40 via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Showcase --------------------------------- */

const TABS = [
  { id: "explore", label: "Explore the Globe", icon: Globe2 },
  { id: "discover", label: "Discover Signals", icon: Search },
  { id: "listen", label: "Now Playing", icon: Disc3 },
];

const DISCOVER_RESULTS = [
  { name: "101 SMOOTH JAZZ", place: "The United States", tag: "Easy Listening" },
  { name: "Classic Vinyl HD", place: "The United States", tag: "1930" },
  { name: "WALM — Old Time Radio", place: "The United States", tag: "78" },
  { name: "Nostalgie HQ", place: "France", tag: "General" },
  { name: "80s80s Radio", place: "Germany", tag: "80s" },
];

export function Showcase() {
  const [tab, setTab] = useState("explore");
  const [playing, setPlaying] = useState(true);

  return (
    <section id="experience" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-1/4 h-[460px] w-[460px] rounded-full bg-orange-500/[0.08] blur-[130px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Inside the experience"
          title={
            <>
              A radio from memory,
              <br />
              <span className="text-gradient-warm italic">engineered for today.</span>
            </>
          }
          sub="Every screen is calm, tactile, and instantly familiar — even if you've never touched a radio in your life."
        />

        {/* tabs */}
        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <div role="tablist" aria-label="Product experience tabs" className="glass inline-flex flex-wrap justify-center gap-1 rounded-full p-1.5">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls={`panel-${t.id}`}
                onClick={() => setTab(t.id)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${tab === t.id ? "text-ink-950" : "text-slate-400 hover:text-white"
                  }`}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 shadow-[0_8px_24px_-6px_rgba(249,115,22,0.6)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <t.icon className="relative z-10 h-4 w-4" aria-hidden="true" />
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* panels */}
        <div className="relative mx-auto mt-10 max-w-5xl">
          <div className="absolute -inset-x-6 -top-8 bottom-0 rounded-[3rem] bg-gradient-to-b from-orange-500/[0.07] to-transparent blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-gradient-to-b from-ink-800/80 to-ink-950/90 p-3 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                role="tabpanel"
                id={`panel-${tab}`}
                aria-labelledby={`tab-${tab}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="min-h-[430px] rounded-[1.6rem] border border-white/[0.06] bg-ink-950/70 p-6 sm:p-10"
              >
                {tab === "explore" && (
                  <div className="grid items-center gap-8 lg:grid-cols-[1fr_320px]">
                    <div className="relative">
                      <Globe className="mx-auto w-full max-w-[440px]" />
                      <p className="mt-2 text-center text-xs font-medium text-slate-500">
                        <Waves className="mr-1 inline h-3.5 w-3.5 text-orange-400" aria-hidden="true" />
                        Drag to rotate · scroll to zoom · click a marker to play
                      </p>
                    </div>
                    <ul className="space-y-2.5">
                      {[
                        { name: "MY RADIO DJ", place: "India · Now Playing", color: "bg-amber-400" },
                        { name: "BBC World Service", place: "The United Kingdom · News", color: "bg-cyan-400" },
                        { name: "MANGORADIO", place: "Germany · Music", color: "bg-cyan-400" },
                        { name: "Europe 1", place: "France · AAC", color: "bg-cyan-400" },
                        { name: "Virgin Radio Türkiye", place: "Türkiye · Pop Rock", color: "bg-cyan-400" },
                      ].map((s, i) => (
                        <motion.li
                          key={s.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.07 }}
                          className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:border-orange-400/30 hover:bg-white/[0.06]"
                        >
                          <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${s.color} animate-pulse-dot`} />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-white">{s.name}</p>
                            <p className="text-xs text-slate-500">{s.place}</p>
                          </div>
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-ink-950 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {tab === "discover" && (
                  <div className="mx-auto max-w-2xl">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 focus-within:border-orange-400/50">
                      <Search className="h-5 w-5 text-orange-400" aria-hidden="true" />
                      <input
                        type="search"
                        placeholder="Search stations, countries, genres…"
                        aria-label="Search stations"
                        className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                      />
                      <kbd className="hidden rounded-md border border-white/15 bg-white/[0.05] px-2 py-1 text-[10px] font-semibold text-slate-400 sm:block">
                        ⌘K
                      </kbd>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Pop", "News", "General", "Müzik", "Easy Listening", "Culture", "Dance", "80s", "Jazz", "Avant-Garde"].map((g) => (
                        <span
                          key={g}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-orange-400/40 hover:text-orange-200"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                    <ul className="mt-6 space-y-2.5">
                      {DISCOVER_RESULTS.map((s, i) => (
                        <motion.li
                          key={s.name}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.12 + i * 0.08 }}
                          className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-orange-400/30 hover:bg-white/[0.06]"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/25 to-rose-500/10 text-orange-300">
                            <Disc3 className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-white">{s.name}</p>
                            <p className="flex items-center gap-1 text-xs text-slate-500">
                              <MapPin className="h-3 w-3" aria-hidden="true" /> {s.place} · {s.tag}
                            </p>
                          </div>
                          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-cyan-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-dot" />
                            Live
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {tab === "listen" && (
                  <div className="mx-auto grid max-w-3xl items-center gap-8 sm:grid-cols-[auto_1fr]">
                    <div className="relative mx-auto h-44 w-44 sm:h-56 sm:w-56">
                      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg,#fbbf24,#f97316,#fb7185,#a78bfa,#38bdf8,#fbbf24)] opacity-90 blur-[2px] animate-spin-slower" aria-hidden="true" />
                      <div className="absolute inset-2 overflow-hidden rounded-full border-4 border-ink-950">
                        <img
                          src="images/nostalgia.jpg"
                          alt="Album artwork inspired by warm radio memories"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-[38%] rounded-full bg-ink-950/90 ring-4 ring-white/10" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-orange-300">Now Playing · Live</p>
                      <h3 className="mt-2 font-display text-2xl font-medium text-white sm:text-3xl">Midnight in Marrakech</h3>
                      <p className="mt-1 text-sm text-slate-400">Gnawa Nights — Desert Blues Radio</p>
                      <div className="mt-5 flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setPlaying((p) => !p)}
                          aria-label={playing ? "Pause" : "Play"}
                          className="flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 text-ink-950 shadow-[0_12px_36px_-8px_rgba(249,115,22,0.7)] transition-transform hover:scale-105 active:scale-95"
                        >
                          {playing ? <Pause className="h-5 w-5 fill-current" /> : <Play className="ml-0.5 h-5 w-5 fill-current" />}
                        </button>
                        <Equalizer active={playing} bars={7} className="h-7" />
                        <span className="text-xs font-medium text-slate-500">
                          {playing ? "Streaming · 128 kbps" : "Paused"}
                        </span>
                      </div>
                      <div className="mt-5">
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                        </div>
                        <div className="mt-1.5 flex justify-between text-[10px] font-medium text-slate-600">
                          <span>LIVE</span>
                          <span>Marrakech · Morocco</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-10 flex flex-col items-center gap-3">
            <a {...APP_LINK} className="btn-primary group">
              Try the real thing — it's live now
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <p className="text-xs text-slate-500">
              Opens <span className="font-medium text-slate-400">radio-by-mayuddin.vercel.app</span> in a new tab
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Benefits --------------------------------- */

const MEMORY_POINTS = [
  "Presets that remember your stations — like sticky notes on an old dial",
  "Analog-style tuning: glide through frequencies, land somewhere magical",
  "A warm night mode that glows gently beside your bed",
  "Zero learning curve — if you've ever turned a knob, you already know this",
];

const FUTURE_POINTS = [
  "3999+ stations across 190 countries — more than any FM band could dream of",
  "Crisp, HD streams with live track metadata for every broadcast",
  "Smart suggestions that learn your taste without ever feeling pushy",
  "Syncs your favorites across every device you own, instantly",
];

export function Benefits() {
  return (
    <section id="story" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl space-y-24 px-5 sm:px-8 sm:space-y-32">
        {/* memory row */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-orange-500/15 via-rose-500/5 to-transparent blur-2xl" aria-hidden="true" />
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <img
                src="images/nostalgia.jpg"
                alt="Hands gently tuning a classic wooden radio beside a rainy window at night"
                className="aspect-[4/3.4] w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" aria-hidden="true" />
              <span className="glass absolute bottom-5 left-5 flex animate-float items-center gap-2.5 rounded-2xl px-4 py-2.5 text-xs font-semibold text-white">
                🎚️ “Feels like Grandma's kitchen.”
                <span className="text-slate-400">— a listener, age 67</span>
              </span>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">The memory</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.12]">
                The warmth you <span className="text-gradient-warm italic">remember.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 leading-relaxed text-slate-400">
                Some things shouldn't be lost to progress — the crackle of a dial, the voice of a late-night host, the
                serendipity of landing on a song you'd forgotten you loved. Radio by Mayuddin keeps every bit of that
                feeling, then wraps it in something beautiful.
              </p>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {MEMORY_POINTS.map((p, i) => (
                <Reveal key={p} delay={0.1 + i * 0.07}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-slate-300">{p}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* future row */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <Reveal>
              <span className="eyebrow">The future</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.12]">
                The reach you <span className="text-gradient-warm italic">never had.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 leading-relaxed text-slate-400">
                Your grandparents' radio could reach the next town. Yours reaches every town. Spin the globe at 2 a.m.
                and hear a jazz club in Osaka, a fishing village in Norway, or a wedding band in Lagos — in one tap.
              </p>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {FUTURE_POINTS.map((p, i) => (
                <Reveal key={p} delay={0.1 + i * 0.07}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-slate-300">{p}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.4}>
              <a {...APP_LINK} className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition-colors hover:text-orange-200">
                New to radio? Spin the globe — it takes 10 seconds
                <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
          <Reveal className="relative order-1 lg:order-2">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-bl from-violet-500/15 via-transparent to-transparent blur-2xl" aria-hidden="true" />
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <img
                src="images/modern-listener.jpg"
                alt="A young woman joyfully listening with headphones in a modern apartment at night"
                className="aspect-[4/3.4] w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" aria-hidden="true" />
              <span className="glass absolute bottom-5 left-5 flex animate-float-late items-center gap-2.5 rounded-2xl px-4 py-2.5 text-xs font-semibold text-white">
                🎧 “My first station was Seoul. It's 2 a.m. here.”
                <span className="text-slate-400">— a listener, age 19</span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
