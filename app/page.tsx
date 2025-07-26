"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import AgentCard from "@/components/agent-card";
import TechStack from "@/components/tech-stack";
import ProjectHistory from "@/components/project-history";
import ExperienceTimeline from "@/components/experience-timeline";
import Achievements from "@/components/achievements";
import ContactModal from "@/components/contact-modal";
import Footer from "@/components/footer";
import HUDOverlay from "@/components/hud-overlay";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/navigation-header";
import LoadingScreen from "@/components/loading-screen";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Portfolio() {
  const [contactOpen, setContactOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("01");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "agent",
        "tech",
        "projects",
        "experience",
        "achievements",
      ];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setCurrentSection(String(index + 1).padStart(2, "0"));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-valorant-bg text-valorant-text overflow-x-hidden relative">
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(to right, #0AC8B9 1.5px, transparent 1.5px), linear-gradient(to bottom, #0AC8B9 1.5px, transparent 1.5px)`, // Thicker lines
            backgroundSize: `50px 50px`,
            backgroundPosition: `0px 0px`,
          }}
          animate={{
            backgroundPosition: [`0px 0px`, `50px 50px`],
          }}
          transition={{
            duration: 45,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        ></motion.div>

        <motion.div
          className="absolute top-[10%] left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-valorant-teal to-transparent" // Thicker line
          animate={{ x: ["-100%", "100%"], opacity: [0, 0.3, 0, 0.15, 0] }} // Increased opacity
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 0,
          }}
        />
        <motion.div
          className="absolute top-[30%] left-0 w-full h-1 bg-gradient-to-r from-transparent via-valorant-teal/80 to-transparent"
          animate={{ x: ["-100%", "100%"], opacity: [0, 0.25, 0, 0.1, 0] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute bottom-[20%] right-0 w-full h-1.5 bg-gradient-to-l from-transparent via-valorant-red to-transparent" // Thicker line
          animate={{ x: ["100%", "-100%"], opacity: [0, 0.3, 0, 0.15, 0] }} // Increased opacity
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 4,
          }}
        />
        <motion.div
          className="absolute bottom-[40%] right-0 w-full h-1 bg-gradient-to-l from-transparent via-valorant-red/80 to-transparent"
          animate={{ x: ["100%", "-100%"], opacity: [0, 0.25, 0, 0.1, 0] }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 6,
          }}
        />

        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-br from-transparent via-valorant-teal/60 to-transparent origin-top-left rotate-12"
          animate={{ x: ["-100%", "100%"], opacity: [0, 0.2, 0] }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 8,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-tl from-transparent via-valorant-red/60 to-transparent origin-bottom-right -rotate-12"
          animate={{ x: ["100%", "-100%"], opacity: [0, 0.2, 0] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 10,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-valorant-teal/20" // Larger, higher opacity
          style={{
            transform: "translate(-50%, -50%)",
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Hexagon
          }}
          animate={{
            scale: [0.8, 1.4, 0.8],
            opacity: [0, 0.12, 0],
            rotate: [0, 360],
            x: ["-50%", "-40%", "-50%"],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-valorant-red/20" // Larger, higher opacity
          style={{
            transform: "translate(50%, 50%)",
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Hexagon
          }}
          animate={{
            scale: [0.7, 1.3, 0.7],
            opacity: [0, 0.1, 0],
            rotate: [360, 0],
            y: ["50%", "60%", "50%"],
          }}
          transition={{
            duration: 13,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 8,
          }}
        />

        <motion.div
          className="absolute top-[20%] right-[10%] w-32 h-32 bg-valorant-teal/15" // Larger, higher opacity
          style={{
            transform: "translate(50%, -50%)",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
          animate={{
            scale: [0.6, 1.2, 0.6],
            opacity: [0, 0.08, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        <motion.div
          className="absolute bottom-[10%] left-[15%] w-28 h-28 bg-valorant-red/15" // Larger, higher opacity
          style={{
            transform: "translate(-50%, 50%)",
          }}
          animate={{
            scale: [0.5, 1.1, 0.5],
            opacity: [0, 0.08, 0],
            rotate: [0, 270],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 6,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fillOpacity='0.15' fillRule='evenodd'%3E%3Cpath d='M0 0h2v2H0V0zm2 2h2v2H2V2z'/%3E%3C/g%3E%3C/svg%3E")`, // Finer grain noise
          }}
        ></div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/15 to-transparent" // Increased opacity
          animate={{
            backgroundPositionY: ["0%", "100%"],
          }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundSize: "100% 400px",
            opacity: 0.03,
          }}
        />

        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            boxShadow:
              "0 0 100px rgba(10, 200, 185, 0.15), 0 0 150px rgba(255, 70, 85, 0.1)",
          }}
          animate={{
            boxShadow: [
              "0 0 100px rgba(10, 200, 185, 0.15), 0 0 150px rgba(255, 70, 85, 0.1)",
              "0 0 130px rgba(10, 200, 185, 0.2), 0 0 180px rgba(255, 70, 85, 0.15)",
              "0 0 100px rgba(10, 200, 185, 0.15), 0 0 150px rgba(255, 70, 85, 0.1)",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.75 h-0.75 rounded-full bg-valorant-teal/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 70],
              y: [0, (Math.random() - 0.5) * 70],
              opacity: [0, 0.15, 0],
              scale: [0.7, 1.8, 0.7],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 15,
            }}
          />
        ))}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`red-particle-${i}`}
            className="absolute w-0.75 h-0.75 rounded-full bg-valorant-red/60" // Slightly larger, higher opacity
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 70],
              y: [0, (Math.random() - 0.5) * 70],
              opacity: [0, 0.15, 0],
              scale: [0.7, 1.8, 0.7],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 15,
            }}
          />
        ))}
      </motion.div>
      {/* 
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: isLoading ? 0 : 0.5 }}
        className="relative z-10"
      >
        <HUDOverlay currentSection={currentSection} />
        <NavigationHeader currentSection={currentSection} />
        <motion.main
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <motion.section
            id="agent"
            variants={staggerItem}
            className="min-h-screen flex flex-col justify-center items-center px-4 relative
             pt-20 sm:pt-0"
            style={{ minHeight: "100vh" }}
          >
            <div className="absolute top-4 left-4 font-mono text-xs text-valorant-text/60 uppercase tracking-wider">
              // 01.AGENT_DETAILS
            </div>
            <AgentCard />
          </motion.section>

          <div className="h-24 bg-gradient-to-r from-valorant-bg via-valorant-surface to-valorant-bg transform -skew-y-2 origin-top-left"></div>

          <motion.section
            id="tech"
            variants={staggerItem}
            className="py-20 px-4 bg-valorant-surface relative"
          >
            <div className="absolute top-4 left-4 font-mono text-xs text-valorant-text/60 uppercase tracking-wider">
              // 02.ABILITIES
            </div>
            <TechStack />
          </motion.section>

          <div className="h-24 bg-gradient-to-r from-valorant-surface via-valorant-bg to-valorant-surface transform skew-y-2 origin-top-left"></div>

          <motion.section
            id="projects"
            variants={staggerItem}
            className="py-20 px-4 relative"
          >
            <div className="absolute top-4 left-4 font-mono text-xs text-valorant-text/60 uppercase tracking-wider">
              // 03.PROJECT_HISTORY
            </div>
            <ProjectHistory />
          </motion.section>

          <div className="h-24 bg-gradient-to-r from-valorant-bg via-valorant-surface to-valorant-bg transform -skew-y-2 origin-top-left"></div>

          <motion.section
            id="experience"
            variants={staggerItem}
            className="py-20 px-4 bg-valorant-surface relative"
          >
            <div className="absolute top-4 left-4 font-mono text-xs text-valorant-text/60 uppercase tracking-wider">
              // 04.EXPERIENCE
            </div>
            <ExperienceTimeline />
          </motion.section>

          <div className="h-24 bg-gradient-to-r from-valorant-surface via-valorant-bg to-valorant-surface transform skew-y-2 origin-top-left"></div>

          <motion.section
            id="achievements"
            variants={staggerItem}
            className="py-20 px-4 relative"
          >
            <div className="absolute top-4 left-4 font-mono text-xs text-valorant-text/60 uppercase tracking-wider">
              // 05.ACHIEVEMENTS
            </div>
            <Achievements />
          </motion.section>

          <Footer />
        </motion.main>
        <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
      </motion.div>
    </div>
  );
}
