import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const trendData = [
  { year: "2000", "10–19": 3.2, "20–29": 12.4, "30–49": 15.1, "50–69": 18.3, "70+": 22.1 },
  { year: "2005", "10–19": 3.5, "20–29": 12.0, "30–49": 14.6, "50–69": 17.5, "70+": 21.0 },
  { year: "2010", "10–19": 3.8, "20–29": 11.8, "30–49": 14.0, "50–69": 16.8, "70+": 19.8 },
  { year: "2015", "10–19": 4.1, "20–29": 11.5, "30–49": 13.2, "50–69": 15.9, "70+": 18.5 },
  { year: "2020", "10–19": 4.5, "20–29": 11.2, "30–49": 12.8, "50–69": 15.2, "70+": 17.2 },
];

const ageGroups = [
  {
    range: "10–19",
    factors: ["Bullying & cyberbullying", "Academic pressure", "Identity & sexuality", "Social media exposure"],
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  },
  {
    range: "20–29",
    factors: ["Economic uncertainty", "Social isolation", "Substance abuse", "Relationship breakdown"],
    color: "bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  },
  {
    range: "30–49",
    factors: ["Work stress & burnout", "Divorce & family conflict", "Financial burden", "Parenting pressure"],
    color: "bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-400",
  },
  {
    range: "50–69",
    factors: ["Chronic illness", "Retirement & loss of purpose", "Loneliness", "Job displacement"],
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
  },
  {
    range: "70+",
    factors: ["Health deterioration", "Loss of partner", "Social isolation", "Dependency & loss of autonomy"],
    color: "bg-teal-100/50 text-teal-600 dark:bg-teal-900/10 dark:text-teal-500",
  },
];

const AREA_COLORS = [
  "hsl(173, 80%, 85%)",
  "hsl(173, 80%, 65%)",
  "hsl(173, 80%, 45%)",
  "hsl(217, 91%, 65%)",
  "hsl(217, 91%, 45%)",
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-card border border-border rounded-xl p-3 shadow-soft text-sm">
      <p className="font-semibold text-foreground">{label}</p>
      {payload.map((p: any) => (
        <p key={p.name} style={{ color: p.stroke || p.fill }} className="mt-1">
          {p.name}: {p.value} per 100k
        </p>
      ))}
    </div>
  );
};

const AgeGroupDeepDive = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Age Group Deep Dive</h2>
          <p className="text-muted-foreground mt-3 text-lg max-w-xl mx-auto">
            Risk factors change across the lifespan — prevention must adapt accordingly.
          </p>
        </motion.div>

        {/* Stacked Area Chart */}
        <motion.div
          className="p-8 rounded-2xl bg-card border border-border shadow-soft mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-6">Suicide Rates by Age Group Over Time</h3>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} stroke="hsl(215, 16%, 47%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 16%, 47%)" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              {["10–19", "20–29", "30–49", "50–69", "70+"].map((key, i) => (
                <Area
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stackId="1"
                  fill={AREA_COLORS[i]}
                  stroke={AREA_COLORS[i]}
                  fillOpacity={0.7}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Age Group Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ageGroups.map((group, i) => (
            <motion.div
              key={group.range}
              className="p-6 rounded-2xl bg-card border border-border shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${group.color}`}>
                Ages {group.range}
              </span>
              <ul className="space-y-2">
                {group.factors.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroupDeepDive;
