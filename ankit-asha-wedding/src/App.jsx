import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- COMPONENT IMPORTS ---
import Preloader from './components/Preloader';
import Atmosphere from './components/Atmosphere';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import Venue from './components/Venue';
import Footer from './components/Footer';
import ParallaxIcons from './components/ParallaxIcons';
import ProgressRing from './components/ProgressRing';
import Gallery from './components/Gallery';
import ClickSparkle from './components/ClickSparkle';
import AudioPlayer from './components/AudioPlayer';
import GodRays from './components/GodRays';
import RSVP from './components/RSVP';
import StarMap from './components/StarMap';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  
  // Track total scroll progress for background morphing
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end end"] 
  });

  // BACKGROUND MORPH:
  // 0% - 50%: Ivory/Cream (Daytime/Ceremony)
  // 50% - 85%: Darkening Gold (Evening)
  // 85% - 100%: Deep Velvet Night (Star Map/Party)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 0.85],
    ["#fdfbf7", "#fffdf0", "#050b14"]
  );

  return (
    <>
      {/* 1. THE OPENING CEREMONY (Gates) */}
      <Preloader onComplete={() => setIsLoaded(true)} />
      
      {/* 2. GLOBAL INTERACTION (Click Sparkles) */}
      <ClickSparkle />

      <motion.div 
        ref={containerRef}
        style={{ backgroundColor }} 
        className={`min-h-screen text-gray-800 selection:bg-[#bf953f] selection:text-white overflow-x-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} relative`}
      >
        {/* Cinematic Overlays (Film Grain + Floating Dust) */}
        <Atmosphere />
        
        {/* Scroll Progress Indicator (Bottom Left) */}
        <ProgressRing /> 
        
        {/* --- SECTION 1: THE ARRIVAL --- */}
        <div className="relative">
            {/* Volumetric Lighting behind the names */}
            <GodRays />
            <Hero />
        </div>
        
        {/* --- SECTION 2: THE JOURNEY --- */}
        <div className="relative">
            {/* Floating 3D Symbols (Rings, Flowers) behind timeline */}
            <ParallaxIcons />
            <Countdown />
            <Timeline />
        </div>
        
        {/* --- SECTION 3: THE VOWS (Velocity Stream) --- */}
        <Gallery />
        
        {/* --- SECTION 4: THE DESTINY (Star Map) --- */}
        <StarMap />
        
        {/* --- SECTION 5: THE CELEBRATION --- */}
        <Venue />
        <RSVP />
        <Footer />
        
        {/* Music Control */}
        <AudioPlayer />
      </motion.div>
    </>
  );
}

export default App;