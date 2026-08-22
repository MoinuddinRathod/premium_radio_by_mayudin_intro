import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Star, Check, Plus, Minus, ShieldCheck, CreditCard, Headphones, Music2, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
import { APP_LINK, APP_URL } from "../config";

/* -------------------------------- Testimonials ------------------------------ */

const TESTIMONIALS = [
  {
    quote:
      "I grew up twisting a dial in my grandfather's kitchen. Opening Radio by Mayuddin felt like stepping back into that room — except now I can also tune into a jazz club in Osaka.",
    name: "Amira H.",
    role: "Cairo, Egypt · Age 58",
    initials: "AH",
    g: "from-amber-400 to-orange-600",
  },
  {
    quote:
      "My kids think it's a video game. I think it's a time machine. We spin the globe together every Sunday morning and take turns picking countries.",
    name: "Daniel K.",
    role: "Berlin, Germany · Age 44",
    initials: "DK",
    g: "from-violet-400 to-indigo-600",
  },
  {
    quote:
      "The first time I found a station from my hometown while sitting in Mumbai, I actually teared up. It's the closest thing to being home I've felt in years.",
    name: "Priya S.",
    role: "Mumbai, India · Age 31",
    initials: "PS",
    g: "from-rose-400 to-pink-600",
  },
  {
    quote:
      "It's the only listening experience that makes me feel connected to the whole world without a feed, without noise, without algorithms yelling at me. Just people, making music.",
    name: "Elena V.",
    role: "Buenos Aires, Argentina · Age 27",
    initials: "EV",
    g: "from-emerald-400 to-teal-600",
  },
  {
    quote:
      "Discovered my favourite afrobeat station in Lagos in about ten seconds. The globe thing is pure magic — I've deleted every other music app on my phone.",
    name: "Marcus T.",
    role: "Lagos, Nigeria · Age 23",
    initials: "MT",
    g: "from-sky-400 to-blue-600",
  },
  {
    quote:
      "As a designer I'm picky about everything I keep on my devices. This is the most beautiful thing in my browser tab bar, and the sound quality surprised me completely.",
    name: "Sofia R.",
    role: "Madrid, Spain · Age 35",
    initials: "SR",
    g: "from-orange-400 to-rose-600",
  },
];

export function Testimonials() {
  return (
    <section id="stories" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-1/3 h-[420px] w-[420px] rounded-full bg-rose-500/[0.07] blur-[130px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Listener stories"
          title={
            <>
              Radio finds people
              <br />
              <span className="text-gradient-warm italic">when they least expect it.</span>
            </>
          }
          sub="From eight-year-olds who've never seen a dial to grandmothers who've never missed one — here's what happens when the world starts talking."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.1} className="h-full">
              <figure className="card-glow flex h-full flex-col p-7">
                <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.07] pt-5">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.g} text-xs font-bold text-white`}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Pricing --------------------------------- */

const PLANS = [
  {
    name: "Wanderer",
    icon: Music2,
    tagline: "Everything you see in the live app today — free, forever.",
    monthly: 0,
    annual: 0,
    cta: "Start Free",
    featured: false,
    features: [
      "All 3999+ live stations, full globe access",
      "One-tap favorites & ⌘K instant search",
      "Filter by country and genre",
      "Sleep timer + day & night themes",
      "Works on every device, no install needed",
    ],
  },
  {
    name: "Connoisseur",
    icon: Headphones,
    tagline: "For the devoted listener — the full warm glow of radio.",
    monthly: 4.99,
    annual: 3.99,
    cta: "Go Premium",
    featured: true,
    features: [
      "Everything in Wanderer, ad-free",
      "HD audio streams up to 320 kbps",
      "Sleep timer, presets & night mode",
      "Personalized frequency mixes",
      "Listen offline with saved broadcasts",
      "Priority support from real humans",
    ],
  },
  {
    name: "House Band",
    icon: ShieldCheck,
    tagline: "For households — one bill, six pairs of ears.",
    monthly: 7.99,
    annual: 6.49,
    cta: "Start Family Plan",
    featured: false,
    features: [
      "Everything in Connoisseur",
      "Up to 6 family accounts",
      "Shared favorites & family presets",
      "Kid-friendly station filters",
      "One simple monthly bill",
    ],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/4 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-orange-500/[0.08] blur-[140px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Simple pricing"
          title={
            <>
              Free to listen.
              <span className="text-gradient-warm italic"> Premium to fall in love.</span>
            </>
          }
          sub="Radio should be free — and it is. Upgrade only if you want the velvet-rope treatment."
        />

        {/* billing toggle */}
        <Reveal delay={0.15} className="mt-10 flex items-center justify-center gap-4">
          <span className={`text-sm font-medium transition-colors ${!annual ? "text-white" : "text-slate-500"}`}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual((v) => !v)}
            className="relative h-8 w-14 rounded-full border border-white/10 bg-white/[0.06] transition-colors hover:border-white/20"
          >
            <motion.span
              layout
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className={`absolute top-1 h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-md ${annual ? "left-7" : "left-1"}`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${annual ? "text-white" : "text-slate-500"}`}>
            Annual
            <span className="ml-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-bold text-emerald-300">Save 20%</span>
          </span>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-[1.8rem] p-8 transition-all duration-500 hover:-translate-y-1.5 ${p.featured
                  ? "border border-orange-400/40 bg-gradient-to-b from-orange-500/[0.12] via-ink-800/60 to-ink-900/80 shadow-[0_30px_90px_-25px_rgba(249,115,22,0.45)]"
                  : "border border-white/10 bg-white/[0.03] hover:border-white/20"
                  }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-950 shadow-lg">
                    Most loved
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${p.featured ? "bg-gradient-to-br from-amber-400 to-orange-500 text-ink-950" : "border border-white/10 bg-white/[0.05] text-orange-300"
                      }`}
                  >
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={annual ? "a" : "m"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="font-display text-5xl font-medium tracking-tight text-white"
                    >
                      ${p.monthly === 0 ? "0" : annual ? p.annual : p.monthly}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm text-slate-500">{p.monthly === 0 ? "forever" : "/ month"}</span>
                </div>
                {p.monthly > 0 && annual && (
                  <p className="mt-1 text-xs font-medium text-emerald-300">Billed annually — ${(p.annual * 12).toFixed(2)}/yr</p>
                )}
                <ul className="mt-7 flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${p.featured ? "bg-gradient-to-br from-amber-400 to-orange-500 text-ink-950" : "bg-white/[0.08] text-orange-300"
                          }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a {...APP_LINK} className={`${p.featured ? "btn-primary" : "btn-ghost"} mt-8 w-full`}>
                  {p.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <p className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><CreditCard className="h-3.5 w-3.5 text-orange-400" aria-hidden="true" /> No credit card for free tier</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-orange-400" aria-hidden="true" /> Cancel anytime, keep your presets</span>
            <span className="flex items-center gap-1.5"><Headphones className="h-3.5 w-3.5 text-orange-400" aria-hidden="true" /> 30-day money-back glow guarantee</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------ FAQ ----------------------------------- */

const FAQS = [
  {
    q: "Do I need an account to listen?",
    a: "Not at all. Open radio-by-mayuddin.vercel.app, drag the globe, click a marker — you're on air in seconds. No sign-up, no install, nothing to download. Your favorites are saved right in your browser.",
  },
  {
    q: "Is it really free?",
    a: "Really, truly free. Every one of the 3999+ live stations, the full globe, favorites, the sleep timer and both day/night themes are available right now at no cost. Premium tiers below are optional extras — the magic is never behind a paywall.",
  },
  {
    q: "Where do the stations come from?",
    a: "Global Radio pulls live streams from the open Radio Browser directory — the top 500 broadcasters by popularity, from BBC World Service and NPR to Classic Vinyl HD and tiny FM stations run out of someone's garage.",
  },
  {
    q: "Can I listen on my phone?",
    a: "Yes — it's a progressive web app, which means it works in any browser and can be installed to your home screen like a native app. No app store detours, no updates nagging you, no storage bloat.",
  },
  {
    q: "What if my internet connection is slow?",
    a: "Radio was born on crackle. The player adapts stream quality automatically, so even on a modest connection you'll hear music, voices, and late-night magic — just maybe with a little more soul in the signal.",
  },
  {
    q: "Can I request a station to be added?",
    a: "Please do! Radio is a community affair. Use the in-app request form and our listeners help each other track down everything from 1970s Italian pop stations to high-school football broadcasts in Ohio.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Questions, answered"
          title={
            <>
              Curious minds,
              <span className="text-gradient-warm italic"> tuned in.</span>
            </>
          }
        />
        <div className="mt-12 space-y-3.5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.06}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? "border-orange-400/30 bg-white/[0.05]" : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className={`text-[15px] font-semibold transition-colors ${isOpen ? "text-white" : "text-slate-200"}`}>
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "rotate-180 border-orange-400/40 bg-orange-400/15 text-orange-300" : "border-white/10 bg-white/[0.04] text-slate-400"
                        }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ CTA ----------------------------------- */

export function CTA() {
  return (
    <section id="listen" className="relative scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-orange-400/25 bg-gradient-to-b from-ink-800 via-ink-900 to-ink-950 px-6 py-16 text-center sm:px-16 sm:py-24">
          {/* ambient */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <img
              src="images/hero-radio.jpg"
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-25 [mask-image:linear-gradient(to_bottom,transparent,black_45%,transparent)]"
            />
            <div className="absolute -top-32 left-1/2 h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-orange-500/[0.18] blur-[110px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(167,139,250,0.12),transparent_55%)]" />
            <div className="absolute inset-0 bg-ink-950/40" />
            <div className="absolute inset-0 noise opacity-[0.06] mix-blend-overlay" />
            <div className="absolute inset-x-10 top-6 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />
          </div>

          <div className="relative">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 shadow-[0_18px_50px_-12px_rgba(249,115,22,0.8)]">
              <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-ink-950" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="12" cy="12" r="3.4" fill="currentColor" />
                <path d="M12 3v3.2M12 17.8V21M3 12h3.2M17.8 12H21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </span>
            <h2 className="mx-auto mt-8 max-w-2xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl">
              Turn the dial.
              <br />
              <span className="text-gradient-warm italic">Find your signal.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Thirty seconds from now, you could be listening to a midnight jazz set in Tokyo, rain on a tin roof in
              Havana, or the football scores in a language you don't speak — and loving every second.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a {...APP_LINK} className="btn-primary group w-full sm:w-auto">
                Launch Global Radio
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
              <a href="#pricing" className="btn-ghost w-full sm:w-auto">See premium</a>
            </div>

            {/* visible URL pill */}
            <a
              {...APP_LINK}
              className="group mx-auto mt-8 flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 font-mono text-xs text-slate-400 backdrop-blur-md transition-all duration-300 hover:border-orange-400/40 hover:text-orange-200"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" aria-hidden="true" />
              {APP_URL.replace(/^https:\/\//, "").replace(/\/$/, "")}
              <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>

            <p className="mt-6 text-xs text-slate-500">
              Free · No credit card · No sign-up · 3999+ live stations · Works in any browser
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------------- Footer --------------------------------- */

const FOOTER_COLS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Experience", href: "#experience" },
      { label: "Pricing", href: "#pricing" },
      { label: "Launch the App", href: APP_URL },
      { label: "Station Directory", href: APP_URL },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Mayuddin", href: "#story" },
      { label: "Listener Stories", href: "#stories" },
      { label: "Contact", href: "#faq" },
      { label: "Press Kit", href: "#top" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Help Center", href: "#faq" },
      { label: "Request a Station", href: "#faq" },
      { label: "Community", href: "#stories" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a {...APP_LINK} className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 shadow-[0_8px_24px_-6px_rgba(249,115,22,0.6)]">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-ink-950" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" />
                  <circle cx="12" cy="12" r="3.4" fill="currentColor" />
                  <path d="M12 3v3.2M12 17.8V21M3 12h3.2M17.8 12H21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold text-white">Radio by Mayuddin</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
              Preserving the feeling of old-school radio and reimagining it for today — one rotating globe, 3999+ live
              stations, and every memory in between.
            </p>
            <a
              {...APP_LINK}
              className="group mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[11px] text-slate-400 transition-all duration-300 hover:border-orange-400/40 hover:text-orange-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" aria-hidden="true" />
              radio-by-mayuddin.vercel.app
              <ExternalLink className="h-3 w-3 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <div className="mt-6 flex items-center gap-2.5">
              {["X", "IG", "YT", "GH"].map((s) => (
                <a
                  key={s}
                  href="#top"
                  aria-label={`Radio by Mayuddin on ${s}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-bold text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:text-orange-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          {FOOTER_COLS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => {
                  const external = l.href.startsWith("http");
                  return (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors duration-300 hover:text-orange-300"
                      >
                        {l.label}
                        {external && <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} Mayuddin Rathod. All signals reserved.</p>
          <p className="text-xs text-slate-600">
            Crafted with <span className="text-orange-400">♥</span> and a little static — from Mayuddin, for the world.
          </p>
        </div>
      </div>
    </footer>
  );
}
