import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolio";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Certifications", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (label: string) => {
    setOpen(false);
    document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Primary navigation">
        <button onClick={() => go("Home")} className="group flex items-center gap-2" aria-label="Go to home">
          <span className="brand-mark">SJ</span>
          <span className="hidden font-display text-sm font-bold tracking-wide text-white sm:block">SAMBO <span className="text-sky-300">JUBAL</span></span>
        </button>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <button key={link} onClick={() => go(link)} className="nav-link">{link}</button>
          ))}
        </div>

        <button onClick={() => go("Contact")} className="hidden btn-primary lg:inline-flex">
          Let's Talk <ArrowUpRight size={16} />
        </button>

        <button className="rounded-xl border border-white/10 p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 rounded-2xl border border-white/10 bg-[#080d1c]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
          {links.map((link) => (
            <button key={link} onClick={() => go(link)} className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-300 hover:bg-white/5 hover:text-white">
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}