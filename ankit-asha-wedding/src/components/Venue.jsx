import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton'; // Import the physics button

const Venue = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519225463359-4228c77470d7?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.2) sepia(0.4)" 
        }}
      />
      
      <div className="relative z-10 max-w-4xl w-full mx-4">
        <div className="bg-[#fdfbf7]/90 backdrop-blur-md border-2 border-[#bf953f] p-8 md:p-12 rounded-t-full rounded-b-lg shadow-2xl text-center relative">
          
          <motion.div
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading text-gold-foil mb-2">The Royal Venue</h2>
            <div className="h-0.5 w-24 bg-[#bf953f] mx-auto mb-6"></div>
            
            <p className="text-2xl font-bold text-[#2a0404] mb-2">
              Ridhi Sidha Marriage Garden
            </p>
            <p className="text-lg text-[#aa771c] font-semibold tracking-wide uppercase mb-8">
              Gordhanpura, Palsana (Sikar)
            </p>

            {/* LEVEL 30: MAGNETIC BUTTONS */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
                <MagneticButton 
                  href="https://maps.google.com" 
                  target="_blank"
                  className="inline-block px-8 py-3 bg-[#2a0404] text-[#fcf6ba] font-heading tracking-widest border border-[#bf953f] shadow-lg rounded-full cursor-pointer"
                >
                  📍 Navigate to Venue
                </MagneticButton>

                <MagneticButton 
                  href="tel:9785349848"
                  className="inline-block px-8 py-3 bg-white text-[#2a0404] font-heading tracking-widest border border-[#bf953f] shadow-lg rounded-full cursor-pointer"
                >
                  📞 Call: 97853-49848
                </MagneticButton>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;