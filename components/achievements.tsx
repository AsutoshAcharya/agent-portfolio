"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Star,
  Award,
  Target,
  Code,
  Users,
  Zap,
  Shield,
} from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Code Warrior",
    description: "Shipped 50+ production features",
    icon: Code,
    rarity: "RADIANT",
    progress: 100,
    unlocked: true,
    date: "2024",
  },
  {
    id: 1,
    title: "Project Contributor",
    description: "Contributed to 3 high impact projects",
    icon: Users,
    rarity: "IMMORTAL",
    progress: 80,
    unlocked: true,
    date: "2022",
  },
  {
    id: 3,
    title: "Performance Ace",
    description: "Optimized app performance by 200%+",
    icon: Zap,
    rarity: "IMMORTAL",
    progress: 100,
    unlocked: true,
    date: "2023",
  },
  {
    id: 4,
    title: "UX Specialist",
    description: "Provided better UX approaches for improved user satisfaction",
    icon: Star,
    rarity: "SILVER",
    progress: 35,
    unlocked: true,
    date: "2024",
  },
  {
    id: 5,
    title: "Security Guardian",
    description: "Spearheaded security initiatives to safeguard critical data",
    icon: Shield,
    rarity: "DIAMOND",
    progress: 100,
    unlocked: true,
    date: "2022",
  },
  {
    id: 6,
    title: "Innovation Master",
    description: "Created 5 breakthrough solutions",
    icon: Target,
    rarity: "PLATINUM",
    progress: 60,
    unlocked: false,
    date: "In Progress",
  },
  {
    id: 7,
    title: "Hackathon Contributor",
    description:
      "Received consolidated rewards for participating in 1 major hackathon",
    icon: Trophy,
    rarity: "GOLD",
    progress: 85,
    unlocked: true,
    date: "2023",
  },

  {
    id: 8,
    title: "Mentor Elite",
    description: "Guided and conducted code reviews for 2 junior developers",
    icon: Award,
    rarity: "PLATINUM",
    progress: 85,
    unlocked: true,
    date: "2024",
  },
];

const rarityColors = {
  RADIANT: "from-yellow-400 to-orange-400 border-yellow-400",
  IMMORTAL: "from-valorant-red to-red-400 border-valorant-red",
  DIAMOND: "from-pink-400 to-rose-400 border-pink-400",
  PLATINUM: "from-teal-400 to-green-400 border-teal-400",
  GOLD: "from-orange-400 to-yellow-400 border-orange-400",
  SILVER: "from-gray-400 to-gray-500 border-gray-400",
};

export default function Achievements() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-center mb-4 font-bebas">
          ACHIEVEMENTS & BADGES
        </h2>
        <p className="text-center text-valorant-text/60 mb-12 max-w-2xl mx-auto">
          Career milestones and recognition earned through exceptional
          performance and contributions.
        </p>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="bg-valorant-surface border border-white/8 p-4 clip-corner text-center">
            <div className="text-2xl font-bold text-valorant-red font-mono">
              {achievements.filter((a) => a.unlocked).length}
            </div>
            <div className="text-xs text-valorant-text/60 uppercase tracking-wider">
              UNLOCKED
            </div>
          </div>
          <div className="bg-valorant-surface border border-white/8 p-4 clip-corner text-center">
            <div className="text-2xl font-bold text-valorant-teal font-mono">
              {achievements.length}
            </div>
            <div className="text-xs text-valorant-text/60 uppercase tracking-wider">
              TOTAL
            </div>
          </div>
          <div className="bg-valorant-surface border border-white/8 p-4 clip-corner text-center">
            <div className="text-2xl font-bold text-yellow-400 font-mono">
              {Math.round(
                achievements.reduce((acc, a) => acc + a.progress, 0) /
                  achievements.length
              )}
              %
            </div>
            <div className="text-xs text-valorant-text/60 uppercase tracking-wider">
              COMPLETION
            </div>
          </div>
          <div className="bg-valorant-surface border border-white/8 p-4 clip-corner text-center">
            <div className="text-2xl font-bold text-purple-400 font-mono">
              {
                achievements.filter(
                  (a) => a.rarity === "RADIANT" || a.rarity === "IMMORTAL"
                ).length
              }
            </div>
            <div className="text-xs text-valorant-text/60 uppercase tracking-wider">
              RARE
            </div>
          </div>
        </motion.div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isUnlocked = achievement.unlocked;

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: isUnlocked ? 1.05 : 1.02, y: -4 }}
                className={`
                  relative bg-valorant-surface border p-6 clip-corner overflow-hidden cursor-pointer group
                  ${
                    isUnlocked
                      ? `border-${
                          achievement.rarity === "RADIANT"
                            ? "yellow"
                            : achievement.rarity === "IMMORTAL"
                            ? "valorant-red" // Updated
                            : achievement.rarity === "DIAMOND"
                            ? "pink" // Updated
                            : achievement.rarity === "PLATINUM"
                            ? "teal"
                            : "orange"
                        }-400/50 hover:border-${
                          achievement.rarity === "RADIANT"
                            ? "yellow"
                            : achievement.rarity === "IMMORTAL"
                            ? "valorant-red" // Updated
                            : achievement.rarity === "DIAMOND"
                            ? "pink" // Updated
                            : achievement.rarity === "PLATINUM"
                            ? "teal"
                            : "orange"
                        }-400`
                      : "border-white/8 opacity-60"
                  }
                `}
              >
                {/* Background Glow */}
                {isUnlocked && (
                  <div
                    className={`
                    absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300
                    ${
                      rarityColors[
                        achievement.rarity as keyof typeof rarityColors
                      ].split(" ")[0]
                    }
                  `}
                  ></div>
                )}

                {/* Lock Overlay */}
                {!isUnlocked && (
                  <div className="absolute inset-0 bg-valorant-bg/80 flex items-center justify-center">
                    <div className="text-4xl">🔒</div>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`
                      p-3 rounded-full border-2 
                      ${
                        isUnlocked
                          ? `bg-gradient-to-br ${
                              rarityColors[
                                achievement.rarity as keyof typeof rarityColors
                              ]
                            }`
                          : "bg-valorant-bg/50 border-white/20"
                      }
                    `}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          isUnlocked ? "text-white" : "text-white/40"
                        }`}
                      />
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs font-mono ${
                        isUnlocked
                          ? rarityColors[
                              achievement.rarity as keyof typeof rarityColors
                            ].split(" ")[2] +
                            " " +
                            rarityColors[
                              achievement.rarity as keyof typeof rarityColors
                            ]
                              .split(" ")[2]
                              .replace("border-", "text-")
                          : "border-white/20 text-white/40"
                      }`}
                    >
                      {achievement.rarity}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      isUnlocked ? "text-valorant-text" : "text-white/40"
                    }`}
                  >
                    {achievement.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      isUnlocked ? "text-valorant-text/80" : "text-white/30"
                    }`}
                  >
                    {achievement.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span
                        className={`text-xs font-mono ${
                          isUnlocked ? "text-valorant-text/60" : "text-white/30"
                        }`}
                      >
                        PROGRESS
                      </span>
                      <span
                        className={`text-xs font-mono ${
                          isUnlocked ? "text-valorant-text/60" : "text-white/30"
                        }`}
                      >
                        {achievement.progress}%
                      </span>
                    </div>
                    <div className="h-1 bg-valorant-bg/50 overflow-hidden">
                      <motion.div
                        className={`h-full ${
                          isUnlocked
                            ? `bg-gradient-to-r ${
                                rarityColors[
                                  achievement.rarity as keyof typeof rarityColors
                                ].split(" ")[0]
                              }`
                            : "bg-white/20"
                        }`}
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${achievement.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div
                    className={`text-xs font-mono ${
                      isUnlocked ? "text-valorant-text/40" : "text-white/20"
                    }`}
                  >
                    {isUnlocked
                      ? `UNLOCKED ${achievement.date}`
                      : achievement.date}
                  </div>
                </div>

                {/* Shine Effect */}
                {isUnlocked && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
