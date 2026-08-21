import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SocialProof, Features, Showcase, Benefits } from "./components/Sections";
import { Testimonials, Pricing, FAQ, CTA, Footer } from "./components/Social";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-950 text-slate-300">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-orange-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <SocialProof />
        <Features />
        <Showcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
