import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="section-shell section-pad">
      <SectionHeading eyebrow="07 — Contact" title="Let's build something intelligent together." description="Have a data problem, an analytics idea or an AI product to discuss? Send a message and let's start a conversation." />
      <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
        <div className="glass-card p-7">
          <div className="icon-tile"><Mail size={21} /></div>
          <h3 className="mt-6 font-display text-2xl font-semibold text-white">Connect directly</h3>
          <p className="mt-3 text-sm leading-6 text-slate-500">
  Connect with me through my professional channels and let's turn ideas into impact.
</p>
          <div className="mt-7 space-y-3">
            {portfolio.email ? <a href={`mailto:${portfolio.email}`} className="contact-link"><Mail size={17} /> {portfolio.email}</a> : null}
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="contact-link"><Github size={17} /> GitHub / jubal001</a>
            {portfolio.linkedin ? <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="contact-link"><Linkedin size={17} /> LinkedIn</a> : null}
          </div>
        </div>

        <form onSubmit={submit} className="glass-card p-7 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field">Name<input required name="name" placeholder="Your name" /></label>
            <label className="field">Email<input required type="email" name="email" placeholder="you@example.com" /></label>
          </div>
          <label className="field mt-5">Subject<input required name="subject" placeholder="What would you like to discuss?" /></label>
          <label className="field mt-5">Message<textarea required name="message" rows={6} placeholder="Tell me a little about the project or opportunity..." /></label>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button className="btn-primary" type="submit">Send Message <Send size={16} /></button>
            {sent && <span className="text-sm text-emerald-300">Form captured locally. Connect this form to your preferred email service before production.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}