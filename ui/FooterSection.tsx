import ecovoltLogo from "@/assets/ecovolt 2.png";

interface FooterSectionProps {
  lang: "en" | "az";
}

const FooterSection = ({ lang }: FooterSectionProps) => {
  return (
    <footer className="ecovolt-section py-10 border-t border-primary/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={ecovoltLogo} alt="EcoVolt" className="h-6" />
          <span className="text-xs text-muted-foreground">
            © 2025 EcoVolt · ADA University
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span>{lang === "en" ? "School of Engineering" : "Mühəndislik Məktəbi"}</span>
          <span>·</span>
          <span>{lang === "en" ? "Haji Zeynalabdin Awards" : "Hacı Zeynalabdin Mükafatları"}</span>
          <span>·</span>
          <a href="mailto:ecovolt@ada.edu.az" className="hover:text-foreground transition-colors">ecovolt@ada.edu.az</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
