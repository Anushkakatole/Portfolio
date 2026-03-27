import React from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const PageWrapper = ({ children, id = "" }) => {
  return (
    <div id={id} className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageWrapper;
