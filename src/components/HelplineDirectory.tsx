import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const helplines = [
  { country: "USA", flag: "\ud83c\uddfa\ud83c\uddf8", number: "988", org: "988 Suicide & Crisis Lifeline", hours: "24/7", region: "North America" },
  { country: "Canada", flag: "\ud83c\udde8\ud83c\udde6", number: "988", org: "988 Suicide Crisis Helpline", hours: "24/7", region: "North America" },
  { country: "UK", flag: "\ud83c\uddec\ud83c\udde7", number: "116 123", org: "Samaritans", hours: "24/7", region: "Europe" },
  { country: "Spain", flag: "\ud83c\uddea\ud83c\uddf8", number: "024", org: "L\u00ednea de Atenci\u00f3n a la Conducta Suicida", hours: "24/7", region: "Europe" },
  { country: "Australia", flag: "\ud83c\udde6\ud83c\uddfa", number: "13 11 14", org: "Lifeline", hours: "24/7", region: "Oceania" },
  { country: "Japan", flag: "\ud83c\uddef\ud83c\uddf5", number: "0120-783-556", org: "Inochi no Denwa", hours: "24/7", region: "Asia" },
  { country: "Peru", flag: "\ud83c\uddf5\ud83c\uddea", number: "113", org: "L\u00ednea 113 (MINSA)", hours: "24/7", region: "LATAM" },
  { country: "Mexico", flag: "\ud83c\uddf2\ud83c\uddfd", number: "800-290-0024", org: "SAPTEL", hours: "24/7", region: "LATAM" },
  { country: "Argentina", flag: "\ud83c\udde6\ud83c\uddf7", number: "135", org: "Centro de Asistencia al Suicida", hours: "24/7", region: "LATAM" },
  { country: "Chile", flag: "\ud83c\udde8\ud83c\uddf1", number: "600-360-7777", org: "L\u00ednea Libre / *4141", hours: "24/7", region: "LATAM" },
  { country: "Colombia", flag: "\ud83c\udde8\ud83c\uddf4", number: "106", org: "L\u00ednea 106", hours: "24/7", region: "LATAM" },
  { country: "Brasil", flag: "\ud83c\udde7\ud83c\uddf7", number: "188", org: "CVV", hours: "24/7", region: "LATAM" },
  { country: "Uruguay", flag: "\ud83c\uddfa\ud83c\uddfe", number: "0800-0767", org: "\u00daltima Esperanza / *0767", hours: "24/7", region: "LATAM" },
  { country: "Ecuador", flag: "\ud83c\uddea\ud83c\udde8", number: "171", org: "ECU 911", hours: "24/7", region: "LATAM" },
  { country: "Bolivia", flag: "\ud83c\udde7\ud83c\uddf4", number: "800-10-0639", org: "L\u00ednea Gratuita", hours: "24/7", region: "LATAM" },
  { country: "Paraguay", flag: "\ud83c\uddf5\ud83c\uddfe", number: "(021) 220-418", org: "Prevenci\u00f3n del Suicidio", hours: "24/7", region: "LATAM" },
];

const HelplineDirectory = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const regions = [
    { key: "All", label: t('helplines.all') },
    { key: "LATAM", label: t('helplines.regionLATAM') },
    { key: "North America", label: t('helplines.regionNorthAmerica') },
    { key: "Europe", label: t('helplines.regionEurope') },
    { key: "Asia", label: t('helplines.regionAsia') },
    { key: "Oceania", label: t('helplines.regionOceania') },
  ];

  const filtered = helplines.filter((h) => {
    const matchSearch = h.country.toLowerCase().includes(search.toLowerCase()) ||
      h.org.toLowerCase().includes(search.toLowerCase());
    const matchRegion = region === "All" || h.region === region;
    return matchSearch && matchRegion;
  });

  return (
    <section id="helplines" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t('helplines.title')}</h2>
          <p className="text-muted-foreground mt-3 text-lg max-w-xl mx-auto">
            {t('helplines.subtitle')}
          </p>
        </motion.div>

        {/* Search & Filter */}
        <div className="max-w-2xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('helplines.searchPlaceholder')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background transition-shadow"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {regions.map((r) => (
              <button
                key={r.key}
                onClick={() => setRegion(r.key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  region === r.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((h, i) => (
            <motion.div
              key={h.country}
              className="p-6 rounded-2xl bg-card border border-border shadow-soft flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{h.flag}</span>
                  <div>
                    <p className="font-semibold text-foreground">{h.country}</p>
                    <p className="text-xs text-muted-foreground">{h.org}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{t('helplines.available')}: {h.hours}</p>
              </div>
              <Button variant="emergency" size="sm" asChild className="mt-4 w-full">
                <a href={`tel:${h.number.replace(/\s/g, '')}`}>
                  <Phone className="w-4 h-4" />
                  {t('helplines.call')} {h.number}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelplineDirectory;
