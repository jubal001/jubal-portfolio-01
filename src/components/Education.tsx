import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-shell section-pad">
      <SectionHeading eyebrow="05 — Education" title="The foundation behind the technical work." />
      <div className="grid gap-5 md:grid-cols-2">
        {portfolio.education.map((item, index) => (
          <motion.article key={item.institution} className="glass-card p-7" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
            <div className="icon-tile"><GraduationCap size={21} /></div>
            <h3 className="mt-6 font-display text-xl font-semibold text-white">{item.program}</h3>
            <p className="mt-2 text-slate-300">{item.institution}</p>
            <p className="mt-3 text-sm leading-6 text-slate-500">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="section-shell section-pad">
      <SectionHeading eyebrow="06 — Certifications" title="Credentials, presented with clarity." description="Add verified credentials in one place without cluttering the visual experience." />
      {portfolio.certifications.length === 0 ? (
        <div className="glass-card flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center">
          <div className="icon-tile"><Award size={21} /></div>
          <div><h3 className="font-semibold text-white">Certification gallery ready</h3><p className="mt-1 text-sm leading-6 text-slate-500">Add certificates to <code className="text-sky-300">src/data/portfolio.ts</code> and they will appear here.</p></div>
        </div>
      ) : null}
    </section>
  );
}