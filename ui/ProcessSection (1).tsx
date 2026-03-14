import { motion } from "framer-motion";
import { Search, ArrowRightLeft, Rocket } from "lucide-react";

interface ProcessSectionProps {
  lang: "en" | "az";
}

const steps = {
  en: [
    {
      icon: Search,
      title: "Initial Research",
      subtitle: "Lithium-ion Exploration",
      description:
        "We began by exploring lithium-ion waste from disposable electronics. During this phase, we contacted several companies including FORS MMC to understand possible implementation models and received initial guidance on waste management frameworks.",
    },
    {
      icon: ArrowRightLeft,
      title: "Strategic Pivot",
      subtitle: "Alkaline & Ministry Partnership",
      description:
        "We discovered that ADA already generates a large, steady stream of conventional alkaline batteries. We aligned with the existing national battery collection framework coordinated by the Ministry of Ecology and Natural Resources, leveraging their established safe-transfer channels.",
    },
    {
      icon: Rocket,
      title: "Implementation",
      subtitle: "Red Hearts Partnership",
      description:
        "Working with the Ministry-led battery collection initiative, the downstream handling and utilization is managed by their designated waste-management contractor. We deployed 5 collection points across campus and began measurable, impactful collection operations.",
    },
  ],
  az: [
    {
      icon: Search,
      title: "İlkin Tədqiqat",
      subtitle: "Litium-ion Araşdırması",
      description:
        "Birdəfəlik elektronikadan litium-ion tullantılarını araşdırmağa başladıq. Bu mərhələdə FORS MMC daxil olmaqla bir neçə şirkətlə əlaqə saxladıq və tullantı idarəetmə çərçivələri haqqında ilkin rəhbərlik aldıq.",
    },
    {
      icon: ArrowRightLeft,
      title: "Strateji Dəyişiklik",
      subtitle: "Alkalin & Nazirlik Tərəfdaşlığı",
      description:
        "ADA-nın artıq böyük həcmdə adi alkalin batareya istehsal etdiyini kəşf etdik. Ekologiya və Təbii Sərvətlər Nazirliyinin mövcud milli batareya toplama çərçivəsinə qoşulduq.",
    },
    {
      icon: Rocket,
      title: "Tətbiq",
      subtitle: "Red Hearts Tərəfdaşlığı",
      description:
        "Nazirliyin rəhbərlik etdiyi batareya toplama təşəbbüsü ilə işləyərək, aşağı axın idarəetməsi onların təyin etdiyi tullantı idarəetmə podratçısı tərəfindən aparılır. Kampus boyu 5 toplama nöqtəsi yerləşdirdik.",
    },
  ],
};

const ProcessSection = ({ lang }: ProcessSectionProps) => {
  return (
    <section id="process" className="ecovolt-section py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-display font-bold text-center mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {lang === "en" ? "From Idea to Impact" : "İdeyadan Təsirə"}
      </motion.h2>
      <motion.p
        className="text-center text-muted-foreground mb-12 max-w-lg mx-auto text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {lang === "en"
          ? "Three pivotal phases that shaped our approach."
          : "Yanaşmamızı formalaşdıran üç əsas mərhələ."}
      </motion.p>

      <div className="max-w-5xl mx-auto relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/10 -translate-x-1/2" />

        {steps[lang].map((step, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col md:flex-row items-center gap-6 mb-12 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="md:w-5/12">
              <div className={`p-6 rounded-2xl bg-primary/[0.04] border border-primary/10 hover:bg-primary/[0.08] transition-all group ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                <div className={`w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-4 ${i % 2 === 1 ? 'md:ml-auto' : ''}`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="text-xs tracking-widest uppercase text-accent mb-2 block font-bold">
                  {lang === "en" ? `Phase ${i + 1}` : `Mərhələ ${i + 1}`}
                </span>
                <h3 className="text-xl font-display font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-accent mb-3">{step.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>

            {/* Center dot */}
            <div className="hidden md:flex w-2/12 justify-center">
              <div className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg relative z-10" />
            </div>

            <div className="md:w-5/12" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
