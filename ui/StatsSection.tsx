import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Battery, MapPin, Handshake, Building2, ArrowRight } from "lucide-react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import { STATS_VALUES } from "@/data/siteMetrics";

interface StatsSectionProps {
  lang: "en" | "az";
}

const statCardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const AnimatedNumber = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const SMALL_TARGET_THRESHOLD = 20;

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const isSmallTarget = target <= SMALL_TARGET_THRESHOLD;
    const duration = isSmallTarget ? 900 : 1500;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      if (isSmallTarget) {
        // For small targets, linear increments feel clearer than easing jumps.
        setCount(Math.round(progress * target));
      } else {
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));
      }

      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, SMALL_TARGET_THRESHOLD]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = ({ lang }: StatsSectionProps) => {
  const stats = lang === "en"
    ? [
        {
          icon: Battery,
          number: STATS_VALUES.batteriesCollected,
          suffix: "+kg",
          label: "Of Batteries Collected",
          desc: "Across all campus collection points in the first pilot month",
        },
        {
          icon: MapPin,
          number: STATS_VALUES.collectionPoints,
          suffix: "",
          label: "Collection Points",
          desc: "Strategically placed in high-traffic campus buildings",
        },
        {
          icon: Handshake,
          number: STATS_VALUES.strategicPartners,
          suffix: "",
          label: "Strategic Partners",
          desc: "Ministry of Ecology & Natural Resources and Red Hearts",
        },
        {
          icon: Building2,
          number: STATS_VALUES.campusBuildingsCovered,
          suffix: "",
          label: "Campus Buildings",
          desc: "Covered by our campus-wide collection network",
        },
      ]
    : [
        {
          icon: Battery,
          number: STATS_VALUES.batteriesCollected,
          suffix: "+",
          label: "Toplanmış Batareyalar",
          desc: "İlk pilot ayında bütün toplama nöqtələrindən",
        },
        {
          icon: MapPin,
          number: STATS_VALUES.collectionPoints,
          suffix: "",
          label: "Toplama Nöqtəsi",
          desc: "Yüksək trafikli kampus binalarında strateji yerləşdirmə",
        },
        {
          icon: Handshake,
          number: STATS_VALUES.strategicPartners,
          suffix: "",
          label: "Strateji Tərəfdaş",
          desc: "Ekologiya Nazirliyi və Red Hearts",
        },
        {
          icon: Building2,
          number: STATS_VALUES.campusBuildingsCovered,
          suffix: "",
          label: "Kampus Binası",
          desc: "Kampus boyu toplama şəbəkəsi ilə əhatə olunur",
        },
      ];

  return (
    <section id="stats" className="ecovolt-section py-16 max-w-[1200px]">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-5">
              {lang === "en"
                ? "Turning Campus Waste Into Measurable Impact"
                : "Kampus Tullantılarını Ölçülə Bilən Təsirə Çeviririk"}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              {lang === "en"
                ? "EcoVolt is a student-led initiative at ADA University that transforms the everyday problem of used battery disposal into a structured, measurable, and replicable environmental intervention. Working alongside the Ministry of Ecology and Natural Resources and the Red Hearts foundation, we've built a collection infrastructure that proves sustainability can start small and scale fast."
                : "EcoVolt — ADA Universitetində tələbə təşəbbüsüdür ki, istifadə olunmuş batareyaların utilizasiyası problemini strukturlaşdırılmış ekoloji müdaxiləyə çevirir. Ekologiya Nazirliyi və Red Hearts ilə birlikdə işləyərək davamlılığın kiçik başlaya və sürətlə genişlənə biləcəyini sübut etmişik."}
            </p>
            <button
              onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2"
            >
              {lang === "en" ? "Learn Our Process" : "Prosesimizi Öyrənin"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            className="rounded-3xl overflow-hidden h-64 md:h-80"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={heroBg1} alt="Green campus" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          variants={statCardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="p-6 rounded-2xl bg-primary/[0.04] border border-primary/10 hover:bg-primary/[0.08] transition-colors duration-300 group will-change-transform"
              variants={statCardVariants}
            >
              <stat.icon className="w-6 h-6 text-accent mb-3" />
              <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              <p className="font-display font-bold text-sm mt-1">{stat.label}</p>
              <p className="text-muted-foreground text-xs mt-2 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
