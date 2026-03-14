import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

interface CTASectionProps {
  lang: "en" | "az";
}

const CTASection = ({ lang }: CTASectionProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="ecovolt-section py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 leading-tight">
            {lang === "en" ? "Replicate Our Impact" : "Təsirimizi Təkrarlayın"}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            {lang === "en"
              ? "Interested in replicating this model at your university? Want to partner with us? We'd love to hear from you. Fill out the form and our team will get back to you within 48 hours."
              : "Bu modeli universitetinizdə tətbiq etmək istəyirsiniz? Bizimlə tərəfdaş olmaq istəyirsiniz? Formu doldurun, komandamız 48 saat ərzində sizinlə əlaqə saxlayacaq."}
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-accent/15 flex items-center justify-center">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <span>ecovolt@ada.edu.az</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-accent/15 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-accent" />
              </div>
              <span>{lang === "en" ? "Response within 48 hours" : "48 saat ərzində cavab"}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-primary/[0.04] border border-primary/10 rounded-3xl p-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {submitted ? (
            <motion.div
              className="flex flex-col items-center justify-center h-full py-12 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Send className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">
                {lang === "en" ? "Message Sent!" : "Mesaj Göndərildi!"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {lang === "en" ? "We'll get back to you soon." : "Tezliklə sizinlə əlaqə saxlayacağıq."}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">
                  {lang === "en" ? "Your Name" : "Adınız"}
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    maxLength={100}
                    className="w-full bg-background border border-primary/15 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-muted-foreground/50"
                    placeholder={lang === "en" ? "John Doe" : "Ad Soyad"}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">
                  {lang === "en" ? "Email Address" : "E-poçt Ünvanı"}
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={255}
                    className="w-full bg-background border border-primary/15 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-muted-foreground/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">
                  {lang === "en" ? "Message" : "Mesaj"}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  maxLength={1000}
                  rows={4}
                  className="w-full bg-background border border-primary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none placeholder:text-muted-foreground/50"
                  placeholder={lang === "en" ? "Tell us about your university and how you'd like to collaborate..." : "Universitetiniz haqqında məlumat verin..."}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground font-bold py-3.5 rounded-xl text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                {lang === "en" ? "Send Message" : "Mesaj Göndər"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
