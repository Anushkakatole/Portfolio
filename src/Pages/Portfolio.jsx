import React, { useRef, useState, useCallback, useMemo } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Achievements from "./Achievements";
import PageWrapper from "./PageWrapper";

const projects = [
  { id: 1, title: "DESIGNRUSH", image: "/work/DESIGNRUSH.png", tags: ["UI/UX", "REACT", "TAILWIND"], category: "Full Stack", link: "#" },
  { id: 2, title: "OBYS AGENCY", image: "/work/obys.png", tags: ["FRAMER MOTION", "REACT"], category: "Full Stack", link: "#" },
  { id: 3, title: "OPTITREND", image: "/work/optitrend.png", tags: ["UI/UX", "E-COMMERCE"], category: "Full Stack", link: "#" },
  { id: 4, title: "A COTTON WEAVE", image: "/work/acotton.jpeg", tags: ["REACT", "UI/UX"], category: "Full Stack", link: "#" },
  { id: 5, title: "PREMIER", image: "/work/premier.png", tags: ["FRAMER MOTION", "UI/UX"], category: "Full Stack", link: "#" },
  { id: 6, title: "DECISION TREE", image: "/work/DT.jpeg", tags: ["PYTHON", "ML", "SCIKIT-LEARN"], category: "Machine Learning", link: "#" },
  { id: 7, title: "LOAN PREDICTOR", image: "/work/loan.png", tags: ["PYTHON", "NAIVE BAYES"], category: "Machine Learning", link: "#" },
  { id: 8, title: "MOVIE RECOMMENDER", image: "/work/movie.png", tags: ["NLP", "PYTHON", "STREAMLIT"], category: "Machine Learning", link: "#" },
  { id: 9, title: "MARKS PREDICTION", image: "/work/marks.png", tags: ["XGBOOST", "PYTHON"], category: "Data Science", link: "#" },
  { id: 10, title: "PERSONALITY APP", image: "/work/personality.png", tags: ["ML", "STREAMLIT"], category: "Machine Learning", link: "#" },
  { id: 11, title: "TIC TAC TOE", image: "/work/tictactoe.jpeg", tags: ["PYTHON", "NUMPY"], category: "Full Stack", link: "#" },
];

const categories = ["All", "Full Stack", "Machine Learning", "Data Science"];

// Helper to pair projects into rows
const buildRows = (list) => {
  const rows = [];
  for (let i = 0; i < list.length; i += 2) {
    rows.push({
      left: list[i],
      right: list[i + 1] || null,
      reversed: Math.floor(i / 2) % 2 === 1,
    });
  }
  return rows;
};

/* ── Magnetic Tilt Card ─────────────────────────────────── */
const ProjectCard = ({ project, isLarge, delay = 0, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }, [mouseX, mouseY]);

  const padNum = String(index).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      className={isLarge ? "md:col-span-7 col-span-12" : "md:col-span-5 col-span-12"}
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.95 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="group relative"
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Mint glow ring on hover */}
        <motion.div
          className="absolute -inset-[2px] rounded-[20px] pointer-events-none z-0"
          style={{
            background: "linear-gradient(135deg, rgba(168,212,188,0.45), rgba(74,146,118,0.3), rgba(42,92,71,0.2))",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Image Container */}
        <motion.div
          className={`relative overflow-hidden rounded-2xl bg-[#132318] z-10 ${
            isLarge ? "h-[340px] md:h-[500px]" : "h-[280px] md:h-[420px]"
          }`}
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={isInView ? { clipPath: "inset(0% 0% 0% 0%)" } : { clipPath: "inset(100% 0% 0% 0%)" }}
          transition={{ duration: 1.2, delay: delay + 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Index watermark */}
          <span className="absolute top-4 left-5 text-[11px] font-mono text-[#a8d4bc]/30 z-20 tracking-wider">
            {padNum}
          </span>

          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={isInView ? { scale: 1 } : { scale: 1.2 }}
            transition={{ duration: 1.6, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ scale: hovered ? 1.06 : 1 }}
            loading="lazy"
          />

          {/* Hover overlay — deep forest tint */}
          <motion.div
            className="absolute inset-0 flex items-end justify-between p-6 z-20"
            style={{
              background: hovered
                ? "linear-gradient(to top, rgba(13,26,20,0.92) 0%, rgba(42,92,71,0.4) 50%, transparent 100%)"
                : "linear-gradient(to top, rgba(13,26,20,0) 0%, transparent 100%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.35 }}
          >
            <span className="text-sm tracking-[0.25em] uppercase text-[#a8d4bc] font-light">
              View Project
            </span>
            <motion.div
              className="w-10 h-10 rounded-full bg-[#a8d4bc]/15 backdrop-blur-sm flex items-center justify-center border border-[#a8d4bc]/40"
              animate={{ x: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={16} className="text-[#a8d4bc]" />
            </motion.div>
          </motion.div>

          {/* Mint shimmer streak */}
          <motion.div
            className="absolute inset-0 z-30 pointer-events-none"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(168,212,188,0.04) 45%, rgba(168,212,188,0.08) 50%, rgba(168,212,188,0.04) 55%, transparent 60%)",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: hovered ? "100%" : "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Card Info */}
        <div className="flex items-end justify-between mt-5 gap-4 relative z-10">
          <div className="min-w-0">
            <div className="flex items-baseline gap-3 mb-3">
              <motion.span
                className="text-xs font-mono text-[#4a9276]/70 hidden md:inline"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: delay + 0.3 }}
              >
                {padNum}
              </motion.span>
              <motion.h3
                className="text-xl md:text-2xl font-bold tracking-wide uppercase text-[#a8d4bc]"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7, delay: delay + 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {project.title}
              </motion.h3>
            </div>

            {/* Animated mint separator */}
            <motion.div
              className="h-[1px] bg-gradient-to-r from-[#4a9276]/60 via-[#a8d4bc]/30 to-transparent mb-3"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.9, delay: delay + 0.4, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
              className="flex gap-2 flex-wrap"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: delay + 0.45 }}
            >
              {project.tags.map((tag, tagIdx) => (
                <motion.span
                  key={tag}
                  className="text-[11px] px-3 py-1 rounded-full border border-[#2a5c47]/40 text-[#4a9276]/80 uppercase tracking-widest font-medium hover:border-[#a8d4bc]/50 hover:text-[#a8d4bc] transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: delay + 0.5 + tagIdx * 0.06 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Arrow indicator — decorative only */}
          <motion.div
            className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 pointer-events-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: delay + 0.5, type: "spring", stiffness: 200 }}
          >
            <svg className="absolute inset-0 w-full h-full animate-[spin_8s_linear_infinite]" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="26" fill="none" stroke="url(#gradGreen)" strokeWidth="1" strokeDasharray="4 4" />
              <defs>
                <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(168,212,188,0.7)" />
                  <stop offset="100%" stopColor="rgba(74,146,118,0.4)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-1 rounded-full border border-[#4a9276]/40 flex items-center justify-center text-[#4a9276] bg-[#2a5c47]/10">
              <ArrowRight size={16} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ── Animated Horizontal Line Divider ───────────────────── */
const LineDivider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#2a5c47]/40 to-transparent my-6 md:my-10"
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    />
  );
};

/* ── Main Component ─────────────────────────────────────── */
const Projects = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState("All");

  // Animated counter for total projects
  const countRef = useRef(null);
  const isCountInView = useInView(countRef, { once: true });

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const projectRows = useMemo(() => buildRows(filteredProjects), [filteredProjects]);

  return (
    <PageWrapper>
      <div className="min-h-screen text-[#a8d4bc] pt-28 pb-20 px-5 md:px-14 lg:px-24 relative" style={{ background: "linear-gradient(160deg, #0d1a14 0%, #0f1f18 50%, #0d1a14 100%)" }}>

        {/* Deep forest atmosphere — layered glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2a5c47]/[0.08] rounded-full blur-[160px]" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#4a9276]/[0.06] rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-[#2a5c47]/[0.07] rounded-full blur-[120px]" />
          {/* Fine grid overlay */}
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(168,212,188,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,212,188,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-14 md:mb-20 relative"
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Ghost text — mint tinted */}
          <motion.span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] sm:text-[8rem] md:text-[14rem] font-black uppercase select-none pointer-events-none whitespace-nowrap leading-none hidden sm:block"
            style={{ color: "rgba(168,212,188,0.03)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            WORKS
          </motion.span>

          <motion.div
            className="flex items-center justify-center gap-5 md:gap-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <motion.span
              className="text-[#2a5c47] text-3xl md:text-4xl font-extralight select-none"
              animate={isHeaderInView ? { rotate: [0, -10, 0] } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              //
            </motion.span>
            <h1 className="text-3xl md:text-5xl lg:text-[3.2rem] font-bold tracking-[0.15em] md:tracking-[0.22em] uppercase">
              <motion.span className="inline-block text-[#a8d4bc]/80" initial={{ y: 40, opacity: 0 }} animate={isHeaderInView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>Featured</motion.span>{" "}
              <motion.span className="inline-block bg-gradient-to-r from-[#a8d4bc] via-[#f5faf7] to-[#a8d4bc] bg-clip-text text-transparent" initial={{ y: 40, opacity: 0 }} animate={isHeaderInView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.35 }}>Works</motion.span>
            </h1>
            <motion.span
              className="text-[#2a5c47] text-3xl md:text-4xl font-extralight select-none"
              animate={isHeaderInView ? { rotate: [0, 10, 0] } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              //
            </motion.span>
          </motion.div>

          <motion.p
            className="text-[#4a9276]/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A curated selection of projects that reflect our commitment
            <br className="hidden md:block" />
            to simplicity and purposeful design.
          </motion.p>

          {/* Project counter pill */}
          <motion.div
            ref={countRef}
            className="inline-flex items-center gap-2 mt-8 px-5 py-2 rounded-full border border-[#2a5c47]/40 bg-[#2a5c47]/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 15 }}
            animate={isCountInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#a8d4bc] animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#4a9276]">{filteredProjects.length} Projects</span>
          </motion.div>
        </motion.div>

        {/* ── Category Filter Buttons ────────────────────── */}
        <motion.div
          className="flex justify-center gap-3 md:gap-4 flex-wrap mb-16 md:mb-20 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <LayoutGroup>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-colors duration-300 ${
                  activeCategory === cat
                    ? "text-[#0d1a14]"
                    : "text-[#4a9276]/70 hover:text-[#a8d4bc]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#a8d4bc] to-[#4a9276] border border-[#a8d4bc]/30"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {activeCategory !== cat && (
                  <div className="absolute inset-0 rounded-full border border-[#2a5c47]/40" style={{ zIndex: -1 }} />
                )}
                {cat}
              </motion.button>
            ))}
          </LayoutGroup>
        </motion.div>

        {/* Project Rows */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {projectRows.map((row, rowIdx) => (
              <React.Fragment key={rowIdx}>
                {rowIdx > 0 && <LineDivider />}
                <div className="grid grid-cols-12 gap-5 md:gap-7">
                  {row.reversed ? (
                    <>
                      {row.right ? (
                        <>
                          <ProjectCard project={row.right} isLarge={false} delay={0.05} index={row.right.id} />
                          <ProjectCard project={row.left} isLarge={true} delay={0.2} index={row.left.id} />
                        </>
                      ) : (
                        <ProjectCard project={row.left} isLarge={true} delay={0.05} index={row.left.id} />
                      )}
                    </>
                  ) : (
                    <>
                      <ProjectCard project={row.left} isLarge={true} delay={0.05} index={row.left.id} />
                      {row.right && (
                        <ProjectCard project={row.right} isLarge={false} delay={0.2} index={row.right.id} />
                      )}
                    </>
                  )}
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Achievements />
    </PageWrapper>
  );
};

export default Projects;
