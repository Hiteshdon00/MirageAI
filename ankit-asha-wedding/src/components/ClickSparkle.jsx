import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ClickSparkle = () => {
  useEffect(() => {
    const handleClick = (e) => {
      // Create a small explosion at the mouse coordinates
      confetti({
        particleCount: 20,
        spread: 40,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
        colors: ['#b38728', '#fcf6ba', '#ffffff'],
        ticks: 50,
        gravity: 2,
        scalar: 0.6,
        startVelocity: 15,
        disableForReducedMotion: true
      });
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return null; // No visible component, just logic
};

export default ClickSparkle;