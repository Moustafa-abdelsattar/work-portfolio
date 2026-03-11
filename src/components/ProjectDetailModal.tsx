"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data";
import VerticalImageStack from "@/components/ui/vertical-image-stack";

function ChannelIcon({ name }: { name: string }) {
  const cls = "w-5 h-5 text-zinc-400";
  switch (name) {
    case "YouTube":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      );
    case "X":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "Play Store":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.395 12l2.302-3.493zM5.864 3.658L16.8 9.99l-2.302 2.302L5.864 3.658z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "App Store":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      );
    case "Messenger":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.2l3.131 3.26 5.886-3.26-6.558 6.763z" />
        </svg>
      );
    case "WhatsApp":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      );
    case "Web":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    default:
      return null;
  }
}

// channelNames removed — now driven by project.channels

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

export default function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Lock body scroll & close on Escape
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const screenshotImages = project.screenshots.map((src, i) => ({
    src,
    alt: `${project.title} screenshot ${i + 1}`,
  }));
  const hasScreenshots = screenshotImages.length > 0;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-4 my-8 max-h-[calc(100vh-4rem)] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/60"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-colors z-20"
        >
          <X size={18} />
        </button>

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`inline-block text-xs font-mono px-3 py-1 rounded-full border ${
                categoryColors[project.category] ||
                "text-zinc-400 border-zinc-700"
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

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
            {project.title}
          </h2>

          <p className="text-zinc-400 text-base md:text-lg mb-6 max-w-2xl">
            {project.tagline}
          </p>

          {/* Video — full width */}
          {project.video && (
            <div className="mb-8 rounded-xl overflow-hidden border border-zinc-700/50 shadow-2xl shadow-black/50">
              <video
                src={project.video}
                controls
                playsInline
                className="w-full h-auto block"
                style={{ colorScheme: "dark" }}
              />
            </div>
          )}

          {/* Screenshots — full width */}
          {hasScreenshots && !project.video && (
            <div className="mb-8">
              <VerticalImageStack images={screenshotImages} />
            </div>
          )}

          {/* Metrics row */}
          <div className={`grid gap-4 mb-8 ${project.metrics.length > 3 ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6" : "grid-cols-3"}`}>
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="text-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800"
              >
                <p className="text-xl font-bold text-white">{m.value}</p>
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider mt-1">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-zinc-400 leading-relaxed text-sm mb-8">
            {project.description}
          </p>

          {/* Problem / Solution / Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-heading text-sm font-bold text-zinc-300 uppercase tracking-wider mb-2">
                Problem
              </h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {project.problem}
              </p>
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold text-zinc-300 uppercase tracking-wider mb-2">
                Solution
              </h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {project.solution}
              </p>
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold text-zinc-300 uppercase tracking-wider mb-2">
                Impact
              </h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Channels */}
          {project.channels && project.channels.length > 0 && (
            <div className="border-t border-zinc-800 pt-6 mb-8">
              <h3 className="font-heading text-sm font-bold text-zinc-300 uppercase tracking-wider mb-4">
                Channels Covered
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.channels.map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800"
                  >
                    <ChannelIcon name={name} />
                    <span className="text-xs text-zinc-400 font-mono">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack + Links */}
          <div className="border-t border-zinc-800 pt-6">
            <div className="mb-5">
              <h3 className="font-heading text-sm font-bold text-zinc-300 uppercase tracking-wider mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              )}
              {project.huggingface && (
                <a
                  href={project.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  <ExternalLink size={16} />
                  HuggingFace
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
