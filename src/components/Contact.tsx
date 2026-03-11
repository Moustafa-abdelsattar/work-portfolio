"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:moustafa.mohamed159357@gmail.com",
    display: "moustafa.mohamed159357@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/moustafa-abdelsattar-04ab9b1ba/",
    display: "moustafa-abdelsattar",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Moustafa-abdelsattar",
    display: "Moustafa-abdelsattar",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">
            Connect
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-zinc-400 mb-10 max-w-md mx-auto">
            Looking for an AI Engineer who ships? Let&apos;s talk about how I
            can bring AI into your workflow.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-4 flex items-center gap-4 glass-hover transition-all duration-300 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                <s.icon
                  size={18}
                  className="text-zinc-400 group-hover:text-white transition-colors"
                />
              </div>
              <div className="text-left">
                <p className="text-xs text-zinc-500 font-mono">{s.label}</p>
                <p className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                  {s.display}
                </p>
              </div>
            </a>
          ))}

          <div className="glass rounded-xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
              <MapPin size={18} className="text-zinc-400" />
            </div>
            <div className="text-left">
              <p className="text-xs text-zinc-500 font-mono">Location</p>
              <p className="text-sm font-semibold text-zinc-200">Alexandria, Egypt</p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="mt-16 text-xs text-zinc-600 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Designed & built by Moustafa Mohamed &middot; 2025
        </motion.p>
      </div>
    </section>
  );
}
