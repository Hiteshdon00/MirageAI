import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { GiBigDiamondRing, GiLoveSong, GiFlowerEmblem, GiLinkedRings, GiHolyWater, GiElephantHead, GiTwoCoins } from "react-icons/gi";

// The "Cards" we will scroll instead of photos
const items = [
  { type: "text", content: "SHUBH VIVAH" },
  { type: "icon", component: GiElephantHead },
  { type: "text", content: "13 • 02 • 26" },
  { type: "icon", component: GiLinkedRings },
  { type: "text", content: "PREM (LOVE)" },
  { type: "icon", component: GiHolyWater },
  { type: "text", content: "FOREVER" },
  { type: "icon", component: GiFlowerEmblem },
];

function ParallaxText({ baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex flex-nowrap gap-8" style={{ x }}>
        {/* We repeat the array 4 times to ensure infinite scrolling loop */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <motion.div
            key={i}
            className="w-[280px] h-[180px] md:w-[350px] md:h-[220px] rounded-2xl border-2 border-[#b38728] bg-[#2a0404] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative shrink-0 overflow-hidden group"
            whileHover={{ scale: 1.05, borderColor: "#fcf6ba" }}
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
            
            {/* Inner Shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#b38728]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* CONTENT RENDERER */}
            <div className="relative z-10 text-[#fcf6ba] drop-shadow-md">
                {item.type === "text" ? (
                    <span className="font-heading text-3xl md:text-4xl tracking-widest uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b38728] via-[#fcf6ba] to-[#b38728]">
                        {item.content}
                    </span>
                ) : (
                    <item.component className="text-6xl md:text-7xl text-[#b38728]" />
                )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const Gallery = () => {
  return (
    <section className="py-24 bg-[#fdfbf7] overflow-hidden relative border-t border-[#b38728]/20">
      <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-gold-foil mb-4">Values & Vows</h2>
          <p className="font-body text-[#5e0b0b] tracking-widest uppercase text-sm">The pillars of our union</p>
      </div>
      
      {/* Row 1: Moves Left */}
      <div className="mb-8 rotate-[-2deg] scale-105 opacity-90 hover:opacity-100 transition-opacity duration-500">
        <ParallaxText baseVelocity={-1.5} />
      </div>

      {/* Row 2: Moves Right */}
      <div className="rotate-[2deg] scale-105 opacity-90 hover:opacity-100 transition-opacity duration-500">
        <ParallaxText baseVelocity={1.5} />
      </div>
    </section>
  );
};

export default Gallery;