import { Heart } from "lucide-react";

const DashboardFooter = () => {
  return (
    <footer className="px-6 py-16 pb-24 border-t border-border">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <Heart className="w-6 h-6 text-primary mx-auto" />
        <p className="text-foreground font-medium text-lg max-w-2xl mx-auto leading-relaxed">
          If you or someone you know is in crisis, please reach out. Help is available 24/7.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span>Data: WHO</span>
          <span>•</span>
          <span>IASP</span>
          <span>•</span>
          <span>World Bank</span>
          <span>•</span>
          <span>ITU</span>
        </div>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>
            Project by{" "}
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
            Built with care. Every life is a story worth continuing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
