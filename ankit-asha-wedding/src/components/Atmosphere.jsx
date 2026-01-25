import React from 'react';
import { motion } from 'framer-motion';

const Atmosphere = () => {
  return (
    <div className="fixed inset-0 z-[50] pointer-events-none overflow-hidden">
      {/* Film Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
      
      {/* Golden Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(42,4,4,0.15)_100%)]"></div>

      {/* Floating Gold Dust */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-[#b38728] rounded-full blur-[1px] opacity-60"
          style={{ width: Math.random() * 3 + 'px', height: Math.random() * 3 + 'px', top: Math.random() * 100 + '%', left: Math.random() * 100 + '%' }}
          animate={{ y: [0, -100, 0], x: [0, Math.random() * 50 - 25, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
};

export default Atmosphere;