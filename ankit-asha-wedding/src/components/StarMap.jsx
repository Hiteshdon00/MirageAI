import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const StarMap = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let stars = [];
    // ROYAL DAY COLORS: Bronze, Dark Gold, Maroon
    const starColors = ["#b38728", "#8a6a28", "#5e0b0b", "#d4af37"];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = window.innerWidth < 768 ? 80 : 200; // Minimalist for paper look
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          speed: Math.random() * 0.003,
          color: starColors[Math.floor(Math.random() * starColors.length)]
        });
      }
    };

    const animate = () => {
      // Clear with Ivory (Paper color)
      ctx.fillStyle = "#fdfbf7"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.alpha += star.speed;
        if (star.alpha <= 0.2 || star.alpha >= 0.8) star.speed *= -1;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Heart Path
  const heartPath = "M 50 30 C 50 15, 10 15, 10 45 C 10 65, 30 85, 50 95 C 70 85, 90 65, 90 45 C 90 15, 50 15, 50 30 Z";
  
  const starPoints = [
      { cx: "50%", cy: "30%" },
      { cx: "20%", cy: "25%" },
      { cx: "10%", cy: "45%" },
      { cx: "50%", cy: "95%" },
      { cx: "90%", cy: "45%" },
      { cx: "80%", cy: "25%" },
  ];

  return (
    <section ref={containerRef} className="relative h-[80svh] w-full bg-[#fdfbf7] overflow-hidden flex flex-col items-center justify-center p-8">
      
      {/* 1. TEXTURE: Parchment Paper Effect */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>
      
      {/* 2. VIGNETTE: Warm Gold Edges instead of Black */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f0e6d2_100%)] opacity-80 pointer-events-none"></div>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Frame */}
      <div className="absolute inset-4 md:inset-8 border-2 border-[#b38728]/20 pointer-events-none z-20">
         {/* Decorative Corners (Maroon/Gold) */}
         <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#5e0b0b]"></div>
         <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#5e0b0b]"></div>
         <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#5e0b0b]"></div>
         <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#5e0b0b]"></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center justify-center">
        
        <div className="relative w-64 h-64 md:w-96 md:h-96">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-md">
                <motion.path 
                    d={heartPath}
                    fill="transparent"
                    stroke="#b38728" // Gold Line
                    strokeWidth="0.6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                />
            </svg>

            {starPoints.map((point, i) => (
                <motion.div
                    key={i}
                    // Maroon Diamonds for Contrast
                    className="absolute w-2.5 h-2.5 rotate-45 bg-[#5e0b0b] border border-[#b38728]"
                    style={{ left: point.cx, top: point.cy, transform: "translate(-50%, -50%) rotate(45deg)" }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: [1, 1.2, 1], opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ delay: i * 0.3, duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
            ))}
        </div>

        <div className="mt-12 text-center">
            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: 1 }}
                // Dark Maroon Text for readability on light background
                className="text-[#5e0b0b] font-heading text-sm tracking-[0.4em] uppercase mb-2"
            >
                Written in the Stars
            </motion.p>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.5 }}
                className="text-[#8a6a28] font-serif italic text-xs tracking-widest opacity-80"
            >
                Palsana • February 13, 2026
            </motion.p>
        </div>
      </div>
    </section>
  );
};

export default StarMap;