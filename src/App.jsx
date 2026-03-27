import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import "./index.css";
import Navbar from "./Pages/Navbar";
import Front from "./Pages/Front";
import Services from "./Pages/Services";
import End from "./Pages/End"
import Cursor from "./Pages/Cursor"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio"

function MouseGlow() {
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const handle = (e) => {
      mouseX.set(e.clientX - 160);
      mouseY.set(e.clientY - 160);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed w-[320px] h-[320px] rounded-full bg-[#a8d4bc]/20 blur-[90px] pointer-events-none z-0"
      style={{ x: springX, y: springY }}
    />
  );
}

function App() {
  return (

   <div className="font-poppins">

    <BrowserRouter>
      <Navbar />
      <MouseGlow />
      <Cursor />
      <Routes>
        <Route path="/" element={<Front />} />       
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<End />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;