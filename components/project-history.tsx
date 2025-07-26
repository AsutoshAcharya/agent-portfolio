"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects, techIcons } from "./constants/constant";

export default function ProjectHistory() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
    hover: { x: 6 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
    exit: { scale: 0.9, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-center mb-4 font-bebas">
          PROJECT HISTORY
        </h2>

        <div className="space-y-4 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              // onClick={() => setSelectedProject(project)}
              className="bg-valorant-surface border border-white/8 p-6 clip-corner cursor-pointer hover:border-valorant-teal/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold text-valorant-text group-hover:text-valorant-teal transition-colors">
                      {project.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`text-xs font-mono ${
                        project.status === "VICTORY"
                          ? "border-green-400 text-green-400"
                          : "border-red-400 text-red-400"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <div className="flex gap-2 mb-4">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, "_blank");
                        }}
                        className="border-valorant-teal text-valorant-teal hover:bg-valorant-teal hover:text-valorant-bg font-bold uppercase tracking-wider px-3 py-1 clip-corner bg-transparent text-xs"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        CODE
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, "_blank");
                        }}
                        className="border-valorant-red text-valorant-red hover:bg-valorant-red hover:text-white font-bold uppercase tracking-wider px-3 py-1 clip-corner bg-transparent text-xs"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        LIVE
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => {
                      const Icon = techIcons[tech as keyof typeof techIcons];
                      return (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-valorant-bg/50 text-valorant-text/80 h-12 w-12"
                        >
                          <Icon />
                        </Badge>
                      );
                    })}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs font-mono border-valorant-red text-valorant-red w-fit"
                  >
                    {project.role}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-valorant-surface border border-white/8 p-8 clip-corner-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-valorant-text mb-2">
                      {selectedProject.name}
                    </h3>
                    <div className="flex items-center gap-4">
                      <Badge
                        variant="outline"
                        className="border-green-400 text-green-400"
                      >
                        {selectedProject.status}
                      </Badge>
                      <span className="text-sm text-valorant-text/60 font-mono">
                        DURATION: {selectedProject.duration}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedProject(null)}
                    className="text-valorant-text/60 hover:text-valorant-text"
                    aria-label="Close modal"
                  >
                    ✕
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-valorant-bg/50 border border-white/8 p-4 clip-corner">
                    <div className="text-lg font-bold text-valorant-red">
                      {selectedProject.result}
                    </div>
                    <div className="text-xs text-valorant-text/60 uppercase">
                      PERFORMANCE
                    </div>
                  </div>
                  <div className="bg-valorant-bg/50 border border-white/8 p-4 clip-corner">
                    <div className="text-lg font-bold text-valorant-teal">
                      {selectedProject.impact}
                    </div>
                    <div className="text-xs text-valorant-text/60 uppercase">
                      REACH
                    </div>
                  </div>
                  <div className="bg-valorant-bg/50 border border-white/8 p-4 clip-corner">
                    <div className="text-xs text-valorant-text/60 uppercase">
                      K/D/A
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-2">
                    OVERVIEW
                  </h4>
                  <p className="text-valorant-text/80">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-2">
                    TECH STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => {
                      const Icon = techIcons[tech as keyof typeof techIcons];
                      return (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-valorant-bg/50 text-valorant-text/80"
                        >
                          <Icon />
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-2">
                      CHALLENGES
                    </h4>
                    <ul className="space-y-1">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li
                          key={index}
                          className="text-sm text-valorant-text/80 flex items-start gap-2"
                        >
                          <span className="text-valorant-red mt-1">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-2">
                      LEARNINGS
                    </h4>
                    <ul className="space-y-1">
                      {selectedProject.learnings.map((learning, index) => (
                        <li
                          key={index}
                          className="text-sm text-valorant-text/80 flex items-start gap-2"
                        >
                          <span className="text-valorant-teal mt-1">•</span>
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  {selectedProject.githubUrl && (
                    <Button
                      asChild
                      className="bg-valorant-red hover:bg-valorant-red/80 text-white font-bold uppercase tracking-wider px-6 py-3 clip-corner"
                    >
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        VIEW CODE
                      </a>
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-valorant-teal text-valorant-teal hover:bg-valorant-teal hover:text-valorant-bg font-bold uppercase tracking-wider px-6 py-3 clip-corner bg-transparent"
                    >
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        LIVE DEMO
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
