import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
import PageWrapper from "./PageWrapper";

const smooth = [0.25, 0.46, 0.45, 0.94];

const skills = [
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 85 },
  { name: "Machine Learning", level: 78 },
  { name: "Data Analytics", level: 82 },
  { name: "UI/UX Design", level: 88 },
  { name: "MongoDB", level: 75 },
];

const skillPills = [
  "Full Stack Dev", "React.js", "Machine Learning", "Data Analytics",
  "UI/UX Design", "Python", "MongoDB",
];

/* ── Stagger children helper ── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: smooth } },
};

/* ── Word-by-word reveal ── */
function AnimatedHeading({ text, className, delay = 0 }) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(8px)", rotateX: 30 },
            show: {
              opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0,
              transition: { duration: 0.6, ease: smooth },
            },
          }}
        >{word}</motion.span>
      ))}
    </motion.span>
  );
}

/* ── Animated skill bar ── */
function SkillBar({ name, level, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: smooth }}
      className="group"
    >
      <div className="flex justify-between mb-1.5">
          <span className="text-[12px] text-slate-600 uppercase tracking-[0.15em] group-hover:text-slate-800 transition-colors duration-300">{name}</span>
        <motion.span
          className="text-[11px] text-[#0d1a14]/40 tabular-nums"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 + index * 0.08 }}
        >{level}%</motion.span>
      </div>
      <div className="h-[3px] bg-[#0d1a14]/[0.07] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#2a5c47] to-[#4a9276]"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: 0.2 + index * 0.08, ease: smooth }}
        />
      </div>
    </motion.div>
  );
}

/* ── Section header ── */
function SectionHeader({ number, title }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-[#0d1a14]/10 pt-5 mb-14"
    >
      <div className="flex items-center gap-4">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
            className="text-[10px] text-[#2a5c47]/60 font-mono"
        >{number}</motion.span>
        <div className="h-px flex-1 bg-gradient-to-r from-[#0d1a14]/10 to-transparent" />
        <motion.span
          initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.15, ease: smooth }}
          viewport={{ once: true }}
            className="text-[11px] text-slate-500 uppercase tracking-[0.35em]"
        >{title}</motion.span>
        <div className="h-px flex-1 bg-gradient-to-l from-[#0d1a14]/10 to-transparent" />
        <span className="text-[10px] text-[#0d1a14]/25 font-mono">//</span>
      </div>
    </motion.div>
  );
}

function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: false, margin: "-100px" });

  useEffect(() => {
    const handle = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: 18 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      dur: Math.random() * 6 + 8,
      delay: Math.random() * 4,
    })), []);

  return (
    <PageWrapper>
      <Navbar />
      <div ref={containerRef} className="min-h-screen bg-[#f5faf7] text-[#0f0f0f] relative overflow-hidden">

        {/* ── SCROLL PROGRESS BAR ── */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2a5c47] via-[#4a9276] to-[#2a5c47] z-50 origin-left"
          style={{ scaleX: smoothProgress }}
        />

        {/* ── MOUSE FOLLOWER ── */}
        <motion.div
          className="fixed w-[350px] h-[350px] rounded-full bg-[#a8d4bc]/20 blur-[90px] pointer-events-none z-0"
          animate={{ x: mousePos.x - 175, y: mousePos.y - 175 }}
          transition={{ type: "spring", stiffness: 40, damping: 18 }}
        />

        {/* ── AMBIENT GLOWS ── */}
        <motion.div
          className="absolute top-[-10%] right-[-8%] w-[500px] h-[500px] rounded-full bg-[#a8d4bc]/40 blur-[160px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[5%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#4a9276]/15 blur-[140px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-[#a8d4bc]/20 blur-[120px] pointer-events-none"
          animate={{ x: [-50, 50, -50], y: [-30, 30, -30], opacity: [0.04, 0.09, 0.04] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
        />

        {/* ── GRID ── */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none">
          <defs>
            <pattern id="about-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>

        {/* ── PARTICLES ── */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#2a5c47]/10 pointer-events-none"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -40, 0], opacity: [0.1, 0.5, 0.1] }}
            transition={{ repeat: Infinity, duration: p.dur, delay: p.delay, ease: "easeInOut" }}
          />
        ))}

        {/* ── FLOATING RINGS ── */}
        {[200, 320, 500].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-[#4a9276]/[0.2] pointer-events-none"
            style={{ width: size, height: size, top: `${15 + i * 25}%`, left: `${60 + i * 10}%`, transform: "translate(-50%, -50%)" }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }}
            transition={{ rotate: { repeat: Infinity, duration: 30 + i * 15, ease: "linear" }, scale: { repeat: Infinity, duration: 6 + i * 2, ease: "easeInOut" } }}
          />
        ))}

        {/* ── PULSE RINGS ── */}
        {[0, 1.5, 3].map((delay, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4a9276]/10 pointer-events-none"
            animate={{ scale: [0.5, 2.5], opacity: [0.2, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay, ease: "easeOut" }}
            style={{ width: 200, height: 200 }}
          />
        ))}

        {/* ── CORNER ACCENTS ── */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: smooth }} className="absolute top-24 left-8 w-24 h-px bg-gradient-to-r from-[#2a5c47]/30 to-transparent origin-left pointer-events-none" />
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: smooth }} className="absolute top-24 left-8 w-px h-24 bg-gradient-to-b from-[#2a5c47]/30 to-transparent origin-top pointer-events-none" />
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 0.7, ease: smooth }} className="absolute top-24 right-8 w-24 h-px bg-gradient-to-l from-[#4a9276]/20 to-transparent origin-right pointer-events-none" />

        {/* ── VERTICAL LINES ── */}
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 2, delay: 0.8, ease: smooth }} className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#0d1a14]/[0.04] to-transparent origin-top pointer-events-none" />
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 2, delay: 1, ease: smooth }} className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#0d1a14]/[0.04] to-transparent origin-top pointer-events-none" />


        {/* ═══════════════════════════════════════════ */}
        {/* ══  SECTION 01 — ABOUT / INTRO  ══════════ */}
        {/* ═══════════════════════════════════════════ */}
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-32 relative z-10">
          <SectionHeader number="01" title="Who Am I" />

          {/* Big location text — word by word */}
          <div className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6.5rem] leading-[0.9] tracking-tight uppercase">
            <AnimatedHeading text="Software" className="block" delay={0} />
            <AnimatedHeading text="Engineer, Pune" className="block" delay={0.15} />
          </div>

          {/* Intro paragraph — staggered lines */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-10 max-w-[580px]"
          >
            <motion.p variants={fadeUp} className="text-slate-500 text-[15px] leading-[1.9]">
              I'm a Full Stack Developer and ML enthusiast driven by the intersection of design and engineering.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-500 text-[15px] leading-[1.9] mt-3">
              I build products that feel alive — from pixel-perfect React interfaces to intelligent ML systems that solve real problems.
            </motion.p>
          </motion.div>

          {/* Skill pills */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="flex flex-wrap gap-2.5 mt-10"
          >
            {skillPills.map((skill) => (
              <motion.span
                key={skill}
                variants={fadeUp}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(42,92,71,0.08)",
                  borderColor: "rgba(42,92,71,0.3)",
                  color: "rgba(42,92,71,1)",
                  transition: { duration: 0.2 },
                }}
                className="px-4 py-1.5 rounded-full border border-[#a8d4bc]/40 text-[11px] uppercase tracking-[0.2em] text-slate-500 cursor-default transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Globe — spinning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: smooth }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <motion.svg width="44" height="44" viewBox="0 0 48 48" fill="none" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }}>
              <circle cx="24" cy="24" r="22" stroke="#0f0f0f" strokeWidth="1.5"/><ellipse cx="24" cy="24" rx="10" ry="22" stroke="#0f0f0f" strokeWidth="1.5"/>
              <line x1="2" y1="24" x2="46" y2="24" stroke="#0f0f0f" strokeWidth="1.5"/><path d="M7 10 C14 14 34 14 41 10M7 38 C14 34 34 34 41 38" stroke="#0f0f0f" strokeWidth="1.2" fill="none"/>
            </motion.svg>
          </motion.div>

          {/* ── CENTER IMAGE with parallax ── */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: smooth }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative mx-auto mt-[-1rem] flex justify-center"
          >
            {/* Breathing glows */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[#4a9276]/12 rounded-full blur-[100px] pointer-events-none"
              animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.22, 0.1] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-[#a8d4bc]/12 rounded-full blur-[80px] pointer-events-none"
              animate={{ scale: [1.1, 0.85, 1.1], opacity: [0.06, 0.15, 0.06] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            />

            {/* Image with deep hover zoom */}
            <motion.div
              className="relative z-10 overflow-hidden rounded-3xl shadow-2xl shadow-slate-300/60 group cursor-pointer"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <motion.img
                src="/Anu.jpeg"
                alt="Anu.jpeg"
                className="w-[320px] md:w-[380px] h-[400px] md:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                animate={imageInView ? { y: [0, -8, 0] } : {}}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              {/* Hover overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf8]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Hover text reveal */}
              <motion.div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-[10px] text-[#0d1a14]/75 uppercase tracking-[0.3em] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available for Work
                </span>
              </motion.div>
            </motion.div>

            {/* Glitch strips */}
            <motion.div
              className="absolute top-[15%] right-[5%] z-20 w-[260px] md:w-[320px] h-[180px] md:h-[220px] overflow-hidden rounded-2xl pointer-events-none hidden md:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.35 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-[12%] bg-gradient-to-r from-[#2a5c47]/40 to-[#4a9276]/20"
                  style={{ marginTop: i * 2 }}
                  animate={{ x: [0, 10 + i * 3, 0], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 3 + i * 0.4, ease: "easeInOut", delay: i * 0.15 }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* ── ROLE TEXT OVERLAY ── */}
          <div className="relative mt-[-7rem] md:mt-[-9rem] z-20">
            {/* Glass backdrop for text readability */}
            <div className="absolute inset-0 -inset-x-4 bg-gradient-to-t from-[#fafaf8] via-[#fafaf8]/80 to-transparent pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-end justify-between gap-8">
              <div className="flex-1">
                <div className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[5.5rem] leading-[0.9] tracking-tight uppercase">
                  <AnimatedHeading text="Full Stack" className="block text-right" delay={0} />
                  <AnimatedHeading text="Developer /" className="block text-right" delay={0.12} />
                  <AnimatedHeading text="ML Engineer" className="block" delay={0.24} />
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.5, ease: smooth }}
                viewport={{ once: true }}
                className="relative md:max-w-[280px] text-slate-500 text-[13px] leading-relaxed text-right"
              >
                I specialize in Full Stack Development and Machine Learning, bringing a blend of engineering and creativity to every project. With tools like React, Python, and modern design — I ensure your vision comes to life seamlessly.
              </motion.p>
            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* ══  SECTION 02 — SKILLS  ═════════════════ */}
        {/* ═══════════════════════════════════════════ */}
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-32 relative z-10">
          <SectionHeader number="02" title="Skills & Expertise" />

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left — skill bars */}
            <div className="flex-1 flex flex-col gap-5">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
              ))}
            </div>

            {/* Right — approach cards */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="lg:w-[380px] flex flex-col gap-4"
            >
              {[
                { num: "01", title: "Think", desc: "Deep research and understanding user problems before writing code.", accent: "indigo" },
                { num: "02", title: "Build", desc: "Clean architecture, modern stack, and scalable production-ready solutions.", accent: "violet" },
                { num: "03", title: "Polish", desc: "Micro-interactions, smooth animations, and pixel-perfect details.", accent: "sky" },
              ].map(({ num, title, desc, accent }) => (
                <motion.div
                  key={num}
                  variants={fadeUp}
                  whileHover={{ y: -4, borderColor: accent === "indigo" ? "rgba(42,92,71,0.25)" : accent === "violet" ? "rgba(124,58,237,0.25)" : "rgba(14,165,233,0.25)" }}
                  className="rounded-2xl border border-[#a8d4bc]/40 bg-white p-6 transition-all duration-500 group cursor-default"
                >
                  <span className={`text-[10px] uppercase tracking-[0.3em] mb-3 block ${accent === "indigo" ? "text-[#2a5c47]/70" : accent === "violet" ? "text-violet-500/70" : "text-sky-500/70"}`}>{num}</span>
                  <h3 className="text-lg text-slate-800 mb-1.5 group-hover:text-[#0f0f0f] transition-colors duration-300">{title}</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="flex gap-12 md:gap-20 pt-14 mt-14 border-t border-[#a8d4bc]/40"
          >
            {[
              { num: "20+", label: "Projects Built" },
              { num: "4+", label: "Domains" },
  
            ].map(({ num, label }) => (
              <motion.div key={label} variants={fadeUp} className="flex flex-col gap-1.5">
                <motion.span
                  className="text-3xl md:text-4xl text-[#2a5c47] tracking-tight font-light"
                  whileInView={{ scale: [0.8, 1.05, 1] }}
                  transition={{ duration: 0.6, ease: smooth }}
                  viewport={{ once: true }}
                >{num}</motion.span>
                <span className="text-[9px] text-slate-400 uppercase tracking-[0.2em]">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── SCROLL MARQUEE DIVIDER ── */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden py-10 border-t border-b border-slate-100"
          >
            <motion.div animate={{ x: ["-50%", "0%"] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="flex whitespace-nowrap gap-12">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="text-[10px] text-slate-300 uppercase tracking-[0.5em] flex items-center gap-12">
                  <span>Developer</span><span className="text-[#4a9276]/40">◆</span>
                  <span>Designer</span><span className="text-[#4a9276]/35">◆</span>
                  <span>Engineer</span><span className="text-sky-400/25">◆</span>
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* ══  SECTION 03 — EDUCATION & EXPERIENCE ══ */}
        {/* ═══════════════════════════════════════════ */}
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-32 pb-8 relative z-10">
          <SectionHeader number="03" title="Education & Experience" />

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

            {/* ── LEFT COLUMN: EDUCATION ── */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: smooth }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-10"
              >
                <span className="w-8 h-8 rounded-lg bg-[#2a5c47]/10 border border-[#4a9276]/20 flex items-center justify-center text-[14px]">🎓</span>
                <span className="text-[13px] text-slate-600 uppercase tracking-[0.25em]">Education</span>
              </motion.div>

              {/* Timeline */}
              <div className="relative">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1.4, ease: smooth }}
                  viewport={{ once: true }}
                  className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#2a5c47]/40 via-[#4a9276]/15 to-transparent origin-top"
                />

                {[
                  {
                    period: "2024 – 2028",
                    title: "B.Tech Artificial Intelligence & Data Science",
                    org: "Dr. D. Y. Patil School of Science & Technology, Pimpri Chinchwad, Pune",
                    desc: "Specializing in AI/ML and Full Stack Development. Active in IEEE and open-source contributions.",
                    tags: ["CS", "AI/ML"],
                    color: "purple",
                  },

                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.7, delay: i * 0.15, ease: smooth }}
                    viewport={{ once: true, margin: "-40px" }}
                    className="relative pl-8 pb-10 last:pb-0 group"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#f5faf7] z-10 ${
                        item.color === "purple" ? "bg-[#2a5c47]" : item.color === "pink" ? "bg-[#4a9276]" : "bg-sky-500"
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.15, type: "spring", stiffness: 300 }}
                      viewport={{ once: true }}
                    />
                    {/* Pulse ring */}
                    <motion.div
                      className={`absolute left-[3px] top-[9px] w-[9px] h-[9px] rounded-full ${
                        item.color === "purple" ? "bg-[#2a5c47]/40" : item.color === "pink" ? "bg-[#4a9276]/40" : "bg-sky-500/40"
                      }`}
                      animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.5 }}
                    />

                    {/* Card */}
                    <motion.div
                      whileHover={{ borderColor: item.color === "purple" ? "rgba(42,92,71,0.3)" : item.color === "pink" ? "rgba(124,58,237,0.3)" : "rgba(14,165,233,0.3)", y: -2 }}
                      className="rounded-xl border border-[#a8d4bc]/40 bg-white p-5 transition-all duration-500"
                    >
                      <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] block mb-2">{item.period}</span>
                      <h4 className="text-[16px] text-slate-800 mb-1 group-hover:text-[#0f0f0f] transition-colors duration-300">{item.title}</h4>
                      <p className="text-[12px] text-[#2a5c47]/70 mb-2">{item.org}</p>
                      <p className="text-[12px] text-slate-500 leading-relaxed mb-3 group-hover:text-slate-600 transition-colors duration-300">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className={`px-2 py-0.5 rounded-full text-[9px] uppercase tracking-widest border ${
                            item.color === "purple" ? "border-[#2a5c47]/30 text-[#2a5c47]/60" :
                            item.color === "pink" ? "border-[#4a9276]/30 text-[#2a5c47]/60" :
                            "border-sky-400/30 text-sky-600/60"
                          }`}>{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── RIGHT COLUMN: EXPERIENCE ── */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: smooth }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-10"
              >
                <span className="w-8 h-8 rounded-lg bg-[#2a5c47]/8 border border-[#4a9276]/20 flex items-center justify-center text-[14px]">💼</span>
                <span className="text-[13px] text-slate-600 uppercase tracking-[0.25em]">Experience</span>
              </motion.div>

              {/* Timeline */}
              <div className="relative">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1.4, ease: smooth, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#2a5c47]/40 via-[#4a9276]/15 to-transparent origin-top"
                />

                {[
                  {
                    period: "Jan 2025 – Dec 2025",
                    title: "Design Team Member",
                    org: "IEEE Pune Section",
                    desc: "Creating visual identities, event graphics, and creative solutions for technical events and initiatives.",
                    tags: ["Design", "UI/UX"],
                    image: "/ieee.png",
                    color: "pink",
                  },

                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.15, ease: smooth }}
                    viewport={{ once: true, margin: "-40px" }}
                    className="relative pl-8 pb-10 last:pb-0 group"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#f5faf7] z-10 ${
                        item.color === "pink" ? "bg-[#4a9276]" : item.color === "purple" ? "bg-[#2a5c47]" : "bg-sky-500"
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.15, type: "spring", stiffness: 300 }}
                      viewport={{ once: true }}
                    />


                    {/* Card */}
                    <motion.div
                      whileHover={{ borderColor: item.color === "pink" ? "rgba(124,58,237,0.3)" : item.color === "purple" ? "rgba(42,92,71,0.3)" : "rgba(14,165,233,0.3)", y: -2 }}
                      className="rounded-xl border border-[#a8d4bc]/40 bg-white p-5 transition-all duration-500"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-[10px] text-[#0d1a14]/35 uppercase tracking-[0.2em]">{item.period}</span>

                      </div>

                      {item.image && (
                        <motion.div
                          className="overflow-hidden rounded-lg mb-3"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 200, damping: 18 }}
                        >
                          <img
                            src={item.image}
                            alt={item.org}
                            className="w-full h-24 object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
                          />
                        </motion.div>
                      )}

                      <h4 className="text-[16px] text-slate-800 mb-1 group-hover:text-[#0f0f0f] transition-colors duration-300">{item.title}</h4>
                      <p className={`text-[12px] mb-2 ${item.color === "pink" ? "text-[#2a5c47]/70" : item.color === "purple" ? "text-[#2a5c47]/70" : "text-sky-600/70"}`}>{item.org}</p>
                      <p className="text-[12px] text-slate-500 leading-relaxed mb-3 group-hover:text-slate-600 transition-colors duration-300">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className={`px-2 py-0.5 rounded-full text-[9px] uppercase tracking-widest border ${
                            item.color === "pink" ? "border-[#4a9276]/30 text-[#2a5c47]/60" :
                            item.color === "purple" ? "border-[#2a5c47]/30 text-[#2a5c47]/60" :
                            "border-sky-400/30 text-sky-600/60"
                          }`}>{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* ══  SECTION 04 — PROJECTS  ═══════════════ */}
        {/* ═══════════════════════════════════════════ */}
        <div className="max-w-[1200px] mx-auto px-8 pt-32 relative z-10">
          <SectionHeader number="04" title="Selected Work" />
        </div>

        <div className="h-4" />
      </div>

      <Portfolio />
    </PageWrapper>
  );
}

export default About;