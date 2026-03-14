import { motion } from "framer-motion";
import { Phone, Heart, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Heart className="w-4 h-4" />
          Suicide Prevention Dashboard
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-[1.1]">
          Every Life Matters
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Raising awareness through data. You are not alone. Every data point represents a life, 
          a family, a community. Together, we can change the story.
        </p>

        {/* Emergency CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button variant="emergency" size="lg" asChild className="text-base px-8 py-6">
            <a href="tel:988">
              <Phone className="w-5 h-5" />
              Call 988 (US Crisis Line)
            </a>
          </Button>
          <Button variant="hopeful" size="lg" asChild className="text-base px-8 py-6">
            <a href="#helplines">
              Find Help In Your Country
            </a>
          </Button>
        </motion.div>

        <motion.p
          className="text-sm text-muted-foreground pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          If you or someone you know is in crisis, help is available 24/7.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
