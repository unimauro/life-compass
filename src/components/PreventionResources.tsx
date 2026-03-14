import { motion } from "framer-motion";
import { AlertTriangle, Heart, MessageCircle, XCircle, ExternalLink } from "lucide-react";

const warningSigns = [
  { icon: "💬", text: "Talking about wanting to die or feeling hopeless" },
  { icon: "😔", text: "Withdrawing from friends, family, and activities" },
  { icon: "🔄", text: "Dramatic mood changes or extreme anxiety" },
  { icon: "⚠️", text: "Giving away prized possessions" },
  { icon: "😴", text: "Sleeping too much or too little" },
  { icon: "💊", text: "Increased substance use" },
];

const howToHelp = [
  { step: 1, title: "Ask directly", description: "\"Are you thinking about suicide?\" — asking doesn't increase risk." },
  { step: 2, title: "Listen without judgment", description: "Be present. Don't try to fix — just be there." },
  { step: 3, title: "Keep them safe", description: "Remove access to means. Stay with them." },
  { step: 4, title: "Help connect", description: "Guide them to professional help or a crisis line." },
  { step: 5, title: "Follow up", description: "Check in regularly. Your continued presence matters." },
];

const doSay = [
  "\"I'm here for you, and I care.\"",
  "\"You're not alone in this.\"",
  "\"It's okay to ask for help.\"",
  "\"Tell me what you're feeling.\"",
];

const dontSay = [
  { bad: "\"Just think positive.\"", better: "\"I hear you. Your feelings are valid.\"" },
  { bad: "\"Others have it worse.\"", better: "\"Your pain matters regardless.\"" },
  { bad: "\"You're being selfish.\"", better: "\"I can see you're in a lot of pain.\"" },
];

const resources = [
  { name: "World Health Organization", url: "https://www.who.int/health-topics/suicide" },
  { name: "International Association for Suicide Prevention", url: "https://www.iasp.info/" },
  { name: "988 Suicide & Crisis Lifeline", url: "https://988lifeline.org/" },
];

const PreventionResources = () => {
  return (
    <section className="px-6 py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Prevention & Resources</h2>
          <p className="text-muted-foreground mt-3 text-lg max-w-xl mx-auto">
            Knowledge saves lives. Here's how you can help.
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
            <h3 className="text-xl font-semibold">Warning Signs to Watch For</h3>
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
            <h3 className="text-xl font-semibold">How to Help Someone</h3>
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
              <h3 className="text-lg font-semibold">What You Can Say</h3>
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
              <h3 className="text-lg font-semibold">What NOT to Say</h3>
            </div>
            <div className="space-y-3">
              {dontSay.map((item) => (
                <div key={item.bad} className="p-4 rounded-2xl bg-card border border-border">
                  <p className="text-muted-foreground line-through text-sm">{item.bad}</p>
                  <p className="text-primary font-medium text-sm mt-1">→ {item.better}</p>
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
          <h3 className="text-lg font-semibold mb-4">Trusted Resources</h3>
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
