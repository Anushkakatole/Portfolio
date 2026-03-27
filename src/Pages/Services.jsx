import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars
import Process from "./Process";
import PageWrapper from "./PageWrapper";

const services = [
  {
    id: "01",
    title: "Full Stack Developer",
    symbol: "{ }",
    description: "Passionate Full Stack Developer skilled in building modern web applications using the MERN stack. Experienced in developing responsive UIs, secure APIs, and deploying real-world projects.",
    skills: ["React.js", "Node.js", "Tailwind", "MongoDB", "Express.js", "REST APIs", "GitHub", "Responsive UI", "API Development"],
    color: "#2a5c47",
    colorLight: "rgba(42,92,71,0.08)",
  },
  {
    id: "02",
    title: "Machine Learning",
    symbol: "∿",
    description: "Machine Learning enthusiast with hands-on experience in building end-to-end ML solutions including preprocessing, training, and deployment.",
    skills: ["Python", "Scikit-learn", "NLP", "Streamlit", "Model Training", "Feature Engineering", "Classification", "Regression"],
    color: "#4a9276",
    colorLight: "rgba(74,146,118,0.08)",
  },
  {
    id: "03",
    title: "Data Analyst",
    symbol: "▦",
    description: "Detail-oriented Data Analyst skilled in transforming raw data into meaningful insights using Python and visualization tools.",
    skills: ["Pandas", "NumPy", "Data Visualization", "EDA", "Data Cleaning", "Matplotlib", "Seaborn", "Jupyter Notebooks"],
    color: "#2a5c47",
    colorLight: "rgba(168,212,188,0.12)",
  },
  {
    id: "04",
    title: "Graphic Designer",
    symbol: "◇",
    description: "Creative Graphic Designer focused on building visually appealing and user-friendly designs with strong UI/UX principles.",
    skills: ["UI/UX", "Canva", "Responsive Design", "Typography", "Brand Design"],
    color: "#4a9276",
    colorLight: "rgba(74,146,118,0.08)",
  },
];

const allSkills = [
  "React.js", "Node.js", "Python", "MongoDB", "Scikit-learn", "NLP",
  "Pandas", "NumPy", "UI/UX", "Tailwind", "REST APIs", "Machine Learning",
  "Data Analysis", "Figma", "Canva", "Express.js",
];

const smooth = [0.25, 0.46, 0.45, 0.94];

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-[#f5faf7] text-[#0d1a14] overflow-hidden">

        {/* Ambient glows */}
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

        {/* Fine grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="svc-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1a3328" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-grid)" />
        </svg>

        {/* Vertical accent lines */}
        <motion.div className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-[#2a5c47]/12 to-transparent pointer-events-none" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} />
        <motion.div className="absolute top-0 right-[25%] w-px h-full bg-gradient-to-b from-transparent via-[#4a9276]/8 to-transparent pointer-events-none" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }} />

        {/* Corner marks */}
        <div className="absolute top-28 right-8 flex flex-col items-end gap-1.5 pointer-events-none">
          <motion.div initial={{ width: 0 }} animate={{ width: 64 }} transition={{ duration: 1, delay: 1 }} className="h-px bg-gradient-to-l from-[#2a5c47]/60 to-transparent" />
          <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 1, delay: 1.2 }} className="h-px bg-gradient-to-l from-[#2a5c47]/30 to-transparent" />
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
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#0d1a14]/40">What I Do</span>
          </motion.div>

          {/* Editorial heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: smooth }}
            viewport={{ once: true }}
            className="mb-20 flex items-end justify-between flex-wrap gap-6"
          >
            <h1 className="text-[3rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[10rem] leading-[0.85] tracking-tighter uppercase font-bold">
              <span className="block text-[#0d1a14]">MY</span>
              <span className="block bg-gradient-to-r from-[#2a5c47] via-[#3d7a60] to-[#4a9276] bg-clip-text text-transparent">.SKILLS</span>
            </h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="w-24 h-24 mb-4 flex-shrink-0 opacity-25"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="svc-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"/>
                <text fontSize="10.5" fill="rgba(42,92,71,0.9)">
                  <textPath href="#svc-circle">DEVELOPER · DESIGNER · ANALYST · </textPath>
                </text>
              </svg>
            </motion.div>
          </motion.div>

          {/* ── Service Rows ── */}
          <div className="flex flex-col divide-y divide-[#0d1a14]/10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: smooth }}
                viewport={{ once: true }}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative cursor-pointer"
              >
                {/* Hover row wash */}
                <motion.div
                  animate={{ opacity: hovered === service.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{ background: `linear-gradient(90deg, ${service.colorLight}, transparent)` }}
                />

                {/* Top section: number · symbol · title · description */}
                <div className="relative grid grid-cols-[40px_40px_1fr] md:grid-cols-[72px_60px_280px_1fr] items-start gap-4 md:gap-6 px-2 py-8">

                  {/* Index */}
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#0d1a14]/30 group-hover:text-[#0d1a14]/60 transition-colors duration-300 pt-1">
                    {service.id}
                  </span>

                  {/* Symbol */}
                  <motion.span
                    animate={{
                      scale: hovered === service.id ? 1.3 : 1,
                      rotate: hovered === service.id ? 15 : 0,
                    }}
                    transition={{ duration: 0.35, ease: smooth }}
                    className="text-3xl font-mono select-none pt-0.5"
                    style={{ color: hovered === service.id ? service.color : "rgba(13,26,20,0.2)" }}
                  >
                    {service.symbol}
                  </motion.span>

                  {/* Title */}
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl md:text-3xl font-bold tracking-tight text-[#0d1a14]/75 group-hover:text-[#0d1a14] transition-colors duration-300">
                      {service.title}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#0d1a14]/30">
                      {service.skills.length} skills
                    </span>
                  </div>

                  {/* Description — only on desktop */}
                  <p className="hidden md:block text-xs text-[#0d1a14]/40 leading-relaxed group-hover:text-[#0d1a14]/60 transition-colors duration-300 max-w-lg pt-1">
                    {service.description}
                  </p>
                </div>

                {/* Skills row — expands on hover */}
                <AnimatePresence>
                  {hovered === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: smooth }}
                      className="overflow-hidden"
                    >
                      <div className="relative px-2 pb-6 pl-[calc(40px+40px+16px)] md:pl-[calc(72px+60px+24px)] flex flex-wrap gap-2">
                        {service.skills.map((skill, si) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, y: 8, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: si * 0.04, type: "spring", stiffness: 250 }}
                            className="text-[10px] uppercase tracking-[0.12em] px-3 py-1 rounded-full border transition-colors duration-200"
                            style={{
                              borderColor: `${service.color}50`,
                              color: service.color,
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover reveal bottom line */}
                <motion.div
                  animate={{ scaleX: hovered === service.id ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: smooth }}
                  className="absolute bottom-0 left-0 h-px w-full origin-left pointer-events-none"
                  style={{ background: `linear-gradient(90deg, ${service.color}70, ${service.color}30, transparent)` }}
                />

                {/* Hover arrow */}
                <motion.span
                  animate={{ x: hovered === service.id ? 0 : -10, opacity: hovered === service.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-3 top-10 text-lg pointer-events-none"
                  style={{ color: service.color }}
                >
                  →
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Scrolling marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="overflow-hidden py-3 border-y border-[#0d1a14]/10 my-16"
          >
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            >
              {[...allSkills, ...allSkills].map((skill, i) => (
                <span key={i} className="inline-flex items-center gap-10 text-[11px] text-[#0d1a14]/30 uppercase tracking-[0.3em]">
                  {skill}
                  <span className="text-[#4a9276]/60 text-xs">✦</span>
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Internship CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smooth }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-[#0d1a14]/10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#2a5c47]/12 via-transparent to-[#4a9276]/8 pointer-events-none"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <div className="relative z-10 flex flex-col gap-3 max-w-xl">
              <div className="flex items-center gap-2">
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-green-400/70">Available Now</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1a14] tracking-tight leading-tight">
                Open for{" "}
                <span className="bg-gradient-to-r from-[#2a5c47] to-[#4a9276] bg-clip-text text-transparent">Internship</span>
              </h2>
              <p className="text-sm text-[#0d1a14]/45 leading-relaxed">
                Actively looking for internship opportunities to apply my skills and grow professionally. If you have an exciting opportunity, I'd love to hear from you!
              </p>
            </div>
            <motion.a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative z-10 flex-shrink-0 px-8 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#2a5c47] to-[#4a9276] hover:shadow-lg hover:shadow-[#2a5c47]/30 transition-shadow duration-300"
            >
              Let's Connect →
            </motion.a>
          </motion.div>
        </div>

        <Process />
      </div>
    </PageWrapper>
  );
};

export default Services;