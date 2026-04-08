import campusMap from "@/assets/campus-map.png";
import { CAMPUS_POINTS, TOTAL_BATTERIES } from "@/data/siteMetrics";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card";

type CampusMapProps = {
  lang: "en" | "az";
};

const labels = {
  en: {
    title: "Campus Collection Network",
    description: "Tap or hover over collection points to see battery counts at each location.",
    pointLabel: "Collection point",
    totalLabel: "Total batteries collected campus-wide",
    activeLabel: "Active collection point",
    batteriesLabel: "Batteries collected",
  },
  az: {
    title: "Kampus Toplama Şəbəkəsi",
    description: "Məntəqələrin üzərinə klikləyin və ya hover edin, həmin nöqtədəki batareya sayını görün.",
    pointLabel: "Toplama məntəqəsi",
    totalLabel: "Kampus üzrə toplanmış ümumi batareya",
    activeLabel: "Aktiv toplama məntəqəsi",
    batteriesLabel: "Toplanmış batareya",
  },
} as const;

const CampusMap = ({ lang }: CampusMapProps) => {
  return (
    <section id="map" className="ecovolt-section py-16">
      <div className="mx-auto max-w-3xl text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-display font-bold">{labels[lang].title}</h2>
        <p className="mt-3 text-muted-foreground">{labels[lang].description}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.6fr_1fr] lg:items-stretch">
        <div className="flex h-full min-h-0 flex-col rounded-3xl border border-border bg-card/40 p-4 md:p-6">
          <div className="relative flex min-h-[min(50vh,560px)] flex-1 flex-col overflow-hidden rounded-2xl border border-border/70 bg-[#263226]">
            {/* Portrait map (723×1024); fills sidebar height on large screens; markers use % of this box */}
            <div className="relative flex h-full min-h-0 w-full flex-1 items-center justify-center">
              <div className="relative aspect-[723/1024] h-full max-h-full w-auto max-w-full min-h-0 shrink-0">
                <img
                  src={campusMap}
                  alt=""
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center select-none"
                  draggable={false}
                />

              {CAMPUS_POINTS.map((point) => (
                <HoverCard key={point.id} openDelay={80} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <button
                      type="button"
                      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none ring-offset-2 ring-offset-[#263226] transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-emerald-400"
                      style={{ left: point.x, top: point.y }}
                      aria-label={point.names[lang]}
                    >
                      <span className="block h-6 w-6 rounded-full border-2 border-white bg-accent shadow-md" />
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent
                    side="top"
                    align="center"
                    sideOffset={10}
                    className="w-56 border-emerald-500/45 bg-emerald-950/95 p-3 text-emerald-50 shadow-xl backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                  >
                    <p className="font-display font-semibold text-emerald-100">{point.names[lang]}</p>
                    <p className="mt-0.5 text-xs text-emerald-200/85">{labels[lang].activeLabel}</p>
                    <div className="mt-3 flex items-baseline justify-between gap-2 border-t border-emerald-500/30 pt-2">
                      <span className="text-xs text-emerald-300/90">{labels[lang].batteriesLabel}</span>
                      <span className="font-display text-2xl font-bold text-emerald-300">{point.count}</span>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-border/80 bg-background/85 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              {labels[lang].pointLabel}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-display font-bold text-2xl">
            {lang === "en" ? "Collection Points" : "Toplama Məntəqələri"}
          </h3>

          {CAMPUS_POINTS.map((point) => (
            <div key={point.id} className="rounded-2xl border border-border bg-card/45 px-4 py-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="font-semibold text-sm">{point.names[lang]}</p>
                  <p className="text-xs text-muted-foreground">{labels[lang].activeLabel}</p>
                </div>
                <p className="font-display font-bold text-accent">{point.count}</p>
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-border bg-card px-4 py-4 mt-2">
            <p className="font-display text-3xl font-bold text-accent">{TOTAL_BATTERIES.toLocaleString()}+ kg</p>
            <p className="text-xs text-muted-foreground mt-1">{labels[lang].totalLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusMap;
