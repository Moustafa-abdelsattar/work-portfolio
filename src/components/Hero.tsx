"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import TypingAnimation from "./TypingAnimation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-black/[0.96] overflow-x-clip"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex flex-col md:flex-row h-screen max-w-7xl mx-auto">
        {/* Left content */}
        <div className="flex-1 px-6 md:px-12 relative z-10 flex flex-col justify-center">
          <motion.p
            className="font-mono text-sm tracking-[0.3em] uppercase text-zinc-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AI Engineer
          </motion.p>

          <motion.h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Moustafa Mohamed
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-neutral-300 max-w-lg mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I build AI applications that save{" "}
            <span className="text-white font-semibold">time</span>,{" "}
            <span className="text-white font-semibold">effort</span>, and{" "}
            <span className="text-white font-semibold">money</span>.
          </motion.p>

          <motion.div
            className="text-base md:text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-neutral-500">Currently building </span>
            <TypingAnimation />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-white text-black font-heading font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-zinc-700 text-zinc-300 font-heading font-semibold text-sm tracking-wide transition-all duration-300 hover:border-zinc-500 hover:text-white hover:bg-white/5 cursor-pointer"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        </div>

        {/* Right content - 3D Spline Robot */}
        <div className="flex-1 relative hidden md:block overflow-visible">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="!absolute inset-y-0 -left-20 -right-20 w-[calc(100%+10rem)]"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#what-i-build"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-zinc-600" />
      </motion.a>
    </section>
  );
}
