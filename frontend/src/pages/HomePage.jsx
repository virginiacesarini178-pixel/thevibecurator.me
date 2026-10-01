import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToId } from "@/lib/scroll";
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

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => scrollToId(hash), 150);
      return () => clearTimeout(t);
    }
  }, [hash]);

  return (
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
  );
};

export default HomePage;
