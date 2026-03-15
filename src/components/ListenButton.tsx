import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, User } from "lucide-react";
import { useTranslation } from "react-i18next";

const ListenButton = () => {
  const { t, i18n } = useTranslation();
  const [playing, setPlaying] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<"female" | "male" | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = (voice: "female" | "male") => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const lang = i18n.language.split("-")[0];
    const supportedLangs = ["en", "es", "fr", "ja", "ko", "lt", "ru", "zh"];
    const audioLang = supportedLangs.includes(lang) ? lang : "en";

    const audio = new Audio(`${import.meta.env.BASE_URL}audio/${audioLang}_${voice}.mp3`);
    audioRef.current = audio;
    setSelectedVoice(voice);
    setPlaying(true);

    audio.play();
    audio.onended = () => {
      setPlaying(false);
      setSelectedVoice(null);
    };
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setPlaying(false);
    setSelectedVoice(null);
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-3 pt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <p className="text-sm text-muted-foreground">{t('hero.listenMessage')}</p>
      <div className="flex items-center gap-3">
        {!playing ? (
          <>
            <button
              onClick={() => play("female")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              {t('hero.listenFemale')}
            </button>
            <button
              onClick={() => play("male")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              {t('hero.listenMale')}
            </button>
          </>
        ) : (
          <button
            onClick={stop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-colors animate-pulse"
          >
            <VolumeX className="w-4 h-4" />
            {t('hero.stopListening')}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ListenButton;
