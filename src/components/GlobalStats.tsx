import { motion } from "framer-motion";
import { Globe, Users, TrendingDown, Activity } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    icon: Globe,
    label: "Annual Global Deaths",
    value: 700000,
    suffix: "+",
    description: "Lives lost each year worldwide",
    source: "WHO, 2023",
  },
  {
    icon: Activity,
    label: "Global Rate per 100k",
    value: 9,
    suffix: "",
    decimals: 1,
    description: "Average suicide rate globally",
    source: "WHO GHO",
  },
  {
    icon: Users,
    label: "Male to Female Ratio",
    value: 2.5,
    suffix: "x",
    prefix: "~",
    decimals: 1,
    description: "Men are disproportionately affected",
    source: "WHO, 2023",
  },
  {
    icon: TrendingDown,
    label: "Most Affected Age Group",
    value: 15,
    suffix: "–29",
    description: "Second leading cause of death in this range",
    source: "WHO, 2023",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
};

const GlobalStats = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Global Overview
          </h2>
          <p className="text-muted-foreground mt-3 text-lg max-w-xl mx-auto">
            Understanding the scale helps us take meaningful action.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="p-8 rounded-2xl bg-card border border-border shadow-soft hover:-translate-y-1 transition-transform duration-300"
            >
              <stat.icon className="w-6 h-6 text-primary mb-4" />
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
              <h3 className="text-4xl font-bold text-primary mt-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix || ""}
                  decimals={stat.decimals || 0}
                />
              </h3>
              <p className="text-muted-foreground text-sm mt-3">{stat.description}</p>
              <p className="text-muted-foreground/60 text-xs mt-4">Source: {stat.source}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalStats;
