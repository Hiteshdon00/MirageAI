import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GiBigDiamondRing, GiFlowerEmblem, GiStarsStack, GiHeartInside } from 'react-icons/gi';

const ParallaxIcons = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Create different speeds for different "layers" of depth
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]); // Fast layer (Close)
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]); // Slow layer (Far)
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -800]); // Very Fast (Foreground)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Layer 1: Giant Faded Flower (Top Right) */}
      <motion.div 
        style={{ y: y2, rotate }} 
        className="absolute top-[10%] right-[-5%] text-[#b38728] opacity-[0.03]"
      >
        <GiFlowerEmblem className="text-[40rem]" />
      </motion.div>

      {/* Layer 2: Floating Ring (Middle Left) */}
      <motion.div 
        style={{ y: y1 }} 
        className="absolute top-[40%] left-[-5%] text-[#b38728] opacity-[0.04]"
      >
        <GiBigDiamondRing className="text-[30rem]" />
      </motion.div>

      {/* Layer 3: Raining Stars (Bottom Right) */}
      <motion.div 
        style={{ y: y3 }} 
        className="absolute top-[70%] right-[10%] text-[#b38728] opacity-[0.05]"
      >
        <GiStarsStack className="text-[25rem]" />
      </motion.div>
      
      {/* Layer 4: Heart (Top Left) */}
      <motion.div 
        style={{ y: y2, rotate: rotate }} 
        className="absolute top-[15%] left-[5%] text-[#b38728] opacity-[0.03]"
      >
        <GiHeartInside className="text-[20rem]" />
      </motion.div>
    </div>
  );
};

export default ParallaxIcons;