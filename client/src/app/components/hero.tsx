'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#4B0000] via-[#800000] to-[#B22222] px-6 font-[family-name:var(--font-geist-sans)]">
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-6xl sm:text-7xl font-bold tracking-wide drop-shadow-lg"
      >
        Shifayah
      </motion.h1>

      {/* Subtitle / Theme */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-[#FFD700] text-2xl sm:text-3xl font-semibold mt-4 tracking-wide"
      >
        Master the Quran
      </motion.h2>
    </div>
  );
}
