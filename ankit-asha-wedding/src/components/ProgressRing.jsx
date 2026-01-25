import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ProgressRing = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed bottom-8 left-8 z-50 pointer-events-none hidden md:block">
      <svg width="60" height="60" viewBox="0 0 100 100" className="-rotate-90">
        {/* Background Circle */}
        <circle cx="50" cy="50" r="40" stroke="#b38728" strokeWidth="2" fill="transparent" opacity="0.2" />
        
        {/* Animated Progress Circle */}
        <motion.circle
          cx="50" cy="50" r="40"
          stroke="#b38728" strokeWidth="4"
          fill="transparent"
          strokeDasharray="251.2"
          strokeDashoffset="251.2"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px] text-[#b38728] font-bold">
        SCROLL
      </span>
    </div>
  );
};

export default ProgressRing;