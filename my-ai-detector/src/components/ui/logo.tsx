"use client";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export const HackTechLogo = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <motion.div 
        whileHover={{ rotate: 180, scale: 1.2 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="size-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)] group-hover:shadow-blue-400 group-hover:bg-blue-500 transition-all"
      >
        <ShieldCheck className="text-white" size={24} />
      </motion.div>
      <div className="flex flex-col -space-y-1">
        <h2 className="text-2xl font-black tracking-tighter uppercase italic text-white shimmer-text group-hover:text-blue-400 transition-colors">
          Hack<span className="text-blue-500 group-hover:text-white">Tech</span>
        </h2>
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[8px] font-mono text-zinc-500 tracking-[0.3em] uppercase"
        >
          Sentry_Unit_v1
        </motion.span>
      </div>
    </motion.div>
  );
};