import React from 'react';
import { motion } from 'framer-motion';

const GodRays = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Ray 1: Slow Rotation */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-50%] left-[-50%] right-[-50%] bottom-[-50%] opacity-30"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255, 215, 0, 0.1) 20deg, transparent 40deg, transparent 100deg, rgba(255, 215, 0, 0.1) 130deg, transparent 160deg)"
        }}
      />
      
      {/* Ray 2: Faster, Reverse Rotation for complexity */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-50%] left-[-50%] right-[-50%] bottom-[-50%] opacity-20"
        style={{
          background: "conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(179, 135, 40, 0.08) 15deg, transparent 60deg, transparent 140deg, rgba(179, 135, 40, 0.08) 180deg, transparent 220deg)"
        }}
      />
      
      {/* Central Glow to soften the source */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[500px] bg-[#fcf6ba] opacity-20 blur-[100px] rounded-full"></div>
    </div>
  );
};

export default GodRays;