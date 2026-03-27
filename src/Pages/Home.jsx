import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import AnimatedBackground from "./AnimatedBackground";


const roles = [
  "Full Stack Developer",
  "Graphic Designer",
  "Machine Learner",
  "Data Analytics"
];

function Home() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-black via-purple-950/10 to-black">
      <AnimatedBackground />

      {/* Hero Section with Modern Design */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20 pb-20">
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, 0]
          }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-3xl opacity-50"
        ></motion.div>
        <motion.div
          animate={{ 
            y: [0, 40, 0],
            x: [0, -20, 0]
          }}
          transition={{ repeat: Infinity, duration: 7 }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-3xl opacity-40"
        ></motion.div>

        {/* Floating Particles */}
        <motion.div
          className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
          style={{ top: "15%", left: "10%" }}
          animate={{ 
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          className="absolute w-1.5 h-1.5 bg-pink-400/60 rounded-full"
          style={{ top: "25%", right: "15%" }}
          animate={{ 
            y: [0, -40, 0],
            x: [0, -25, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
        ></motion.div>

        <motion.div
          className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
          style={{ bottom: "20%", left: "20%" }}
          animate={{ 
            y: [0, -60, 0],
            x: [0, 40, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        ></motion.div>

        <motion.div
          className="absolute w-2.5 h-2.5 bg-purple-300/50 rounded-full"
          style={{ bottom: "30%", right: "10%" }}
          animate={{ 
            y: [0, -35, 0],
            x: [0, -30, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
        ></motion.div>

        {/* Floating Code Brackets */}
        <motion.div
          className="absolute text-purple-400/40 text-4xl font-bold"
          style={{ top: "20%", left: "5%" }}
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          &lt;/&gt;
        </motion.div>

        <motion.div
          className="absolute text-pink-400/40 text-3xl font-bold"
          style={{ top: "30%", right: "8%" }}
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
        >
          {'{ }'}
        </motion.div>

        {/* Floating Orb Rings */}
        <motion.div
          className="absolute w-32 h-32 border border-purple-400/30 rounded-full"
          style={{ top: "10%", right: "20%" }}
          animate={{ 
            rotate: 360,
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ repeat: Infinity, duration: 8, linear: true }}
        ></motion.div>

        <motion.div
          className="absolute w-24 h-24 border border-pink-400/20 rounded-full"
          style={{ bottom: "15%", left: "15%" }}
          animate={{ 
            rotate: -360,
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ repeat: Infinity, duration: 10, linear: true }}
        ></motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-5xl"
        >
          {/* Subtitle Badge */}
          <motion.div 
            variants={itemVariants}
            className="mb-8 flex items-center justify-center gap-2"
          >
            <motion.div 
              className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            ></motion.div>
            <span className="text-purple-300 text-sm font-semibold tracking-widest uppercase">Welcome to my portfolio</span>
            <motion.div 
              className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            ></motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
              <motion.span 
                className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              >
                Creative
              </motion.span>
              <br />
              <motion.span 
                className="inline-block text-white mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              >
                Digital Solutions
              </motion.span>
            </h1>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Crafting seamless digital experiences with <span className="text-pink-400 font-semibold">precision</span>, 
              <span className="text-purple-400 font-semibold"> passion</span>, and 
              <span className="text-pink-400 font-semibold"> purpose</span>
            </p>
          </motion.div>

          {/* Role Pills - Enhanced */}
          <motion.div variants={itemVariants} className="mb-14">
            <p className="text-sm text-gray-400 mb-8 uppercase tracking-widest font-semibold">Specialized Expertise In</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {roles.map((role, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 120 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(168, 85, 247, 0.25)"
                  }}
                  className="btn-glass rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-md"
                >
                  ✨ {role}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons - Modern Design */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleScroll}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 sm:px-10 py-4 rounded-full font-semibold text-lg overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-100 group-hover:opacity-110 transition-all duration-300"></div>
              <div className="absolute inset-0.5 bg-black rounded-full group-hover:bg-black/50 transition-all duration-300"></div>
              
              {/* Text and Icon */}
              <div className="relative z-10 flex items-center gap-2 justify-center">
                <span className="text-white">Explore My Work</span>
                <motion.span
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-xl"
                >
                  ↓
                </motion.span>
              </div>
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-4 rounded-full font-semibold text-lg border-2 border-purple-500/50 text-white hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-md"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 grid grid-cols-3 gap-8 pt-12 border-t border-purple-500/20"
          >
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "5+", label: "Skills Mastered" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <About />
    </div>
  );
}

export default Home;