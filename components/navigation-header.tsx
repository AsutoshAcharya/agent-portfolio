"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  User,
  Code,
  Briefcase,
  Trophy,
  Mail,
  Award,
} from "lucide-react";

interface NavigationHeaderProps {
  currentSection: string;
}

const navigationItems = [
  { id: "agent", label: "AGENT", icon: User, section: "01" },
  { id: "tech", label: "ABILITIES", icon: Code, section: "02" },
  { id: "projects", label: "PROJECTS", icon: Briefcase, section: "03" },
  { id: "experience", label: "EXPERIENCE", icon: Trophy, section: "04" },
  { id: "achievements", label: "ACHIEVEMENTS", icon: Award, section: "05" },
];

export default function NavigationHeader({
  currentSection,
}: NavigationHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOnline] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const agentSection = document.getElementById("agent");
      if (agentSection) {
        const rect = agentSection.getBoundingClientRect();
        setIsVisible(rect.bottom < 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    console.log(sectionId, element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 700);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-valorant-surface/95 backdrop-blur-md border-b border-white/8"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-8 h-8 bg-valorant-red clip-corner flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white font-bold text-sm">
                      A<sup>2</sup>
                    </span>
                  </motion.div>
                  <div>
                    <div className="text-sm font-bold text-valorant-text uppercase tracking-wider">
                      Asutosh Acharya
                    </div>
                    <div className="text-xs text-valorant-text/60 font-mono">
                      #DEV117
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-2">
                  <motion.div
                    className={`w-2 h-2 rounded-full ${
                      isOnline ? "bg-green-400" : "bg-red-400"
                    }`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <span className="text-xs font-mono text-valorant-text/60">
                    {isOnline ? "ONLINE" : "OFFLINE"}
                  </span>
                </div>
              </motion.div>

              <motion.nav
                className="hidden md:flex items-center gap-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentSection === item.section;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => scrollToSection(item.id)}
                        className={`
                          relative px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300
                          ${
                            isActive
                              ? "text-valorant-red bg-valorant-red/10 border border-valorant-red/30"
                              : "text-valorant-text/80 hover:text-valorant-teal hover:bg-valorant-teal/5"
                          }
                        `}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {item.label}
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-valorant-red"
                            layoutId="activeTab"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Button>
                    </motion.div>
                  );
                })}
              </motion.nav>

              <motion.div
                className="hidden md:flex items-center gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Badge
                  variant="outline"
                  className="border-valorant-teal text-valorant-teal font-mono"
                >
                  SECTION {currentSection}
                </Badge>
                {/* <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className="border-valorant-red text-valorant-red hover:bg-valorant-red hover:text-white clip-corner"
                >
                  <Mail className="w-4 h-4 mr-1" />
                  CONTACT
                </Button> */}
              </motion.div>

              <motion.div
                className="md:hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-valorant-text hover:text-valorant-teal"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </Button>
              </motion.div>
            </div>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden border-t border-white/8 py-4 overflow-hidden"
                >
                  <div className="space-y-2">
                    {navigationItems.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = currentSection === item.section;

                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Button
                            variant="ghost"
                            onClick={() => scrollToSection(item.id)}
                            className={`
                              w-full justify-start text-sm font-bold uppercase tracking-wider
                              ${
                                isActive
                                  ? "text-valorant-red bg-valorant-red/10"
                                  : "text-valorant-text/80 hover:text-valorant-teal"
                              }
                            `}
                          >
                            <Icon className="w-4 h-4 mr-3" />
                            {item.label}
                            {isActive && (
                              <Badge
                                variant="outline"
                                className="ml-auto border-valorant-red text-valorant-red"
                              >
                                {item.section}
                              </Badge>
                            )}
                          </Button>
                        </motion.div>
                      );
                    })}
                    {/* <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navigationItems.length * 0.1 }}
                      className="pt-2 border-t border-white/8"
                    >
                      <Button
                        variant="outline"
                        onClick={() => scrollToSection("contact")}
                        className="w-full border-valorant-red text-valorant-red hover:bg-valorant-red hover:text-white"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        CONTACT
                      </Button>
                    </motion.div> */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
