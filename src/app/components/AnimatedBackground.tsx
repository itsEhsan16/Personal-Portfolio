"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-800/20 to-cyan-600/20 -z-10 pointer-events-none"
      animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
      transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
    />
  );
} 