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
  },
  az: {
    title: "Kampus Toplama Şəbəkəsi",
    description: "Məntəqələrin üzərinə klikləyin və ya hover edin, həmin nöqtədəki batareya sayını görün.",
    pointLabel: "Toplama məntəqəsi",
    totalLabel: "Kampus üzrə toplanmış ümumi batareya",
    activeLabel: "Aktiv toplama məntəqəsi",
  },
} as const;

const CampusMap = ({ lang }: CampusMapProps) => {
  const points = [
    { id: "library", nameEn: "Main Library", nameAz: "Əsas Kitabxana", count: 312, x: "20%", y: "23%" },
    { id: "eng", nameEn: "Engineering Building", nameAz: "Mühəndislik Binası", count: 287, x: "73%", y: "37%" },
    { id: "student", nameEn: "Student Center", nameAz: "Tələbə Mərkəzi", count: 248, x: "42%", y: "48%" },
    { id: "dorm", nameEn: "Dormitory A", nameAz: "Yataqxana A", count: 214, x: "53%", y: "15%" },
    { id: "admin", nameEn: "Admin Building", nameAz: "İnzibati Bina", count: 187, x: "18%", y: "63%" },
  ] as const;

  const total = points.reduce((sum, point) => sum + point.count, 0);

  return (
    <section id="map" className="ecovolt-section py-16">
      <div className="mx-auto max-w-3xl text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-display font-bold">{labels[lang].title}</h2>
        <p className="mt-3 text-muted-foreground">{labels[lang].description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5">
        <div className="rounded-3xl border border-border bg-card/40 p-4 md:p-6">
          <div className="relative h-[440px] rounded-2xl border border-border/70 bg-card/35 overflow-hidden">
            <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:52px_52px]" />

            {points.map((point) => (
              <button
                key={point.id}
                type="button"
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: point.x, top: point.y }}
                aria-label={lang === "en" ? point.nameEn : point.nameAz}
              >
                <span className="block h-6 w-6 rounded-full border-2 border-white bg-accent shadow-md" />
              </button>
            ))}

            <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-muted-foreground rounded-full border border-border/80 bg-background/70 px-3 py-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              {labels[lang].pointLabel}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-display font-bold text-2xl">
            {lang === "en" ? "Collection Points" : "Toplama Məntəqələri"}
          </h3>

          {points.map((point) => (
            <div key={point.id} className="rounded-2xl border border-border bg-card/45 px-4 py-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="font-semibold text-sm">{lang === "en" ? point.nameEn : point.nameAz}</p>
                  <p className="text-xs text-muted-foreground">{labels[lang].activeLabel}</p>
                </div>
                <p className="font-display font-bold text-accent">{point.count}</p>
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-border bg-card px-4 py-4 mt-2">
            <p className="font-display text-3xl font-bold text-accent">{total.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1">{labels[lang].totalLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusMap;
