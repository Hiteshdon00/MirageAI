import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const QuoteSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section ref={container} className="relative py-40 bg-transparent flex items-center justify-center overflow-hidden z-10">
      <div className="max-w-4xl px-6 text-center">
        {/* Decorative Crown Icon */}
        <motion.div style={{ opacity, y }} className="text-4xl mb-6 text-center w-full flex justify-center">
             👑
        </motion.div>

        <motion.blockquote 
            style={{ opacity, y }}
            className="font-heading text-3xl md:text-5xl text-[#2a0404] leading-relaxed relative"
        >
          <span className="text-6xl text-[#b38728] opacity-50 absolute -top-8 -left-8">"</span>
          Two souls, one heart. A journey of love, laughter, and a happily ever after starts here.
          <span className="text-6xl text-[#b38728] opacity-50 absolute -bottom-8 -right-8">"</span>
        </motion.blockquote>

        <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="h-1 bg-[#b38728] mt-12 mx-auto origin-left" 
        />
      </div>
    </section>
  );
};

export default QuoteSection;