import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { ShieldAlert, ShieldCheck } from "lucide-react";

const usageData = [
  { age: "13–17", hours: 4.8, ideation: 18 },
  { age: "18–24", hours: 5.2, ideation: 15 },
  { age: "25–34", hours: 3.8, ideation: 9 },
];

const harmful = [
  "Cyberbullying & online harassment",
  "Pro-suicide & self-harm content",
  "Social isolation & loneliness",
  "Comparison culture & low self-esteem",
  "Sleep disruption from screen time",
  "Addictive engagement patterns",
];

const helpful = [
  "Crisis text lines (text HOME to 741741)",
  "Online support communities",
  "Mental health awareness campaigns",
  "Peer support networks",
  "Therapy & wellness apps",
  "Educational resources & outreach",
];

const statCards = [
  { stat: "66%", text: "higher risk in teens with >5hrs/day screen time" },
  { stat: "1 in 5", text: "teens report cyberbullying experiences" },
  { stat: "40%", text: "of Gen Z say social media negatively affects mental health" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-card border border-border rounded-xl p-3 shadow-soft text-sm">
      <p className="font-semibold text-foreground">Age {label}</p>
      {payload.map((p: any) => (
        <p key={p.name} style={{ color: p.color }} className="mt-1">
          {p.name}: {p.value}{p.name.includes("Hours") ? " hrs/day" : "%"}
        </p>
      ))}
    </div>
  );
};

const SocialMediaImpact = () => {
  return (
    <section className="px-6 py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Social Media & Digital Impact</h2>
          <p className="text-muted-foreground mt-3 text-lg max-w-xl mx-auto">
            The digital world creates both risks and opportunities for mental health.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {statCards.map((card) => (
            <motion.div
              key={card.stat}
              className="p-6 rounded-2xl bg-card border border-border shadow-soft text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-bold text-primary">{card.stat}</p>
              <p className="text-muted-foreground mt-2 text-sm">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          className="p-8 rounded-2xl bg-card border border-border shadow-soft mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-6">Screen Time vs Suicide Ideation by Age</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={usageData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
              <XAxis dataKey="age" tick={{ fontSize: 12 }} stroke="hsl(215, 16%, 47%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 16%, 47%)" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="hours" name="Avg Hours/Day" fill="hsl(217, 91%, 65%)" radius={[6, 6, 0, 0]} />
              <Bar dataKey="ideation" name="Ideation Rate %" fill="hsl(173, 80%, 30%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Dual perspective */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border">
          <div className="p-8 bg-accent/5">
            <div className="flex items-center gap-2 mb-6">
              <ShieldAlert className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-semibold">Harmful Effects</h3>
            </div>
            <ul className="space-y-3">
              {harmful.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-primary/5">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Helpful Resources</h3>
            </div>
            <ul className="space-y-3">
              {helpful.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaImpact;
