import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  function calculateTimeLeft() {
    const difference = +new Date("2026-02-13T11:15:00") - +new Date();
    let timeLeft = {};
    if (difference > 0) timeLeft = { Days: Math.floor(difference / (1000 * 60 * 60 * 24)), Hours: Math.floor((difference / (1000 * 60 * 60)) % 24), Minutes: Math.floor((difference / 1000 / 60) % 60), Seconds: Math.floor((difference / 1000) % 60) };
    return timeLeft;
  }
  useEffect(() => { const timer = setTimeout(() => { setTimeLeft(calculateTimeLeft()); }, 1000); return () => clearTimeout(timer); });

  return (
    <section className="py-12 bg-[#fdfbf7] border-b border-[#bf953f]/20">
      <div className="flex justify-center items-center flex-wrap gap-8">
        {Object.keys(timeLeft).map((interval) => (
          <div key={interval} className="flex flex-col items-center">
            <motion.span key={timeLeft[interval]} initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-heading text-[#5e0b0b] font-bold">{timeLeft[interval] || '0'}</motion.span>
            <span className="text-xs text-[#b38728] uppercase tracking-widest mt-1">{interval}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Countdown;