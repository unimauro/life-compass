import { Heart, Coffee } from "lucide-react";
import { useTranslation } from "react-i18next";

const DashboardFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="px-6 py-16 pb-24 border-t border-border">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <Heart className="w-6 h-6 text-primary mx-auto" />
        <p className="text-foreground font-medium text-lg max-w-2xl mx-auto leading-relaxed">
          {t('footer.crisisMessage')}
        </p>

        {/* Buy Me a Coffee */}
        <div className="pt-4">
          <a
            href="https://buymeacoffee.com/Unimauro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFDD00] text-[#000000] font-semibold text-sm hover:bg-[#FFDD00]/90 transition-colors shadow-sm"
          >
            <Coffee className="w-5 h-5" />
            {t('footer.supportUs')}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span>{t('footer.data')}: WHO</span>
          <span>&bull;</span>
          <span>IASP</span>
          <span>&bull;</span>
          <span>World Bank</span>
          <span>&bull;</span>
          <span>ITU</span>
        </div>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>
            {t('footer.projectBy')}{" "}
            <a
              href="https://github.com/unimauro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Carlos Mauro Cardenas (@unimauro)
            </a>
          </p>
          <p className="text-xs text-muted-foreground/60">
            {t('footer.builtWithCare')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
