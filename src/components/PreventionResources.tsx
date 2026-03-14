import { motion } from "framer-motion";
import { AlertTriangle, Heart, MessageCircle, XCircle, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const resources = [
  { name: "World Health Organization", url: "https://www.who.int/health-topics/suicide" },
  { name: "International Association for Suicide Prevention", url: "https://www.iasp.info/" },
  { name: "988 Suicide & Crisis Lifeline", url: "https://988lifeline.org/" },
];

const PreventionResources = () => {
  const { t } = useTranslation();

  const warningSigns = [
    { icon: "\ud83d\udcac", text: t('prevention.warning1') },
    { icon: "\ud83d\ude14", text: t('prevention.warning2') },
    { icon: "\ud83d\udd04", text: t('prevention.warning3') },
    { icon: "\u26a0\ufe0f", text: t('prevention.warning4') },
    { icon: "\ud83d\ude34", text: t('prevention.warning5') },
    { icon: "\ud83d\udc8a", text: t('prevention.warning6') },
  ];

  const howToHelp = [
    { step: 1, title: t('prevention.step1Title'), description: t('prevention.step1Desc') },
    { step: 2, title: t('prevention.step2Title'), description: t('prevention.step2Desc') },
    { step: 3, title: t('prevention.step3Title'), description: t('prevention.step3Desc') },
    { step: 4, title: t('prevention.step4Title'), description: t('prevention.step4Desc') },
    { step: 5, title: t('prevention.step5Title'), description: t('prevention.step5Desc') },
  ];

  const doSay = [
    t('prevention.doSay1'),
    t('prevention.doSay2'),
    t('prevention.doSay3'),
    t('prevention.doSay4'),
  ];

  const dontSay = [
    { bad: t('prevention.dontSay1Bad'), better: t('prevention.dontSay1Better') },
    { bad: t('prevention.dontSay2Bad'), better: t('prevention.dontSay2Better') },
    { bad: t('prevention.dontSay3Bad'), better: t('prevention.dontSay3Better') },
  ];

  return (
    <section className="px-6 py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t('prevention.title')}</h2>
          <p className="text-muted-foreground mt-3 text-lg max-w-xl mx-auto">
            {t('prevention.subtitle')}
          </p>
        </motion.div>

        {/* Warning Signs */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-semibold">{t('prevention.warningSigns')}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {warningSigns.map((sign) => (
              <div key={sign.text} className="p-5 rounded-2xl bg-card border border-border shadow-soft flex items-start gap-3">
                <span className="text-xl">{sign.icon}</span>
                <p className="text-foreground/80 text-sm">{sign.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How to Help */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold">{t('prevention.howToHelp')}</h3>
          </div>
          <div className="space-y-4">
            {howToHelp.map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border shadow-soft">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What to Say */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">{t('prevention.whatToSay')}</h3>
            </div>
            <div className="space-y-3">
              {doSay.map((phrase) => (
                <div key={phrase} className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <p className="text-foreground italic">{phrase}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-semibold">{t('prevention.whatNotToSay')}</h3>
            </div>
            <div className="space-y-3">
              {dontSay.map((item) => (
                <div key={item.bad} className="p-4 rounded-2xl bg-card border border-border">
                  <p className="text-muted-foreground line-through text-sm">{item.bad}</p>
                  <p className="text-primary font-medium text-sm mt-1">&rarr; {item.better}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* External Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">{t('prevention.trustedResources')}</h3>
          <div className="flex flex-wrap gap-3">
            {resources.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {r.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreventionResources;
