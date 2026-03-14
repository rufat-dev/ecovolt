import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import ecovoltLogo from "@/assets/ecovolt_2.png";
import heroBg from "@/assets/hero-bg-2.jpg";

interface HeroSectionProps {
  lang: "en" | "az";
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  const scrollToContent = () => {
    document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center ecovolt-section overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <motion.img
          src={ecovoltLogo}
          alt="EcoVolt Logo"
          className="w-48 md:w-64 lg:w-80 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {lang === "en"
            ? "Making Our Campus a Catalyst for Change"
            : "Kampuslarımızı Dəyişiklik Üçün Katalizatora Çeviririk"}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {lang === "en"
            ? "A student-led initiative at ADA University transforming used battery disposal into a structured, measurable, and replicable environmental intervention across Azerbaijan."
            : "ADA Universitetində tələbə rəhbərliyi ilə istifadə olunmuş batareyaların utilizasiyasını Azərbaycan boyu strukturlaşdırılmış, ölçülə bilən ekoloji müdaxiləyə çevirən təşəbbüs."}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <button
            onClick={scrollToContent}
            className="bg-accent text-accent-foreground px-8 py-3.5 rounded-full font-bold text-base hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
          >
            {lang === "en" ? "Explore Our Impact" : "Təsirimizi Kəşf Edin"}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-primary/20 text-foreground px-8 py-3.5 rounded-full font-bold text-base hover:bg-primary/5 transition-colors"
          >
            {lang === "en" ? "Get in Touch" : "Əlaqə Saxlayın"}
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <ChevronDown className="w-5 h-5 animate-float" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
