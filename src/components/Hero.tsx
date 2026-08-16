import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Database, BrainCircuit, BarChart3 } from "lucide-react";
import { portfolio } from "../data/portfolio";

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="data-grid absolute inset-0 opacity-40" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-3 py-2 text-xs font-semibold text-sky-200">
            <span className="pulse-dot" /> DATA • AI • INTELLIGENCE
          </div>

          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[.25em] text-slate-500">Hello, I'm</p>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {portfolio.name}
          </h1>
          <p className="mt-5 max-w-2xl font-display text-xl font-semibold text-sky-200 sm:text-2xl">
            {portfolio.roles.join(" • ")}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{portfolio.headline}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">{portfolio.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>View My Work <ArrowUpRight size={17} /></button>
            <button className="btn-secondary" onClick={() => scrollTo("contact")}>Let's Connect</button>
            <a className="btn-ghost" href={portfolio.cv} target="_blank" rel="noreferrer">Download CV</a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub"><Github size={18} /></a>
            {portfolio.linkedin ? <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn"><Linkedin size={18} /></a> : null}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[470px]"
          initial={{ opacity: 0, scale: .96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8, delay: .15 }}
        >
          <div className="profile-frame">
            <div className="profile-ring" />
            <img
              src={portfolio.profileImage}
              alt="Professional portrait of Sambo Jubal KpeiNom"
              className="profile-image"
              onError={(event) => { event.currentTarget.src = "/profile-placeholder.svg"; }}
            />
            <div className="profile-label profile-label-top"><Database size={15} /> DATA</div>
            <div className="profile-label profile-label-right"><BrainCircuit size={15} /> AI / ML</div>
            <div className="profile-label profile-label-bottom"><BarChart3 size={15} /> BI</div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              ["01", "Analytics"],
              ["02", "Intelligence"],
              ["03", "Impact"],
            ].map(([n, label]) => (
              <div key={n} className="glass-card p-4">
                <div className="text-xs font-bold text-sky-300">{n}</div>
                <div className="mt-1 text-sm font-medium text-slate-300">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <button onClick={() => scrollTo("about")} className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/10 p-3 text-slate-500 hover:text-white" aria-label="Scroll to about">
        <ArrowDown size={18} />
      </button>
    </section>
  );
}