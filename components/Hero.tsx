"use client";

import { motion } from "framer-motion";
import Navbar from "components/Navbar";

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-32"
    >

      <h1 className="text-6xl md:text-8xl font-semibold leading-[0.95] tracking-tight">
        Ingeniería para el futuro
      </h1>


      <p className="mt-10 text-neutral-600 text-lg max-w-xl mx-auto leading-relaxed">
        Sistemas inteligentes diseñados para impulsar organizaciones modernas.
      </p>

      <button
        onClick={onExplore}
        className="mt-10 px-8 py-3 bg-black text-white border border-black/40 rounded-full text-sm font-medium 
        hover:border-black hover:bg-white hover:text-black 
        transition-all duration-300 ease-in-out"
      >
        ¡Conoce más!
      </button>

    </motion.div>
    
  );
}