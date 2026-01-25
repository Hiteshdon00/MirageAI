import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import { GiElephantHead, GiHolyWater, GiDrum, GiGiftOfKnowledge, GiFireBowl } from 'react-icons/gi';

const events = [
  { date: "03 FEB", title: "Ganesh Pujan", time: "9:15 AM", location: "Residence", desc: "Invoking blessings.", Icon: GiElephantHead },
  { date: "09 FEB", title: "Baan", time: "9:15 AM", location: "Residence", desc: "Purification ritual.", Icon: GiHolyWater },
  { date: "10 FEB", title: "Mahila Sangeet", time: "7:15 PM", location: "Govindpura", desc: "Music & Dance.", Icon: GiDrum },
  { date: "11 FEB", title: "Chak Bhaat", time: "1:15 PM", location: "Residence", desc: "Maternal ceremony.", Icon: GiGiftOfKnowledge },
  { date: "13 FEB", title: "The Wedding", time: "Baraat: 1:15 PM", location: "Ridhi Sidha Garden", desc: "Panigrahan Sanskar.", Icon: GiFireBowl }
];

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section ref={containerRef} className="relative py-32 bg-[#fdfbf7] overflow-hidden perspective-1000">
      <div className="text-center mb-32 relative z-10">
        <h2 className="text-5xl md:text-7xl font-heading text-gold-foil drop-shadow-sm mb-4">Manglik Karyakram</h2>
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-[#bf953f] to-transparent mx-auto"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2 origin-top z-0">
            <motion.div style={{ scaleY }} className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#bf953f] via-[#fcf6ba] to-[#bf953f] origin-top h-full shadow-[0_0_15px_rgba(191,149,63,0.8)]" />
        </div>
        {events.map((event, index) => <TiltCard key={index} event={event} index={index} />)}
      </div>
    </section>
  );
};

const TiltCard = ({ event, index }) => {
  const isLeft = index % 2 === 0;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  }

  const rotateX = useTransform(mouseY, [-200, 200], [15, -15]);
  const rotateY = useTransform(mouseX, [-200, 200], [-15, 15]);
  const shine = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.8) 0%, transparent 60%)`;

  return (
    <div className={`flex flex-col md:flex-row items-center mb-32 relative z-10 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="absolute left-[28px] md:left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-[#bf953f] bg-[#2a0404] flex items-center justify-center z-20 shadow-[0_0_20px_rgba(191,149,63,0.6)]">
        <event.Icon className="text-4xl text-[#fcf6ba]" />
      </div>
      <div className="w-full md:w-1/2" />
      <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-16 perspective-1000">
        <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} initial={{ opacity: 0, scale: 0.8, y: 50 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} onMouseMove={handleMouseMove} onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }} className="relative group cursor-pointer">
          <div className={`bg-white p-8 rounded-2xl shadow-2xl border-2 border-[#bf953f]/20 relative overflow-hidden backdrop-blur-sm ${isLeft ? 'text-left' : 'md:text-right'}`}>
            <motion.div style={{ background: shine }} className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none z-10 transition-opacity duration-300" />
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#2a0404] text-xs font-bold rounded-full mb-4 tracking-widest uppercase shadow-md">{event.date}</span>
            <h3 className="text-3xl font-heading text-[#2a0404] mb-2 group-hover:text-[#b38728] transition-colors">{event.title}</h3>
            <div className={`flex flex-col gap-1 text-sm font-bold text-[#b38728] mb-4 ${isLeft ? '' : 'md:items-end'}`}><span>🕒 {event.time}</span><span>📍 {event.location}</span></div>
            <p className="text-gray-600 font-body text-lg italic border-t border-[#bf953f]/20 pt-4">"{event.desc}"</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;