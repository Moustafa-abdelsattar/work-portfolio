"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";

const gridSpans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export default function SkillsBento() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">
            Toolkit
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className={`glass rounded-2xl p-6 glass-hover transition-all duration-300 ${gridSpans[i] || ""}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="font-heading text-sm font-semibold text-zinc-300 mb-4 tracking-wide uppercase">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 hover:border-zinc-500 hover:text-white transition-all duration-200 cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
