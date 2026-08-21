import { useState } from "react";
import { motion } from "motion/react";
import { Play, Pause, SkipBack, SkipForward, Volume2, MapPin, Headphones, Sparkles, Star, ExternalLink } from "lucide-react";
import { Globe, Equalizer, LogoMark } from "./ui";
import { APP_LINK } from "../config";

const AVATARS = [
  { initials: "AH", g: "from-amber-400 to-orange-600" },
  { initials: "DK", g: "from-violet-400 to-indigo-600" },
  { initials: "PS", g: "from-rose-400 to-pink-600" },
  { initials: "EV", g: "from-emerald-400 to-teal-600" },
];

export default function Hero() {
  const [playing, setPlaying] = useState(true);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-24">
      {/* ---- ambient background ---- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:58px_58px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-orange-500/[0.13] blur-[130px]" />
        <div className="absolute top-40 -left-40 h-[420px] w-[420px] rounded-full bg-violet-600/[0.12] blur-[120px] animate-glow-breathe" />
        <div className="absolute top-64 -right-32 h-[380px] w-[380px] rounded-full bg-rose-500/[0.09] blur-[110px] animate-glow-breathe [animation-delay:2s]" />
        <div className="absolute inset-0 noise opacity-[0.05] mix-blend-overlay" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* ------------------------------- copy ------------------------------- */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-orange-400/25 bg-orange-400/[0.08] py-1.5 pl-2 pr-4 text-xs font-medium text-orange-200 backdrop-blur-md">
              <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-950">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-950 animate-pulse-dot" /> Live
              </span>
              The world's radio · reimagined for today
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-display text-[2.75rem] font-medium leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]"
          >
            Every signal on Earth.
            <br />
            <span className="text-gradient-warm italic">One glowing dial.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0"
          >
            Global Radio turns <span className="font-semibold text-slate-200">470 live stations</span> from{" "}
            <span className="font-semibold text-slate-200">across the world</span> into a living, rotating Earth. Drag to
            spin, click a marker, and let the memories pour in — old-school warmth, modern magic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a {...APP_LINK} className="btn-primary group w-full sm:w-auto">
              <Play className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-125" />
              Launch Global Radio
              <ExternalLink className="h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a href="#experience" className="btn-ghost group w-full sm:w-auto">
              <Sparkles className="h-4 w-4 text-orange-300 transition-transform duration-300 group-hover:rotate-12" />
              See the experience
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <div className="flex -space-x-2.5" aria-hidden="true">
              {AVATARS.map((a) => (
                <span
                  key={a.initials}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${a.g} text-[10px] font-bold text-white ring-2 ring-ink-950`}
                >
                  {a.initials}
                </span>
              ))}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[9px] font-bold text-slate-300 ring-2 ring-ink-950 backdrop-blur">
                120K+
              </span>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center gap-1 sm:justify-start" aria-label="Rated 4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 text-sm font-semibold text-white">4.9</span>
              </div>
              <p className="mt-0.5 text-xs text-slate-500">Loved by listeners worldwide · Free · No sign-up needed</p>
            </div>
          </motion.div>
        </div>

        {/* ---------------------------- receiver mockup ---------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 44, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[540px]"
        >
          {/* glow under device */}
          <div className="absolute inset-x-8 top-10 bottom-0 rounded-[3rem] bg-gradient-to-b from-orange-500/25 via-rose-500/10 to-transparent blur-3xl" aria-hidden="true" />

          {/* device */}
          <div className="relative rounded-[2.4rem] border border-white/[0.12] bg-gradient-to-b from-ink-800/90 to-ink-950/95 p-3 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
            <div className="rounded-[1.9rem] border border-white/[0.07] bg-ink-950/80 p-5 sm:p-6">
              {/* header row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <LogoMark className="h-7 w-7 rounded-lg" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">Global Receiver</span>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" /> ON AIR
                </span>
              </div>

              {/* globe window */}
              <div className="relative mt-5">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(251,146,60,0.16),transparent_65%)]" aria-hidden="true" />
                <Globe className="w-full animate-[float_9s_ease-in-out_infinite] [animation-delay:0.5s]" />
                {/* dial ticks */}
                <div className="pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-white/[0.07]" aria-hidden="true" />
                <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-md bg-ink-950 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-orange-300/90">
                  FM · AM · WEB
                </span>
              </div>

              {/* now playing */}
              <div className="mt-5 flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-3.5 backdrop-blur-md">
                <div
                  className="relative h-14 w-14 shrink-0 rounded-full shadow-lg"
                  style={{ animationPlayState: playing ? "running" : "paused" }}
                  aria-hidden="true"
                >
                  <div
                    className={`absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#fbbf24,#f97316,#fb7185,#a78bfa,#fbbf24)] ${playing ? "animate-spin-slow" : ""}`}
                  />
                  <div className="absolute inset-[22%] rounded-full bg-ink-950/90" />
                  <div className="absolute inset-[40%] rounded-full bg-white/20" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-white">MY RADIO DJ — Live</p>
                  <p className="mt-0.5 flex items-center gap-1.5 truncate text-xs text-slate-400">
                    <MapPin className="h-3 w-3 shrink-0 text-orange-400" /> India · General · 20.4°N, 79.2°E
                  </p>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                  </div>
                </div>
                <Equalizer active={playing} className="h-5 shrink-0" bars={5} />
              </div>

              {/* controls */}
              <div className="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  aria-label="Previous station"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/25 hover:text-white active:scale-90"
                >
                  <SkipBack className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setPlaying((p) => !p)}
                  aria-label={playing ? "Pause station" : "Play station"}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 text-ink-950 shadow-[0_14px_40px_-8px_rgba(249,115,22,0.7)] transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  {playing ? <Pause className="h-6 w-6 fill-current" /> : <Play className="ml-1 h-6 w-6 fill-current" />}
                </button>
                <button
                  type="button"
                  aria-label="Next station"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/25 hover:text-white active:scale-90"
                >
                  <SkipForward className="h-4 w-4" />
                </button>
              </div>

              {/* volume */}
              <div className="mt-4 flex items-center gap-3">
                <Volume2 className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                <div className="relative h-1.5 flex-1 rounded-full bg-white/10">
                  <div className="absolute inset-y-0 left-0 w-[70%] rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                  <span className="absolute left-[70%] top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-orange-300 bg-white shadow-md" />
                </div>
                <span className="text-[10px] font-semibold text-slate-500">70</span>
              </div>
            </div>
          </div>

          {/* floating chips */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="absolute -left-3 top-16 sm:-left-8"
          >
            <div className="glass flex animate-float items-center gap-2.5 rounded-2xl px-4 py-3 shadow-2xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
                <Headphones className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] font-bold text-white">Now Spinning</p>
                <p className="text-[10px] text-slate-400">Gnawa Nights · Morocco</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="absolute -right-2 bottom-24 sm:-right-6"
          >
            <div className="glass flex animate-float-late items-center gap-2.5 rounded-2xl px-4 py-3 shadow-2xl">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
              </span>
              <p className="text-[11px] font-semibold text-white">
                470 stations <span className="font-normal text-slate-400">live on globe</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
