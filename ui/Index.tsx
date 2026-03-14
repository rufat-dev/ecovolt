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
    <div className="min-h-screen bg-background text-foreground">
      <Header lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <StatsSection lang={lang} />
      <WhyItMattersSection lang={lang} />
      <CampusMap lang={lang} />
      <ProcessSection lang={lang} />
      <CTASection lang={lang} />
      <FooterSection lang={lang} />
    </div>
  );
};

export default Index;
