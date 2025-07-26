"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15; // Faster, more random progress
        if (newProgress >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return newProgress;
      });
    }, 80); // Faster interval

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-valorant-bg text-valorant-text"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth fade-out
    >
      <div className="relative w-80 h-3 bg-valorant-surface border border-white/20 clip-corner overflow-hidden">
        <motion.div
          className="h-full bg-valorant-teal"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }} // Fast update for progress bar
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }} // Scanline effect
        />
      </div>
      <motion.div
        className="mt-8 text-3xl font-mono uppercase tracking-widest relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.span
          className="absolute inset-0 text-valorant-red"
          animate={{
            opacity: [0, 0.4, 0], // More visible glitch
            x: [0, 3, 0],
          }}
          transition={{
            duration: 0.1,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0.3,
          }}
        >
          LOADING...
        </motion.span>
        LOADING...
      </motion.div>
      <div className="mt-4 text-lg font-mono text-valorant-text/80">
        {Math.floor(progress)}%
      </div>
    </motion.div>
  );
}
