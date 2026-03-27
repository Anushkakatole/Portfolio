// AnimatedBackground.jsx
import React from "react";
import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Example: Floating gradient circles */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 100, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -80, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-2xl"
        animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
    </div>
  );
}

export default AnimatedBackground;