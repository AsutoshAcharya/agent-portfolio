"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface HUDOverlayProps {
  currentSection: string;
}

export default function HUDOverlay({ currentSection }: HUDOverlayProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
        <motion.div
          className="bg-valorant-surface/80 border border-white/20 px-4 py-2 clip-corner backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-valorant-teal rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-valorant-text/80 uppercase tracking-wider">
              SECTION {currentSection}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="bg-valorant-surface/80 border border-white/20 px-4 py-2 clip-corner backdrop-blur-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-xs font-mono text-valorant-text/80 text-right">
            <div>{time.toLocaleTimeString()}</div>
            {/* <div className="text-valorant-teal">ONLINE</div> */}
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-valorant-teal/30"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-valorant-teal/30"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-valorant-teal/30"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-valorant-teal/30"></div>

      <motion.div
        className="absolute bottom-8 left-8 w-2 h-2 bg-valorant-teal rounded-full"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />
    </div>
  );
}
