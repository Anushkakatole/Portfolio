import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PageWrapper from "./PageWrapper"; 
import About from "./About";

const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
}));

const floatingRings = [
  { size: 90, x: 12, y: 18, duration: 22, color: "rgba(42,92,71,0.18)" },
  { size: 55, x: 88, y: 32, duration: 16, color: "rgba(74,146,118,0.15)" },
  { size: 40, x: 75, y: 78, duration: 13, color: "rgba(42,92,71,0.15)" },
  { size: 70, x: 22, y: 72, duration: 19, color: "rgba(74,146,118,0.12)" },
];

const marqueeItems = [
  "UI/UX Design", "Framer", "React", "Figma",
  "Motion Design", "Branding", "Prototyping", "Visual Design",
  "Typography", "Design Systems",
];

function Front() {
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const handle = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <PageWrapper>
      <Navbar />

      <section className="relative min-h-screen bg-[#f5faf7] text-[#0f0f0f] overflow-hidden flex flex-col">

        {/* Mouse follower glow */}
        <motion.div
          className="fixed w-[320px] h-[320px] rounded-full bg-[#a8d4bc]/20 blur-[90px] pointer-events-none z-0"
          animate={{ x: mousePos.x - 160, y: mousePos.y - 160 }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
        />

        {/* Animated background glows */}
        <motion.div
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#a8d4bc]/50 blur-[140px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#4a9276]/20 blur-[140px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-[#a8d4bc]/30 blur-[100px] pointer-events-none"
          animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#2a5c47]/15 pointer-events-none"
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

        {/* Expanding pulse rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute bottom-[12%] left-1/2 -translate-x-1/2 rounded-full border border-[#4a9276]/20 pointer-events-none"
            style={{ width: 80, height: 80 }}
            animate={{ scale: [1, 9], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, delay: i * 1.5, ease: "easeOut" }}
          />
        ))}

        {/* Grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Vertical accent lines */}
        <motion.div
          className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-[#2a5c47]/15 to-transparent pointer-events-none"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 right-[25%] w-px h-full bg-gradient-to-b from-transparent via-[#4a9276]/10 to-transparent pointer-events-none"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
        />

        {/* Corner lines top-right */}
        <div className="absolute top-28 right-8 flex flex-col items-end gap-1.5 pointer-events-none">
          <motion.div initial={{ width: 0 }} animate={{ width: 64 }} transition={{ duration: 1, delay: 1 }} className="h-px bg-gradient-to-l from-[#2a5c47]/60 to-transparent" />
          <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 1, delay: 1.2 }} className="h-px bg-gradient-to-l from-[#2a5c47]/30 to-transparent" />
          <motion.div initial={{ width: 0 }} animate={{ width: 20 }} transition={{ duration: 1, delay: 1.4 }} className="h-px bg-gradient-to-l from-[#2a5c47]/15 to-transparent" />
        </div>

        {/* Corner lines bottom-left */}
        <div className="absolute bottom-28 left-8 flex flex-col gap-1.5 pointer-events-none">
          <motion.div initial={{ width: 0 }} animate={{ width: 64 }} transition={{ duration: 1, delay: 1.4 }} className="h-px bg-gradient-to-r from-[#4a9276]/60 to-transparent" />
          <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 1, delay: 1.6 }} className="h-px bg-gradient-to-r from-[#4a9276]/30 to-transparent" />
          <motion.div initial={{ width: 0 }} animate={{ width: 20 }} transition={{ duration: 1, delay: 1.8 }} className="h-px bg-gradient-to-r from-[#4a9276]/15 to-transparent" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 max-w-[1400px] w-full mx-auto px-5 md:px-8 pt-28 sm:pt-36 md:pt-52 pb-4 flex flex-col justify-between">

          {/* Top: Name + Right info card */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-10">

            {/* BIG NAME LEFT */}
            {/* LEFT: Available badge + Name + meta */}
            <div className="flex flex-col gap-4">

              {/* BIG NAME */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[3.2rem] sm:text-[5.5rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-tighter uppercase"
              >
                <span className="block text-slate-900">ANUSHKA</span>
                <span className="block bg-gradient-to-r from-[#2a5c47] via-[#3d7a60] to-[#4a9276] bg-clip-text text-transparent">
                  .KATOLE
                </span>
              </motion.h1>

            </div>

            {/* RIGHT INFO CARD */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden md:flex flex-col gap-6 max-w-[340px] self-end relative"
            >

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2a5c47] to-[#4a9276] flex items-center justify-center shadow-lg shadow-[#2a5c47]/25">
                <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="22" stroke="#1a3328" strokeWidth="1.8"/>
                  <ellipse cx="24" cy="24" rx="10" ry="22" stroke="#1a3328" strokeWidth="1.8"/>
                  <line x1="2" y1="24" x2="46" y2="24" stroke="#1a3328" strokeWidth="1.8"/>
                  <path d="M7 10 C14 14 34 14 41 10M7 38 C14 34 34 34 41 38" stroke="#1a3328" strokeWidth="1.4" fill="none"/>
                </svg>
              </div>

              {/* Title */}
              <p className="text-sm text-slate-700 uppercase tracking-[0.18em] leading-snug">
                UI Visual Designer<br />& Framer Developer
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-[#2a5c47]/40 via-slate-200 to-transparent" />

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed">
                I love creating captivating and functional interfaces that evoke emotions and establish a connection between the brand and the user.
              </p>

              {/* Stats */}
              <div className="flex gap-6 pt-1">
                {[ ["20+", "Projects"], ["100%", "Passion"]].map(([num, label]) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="text-base text-[#2a5c47] tracking-tight">{num}</span>
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scrolling marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="overflow-hidden py-3 border-y border-[#a8d4bc]/40 my-3"
          >
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-10 text-[11px] text-slate-400 uppercase tracking-[0.3em]">
                  {item}
                  <span className="text-[#4a9276]/60 text-xs">✦</span>
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom: Floating card cluster */}
          <div className="flex justify-center pb-4 mt-8 md:mt-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-end justify-center gap-3 md:gap-4 flex-wrap sm:flex-nowrap"
            >
              {/* Card 1 — Status */}
              <motion.div
                className="relative w-36 sm:w-44 rounded-2xl border border-[#a8d4bc]/50 p-4 sm:p-5 hidden sm:flex flex-col gap-3 sm:gap-4 overflow-hidden flex-shrink-0"
                style={{ height: 180, background: "linear-gradient(160deg, #edf7f2 0%, #f5faf7 100%)" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2a5c47] to-[#4a9276]" />
                <div className="flex items-center gap-2">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                  <span className="text-[9px] text-green-600/80 uppercase tracking-[0.2em]">Available</span>
                </div>
                <div className="flex flex-col gap-1.5 mt-auto">
                  <span className="text-[9px] text-[#0d1a14]/30 uppercase tracking-[0.2em]">Currently</span>
                  <span className="text-sm font-bold text-[#0d1a14] leading-snug tracking-tight">Full Stack<br/>Developer</span>
                  <span className="text-[10px] text-[#4a9276]/80 mt-1 font-medium">& ML Engineer</span>
                </div>
              </motion.div>

              {/* Card 2 — Brand/Stats (center, tallest) */}
              <motion.div
                className="relative w-48 sm:w-52 rounded-2xl border border-[#a8d4bc]/50 p-4 sm:p-5 flex flex-col gap-4 sm:gap-5 overflow-hidden flex-shrink-0"
                style={{ height: 220, background: "linear-gradient(160deg, #2a5c47 0%, #3d7a60 60%, #4a9276 100%)" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.6 }}
              >
                {/* Subtle grid on dark card */}
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[9px] text-white/50 uppercase tracking-[0.25em]">Portfolio</span>
                  <span className="text-[9px] text-white/40 font-mono">2026—</span>
                </div>
                <div className="relative z-10 mt-auto flex flex-col gap-3">
                  <div className="text-4xl font-black text-white/90 tracking-tighter leading-none">AK</div>
                  <div className="h-px w-full bg-white/20" />
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "Python", "ML", "UI/UX"].map((tag) => (
                      <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-white/15 text-white/75 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card 3 — Stats */}
              <motion.div
                className="relative w-36 sm:w-44 rounded-2xl border border-[#a8d4bc]/50 p-4 sm:p-5 hidden sm:flex flex-col gap-3 sm:gap-4 overflow-hidden flex-shrink-0"
                style={{ height: 180, background: "linear-gradient(160deg, #edf7f2 0%, #f5faf7 100%)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.2 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4a9276] to-[#a8d4bc]" />
                <span className="text-[9px] text-[#0d1a14]/30 uppercase tracking-[0.25em]">Numbers</span>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-auto">
                  {[["8.8", "CGPA"], ["20+", "Projects"], ["4", "Domains"], ["2+", "Clubs"]].map(([n, l]) => (
                    <div key={l} className="flex flex-col gap-0.5">
                      <span className="text-xl font-black text-[#2a5c47] leading-none tracking-tight">{n}</span>
                      <span className="text-[8px] text-[#0d1a14]/30 uppercase tracking-widest">{l}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex justify-center pb-2"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-[9px] text-slate-400 uppercase tracking-[0.4em]">Scroll</span>
              <motion.div
                className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent"
                animate={{ scaleY: [0, 1, 0] }}
                style={{ originY: 0 }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── SERVICES / TECH CARDS SECTION ── */}
      <section className="relative bg-[#f4f3ff] text-[#0f0f0f] overflow-hidden">

        {/* Header */}
        <div className="max-w-[1200px] mx-auto px-8 pt-20 pb-12">
          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-20">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, margin: "-60px" }}
                className="inline-flex items-center gap-2 border border-[#a8d4bc]/40 rounded-full px-3 py-1 mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2a5c47] animate-pulse" />
                <span className="text-[11px] text-slate-500 uppercase tracking-widest">Services</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, margin: "-60px" }}
                className="text-3xl md:text-4xl leading-tight"
              >
                <span className="text-slate-800">I build things that</span>{" "}
                <span className="italic text-[#2a5c47]">think, scale,</span>
                <br />
                <span className="text-slate-800">and look</span>{" "}
                <span className="italic text-[#2a5c47]">exceptional.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-60px" }}
              className="md:max-w-[320px] text-slate-500 text-sm leading-relaxed"
            >
              From full-stack web apps to ML models and polished UI — I blend engineering and design to ship products that work and feel great.
            </motion.p>
          </div>
        </div>

        {/* 4 Tech Cards */}
        <div className="max-w-[1200px] mx-auto px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Card 1 — Full Stack */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="flex flex-col rounded-2xl overflow-hidden border transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)]"
              style={{ background: "linear-gradient(160deg, rgba(79,70,229,0.06) 0%, #ffffff 60%)", borderColor: "rgba(79,70,229,0.2)" }}
            >
              <div className="h-[220px] p-3">
                <div className="w-full h-full bg-[#0d0d12] rounded-xl p-4 font-mono text-[11px] leading-relaxed overflow-hidden">
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-[#0d1a14]/30 text-[10px]">App.jsx</span>
                  </div>
                  <div className="space-y-1">
                    <p><span className="text-[#2a5c47]">import</span> <span className="text-[#0d1a14]/65">React</span> <span className="text-[#2a5c47]">from</span> <span className="text-green-400">'react'</span></p>
                    <p><span className="text-[#2a5c47]">import</span> <span className="text-[#4a9276]">{"{ useState }"}</span> <span className="text-[#2a5c47]">from</span> <span className="text-green-400">'react'</span></p>
                    <p className="text-[#0d1a14]/30">─────────────────</p>
                    <p><span className="text-blue-400">const</span> <span className="text-yellow-300">App</span> <span className="text-[#0d1a14]/55">= () =&gt;</span> <span className="text-[#0d1a14]/55">{"{"}</span></p>
                    <p className="pl-4"><span className="text-blue-400">const</span> <span className="text-[#0d1a14]/75">[data, setData]</span> <span className="text-[#0d1a14]/55">= useState([])</span></p>
                    <p className="pl-4 text-[#0d1a14]/40">// fetch from REST API</p>
                    <p className="pl-4"><span className="text-[#2a5c47]">return</span> <span className="text-[#0d1a14]/55">{"<"}</span><span className="text-red-300">Dashboard</span> <span className="text-[#4a9276]">data</span><span className="text-[#0d1a14]/55">=&#123;data&#125; /&gt;</span></p>
                    <p><span className="text-[#0d1a14]/55">{"}"}</span></p>
                  </div>
                  <div className="mt-3 flex gap-2">
                    {["React.js", "Node.js", "MongoDB"].map(t => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#2a5c47]/15 text-[#2a5c47] text-[9px]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 pt-4 border-t" style={{ borderColor: "rgba(42,92,71,0.15)" }}>
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 mb-2 block">Development</span>
                <h3 className="text-[15px] text-slate-800 mb-2 leading-snug">Full-Stack Web Development</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">End-to-end web apps built with React, Node.js, and MongoDB — from responsive UIs to secure REST APIs.</p>
              </div>
            </motion.div>

            {/* Card 2 — Machine Learning */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="flex flex-col rounded-2xl overflow-hidden border transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(236,72,153,0.15)]"
              style={{ background: "linear-gradient(160deg, rgba(124,58,237,0.06) 0%, #ffffff 60%)", borderColor: "rgba(124,58,237,0.2)" }}
            >
              <div className="h-[220px] p-3">
                <div className="w-full h-full bg-[#0d0d12] rounded-xl p-4 overflow-hidden">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] text-[#0d1a14]/45 uppercase tracking-widest">Model Training</span>
                    <span className="text-[10px] text-green-400">● Running</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {[
                      { label: "Accuracy", val: 94, color: "bg-[#2a5c47]" },
                      { label: "Precision", val: 89, color: "bg-[#4a9276]" },
                      { label: "Recall", val: 91, color: "bg-blue-500" },
                      { label: "F1 Score", val: 90, color: "bg-emerald-500" },
                    ].map(({ label, val, color }) => (
                      <div key={label}>
                        <div className="flex justify-between text-[10px] text-[#0d1a14]/45 mb-1">
                          <span>{label}</span><span>{val}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/[0.07]">
                          <motion.div
                            className={`h-full rounded-full ${color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${val}%` }}
                            transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[#0d1a14]/10 pt-3 text-[10px] text-[#0d1a14]/40 font-mono">
                    <p><span className="text-yellow-300">epoch</span> <span className="text-[#0d1a14]/55">48/50 · loss:</span> <span className="text-green-400">0.042</span></p>
                    <p className="mt-1"><span className="text-blue-300">sklearn</span> <span className="text-[#0d1a14]/55">· NLP · Streamlit · Python</span></p>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-4 border-t" style={{ borderColor: "rgba(74,146,118,0.15)" }}>
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 mb-2 block">AI / ML</span>
                <h3 className="text-[15px] text-slate-800 mb-2 leading-snug">Machine Learning Solutions</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">End-to-end ML pipelines — data preprocessing, model training, evaluation, and Streamlit deployment.</p>
              </div>
            </motion.div>

            {/* Card 3 — Data Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="flex flex-col rounded-2xl overflow-hidden border transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)]"
              style={{ background: "linear-gradient(160deg, rgba(14,165,233,0.06) 0%, #ffffff 60%)", borderColor: "rgba(14,165,233,0.2)" }}
            >
              <div className="h-[220px] p-3">
                <div className="w-full h-full bg-[#0d0d12] rounded-xl p-4 overflow-hidden">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] text-[#0d1a14]/45 uppercase tracking-widest">EDA Dashboard</span>
                    <span className="text-[10px] text-[#2a5c47]">Pandas · NumPy</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-20 mb-3">
                    {[65, 40, 80, 55, 90, 45, 70, 60, 85, 50].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{ background: i % 3 === 0 ? "rgba(139,92,246,0.8)" : i % 3 === 1 ? "rgba(236,72,153,0.5)" : "rgba(255,255,255,0.12)" }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[["12.4k", "Rows"], ["38", "Features"], ["99%", "Clean"]].map(([v, l]) => (
                      <div key={l} className="bg-[#0d1a14]/[0.04] rounded-lg p-2 text-center">
                        <p className="text-[#4a9276] text-sm">{v}</p>
                        <p className="text-[#0d1a14]/40 text-[9px] uppercase tracking-widest">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 pt-4 border-t" style={{ borderColor: "rgba(14,165,233,0.15)" }}>
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 mb-2 block">Analytics</span>
                <h3 className="text-[15px] text-slate-800 mb-2 leading-snug">Data Analysis &amp; Insights</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">Transforming raw datasets into clear, actionable insights using Python, Pandas, and rich visualizations.</p>
              </div>
            </motion.div>

            {/* Card 4 — Graphic Design */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="flex flex-col rounded-2xl overflow-hidden border transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(244,114,182,0.15)]"
              style={{ background: "linear-gradient(160deg, rgba(124,58,237,0.05) 0%, #ffffff 60%)", borderColor: "rgba(244,114,182,0.2)" }}
            >
              <div className="h-[220px] p-3">
                <div className="w-full h-full bg-[#0d0d12] rounded-xl p-4 overflow-hidden">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] text-[#0d1a14]/45 uppercase tracking-widest">Design System</span>
                    <span className="text-[10px] text-[#2a5c47]">Canva · UI/UX</span>
                  </div>
                  <div className="flex gap-2 mb-3">
                    {["#7c3aed","#db2777","#1d4ed8","#059669","#d97706","#ffffff"].map(c => (
                      <div key={c} className="w-7 h-7 rounded-lg shadow-lg" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="mb-3 border border-[#0d1a14]/10 rounded-lg p-2">
                    <p className="text-[#0d1a14]/30 text-[9px] uppercase mb-1">Typography</p>
                    <p className="text-white text-base leading-none">Aa Bb Cc</p>
                    <p className="text-[#0d1a14]/45 text-[10px] mt-0.5">Inter · 16px · Regular</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-6 rounded bg-[#2a5c47] flex items-center justify-center text-[9px] text-white">Button</div>
                    <div className="flex-1 h-6 rounded border border-[#0d1a14]/20 flex items-center justify-center text-[9px] text-[#0d1a14]/55">Input</div>
                    <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[9px] text-[#0d1a14]/55">✕</div>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-4 border-t" style={{ borderColor: "rgba(74,146,118,0.15)" }}>
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 mb-2 block">Design</span>
                <h3 className="text-[15px] text-slate-800 mb-2 leading-snug">Graphic &amp; UI/UX Design</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">Pixel-perfect interfaces and brand identities — built in Figma with strong typography and design systems.</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* AVAILABLE FOR NEW PROJECT marquee */}
        <div className="border-t border-b border-[#a8d4bc]/40 py-4 overflow-hidden bg-slate-50">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-4 mx-8 text-[11px] uppercase tracking-[0.35em] text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                AVAILABLE FOR NEW PROJECT
              </span>
            ))}
          </motion.div>
          <About />
        </div>

      </section>
    </PageWrapper>
  );
}

export default Front;