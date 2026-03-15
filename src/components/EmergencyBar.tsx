import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useCountryHelpline } from "@/hooks/use-country-helpline";

const EmergencyBar = () => {
  const { t } = useTranslation();
  const { helpline } = useCountryHelpline();

  const phoneLink = `tel:${helpline.phone.replace(/\s/g, "")}`;

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-t border-border px-4 py-3"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground hidden sm:block">
          {t('emergency.messageFull')} — {helpline.organization} ({helpline.country})
        </p>
        <p className="text-sm text-muted-foreground sm:hidden">
          {t('emergency.messageShort')}
        </p>
        <Button variant="emergency" size="sm" asChild className="shrink-0">
          <a href={phoneLink}>
            <Phone className="w-4 h-4" />
            {helpline.phone}
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default EmergencyBar;
