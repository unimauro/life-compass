import { useState } from "react";
import { Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const CoffeeButton = () => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-20 left-4 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.3 }}
    >
      <a
        href="https://buymeacoffee.com/Unimauro"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#E8D5B7] text-[#5C4A32] rounded-full p-3 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 opacity-80 hover:opacity-100"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Coffee className="w-5 h-5" />
        <AnimatePresence>
          {hovered && (
            <motion.span
              className="text-sm font-semibold whitespace-nowrap pr-1"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {t('footer.supportUs')}
            </motion.span>
          )}
        </AnimatePresence>
      </a>
    </motion.div>
  );
};

export default CoffeeButton;
