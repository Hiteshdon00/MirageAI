import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/wedding.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    return () => { if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; } };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); } 
    else { const playPromise = audioRef.current.play(); if (playPromise !== undefined) playPromise.then(() => setIsPlaying(true)).catch((e) => console.error(e)); }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button onClick={togglePlay} initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border-4 border-[#fdfbf7] cursor-pointer transition-all duration-500 ${isPlaying ? 'bg-[#bf953f] text-white' : 'bg-white text-[#2a0404]'}`}>
        {isPlaying ? <span className="text-2xl animate-[spin_3s_linear_infinite]">💿</span> : <span className="text-2xl">🔇</span>}
      </motion.button>
    </div>
  );
};
export default AudioPlayer;