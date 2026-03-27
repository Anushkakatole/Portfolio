import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services", to: "/services" },
];

function Navbar() {
  const { pathname } = useLocation();
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Animated bg that appears on scroll */}
      <motion.div
        className="absolute inset-0 bg-[#f5faf7]/95 backdrop-blur-lg border-b border-[#a8d4bc]/40"
        style={{ opacity: bgOpacity }}
      />

      <div className="relative w-full pt-8 px-5 md:px-10 py-4 flex items-center justify-between text-[#0f0f0f]">

        {/* LEFT: Logo with animated underline */}
        <motion.div whileHover="hover" className="relative">
          <Link to="/" className="text-sm tracking-[0.25em] uppercase text-slate-800 flex items-center gap-1.5">
            <motion.span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[#2a5c47]"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            ANUSHKA
            <span className="text-slate-400">·K</span>
          </Link>
          <motion.div
            className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-[#2a5c47] to-[#4a9276]"
            initial={{ width: 0 }}
            variants={{ hover: { width: "100%" } }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* CENTER: Nav links with indicator */}
        <div className="hidden md:flex items-center gap-1 bg-[#f0faf5] rounded-full px-2 py-1.5 border border-[#a8d4bc]/50">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.to;
            return (
              <motion.div
                key={link.to}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="relative"
              >
                {(hovered === i || isActive) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[#a8d4bc]/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Link
                  to={link.to}
                  className={`relative z-10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] block transition-colors duration-200 ${
                    isActive ? "text-[#2a5c47]" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT: Contact button (desktop) + Hamburger (mobile) */}
        <div className="flex items-center gap-3">
          <motion.div whileHover="hover" className="relative hidden md:block">
            {/* Glow behind button */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#4a9276]/15 blur-md"
              initial={{ opacity: 0, scale: 0.8 }}
              variants={{ hover: { opacity: 1, scale: 1.2 } }}
              transition={{ duration: 0.3 }}
            />
            <Link
              to="/contact"
              className="relative px-5 py-2.5 rounded-full border border-[#4a9276]/60 text-[11px] uppercase tracking-[0.2em] text-[#2a5c47] bg-gradient-to-r from-[#f0faf5] to-[#e8f5ef] hover:from-[#e8f5ef] hover:to-[#d5ede3] transition-all duration-300 flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-[#2a5c47] animate-pulse" />
              Contact
            </Link>
          </motion.div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-[1.5px] bg-[#0d1a14] origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-[#0d1a14]"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-[1.5px] bg-[#0d1a14] origin-center"
            />
          </button>
        </div>

      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden bg-[#f5faf7]/98 backdrop-blur-lg border-t border-[#a8d4bc]/30"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm uppercase tracking-[0.2em] py-3 border-b border-[#a8d4bc]/20 transition-colors duration-200 ${
                    pathname === link.to ? "text-[#2a5c47]" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 px-5 py-2.5 rounded-full border border-[#4a9276]/60 text-[11px] uppercase tracking-[0.2em] text-[#2a5c47] bg-gradient-to-r from-[#f0faf5] to-[#e8f5ef] flex items-center gap-2 w-fit"
              >
                <span className="w-1 h-1 rounded-full bg-[#2a5c47] animate-pulse" />
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;