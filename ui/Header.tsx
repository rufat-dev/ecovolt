import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ecovoltLogo from "@/assets/ecovolt 2.png";

interface HeaderProps {
  lang: "en" | "az";
  setLang: (lang: "en" | "az") => void;
}

const Header = ({ lang, setLang }: HeaderProps) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" px-[5%] h-[60px] ecovolt-section flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <img src={ecovoltLogo} alt="EcoVolt" className="h-7" />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button onClick={() => scrollTo("stats")} className="text-muted-foreground hover:text-foreground transition-colors">
            {lang === "en" ? "Impact" : "Təsir"}
          </button>
          <button onClick={() => scrollTo("why")} className="text-muted-foreground hover:text-foreground transition-colors">
            {lang === "en" ? "Why It Matters" : "Niyə Vacibdir"}
          </button>
          <button onClick={() => scrollTo("map")} className="text-muted-foreground hover:text-foreground transition-colors">
            {lang === "en" ? "Campus Map" : "Kampus Xəritəsi"}
          </button>
          <button onClick={() => scrollTo("process")} className="text-muted-foreground hover:text-foreground transition-colors">
            {lang === "en" ? "Process" : "Proses"}
          </button>
          <button onClick={() => scrollTo("contact")} className="text-muted-foreground hover:text-foreground transition-colors">
            {lang === "en" ? "Contact" : "Əlaqə"}
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-4 text-xs text-muted-foreground mr-4">
            <a href="mailto:ecovolt@ada.edu.az" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Mail className="w-3 h-3" />
              ecovolt@ada.edu.az
            </a>
          </div>

          <div className="flex items-center bg-primary/10 rounded-full px-1 py-1 text-xs font-bold">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === "en" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("az")}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === "az" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              AZ
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
