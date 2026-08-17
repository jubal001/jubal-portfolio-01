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
      <SectionHeading
        eyebrow="06 — Certifications"
        title="Credentials, presented with clarity."
        description="A curated collection of professional certifications, courses and verified learning achievements."
      />

      {portfolio.certifications.length === 0 ? (
        <div className="glass-card p-8 text-center">
          <div className="mx-auto icon-tile">
            <Award size={21} />
          </div>

          <h3 className="mt-5 font-display text-xl font-semibold text-white">
            Certifications coming soon
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Verified professional credentials will appear here as they are
            added to the portfolio.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.certifications.map((certificate, index) => (
            <motion.article
              key={`${certificate.title}-${index}`}
              className="glass-card group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-sky-300/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              {certificate.image && (
                <div className="relative overflow-hidden bg-slate-950">
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    className="h-64 w-full object-contain p-4 transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              )}

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="icon-tile">
                    <Award size={21} />
                  </div>

                  <span className="rounded-full border border-sky-300/10 bg-sky-300/5 px-3 py-1 text-xs font-semibold text-sky-300">
                    {certificate.year}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-sky-300">
                  {certificate.issuer}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {certificate.description}
                </p>

                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-white"
                  >
                    View Credential →
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}