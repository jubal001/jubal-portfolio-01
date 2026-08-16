import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, Database, Sparkles } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const pillars = [
    { icon: Database, title: "Data & Statistics", text: "Structured thinking, analysis and evidence-led reasoning." },
    { icon: BrainCircuit, title: "AI / ML", text: "Predictive systems, intelligent applications and practical AI." },
    { icon: BarChart3, title: "Business Intelligence", text: "Dashboards and insights designed around decisions." },
    { icon: Sparkles, title: "Useful Technology", text: "Building solutions that connect technical work to real problems." },
  ];

  return (
    <section id="about" className="section-shell section-pad">
      <SectionHeading eyebrow="01 — About" title="A data professional who thinks beyond the dataset." description="Statistics gives me the foundation. Technology gives me the tools. The goal is useful intelligence." />
      <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div className="glass-card p-7 sm:p-9" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-lg leading-8 text-slate-300">{portfolio.about}</p>
          <p className="mt-5 leading-7 text-slate-500">I enjoy working across the full data journey — from collection and quality to analysis, visualization, predictive modeling and intelligent applications.</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {pillars.map((item, index) => (
            <motion.div key={item.title} className="soft-card flex gap-4 p-5" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }}>
              <div className="icon-tile"><item.icon size={20} /></div>
              <div><h3 className="font-semibold text-white">{item.title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{item.text}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}