import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { setLenis } from "@/lib/scroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { TheQuestion } from "@/components/TheQuestion";
import { WhatIDo } from "@/components/WhatIDo";
import { HowIWork } from "@/components/HowIWork";
import { HowDoYouKnow } from "@/components/HowDoYouKnow";
import { VibeStudies } from "@/components/VibeStudies";
import { HowISee } from "@/components/HowISee";
import { Virginia } from "@/components/Virginia";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.35, smoothWheel: true });
    setLenis(lenis);
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <div className="bg-ink min-h-screen" data-testid="app-root">
      <div className="grain-overlay" aria-hidden="true" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <TheQuestion />
        <WhatIDo />
        <HowIWork />
        <HowDoYouKnow />
        <VibeStudies />
        <HowISee />
        <Virginia />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
