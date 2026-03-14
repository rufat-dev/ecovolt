import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import CampusMap from "@/components/CampusMap";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [lang, setLang] = useState<"en" | "az">("en");

  return (
    <div className="min-h-screen bg-background text-foreground  ">
      <Header lang={lang} setLang={setLang} />
      <div className="snap-section">
        <HeroSection lang={lang} />
      </div>
      <div className="snap-section">
        <StatsSection lang={lang} />
      </div>
      <div className="snap-section">
        <WhyItMattersSection lang={lang} />
      </div>
      <div className="snap-section">
        <CampusMap lang={lang} />
      </div>
      <div className="snap-section">
        <ProcessSection lang={lang} />
      </div>
      <div className="snap-section">
        <CTASection lang={lang} />
      </div>
      <div className="snap-section">
        <FooterSection lang={lang} />
      </div>
    </div>
  );
};

export default Index;
