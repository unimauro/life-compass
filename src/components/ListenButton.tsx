import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useTranslation } from "react-i18next";

const ListenButton = () => {
  const { t, i18n } = useTranslation();
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (playing) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
      setPlaying(false);
      return;
    }

    const lang = i18n.language.split("-")[0];
    const supportedLangs = ["en", "es", "fr", "ja", "ko", "lt", "ru", "zh"];
    const audioLang = supportedLangs.includes(lang) ? lang : "en";

    const audio = new Audio(`${import.meta.env.BASE_URL}audio/${audioLang}_female.mp3`);
    audioRef.current = audio;
    setPlaying(true);
    audio.play();
    audio.onended = () => {
      setPlaying(false);
      audioRef.current = null;
    };
  };

  return (
    <motion.div
      className="pt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <button
        onClick={toggle}
        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
          playing
            ? "bg-primary/20 text-primary animate-pulse"
            : "bg-primary/10 text-primary hover:bg-primary/20"
        }`}
      >
        {playing ? (
          <>
            <VolumeX className="w-4 h-4" />
            {t('hero.stopListening')}
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4" />
            {t('hero.listenMessage')}
          </>
        )}
      </button>
    </motion.div>
  );
};

export default ListenButton;
