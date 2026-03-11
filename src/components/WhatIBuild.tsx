"use client";

import { motion } from "framer-motion";
import { MessageSquareText, AudioLines, Workflow } from "lucide-react";

const pillars = [
  {
    icon: MessageSquareText,
    title: "Text-Based AI Solutions",
    description:
      "Chatbots, AI assistants, and RAG systems that talk to your customers across WhatsApp, web, and social media.",
  },
  {
    icon: AudioLines,
    title: "Voice AI Agents",
    description:
      "Real-time voice agents with natural turn-taking and low-latency speech — built for multilingual conversations.",
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    description:
      "No-code and low-code automations that replace manual processes — from lead gen to competitor analysis to reporting.",
  },
];

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">
            What I Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Three Ways I Save Your Team Time
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base leading-relaxed">
            From gathering requirements to deploying production systems — I
            build the AI layer that replaces manual work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="glass rounded-2xl p-8 glass-hover transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-5 group-hover:bg-zinc-700 transition-colors">
                <pillar.icon
                  size={24}
                  className="text-zinc-400 group-hover:text-white transition-colors"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {pillar.title}
              </h3>

              <p className="text-sm text-zinc-500 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
