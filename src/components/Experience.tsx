import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-shell section-pad">
      <SectionHeading eyebrow="03 — Experience" title="Where data meets real-world work." />
      <div className="relative ml-3 border-l border-white/10 pl-8 sm:ml-6 sm:pl-12">
        {portfolio.experience.map((item, index) => (
          <motion.article key={item.organization} className="relative mb-12 last:mb-0" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
            <span className="timeline-dot" />
            <div className="glass-card p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.2em] text-sky-300">{item.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-slate-400">{item.organization}</p>
                </div>
                <ArrowUpRight className="hidden text-slate-600 sm:block" size={20} />
              </div>
              <p className="mt-5 max-w-3xl leading-7 text-slate-500">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <span className="skill-chip" key={tag}>{tag}</span>)}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}