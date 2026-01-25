import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GiElephantHead } from "react-icons/gi"; 
// REMOVED: import SectionDivider from './SectionDivider'; (The curvy line)

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // --- ANIMATION VALUES (Restored for both couples) ---
  const opacityA = useTransform(scrollYProgress, [0, 0.25], [1, 0]); 
  const scaleA = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);
  const yA = useTransform(scrollYProgress, [0, 0.25], [0, -40]);
  
  const opacityB = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]); 
  const scaleB = useTransform(scrollYProgress, [0, 0.4], [0.85, 1.05]); 
  const yB = useTransform(scrollYProgress, [0, 0.4], [40, 0]);

  return (
    <section 
      ref={containerRef} 
      // Layout: Flexible column with gaps. No fixed height limits that cause overlap.
      className="min-h-screen w-full relative flex flex-col justify-center items-center overflow-hidden bg-[#fdfbf7] py-10 gap-8"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/royal.png')] fixed-bg"></div>
      
      {/* 1. TOP ICON */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 0.8, y: 0 }} 
        transition={{ duration: 1.5 }} 
        className="relative z-10 flex-shrink-0"
      >
        <GiElephantHead className="text-6xl md:text-7xl text-[#b38728] drop-shadow-xl" />
      </motion.div>

      {/* 2. MIDDLE SECTION: The Names */}
      <div className="relative w-full max-w-5xl flex flex-col items-center justify-center z-20">
        
        <motion.p 
          style={{ opacity: opacityA }}
          className="text-xs md:text-lg tracking-[0.4em] text-[#5e0b0b] font-body mb-6 uppercase"
        >
          The Wedding Of
        </motion.p>

        {/* Name Container: Sufficient height to hold the text safely */}
        <div className="relative w-full min-h-[350px] flex items-center justify-center">
            
            {/* COUPLE 1: ANKIT & ASHA */}
            <motion.div 
                style={{ opacity: opacityA, scale: scaleA, y: yA }}
                className="absolute inset-0 flex items-center justify-center top-0"
            >
                <h1 className="font-heading text-5xl md:text-8xl font-bold text-[#b38728] text-center leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] px-4">
                  Ankit <span className="text-3xl md:text-5xl align-middle text-[#5e0b0b] font-serif">&</span> Asha
                </h1>
            </motion.div>
            
            {/* COUPLE 2: SHUBHAM & NISHA */}
            <motion.div 
                 style={{ opacity: opacityB, scale: scaleB, y: yB }}
                 className="absolute inset-0 flex items-center justify-center top-0"
            >
                 <h2 className="font-heading text-4xl md:text-7xl font-bold text-[#b38728] text-center leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] px-4">
                    & Shubham <span className="block text-xl md:text-3xl mt-6 text-[#5e0b0b] tracking-wider">w/ Nisha</span>
                 </h2>
            </motion.div>
        </div>
      </div>

      {/* 3. BOTTOM SECTION: Date & Place */}
      <div className="relative z-20 flex flex-col items-center flex-shrink-0">
            <div className="w-0.5 h-8 md:h-12 bg-[#b38728] mb-4 opacity-60"></div>
            <p className="text-xl md:text-2xl font-bold text-[#2a0404]">13 • 02 • 2026</p>
            <p className="mt-2 text-[10px] md:text-sm text-[#8a6a28] uppercase tracking-[0.25em]">Palsana, Rajasthan</p>
      </div>

      {/* REMOVED: SectionDivider (The curvy line is gone) */}
    </section>
  );
};

export default Hero;