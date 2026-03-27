import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

function Cursor() {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Raw mouse position — updated directly without re-renders
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Dot: snappy spring
  const dotX = useSpring(rawX, { stiffness: 600, damping: 32, mass: 0.4 });
  const dotY = useSpring(rawY, { stiffness: 600, damping: 32, mass: 0.4 });

  // Ring: slower, lags behind for the trailing effect
  const ringX = useSpring(rawX, { stiffness: 120, damping: 22, mass: 0.6 });
  const ringY = useSpring(rawY, { stiffness: 120, damping: 22, mass: 0.6 });

  useEffect(() => {
    const onMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    const onDown = () => setIsClicked(true);
    const onUp = () => setIsClicked(false);

    const onEnter = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };
    const onLeave = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [rawX, rawY]);

  return (
    <>
      {/* Outer ring — trails smoothly behind */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid rgba(42,92,71,0.8)",
          backgroundColor: isHovering ? "rgba(168,212,188,0.08)" : "transparent",
        }}
        animate={{
          width: isHovering ? 52 : isClicked ? 28 : 36,
          height: isHovering ? 52 : isClicked ? 28 : 36,
          borderWidth: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.9 : 0.55,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Inner dot — snappy, precise */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#2a5c47",
        }}
        animate={{
          width: isHovering ? 5 : isClicked ? 10 : 6,
          height: isHovering ? 5 : isClicked ? 10 : 6,
          opacity: isHovering ? 0.6 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </>
  );
}

export default Cursor;