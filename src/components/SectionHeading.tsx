import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      className="mb-12 max-w-3xl"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{description}</p>}
    </motion.div>
  );
}