import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, X, CheckCircle2 } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

type Project = typeof portfolio.projects[number];

function ProjectModal({ project, close }: { project: Project; close: () => void }) {
  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-black/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={`${project.title} details`} onClick={close}>
      <div className="mx-auto mt-10 max-w-3xl glass-card p-7 sm:p-9" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-5">
          <div><div className="eyebrow">{project.category}</div><h3 className="font-display text-3xl font-bold text-white">{project.title}</h3></div>
          <button className="icon-btn" onClick={close} aria-label="Close project details"><X size={18} /></button>
        </div>
        <p className="mt-6 leading-7 text-slate-400">{project.description}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="soft-card p-5"><h4 className="font-semibold text-white">Problem</h4><p className="mt-2 text-sm leading-6 text-slate-500">{project.problem ?? "A practical data problem requiring structured analysis and a clear solution."}</p></div>
          <div className="soft-card p-5"><h4 className="font-semibold text-white">Solution</h4><p className="mt-2 text-sm leading-6 text-slate-500">{project.solution ?? "A focused analytical workflow designed to turn data into useful insight."}</p></div>
        </div>
        <div className="mt-7"><h4 className="font-semibold text-white">Technology</h4><div className="mt-3 flex flex-wrap gap-2">{project.stack.map((s) => <span className="skill-chip" key={s}>{s}</span>)}</div></div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn-secondary" href={project.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          {project.demo ? <a className="btn-primary" href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={17} /> Live Demo</a> : <span className="btn-disabled">Live demo can be added in portfolio.ts</span>}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = portfolio.projects.filter((p) => p.featured);
  const other = portfolio.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-shell section-pad">
      <SectionHeading eyebrow="04 — Selected Work" title="Proof through projects, not buzzwords." description="A visual portfolio of analytics, BI, machine learning and AI work. Click any project for a deeper breakdown." />

      <div className="grid gap-5 lg:grid-cols-2">
        {featured.map((project, index) => (
          <motion.button key={project.title} onClick={() => setSelected(project)} className={`project-card text-left ${index === 0 ? "lg:col-span-2" : ""}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="project-visual">
              <div className="mini-chart">
                {[42, 68, 54, 86, 72, 94, 78].map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}
              </div>
              <div className="mini-node node-a">AI</div><div className="mini-node node-b">DATA</div><div className="mini-node node-c">INSIGHT</div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-[.2em] text-sky-300">{project.category}</div>
              <div className="mt-2 flex items-center justify-between gap-4"><h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{project.title}</h3><ArrowUpRight className="shrink-0 text-slate-600 transition group-hover:text-sky-300" /></div>
              <p className="mt-4 max-w-3xl leading-7 text-slate-500">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((s) => <span className="skill-chip" key={s}>{s}</span>)}</div>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {other.map((project) => (
          <motion.button key={project.title} onClick={() => setSelected(project)} className="soft-card group p-6 text-left transition hover:-translate-y-1 hover:border-sky-400/20" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-5 flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">{project.category}</span><ArrowUpRight size={18} className="text-slate-600 group-hover:text-sky-300" /></div>
            <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{project.stack.slice(0, 4).map((s) => <span className="skill-chip" key={s}>{s}</span>)}</div>
          </motion.button>
        ))}
      </div>

      {selected && <ProjectModal project={selected} close={() => setSelected(null)} />}
    </section>
  );
}