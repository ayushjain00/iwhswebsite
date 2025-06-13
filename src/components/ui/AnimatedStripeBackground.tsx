import React, { useEffect, useRef } from 'react';

// Lighter, pastel Stripe-inspired colors
const COLORS = [
  '#e0e7ff', // Light blue (tint of #635bff)
  '#ccfbff', // Light cyan (tint of #00d4ff)
  '#ffe4ef', // Light pink (tint of #ff5c93)
  '#e3e8fd', // Light purple/blue (tint of #6e7ff3)
  '#fdf6c3', // Light yellow (tint of #f3ec78)
  '#f3e8ff', // Light purple (tint of #af43ff)
  '#e0f7ff', // Light aqua (tint of #3ec6ff)
];

function lerpColor(a: string, b: string, t: number) {
  const ah = a.replace('#', '');
  const bh = b.replace('#', '');
  const ar = parseInt(ah.substring(0, 2), 16);
  const ag = parseInt(ah.substring(2, 4), 16);
  const ab = parseInt(ah.substring(4, 6), 16);
  const br = parseInt(bh.substring(0, 2), 16);
  const bg = parseInt(bh.substring(2, 4), 16);
  const bb = parseInt(bh.substring(4, 6), 16);
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `rgb(${rr},${rg},${rb})`;
}

const AnimatedStripeBackground: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
      // Map scrollPercent to a floating-point index in COLORS
      const maxIdx = COLORS.length - 1;
      const floatIdx = scrollPercent * maxIdx;
      const idxA = Math.floor(floatIdx);
      const idxB = Math.min(idxA + 1, maxIdx);
      const t = floatIdx - idxA;
      const colorA = COLORS[idxA];
      const colorB = COLORS[idxB];
      // For a richer gradient, blend a third color further ahead
      const idxC = Math.min(idxA + 2, maxIdx);
      const colorC = COLORS[idxC];
      const bgColor1 = lerpColor(colorA, colorB, t);
      const bgColor2 = lerpColor(colorB, colorC, t);
      if (bgRef.current) {
        bgRef.current.style.background = `linear-gradient(120deg, ${bgColor1}, ${bgColor2})`;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={bgRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        transition: 'background 1.2s cubic-bezier(.77,0,.18,1)',
      }}
      aria-hidden="true"
    />
  );
};

export default AnimatedStripeBackground; 