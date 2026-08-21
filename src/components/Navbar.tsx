import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Radio, ExternalLink } from "lucide-react";
import { LogoMark } from "./ui";
import { APP_LINK } from "../config";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Experience", href: "#experience" },
  { label: "Stories", href: "#stories" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/[0.06] bg-ink-950/75 backdrop-blur-xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)]" : "bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[72px]">
        {/* Brand */}
        <a href="#top" className="group flex items-center gap-3">
          <LogoMark className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[25deg]" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[17px] font-semibold tracking-tight text-white">Radio by Mayuddin</span>
            <span className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300/90">
              <Radio className="h-3 w-3" aria-hidden="true" /> Global · Live
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            470 live on globe
          </span>
          <a {...APP_LINK} className="btn-primary group px-6! py-2.5!">
            Open the Globe
            <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/[0.06] bg-ink-950/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="space-y-1 px-5 py-6">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-3">
                <a {...APP_LINK} onClick={() => setOpen(false)} className="btn-primary w-full">
                  Open the Globe — 470 live stations
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
