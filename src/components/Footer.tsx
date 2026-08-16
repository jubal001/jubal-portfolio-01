import { Github, ArrowUp } from "lucide-react";
import { portfolio } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="section-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display font-bold text-white">{portfolio.name}</p>
          <p className="mt-1 text-sm text-slate-500">Data Analyst • BI Analyst • AI/ML Specialist</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={portfolio.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub"><Github size={17} /></a>
          <button className="icon-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp size={17} /></button>
        </div>
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} Sambo Jubal KpeiNom. Turning data into intelligence, one solution at a time.</p>
      </div>
    </footer>
  );
}