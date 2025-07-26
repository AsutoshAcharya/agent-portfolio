"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { rankColors, techIcons, techStack } from "./constants/constant";

const filters = [
  { key: "languages" as const, label: "LANGUAGES" },
  { key: "frontend" as const, label: "FRONTEND" },
  { key: "backend" as const, label: "BACKEND" },
  { key: "database" as const, label: "DATABASE" },
  { key: "tools" as const, label: "TOOLS" },
  { key: "gamedev" as const, label: "GAMEDEV", locked: true },
];

export default function TechStack() {
  const [activeFilter, setActiveFilter] =
    useState<keyof typeof techStack>("frontend");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-center mb-4 font-bebas">
          LOADOUT & ABILITIES
        </h2>
        <p className="text-center text-valorant-text/60 mb-12 max-w-2xl mx-auto">
          My arsenal of technologies and tools, ranked by proficiency and
          battle-tested in production environments.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className={`
                font-bold uppercase tracking-wider px-6 py-3 clip-corner transition-all duration-300 relative
                ${
                  activeFilter === filter.key
                    ? "bg-valorant-red text-white shadow-lg shadow-valorant-red/25"
                    : filter.locked
                    ? "border-red-400/50 text-red-400/80 hover:border-red-400 hover:text-red-400 bg-valorant-surface/30 hover:bg-red-400/5"
                    : "border-valorant-teal/40 text-valorant-teal/90 hover:border-valorant-teal hover:text-valorant-teal bg-valorant-surface/50 hover:bg-valorant-teal/5"
                }
              `}
            >
              {filter.label}
              {filter.locked && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">🔒</span>
                </div>
              )}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {techStack[activeFilter].map((tech, index) => {
              const Icon = techIcons[tech.name as keyof typeof techIcons];
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: tech.isLocked ? 1.01 : 1.02,
                    y: tech.isLocked ? -1 : -2,
                    rotateY: tech.isLocked ? 2 : 0,
                  }}
                  onHoverStart={() =>
                    !tech.isLocked && setHoveredTech(tech.name)
                  }
                  onHoverEnd={() => setHoveredTech(null)}
                  className={`
                    bg-valorant-surface border p-6 clip-corner relative overflow-hidden cursor-pointer group
                    ${
                      tech.isLocked
                        ? "border-red-400/30 hover:border-red-400/60"
                        : "border-white/8 hover:border-valorant-teal/50"
                    }
                  `}
                >
                  {tech.isLocked && (
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-red-800/10 to-transparent flex items-center justify-center z-20">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="text-4xl filter drop-shadow-lg"
                      >
                        🔒
                      </motion.div>
                    </div>
                  )}

                  {tech.isLocked && (
                    <motion.div
                      className="absolute inset-0 bg-red-500/5"
                      animate={{
                        opacity: [0, 0.1, 0, 0.05, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        times: [0, 0.1, 0.2, 0.8, 1],
                      }}
                    />
                  )}

                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-br transition-opacity duration-300
                      ${
                        tech.isLocked
                          ? "from-red-400/10 to-red-600/5 opacity-40 group-hover:opacity-60"
                          : "from-valorant-teal/5 to-transparent opacity-0 group-hover:opacity-100"
                      }
                    `}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {Icon && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Icon
                              className={`w-6 h-6 ${
                                tech.isLocked
                                  ? "text-red-400/80 group-hover:text-red-400"
                                  : "text-valorant-teal group-hover:text-valorant-red"
                              }`}
                            />
                          </motion.div>
                        )}
                        <h3
                          className={`text-xl font-bold transition-colors ${
                            tech.isLocked
                              ? "text-red-400/80 group-hover:text-red-400"
                              : "text-valorant-text group-hover:text-valorant-teal"
                          }`}
                        >
                          {tech.name}
                        </h3>
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs font-mono ${
                          tech.isLocked
                            ? "border-red-400/60 text-red-400/80 bg-red-400/5"
                            : rankColors[tech.rank]
                        }`}
                      >
                        {tech.rank}
                      </Badge>
                    </div>

                    <p
                      className={`text-sm mb-3 ${
                        tech.isLocked
                          ? "text-red-400/70"
                          : "text-valorant-text/80"
                      }`}
                    >
                      {tech.description}
                    </p>

                    <div
                      className={`text-xs font-mono mb-2 ${
                        tech.isLocked
                          ? "text-red-400/60"
                          : "text-valorant-text/60"
                      }`}
                    >
                      <span
                        className={
                          tech.isLocked
                            ? "text-red-400/80"
                            : "text-valorant-teal"
                        }
                      >
                        {tech.isLocked ? "REQUIREMENT:" : "APPLICATION:"}
                      </span>{" "}
                      {tech.isLocked ? tech.unlockRequirement : tech.usage}
                    </div>

                    {tech.isLocked && (
                      <div className="text-xs font-mono text-red-400/50 mb-3">
                        <span className="text-red-400/70">ETA:</span> {tech.eta}
                      </div>
                    )}

                    <div className="mt-4 h-1 bg-valorant-bg/50 overflow-hidden">
                      <motion.div
                        className={`h-full ${
                          tech.isLocked
                            ? "bg-gradient-to-r from-red-600/60 to-red-400/40"
                            : "bg-valorant-teal"
                        }`}
                        initial={{ width: "0%" }}
                        animate={{
                          width: tech.isLocked
                            ? "25%"
                            : hoveredTech === tech.name
                            ? "100%"
                            : "0%",
                        }}
                        transition={{ duration: tech.isLocked ? 2 : 0.3 }}
                      />
                    </div>

                    {tech.isLocked && (
                      <div className="mt-2 text-xs text-red-400/60 font-mono">
                        UNLOCK PROGRESS: 25%
                      </div>
                    )}
                  </div>

                  <div
                    className={`
                      absolute top-0 right-0 w-8 h-8 transform rotate-45 translate-x-4 -translate-y-4 transition-all duration-300
                      ${
                        tech.isLocked
                          ? "bg-red-500/30 group-hover:bg-red-500/50 shadow-red-500/20 shadow-lg"
                          : "bg-valorant-red/20 group-hover:bg-valorant-red/40"
                      }
                    `}
                  ></div>

                  {tech.isLocked && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent h-0.5"
                      animate={{
                        y: [0, 200, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
