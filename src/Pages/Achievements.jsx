import React, { useState } from "react";
import { motion } from "framer-motion";
import Services from "./Services";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
}));

const floatingRings = [
  { size: 80, x: 8,  y: 15, duration: 20, color: "rgba(42,92,71,0.15)" },
  { size: 50, x: 92, y: 25, duration: 15, color: "rgba(74,146,118,0.15)" },
  { size: 38, x: 80, y: 78, duration: 12, color: "rgba(42,92,71,0.18)" },
  { size: 65, x: 15, y: 75, duration: 18, color: "rgba(74,146,118,0.10)" },
];

const achievements = [
  {
    id: "01",
    year: "1st Year",
    title: "BTech AI & Data Science",
    grade: "8.95 CGPA",
    highlight:
      "Active member of coding club and IEEE design team, contributed to creative designs and projects.",
    status: "Completed",
  },
  {
    id: "02",
    year: "2nd Year",
    title: "BTech AI & Data Science",
    grade: "Present",
    highlight:
      "Building strong machine learning projects and data analysis skills with real-world datasets.",
    status: "In Progress",
  },
  {
    id: "03",
    year: "3rd Year",
    title: "BTech AI & Data Science",
    grade: "—",
    highlight: "Upcoming journey into advanced AI systems and research.",
    status: "Upcoming",
  },
  {
    id: "04",
    year: "4th Year",
    title: "BTech AI & Data Science",
    grade: "—",
    highlight: "Final year: capstone project, placements, and the bigger vision.",
    status: "Upcoming",
  },
];

const smooth = [0.25, 0.46, 0.45, 0.94];

const Achievements = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#f5faf7] text-[#0d1a14] overflow-hidden">

      {/* Animated background glows */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#2a5c47]/12 blur-[140px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#4a9276]/12 blur-[140px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#2a5c47]/20 pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-25, 25, -25], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: p.duration, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      {/* Floating decorative rings */}
      {floatingRings.map((r, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${r.x}%`, top: `${r.y}%`,
            width: r.size, height: r.size,
            marginLeft: -r.size / 2, marginTop: -r.size / 2,
            border: `1px solid ${r.color}`,
          }}
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{
            rotate: { repeat: Infinity, duration: r.duration, ease: "linear" },
            scale: { repeat: Infinity, duration: r.duration / 2, ease: "easeInOut" },
          }}
        />
      ))}

      {/* Grid overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="ach-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1a3328" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ach-grid)" />
      </svg>

      {/* Vertical accent lines */}
      <motion.div
        className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-[#2a5c47]/12 to-transparent pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 right-[25%] w-px h-full bg-gradient-to-b from-transparent via-[#4a9276]/8 to-transparent pointer-events-none"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
      />

      {/* Corner lines — top-right */}
      <div className="absolute top-28 right-8 flex flex-col items-end gap-1.5 pointer-events-none">
        <motion.div initial={{ width: 0 }} animate={{ width: 64 }} transition={{ duration: 1, delay: 1 }} className="h-px bg-gradient-to-l from-[#2a5c47]/60 to-transparent" />
        <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 1, delay: 1.2 }} className="h-px bg-gradient-to-l from-[#2a5c47]/30 to-transparent" />
        <motion.div initial={{ width: 0 }} animate={{ width: 20 }} transition={{ duration: 1, delay: 1.4 }} className="h-px bg-gradient-to-l from-[#2a5c47]/15 to-transparent" />
      </div>

      {/* Corner lines — bottom-left */}
      <div className="absolute bottom-28 left-8 flex flex-col gap-1.5 pointer-events-none">
        <motion.div initial={{ width: 0 }} animate={{ width: 64 }} transition={{ duration: 1, delay: 1.4 }} className="h-px bg-gradient-to-r from-[#4a9276]/60 to-transparent" />
        <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 1, delay: 1.6 }} className="h-px bg-gradient-to-r from-[#4a9276]/30 to-transparent" />
        <motion.div initial={{ width: 0 }} animate={{ width: 20 }} transition={{ duration: 1, delay: 1.8 }} className="h-px bg-gradient-to-r from-[#4a9276]/15 to-transparent" />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 pt-32 sm:pt-40 pb-20">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: smooth }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-[#2a5c47] to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#0d1a14]/40">Academic Journey</span>
        </motion.div>

        {/* Big editorial heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smooth }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h1 className="text-[3rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[10rem] leading-[0.85] tracking-tighter uppercase font-bold">
            <span className="block text-[#0d1a14]">ACHIEVE</span>
            <span className="block bg-gradient-to-r from-[#2a5c47] via-[#3d7a60] to-[#4a9276] bg-clip-text text-transparent">
              .MENTS
            </span>
          </h1>
          <p className="text-xs text-[#0d1a14]/35 uppercase tracking-[0.3em] mt-6 max-w-xs">
            Four years of growth, learning & building
          </p>
        </motion.div>

        {/* Achievement rows */}
        <div className="flex flex-col divide-y divide-[#0d1a14]/10">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: smooth }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative py-8 cursor-pointer"
            >
              {/* Hover row bg */}
              <motion.div
                animate={{ opacity: hovered === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-[#4a9276]/10 via-transparent to-transparent rounded-xl pointer-events-none"
              />

              <div className="relative grid grid-cols-[40px_1fr] md:grid-cols-[80px_1fr_280px_130px] items-center gap-4 md:gap-6 px-2">

                {/* Index number */}
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#0d1a14]/30 group-hover:text-[#2a5c47]/70 transition-colors duration-300 font-mono">
                  {item.id}
                </span>

                {/* Year + Degree */}
                <div className="flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-bold text-[#0d1a14]/80 group-hover:text-[#0d1a14] transition-colors duration-300 tracking-tight">
                    {item.year}
                  </span>
                  <span className="text-[10px] text-[#0d1a14]/30 uppercase tracking-[0.2em]">
                    {item.title}
                  </span>
                </div>

                {/* Highlight — hidden on mobile */}
                <p className="hidden md:block text-xs text-[#0d1a14]/40 leading-relaxed group-hover:text-[#0d1a14]/65 transition-colors duration-300">
                  {item.highlight}
                </p>

                {/* Status + Grade */}
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`text-[9px] uppercase tracking-[0.25em] px-3 py-1 rounded-full border transition-all duration-300 ${
                      item.status === "Completed"
                        ? "border-[#2a5c47]/30 text-[#2a5c47]/60 group-hover:border-[#2a5c47] group-hover:text-[#2a5c47]"
                        : item.status === "In Progress"
                        ? "border-[#4a9276]/30 text-[#4a9276]/60 group-hover:border-[#4a9276] group-hover:text-[#4a9276]"
                        : "border-[#0d1a14]/15 text-[#0d1a14]/30 group-hover:border-[#0d1a14]/20 group-hover:text-[#0d1a14]/45"
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="text-lg font-semibold text-[#0d1a14]/45 group-hover:text-[#0d1a14]/80 transition-colors duration-300 tracking-tight">
                    {item.grade}
                  </span>
                </div>
              </div>

              {/* Hover arrow */}
              <motion.div
                animate={{ x: hovered === item.id ? 0 : -10, opacity: hovered === item.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2a5c47] text-lg pointer-events-none"
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: smooth }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 flex flex-wrap items-center gap-8 sm:gap-12 border-t border-[#0d1a14]/10 pt-10"
        >
          {[
            ["8.95", "Best CGPA"],
            ["4", "Years Journey"],
            ["2+", "Clubs & Teams"],
            ["AI & DS", "Specialization"],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-3xl font-bold bg-gradient-to-r from-[#2a5c47] to-[#4a9276] bg-clip-text text-transparent tracking-tight">
                {num}
              </span>
              <span className="text-[9px] text-[#0d1a14]/30 uppercase tracking-[0.3em]">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <Services />
    </div>
  );
};

export default Achievements;