import { motion } from "framer-motion";

interface LanguageSwitcherProps {
  lang: "en" | "az";
  setLang: (lang: "en" | "az") => void;
}

const LanguageSwitcher = ({ lang, setLang }: LanguageSwitcherProps) => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center bg-primary text-primary-foreground rounded-full px-1 py-1 text-sm font-body shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
    >
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 rounded-full transition-colors font-bold ${
          lang === "en" ? "bg-accent text-accent-foreground" : "hover:opacity-80"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("az")}
        className={`px-3 py-1.5 rounded-full transition-colors font-bold ${
          lang === "az" ? "bg-accent text-accent-foreground" : "hover:opacity-80"
        }`}
      >
        AZ
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;
