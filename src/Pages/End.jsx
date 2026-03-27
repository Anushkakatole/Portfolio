import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import PageWrapper from "./PageWrapper";

const faqs = [
  {
    id: 1,
    question: "What do I need to get started?",
    answer:
      "Simply reach out with your project idea, goals, and any relevant details. I'll guide you through the next steps, tools needed, and together we'll bring your vision to life.",
  },
  {
    id: 2,
    question: "What kind of projects do you take on?",
    answer:
      "I work on web apps, machine learning projects, data analysis dashboards, UI/UX design, and graphic design. If it's interesting and impactful, I'm in.",
  },
  {
    id: 3,
    question: "Are you available for internships?",
    answer:
      "Yes! I'm actively looking for internship opportunities in full-stack development, AI/ML, or design. Feel free to reach out via LinkedIn.",
  },
  {
    id: 4,
    question: "What technologies do you work with?",
    answer:
      "React, Node.js, Python, MongoDB, Tailwind CSS, Scikit-learn, Pandas, Figma, Canva — and I'm always adding new tools to the stack.",
  },
  {
    id: 5,
    question: "How can I contact you?",
    answer:
      "Best way is via LinkedIn or Instagram. You can also check out my GitHub to see my latest work before reaching out.",
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

const End = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageWrapper>
      <div className="relative bg-[#f5faf7] text-[#0d1a14] overflow-hidden">

        {/* Glows */}
        <motion.div
          className="absolute top-[-8%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#2a5c47]/10 blur-[140px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-8%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#4a9276]/10 blur-[140px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        />

        {/* Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#2a5c47]/12 pointer-events-none"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [-20, 20, -20], opacity: [0, 0.8, 0] }}
            transition={{ repeat: Infinity, duration: p.duration, delay: p.delay, ease: "easeInOut" }}
          />
        ))}

        {/* Grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="end-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1a3328" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#end-grid)" />
        </svg>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 pt-16 sm:pt-24 pb-24">

          {/* ── Quote Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: smooth }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl mb-16 sm:mb-24"
            style={{ minHeight: 280 }}
          >
            {/* Dark atmospheric background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a14] via-[#132318] to-[#09120e]" />

            {/* Animated concentric rings — mimics the 3D sphere image */}
            {[240, 320, 400, 480, 560].map((size, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-white/[0.06] pointer-events-none"
                style={{
                  width: size, height: size,
                  top: "50%", left: "60%",
                  marginLeft: -size / 2, marginTop: -size / 2,
                }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.03, 1] }}
                transition={{
                  rotate: { repeat: Infinity, duration: 20 + i * 6, ease: "linear" },
                  scale: { repeat: Infinity, duration: 5 + i * 1.5, ease: "easeInOut" },
                }}
              />
            ))}

            {/* Floating orbs */}
            {[
              { size: 18, x: "58%", y: "25%", color: "bg-white/10" },
              { size: 12, x: "72%", y: "55%", color: "bg-[#a8d4bc]/40" },
              { size: 22, x: "50%", y: "68%", color: "bg-white/8" },
              { size: 10, x: "80%", y: "30%", color: "bg-[#4a9276]/25" },
              { size: 16, x: "65%", y: "78%", color: "bg-white/12" },
            ].map((orb, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${orb.color} pointer-events-none`}
                style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
                animate={{ y: [-8, 8, -8], x: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 3 + i * 0.7, ease: "easeInOut", delay: i * 0.4 }}
              />
            ))}

            {/* Central glow orb */}
            <motion.div
              className="absolute rounded-full bg-[#4a9276]/25 blur-3xl pointer-events-none"
              style={{ width: 300, height: 300, left: "60%", top: "50%", marginLeft: -150, marginTop: -150 }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />

            {/* Quote text */}
            <div className="relative z-10 p-7 sm:p-10 md:p-16 max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: smooth }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
              >
                "CODE IS CRAFT,<br />
                <span className="bg-gradient-to-r from-[#a8d4bc] to-white bg-clip-text text-transparent">
                  DATA IS ART"
                </span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                viewport={{ once: true }}
                className="text-sm text-white/40 font-medium uppercase tracking-[0.2em]"
              >
                Anushka Katole
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                viewport={{ once: true }}
                className="text-[9px] text-white/25 uppercase tracking-[0.3em] mt-1"
              >
                BTech AI &amp; Data Science
              </motion.p>
            </div>
          </motion.div>

          {/* ── FAQ Section ── */}
          <div className="mb-24">
            {/* Header bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-between border-y border-[#0d1a14]/10 py-4 mb-2"
            >
              <span className="text-[10px] text-[#0d1a14]/30 uppercase tracking-[0.3em]">//</span>
              <span className="text-xs text-[#0d1a14]/45 uppercase tracking-[0.4em] font-medium">FAQ</span>
              <span className="text-[10px] text-[#0d1a14]/30 uppercase tracking-[0.3em]">//</span>
            </motion.div>

            {/* Accordion items */}
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: smooth }}
                  viewport={{ once: true }}
                  className="border-b border-[#0d1a14]/10"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center gap-6 py-6 text-left group cursor-pointer"
                  >
                    {/* Number */}
                    <span className="text-[10px] font-mono text-[#0d1a14]/30 group-hover:text-[#2a5c47]/70 transition-colors duration-300 w-4 flex-shrink-0">
                      {faq.id}
                    </span>

                    {/* Question */}
                    <span className="flex-1 text-sm md:text-base font-semibold text-[#0d1a14]/55 group-hover:text-[#0d1a14]/85 transition-colors duration-300 uppercase tracking-[0.08em]">
                      {faq.question}
                    </span>

                    {/* +/− icon */}
                    <motion.span
                      animate={{ rotate: openFaq === faq.id ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: smooth }}
                      className="text-[#0d1a14]/40 group-hover:text-[#2a5c47] text-xl leading-none transition-colors duration-300 flex-shrink-0"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: smooth }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pl-10 text-sm text-[#0d1a14]/45 leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Contact / CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: smooth }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-t border-[#0d1a14]/10 pt-16"
          >
            {/* Left */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-2 h-2 rounded-full bg-green-400 inline-block"
                />
                <span className="text-[10px] uppercase tracking-[0.3em] text-green-400/70">Available for Work</span>
              </div>
              <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-bold leading-[0.85] tracking-tighter uppercase">
                <span className="block text-[#0d1a14]">LET'S</span>
                <span className="block bg-gradient-to-r from-[#2a5c47] via-[#3d7a60] to-[#4a9276] bg-clip-text text-transparent">
                  .CONNECT
                </span>
              </h2>
              <p className="text-xs text-[#0d1a14]/35 leading-relaxed max-w-sm mt-2">
                Open to internships, collaborations, and exciting opportunities. Let's build something impactful together.
              </p>
            </div>

            {/* Right: social links + buttons */}
            <div className="flex flex-col gap-6">
              {/* Social links */}
              <div className="flex flex-col gap-3">
                {[
                  { href: "https://www.instagram.com/__anushka.10__/", icon: <FaInstagram />, label: "Instagram" },
                  { href: "https://www.linkedin.com/in/anushka-katole-79b380331/", icon: <FaLinkedin />, label: "LinkedIn" },
                  { href: "https://github.com/Anushkakatole", icon: <FaGithub />, label: "GitHub" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-3 text-sm text-[#0d1a14]/45 hover:text-[#0d1a14]/80 transition-colors duration-300 group"
                  >
                    <span className="text-base text-[#0d1a14]/30 group-hover:text-[#2a5c47] transition-colors duration-300">{s.icon}</span>
                    <span className="uppercase tracking-[0.15em] text-[10px]">{s.label}</span>
                    <span className="ml-auto text-[#0d1a14]/25 group-hover:text-[#2a5c47]/70 transition-colors duration-300 text-xs">→</span>
                  </motion.a>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-2">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://www.linkedin.com/in/anushka-katole-79b380331/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#2a5c47] to-[#4a9276] hover:shadow-lg hover:shadow-[#2a5c47]/25 transition-shadow duration-300 uppercase tracking-[0.1em]"
                >
                  Get in Touch
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate("/portfolio")}
                  className="px-6 py-3 rounded-full text-xs font-semibold text-[#0d1a14]/65 border border-[#0d1a14]/15 hover:border-[#2a5c47]/40 hover:text-[#0d1a14] transition-all duration-300 uppercase tracking-[0.1em]"
                >
                  View Work
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-[#0d1a14]/7 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <span className="text-[10px] text-[#0d1a14]/25 uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} Anushka Katole
            </span>
            <span className="text-[10px] text-[#0d1a14]/15 uppercase tracking-[0.3em]">All Rights Reserved</span>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default End;