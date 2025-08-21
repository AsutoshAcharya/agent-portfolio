"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";
import { experiences } from "./constants/constant";

export default function ExperienceTimeline() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-center mb-4 font-bebas">
          CAREER PROGRESSION
        </h2>
        <p className="text-center text-valorant-text/60 mb-12 max-w-2xl mx-auto">
          Career progression timeline with unlocked achievements and skill
          development milestones.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-valorant-teal/30"></div>
          <motion.div
            className="absolute left-8 top-0 w-0.5 bg-valorant-teal"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          ></motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.level}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex items-start gap-8"
              >
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 bg-valorant-surface border-2 border-valorant-teal rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-xl font-bold text-valorant-teal font-mono">
                      {exp.level}
                    </span>
                  </motion.div>
                  {exp.unlocked && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="absolute -top-1 -right-1 w-6 h-6 bg-valorant-red rounded-full flex items-center justify-center"
                    >
                      <span className="text-xs text-white">✓</span>
                    </motion.div>
                  )}
                </div>

                <motion.div
                  className="flex-1 bg-valorant-surface border border-white/8 p-6 clip-corner relative overflow-hidden group"
                  whileHover={{ y: -2 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-valorant-teal/5 transform rotate-45 translate-x-16 -translate-y-16 group-hover:bg-valorant-teal/10 transition-colors duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-valorant-text mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-valorant-teal font-semibold mb-2">
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-valorant-text/60">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-mono">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <TrendingUp className="w-4 h-4 text-valorant-red" />
                        <span className="text-valorant-red font-bold text-sm">
                          {exp.impact}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-2">
                        KEY ACHIEVEMENTS
                      </h4>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-valorant-text/80 flex gap-2 flex-row"
                          >
                            <span className="text-valorant-teal flex-shrink-0">
                              ▶
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.tools.length > 0 && (
                      <div>
                        <h4 className="text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-2">
                          TECH STACK
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tools.map((tool) => (
                            <Badge
                              key={tool}
                              variant="secondary"
                              className="text-xs bg-valorant-bg/50 text-valorant-text/80"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-valorant-bg/50">
                    <motion.div
                      className="h-full bg-valorant-teal"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
