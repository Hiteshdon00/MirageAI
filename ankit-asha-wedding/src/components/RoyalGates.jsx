import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiElephantHead } from "react-icons/gi";

const RoyalGates = ({ onOpenComplete }) => {
  // We keep the gates visible for 2.5 seconds, then open them
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Notify App that gates are open after animation finishes
      setTimeout(onOpenComplete, 2000); 
    }, 2000); // Wait 2s before opening
    return () => clearTimeout(timer);
  }, [onOpenComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex pointer-events-none">
      <AnimatePresence>
        {!isOpen && (
           <div className="absolute inset-0 flex w-full h-full">
               {/* --- LEFT GATE --- */}
               <motion.div
                 initial={{ x: 0 }}
                 exit={{ x: "-100%" }}
                 transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }} // Custom bezier for heavy door feel
                 className="w-1/2 h-full bg-[#2a0404] border-r-4 border-[#b38728] relative flex items-center justify-end shadow-[10px_0_50px_rgba(0,0,0,0.5)] z-20"
               >
                   {/* Gate Pattern (Left) */}
                   <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
                   
                   {/* The Left Handle/Crest */}
                   <div className="mr-[-3rem] md:mr-[-5rem] z-30 relative bg-[#2a0404] p-4 rounded-full border-4 border-[#b38728] shadow-2xl">
                       <GiElephantHead className="text-4xl md:text-6xl text-[#fcf6ba]" />
                   </div>
               </motion.div>

               {/* --- RIGHT GATE --- */}
               <motion.div
                 initial={{ x: 0 }}
                 exit={{ x: "100%" }}
                 transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                 className="w-1/2 h-full bg-[#2a0404] border-l-4 border-[#b38728] relative flex items-center justify-start shadow-[-10px_0_50px_rgba(0,0,0,0.5)] z-20"
               >
                   {/* Gate Pattern (Right) */}
                   <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
               </motion.div>
           </div>
        )}
      </AnimatePresence>
      
      {/* Light Burst behind the gates */}
      <AnimatePresence>
        {!isOpen && (
            <motion.div 
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-[#b38728] z-0" 
            />
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoyalGates;