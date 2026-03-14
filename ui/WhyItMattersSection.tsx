import { motion } from "framer-motion";
import { AlertTriangle, Leaf, Globe, Recycle, ShieldCheck, TrendingUp } from "lucide-react";
import ewasteImg from "@/assets/ewaste.jpg";
import greenFieldImg from "@/assets/green-field.jpg";

interface WhyItMattersSectionProps {
  lang: "en" | "az";
}

const facts = {
  en: [
    {
      icon: AlertTriangle,
      title: "3 Billion Batteries",
      desc: "are discarded globally every year, leaching toxic heavy metals — mercury, cadmium, and lead — into soil and groundwater.",
    },
    {
      icon: Leaf,
      title: "Single Battery Contamination",
      desc: "One improperly disposed battery can contaminate up to 600,000 liters of water, equivalent to a lifetime's supply for one person.",
    },
    {
      icon: Globe,
      title: "Less Than 5% Recycled",
      desc: "In developing countries, less than 5% of used batteries are properly collected and recycled, creating a massive environmental gap.",
    },
    {
      icon: Recycle,
      title: "Recoverable Materials",
      desc: "Up to 95% of battery materials — zinc, manganese, steel — can be recovered and reused, reducing the need for raw mining.",
    },
    {
      icon: ShieldCheck,
      title: "Regulatory Gap",
      desc: "Azerbaijan has limited infrastructure for battery waste, making grassroots campus collection a critical first step in building national capacity.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Model",
      desc: "Our pilot at ADA proves that university campuses can serve as micro-hubs for hazardous waste collection, replicable across 50+ universities.",
    },
  ],
  az: [
    {
      icon: AlertTriangle,
      title: "3 Milyard Batareya",
      desc: "hər il dünyada atılır, zəhərli ağır metallar — civə, kadmium və qurğuşun — torpağa və yeraltı sulara sızır.",
    },
    {
      icon: Leaf,
      title: "Bir Batareyanın Zərəri",
      desc: "Düzgün atılmayan bir batareya 600,000 litrə qədər suyu çirkləndirə bilər — bu, bir insanın ömürlük su ehtiyatına bərabərdir.",
    },
    {
      icon: Globe,
      title: "5%-dən Az Təkrar Emal",
      desc: "İnkişaf etməkdə olan ölkələrdə istifadə olunmuş batareyaların 5%-dən azı düzgün toplanır və təkrar emal olunur.",
    },
    {
      icon: Recycle,
      title: "Bərpa Edilə Bilən Materiallar",
      desc: "Batareya materiallarının 95%-ə qədəri — sink, manqan, polad — bərpa edilib yenidən istifadə oluna bilər.",
    },
    {
      icon: ShieldCheck,
      title: "Tənzimləmə Boşluğu",
      desc: "Azərbaycanda batareya tullantıları üçün infrastruktur məhduddur, kampus toplama milli potensialın qurulmasında kritik addımdır.",
    },
    {
      icon: TrendingUp,
      title: "Genişlənə Bilən Model",
      desc: "ADA-dakı pilot layihəmiz sübut edir ki, universitetlər təhlükəli tullantıların toplanması üçün mikro-mərkəzlər kimi xidmət edə bilər.",
    },
  ],
};

const WhyItMattersSection = ({ lang }: WhyItMattersSectionProps) => {
  return (
    <section id="why" className="ecovolt-section py-16">
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {lang === "en" ? "Why Battery Collection Matters" : "Niyə Batareya Toplama Vacibdir"}
      </motion.h2>
      <motion.p
        className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {lang === "en"
          ? "Batteries are one of the most hazardous everyday waste items. Here's why proper collection and disposal is critical for our environment and communities."
          : "Batareyalar ən təhlükəli gündəlik tullantılardan biridir. Düzgün toplanma və utilizasiyanın ətraf mühit və cəmiyyətlər üçün niyə vacib olduğunu öyrənin."}
      </motion.p>

      {/* Image banner */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto mb-12 rounded-3xl overflow-hidden">
        <motion.div
          className="relative h-48 md:h-64 overflow-hidden rounded-3xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={ewasteImg} alt="E-waste problem" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/40 flex items-end p-4">
            <span className="text-primary-foreground font-bold text-sm">
              {lang === "en" ? "The Problem" : "Problem"}
            </span>
          </div>
        </motion.div>
        <motion.div
          className="relative h-48 md:h-64 overflow-hidden rounded-3xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={greenFieldImg} alt="Clean environment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-accent/30 flex items-end p-4">
            <span className="text-primary-foreground font-bold text-sm">
              {lang === "en" ? "The Vision" : "Vizyon"}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Facts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {facts[lang].map((fact, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl bg-primary/[0.04] border border-primary/10 hover:bg-primary/[0.08] transition-all hover:shadow-lg group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
              <fact.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">{fact.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{fact.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyItMattersSection;
