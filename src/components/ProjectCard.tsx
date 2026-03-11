"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Full-Stack AI": "text-white border-zinc-500 bg-zinc-700",
  "LLM Fine-tuning": "text-zinc-300 border-zinc-600 bg-zinc-800",
  "AI Agents": "text-zinc-300 border-zinc-600 bg-zinc-800",
  "No-code AI": "text-zinc-300 border-zinc-600 bg-zinc-800",
  "Classical ML": "text-zinc-300 border-zinc-600 bg-zinc-800",
  RecSys: "text-zinc-300 border-zinc-600 bg-zinc-800",
  "Computer Vision": "text-zinc-300 border-zinc-600 bg-zinc-800",
  "AI Chatbot": "text-zinc-300 border-zinc-600 bg-zinc-800",
};

export default function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden glass-hover transition-all duration-300 cursor-pointer group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={onSelect}
    >
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />

      <div className="p-6">
        {/* Category + Status badges */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`inline-block text-xs font-mono px-3 py-1 rounded-full border ${
              categoryColors[project.category] || "text-zinc-400 border-zinc-700"
            }`}
          >
            {project.category}
          </span>
          <span
            className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded-full border ${
              project.status === "Production"
                ? "text-emerald-400 border-emerald-700/50 bg-emerald-950/50"
                : project.status === "Graduation Project"
                ? "text-blue-400 border-blue-700/50 bg-blue-950/50"
                : project.status === "Nanodegree Project"
                ? "text-purple-400 border-purple-700/50 bg-purple-950/50"
                : "text-amber-400 border-amber-700/50 bg-amber-950/50"
            }`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="font-heading text-xl font-bold mb-2 text-white group-hover:text-zinc-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-zinc-500 text-sm leading-relaxed mb-4">
          {project.tagline}
        </p>

        {/* Metrics (show first 3 on card) */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {project.metrics.slice(0, 3).map((m) => (
            <div
              key={m.label}
              className="text-center p-2 rounded-lg bg-zinc-900/50 border border-zinc-800"
            >
              <p className="text-sm font-bold text-white">{m.value}</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links + View Details */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={14} />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} />
                Demo
              </a>
            )}
            {project.huggingface && (
              <a
                href={project.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} />
                HuggingFace
              </a>
            )}
          </div>

          {/* View Details arrow */}
          <span className="flex items-center gap-1 text-xs text-zinc-600 group-hover:text-zinc-300 transition-colors">
            Details
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
