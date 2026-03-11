"use client";

import { motion } from "framer-motion";
import { experiences, certifications } from "@/lib/data";
import { Briefcase, MapPin, Award, GraduationCap } from "lucide-react";

export default function Timeline() {
  const isCurrentRole = (period: string) => period.toLowerCase().includes("present");

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">
            Journey
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-3 bottom-0 w-px bg-gradient-to-b from-white/40 via-zinc-700 to-transparent" />

          {experiences.map((exp, i) => {
            const current = isCurrentRole(exp.period);
            return (
              <motion.div
                key={exp.company}
                className="relative pl-14 pb-14 last:pb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Dot */}
                <div className="absolute left-3 top-3 z-10">
                  {current ? (
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    </span>
                  ) : (
                    <span className="block h-3 w-3 rounded-full bg-zinc-500 ring-4 ring-zinc-900 mt-0.5" />
                  )}
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 md:p-8 glass-hover transition-all duration-300 group">
                  {/* Header row */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="font-mono text-xs text-zinc-500">
                      {exp.period}
                    </span>
                    {current && (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-700/50">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Role & company */}
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="flex items-center gap-1.5 text-sm text-zinc-400">
                      <Briefcase size={14} className="text-zinc-500" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-zinc-500">
                      <MapPin size={14} className="text-zinc-600" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        className="text-sm text-zinc-400 leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-2 before:h-px before:bg-zinc-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.15 + j * 0.05 }}
                      >
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education & Certs */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-heading text-xl font-bold mb-8 text-center text-white">
            Education & Certifications
          </h3>

          {/* Education card */}
          <div className="glass rounded-2xl p-6 mb-6 glass-hover transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-zinc-400" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white">
                  B.Sc. Communication & Electronics Engineering
                </h4>
                <p className="text-sm text-zinc-500 mt-0.5">
                  Alexandria University &middot; 2019 – 2024
                </p>
              </div>
            </div>
          </div>

          {/* Certs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="glass rounded-xl p-4 glass-hover transition-all duration-300 group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <div className="flex items-start gap-3">
                  <Award size={14} className="text-zinc-600 mt-0.5 shrink-0 group-hover:text-zinc-400 transition-colors" />
                  <div>
                    <p className="text-sm font-semibold text-white">{cert.name}</p>
                    <p className="text-xs text-zinc-500">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
