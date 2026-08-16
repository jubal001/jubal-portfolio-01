import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, BarChart3 } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const icons = [Database, BarChart3, BrainCircuit, Code2];

export function Skills() {
  return (
    <section id="skills" className="section-shell section-pad">
      <SectionHeading eyebrow="02 — Skills" title="A toolkit built for the full data lifecycle." description="No vanity percentage bars. Just a clear view of the technologies and capabilities I use to turn data into solutions." />
      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(portfolio.skills).map(([group, skills], index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div key={group} className="glass-card p-6 sm:p-7" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="mb-6 flex items-center gap-3">
                <div className="icon-tile"><Icon size={20} /></div>
                <h3 className="font-display text-xl font-semibold text-white">{group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}