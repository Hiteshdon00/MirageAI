import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiElephantHead } from "react-icons/gi";

const Preloader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 2000); 
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // PHYSICS: Heavy door slide with a slow start and smooth stop
  const doorTransition = { duration: 1.8, ease: [0.76, 0, 0.24, 1] };

  return (
    <div className="fixed inset-0 z-[100] flex pointer-events-none">
      <AnimatePresence>
        {loading ? (
          /* --- STATE 1: LOADING (The Velvet Gate) --- */
          <motion.div
            key="loader"
            // CHANGED: Background to Deep Royal Maroon for High Contrast
            className="absolute inset-0 flex flex-col items-center justify-center bg-[#2a0404] z-50"
            exit={{ opacity: 0 }} 
          >
             {/* Texture: Adds a 'Velvet/Cloth' feel to the background */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
             
             {/* THE CREST */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="relative z-20 flex flex-col items-center"
             >
                {/* Icon Circle: Gold Border, Maroon Fill */}
                <div className="w-24 h-24 rounded-full border-2 border-[#b38728] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(179,135,40,0.3)] bg-[#2a0404]">
                    <GiElephantHead className="text-5xl text-[#fcf6ba]" />
                </div>
                
                {/* Text: Bright Gold for readability against Maroon */}
                <h2 className="font-heading text-2xl tracking-[0.4em] text-[#fcf6ba] uppercase drop-shadow-md">
                    Ankit & Asha
                </h2>
                
                {/* Loading Line: Gold */}
                <div className="w-48 h-[2px] bg-[#b38728]/30 mt-8 overflow-hidden relative rounded-full">
                    <motion.div 
                        className="absolute top-0 left-0 h-full bg-[#fcf6ba] shadow-[0_0_10px_#fcf6ba]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                </div>
             </motion.div>
          </motion.div>
        ) : (
          /* --- STATE 2: THE REVEAL (Doors Split) --- */
          <>
            {/* LEFT DOOR (Maroon) */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={doorTransition}
              className="w-1/2 h-full bg-[#2a0404] border-r-2 border-[#b38728] relative z-40 shadow-[10px_0_50px_rgba(0,0,0,0.8)]"
            >
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
            </motion.div>

            {/* RIGHT DOOR (Maroon) */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={doorTransition}
              className="w-1/2 h-full bg-[#2a0404] border-l-2 border-[#b38728] relative z-40 shadow-[-10px_0_50px_rgba(0,0,0,0.8)]"
            >
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Preloader;