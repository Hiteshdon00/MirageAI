import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiFeather, GiWaxSeal } from "react-icons/gi";

const RSVP = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSealed, setIsSealed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSealed(true);
    // Add logic here to actually send data if needed
    setTimeout(() => {
        setIsOpen(false);
        setIsSealed(false); // Reset for next time
    }, 3000);
  };

  return (
    <section className="py-20 flex justify-center items-center relative z-20">
      
      {/* The Trigger Button (Quill) */}
      {!isOpen && (
          <motion.button 
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 px-8 py-4 bg-[#2a0404] border-2 border-[#b38728] rounded-full shadow-2xl group"
          >
             <GiFeather className="text-3xl text-[#fcf6ba] group-hover:-translate-y-1 transition-transform" />
             <span className="font-heading text-xl text-[#b38728] tracking-widest uppercase">Send Royal Wishes</span>
          </motion.button>
      )}

      {/* The Scroll Modal */}
      <AnimatePresence>
        {isOpen && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative w-full max-w-lg bg-[#fcf6ba] rounded-lg shadow-[0_0_50px_rgba(255,215,0,0.2)] overflow-hidden origin-center"
                >
                    {/* Top Scroll Roll */}
                    <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#e6d5a7] to-[#d4b470] shadow-md z-20"></div>
                    
                    {/* Paper Texture */}
                    <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')] pointer-events-none"></div>

                    {/* Content */}
                    <div className="p-12 text-center relative z-10">
                        <h3 className="font-heading text-3xl text-[#5e0b0b] mb-2">The Royal Scroll</h3>
                        <p className="font-body text-[#8a6a28] italic mb-8">"Your blessings are our treasure."</p>
                        
                        {!isSealed ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input 
                                    type="text" 
                                    placeholder="Your Noble Name" 
                                    required
                                    className="w-full bg-transparent border-b-2 border-[#b38728]/30 py-2 text-[#2a0404] font-serif placeholder-[#b38728]/50 focus:outline-none focus:border-[#b38728] text-center text-xl transition-colors"
                                />
                                <textarea 
                                    placeholder="Write your message here..." 
                                    rows="3"
                                    className="w-full bg-transparent border-b-2 border-[#b38728]/30 py-2 text-[#2a0404] font-serif placeholder-[#b38728]/50 focus:outline-none focus:border-[#b38728] text-center text-lg resize-none transition-colors"
                                ></textarea>
                                
                                <button 
                                    type="submit"
                                    className="px-8 py-2 bg-[#b38728] text-[#fcf6ba] font-heading uppercase tracking-widest text-sm rounded hover:bg-[#8a6a28] transition-colors mt-4"
                                >
                                    Seal & Send
                                </button>
                                <button 
                                    type="button" 
                                    onClick={() => setIsOpen(false)}
                                    className="block mx-auto mt-4 text-xs text-[#5e0b0b]/50 hover:text-[#5e0b0b] uppercase tracking-widest"
                                >
                                    Close Scroll
                                </button>
                            </form>
                        ) : (
                            <motion.div 
                                initial={{ scale: 2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="py-10"
                            >
                                <div className="mx-auto w-24 h-24 bg-[#8a1c1c] rounded-full flex items-center justify-center shadow-inner border-4 border-[#6b1616] relative">
                                    <div className="absolute inset-0 border-2 border-[#a62d2d] rounded-full opacity-50 border-dashed"></div>
                                    <GiWaxSeal className="text-6xl text-[#5e0b0b] drop-shadow-md" />
                                </div>
                                <p className="mt-6 font-heading text-xl text-[#8a1c1c]">Sealed with Love</p>
                            </motion.div>
                        )}
                    </div>

                    {/* Bottom Scroll Roll */}
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#e6d5a7] to-[#d4b470] shadow-md z-20"></div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RSVP;