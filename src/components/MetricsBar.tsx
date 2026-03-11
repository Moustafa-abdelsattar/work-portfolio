"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 7, suffix: "+", label: "AI Projects" },
  { value: 98, suffix: "%", label: "Top Accuracy" },
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 4, suffix: "", label: "Certifications" },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span className="font-heading text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function MetricsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metrics" ref={ref} className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center glass rounded-2xl p-6 glass-hover transition-all duration-300"
            >
              <AnimatedCounter
                target={metric.value}
                suffix={metric.suffix}
                inView={inView}
              />
              <p className="text-zinc-500 text-sm mt-2 font-mono">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
