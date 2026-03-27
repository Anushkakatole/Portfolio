import React, { useState } from "react";
import { motion } from "framer-motion";
import End from "./End";

const processSteps = [
  {
    id: "01",
    word: "DISCOVER",
    title: "Understanding Requirements",
    description:
      "I start by understanding the problem, project goals, and user needs to ensure the right solution approach.",
    tag: "Research",
  },
  {
    id: "02",
    word: "DESIGN",
    title: "Planning & Design",
    description:
      "I create a clear plan, define architecture, and design UI/UX for a smooth and scalable development process.",
    tag: "UX / Architecture",
  },
  {
    id: "03",
    word: "BUILD",
    title: "Development",
    description:
      "I build the project using modern technologies with clean code, focusing on performance and responsiveness.",
    tag: "Engineering",
  },
  {
    id: "04",
    word: "TEST",
    title: "Testing & Optimization",
    description:
      "I test the application, fix bugs, and optimize performance for the best user experience.",
    tag: "QA",
  },
  {
    id: "05",
    word: "SHIP",
    title: "Deployment & Delivery",
    description:
      "Finally, I deploy the project and ensure everything works perfectly in real-world scenarios.",
    tag: "Launch",
  },
];

const smooth = [0.25, 0.46, 0.45, 0.94];

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
}));

const Process = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative bg-[#f5faf7] text-[#0d1a14] overflow-hidden">

      {/* Glows */}
      <motion.div
        className="absolute top-[-8%] right-[-5%] w-[560px] h-[560px] rounded-full bg-[#2a5c47]/10 blur-[140px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8%] left-[-5%] w-[480px] h-[480px] rounded-full bg-[#4a9276]/10 blur-[140px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#2a5c47]/15 pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-20, 20, -20], opacity: [0, 0.8, 0] }}
          transition={{ repeat: Infinity, duration: p.duration, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      {/* Grid overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="proc-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1a3328" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#proc-grid)" />
      </svg>

      {/* BIG stacked background words */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none overflow-hidden">
        {processSteps.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: i * 0.12, ease: smooth }}
            viewport={{ once: true }}
            className="text-[12vw] md:text-[10vw] font-extrabold tracking-tighter uppercase leading-[0.88] text-white/[0.025] text-center"
          >
            {s.word}
          </motion.div>
        ))}
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 pt-24 sm:pt-32 pb-24">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: smooth }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-[#2a5c47] to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#0d1a14]/40">How I Work</span>
        </motion.div>

        {/* Editorial heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smooth }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h1 className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[9rem] leading-[0.85] tracking-tighter uppercase font-bold">
            <span className="block text-[#0d1a14]">MY</span>
            <span className="block bg-gradient-to-r from-[#2a5c47] via-[#3d7a60] to-[#4a9276] bg-clip-text text-transparent">
              .PROCESS
            </span>
          </h1>
        </motion.div>

        {/* Step rows */}
        <div className="flex flex-col divide-y divide-[#0d1a14]/10">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: smooth }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(step.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative py-8 cursor-pointer"
            >
              {/* Hover wash */}
              <motion.div
                animate={{ opacity: hovered === step.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-[#4a9276]/10 via-transparent to-transparent rounded-xl pointer-events-none"
              />

              <div className="relative grid grid-cols-[40px_1fr] md:grid-cols-[80px_220px_1fr_120px] items-center gap-4 md:gap-6 px-2">

                {/* Index */}
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#0d1a14]/30 group-hover:text-[#2a5c47]/70 transition-colors duration-300 font-mono">
                  {step.id}
                </span>

                {/* Step title */}
                <div className="flex flex-col gap-1">
                  <span className="text-xl md:text-2xl font-bold text-[#0d1a14]/75 group-hover:text-[#0d1a14] transition-colors duration-300 tracking-tight">
                    {step.title}
                  </span>
                  <span className="text-[9px] text-[#0d1a14]/30 uppercase tracking-[0.2em]">{step.tag}</span>
                </div>

                {/* Description — hidden on mobile */}
                <p className="hidden md:block text-xs text-[#0d1a14]/40 leading-relaxed group-hover:text-[#0d1a14]/65 transition-colors duration-300 max-w-md">
                  {step.description}
                </p>

                {/* Word badge */}
                <span className="hidden md:inline-block text-[9px] uppercase tracking-[0.25em] px-3 py-1 rounded-full border border-[#2a5c47]/20 text-[#2a5c47]/40 group-hover:border-[#2a5c47]/60 group-hover:text-[#2a5c47]/70 transition-all duration-300 text-right">
                  {step.word}
                </span>
              </div>

              {/* Hover reveal line */}
              <motion.div
                animate={{ scaleX: hovered === step.id ? 1 : 0 }}
                transition={{ duration: 0.4, ease: smooth }}
                className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[#2a5c47]/50 via-[#4a9276]/30 to-transparent origin-left pointer-events-none"
              />

              {/* Arrow */}
              <motion.div
                animate={{ x: hovered === step.id ? 0 : -10, opacity: hovered === step.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2a5c47] text-lg pointer-events-none"
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <End />
    </div>
  );
};

export default Process;