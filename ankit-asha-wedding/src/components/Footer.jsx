import React from 'react';
import confetti from 'canvas-confetti';

const Footer = () => {
  const handleBlessings = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.8 }, colors: ['#5e0b0b', '#c5a059', '#ffffff'], ticks: 200, gravity: 0.8 });
  };
  return (
    <footer className="bg-[#2a0404] text-[#fdfbf7] py-16 text-center relative overflow-hidden border-t-4 border-[#bf953f]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
        <div className="relative z-10 px-4">
            <h2 className="font-heading text-3xl md:text-5xl mb-6 text-gold-foil">Blessings Only</h2>
            <p className="font-body text-gray-300 text-lg italic mb-10 max-w-2xl mx-auto">"Your presence and blessings are the only gifts we desire."</p>
            <button onClick={handleBlessings} className="px-8 py-3 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#2a0404] font-heading font-bold tracking-widest rounded-full shadow-lg hover:scale-105 transition-transform mb-12">🌹 Shower Blessings 🌹</button>
            <div className="space-y-2"><p className="text-2xl font-heading text-gold-foil">The Jangir Family</p><p className="text-sm text-[#bf953f] font-semibold opacity-80">( Gotra: Jangir )</p></div>
        </div>
    </footer>
  );
};
export default Footer;