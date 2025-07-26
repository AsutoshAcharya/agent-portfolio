"use client";

import { motion } from "framer-motion";
import { useState, FC, SVGProps } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap, Users } from "lucide-react";
import ReactIcon from "@/lib/assets/ReactIcon";
import TsIcon from "@/lib/assets/TsIcon";
import NodeJsIcon from "@/lib/assets/NodeJsIcon";
import MongoIcon from "@/lib/assets/MongoIcon";

const stats = [
  {
    label: "FIELD TIME",
    value: 2.8,
    suffix: "+",
    subtext: "Years of Experience",
  },
  { label: "MISSIONS", value: 8, suffix: "", subtext: "Completed Projects" },
  { label: "OPS LOGGED", value: 2500, suffix: "+", subtext: "Git Commits" },
  {
    label: "LOADOUTS",
    value: 15,
    suffix: "+",
    subtext: "Technologies & Tools Used",
  },
];
type Ability = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  cooldown: string;
};
const abilities: Array<Ability> = [
  { name: "React", icon: ReactIcon, cooldown: "0s" },
  { name: "TypeScript", icon: TsIcon, cooldown: "0s" },
  { name: "Node.js", icon: NodeJsIcon, cooldown: "2s" },
  { name: "MongoDB", icon: MongoIcon, cooldown: "3s" },
];

export default function AgentCard() {
  // const [counters, setCounters] = useState(stats.map(() => 0));
  const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   const timers = stats.map((stat, index) => {
  //     const increment = stat.value / 50;
  //     let current = 0;

  //     return setInterval(() => {
  //       current += increment;
  //       if (current >= stat.value) {
  //         current = stat.value;
  //         clearInterval(timers[index]);
  //       }
  //       setCounters((prev) => {
  //         const newCounters = [...prev];
  //         newCounters[index] = Math.floor(current);
  //         return newCounters;
  //       });
  //     }, 30);
  //   });

  //   return () => timers.forEach((timer) => clearInterval(timer));
  // }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-valorant-teal/10 via-transparent to-valorant-red/10 rounded-lg"
          animate={{
            opacity: isHovered ? 0.3 : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-valorant-teal rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          className="bg-valorant-surface border border-white/8 p-8 clip-corner-lg relative overflow-hidden min-h-[600px]"
          whileHover={{
            borderColor: "rgba(10, 200, 185, 0.5)",
            boxShadow: "0 0 30px rgba(10, 200, 185, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-valorant-teal/20 to-transparent h-0.5"
            animate={{
              y: [0, 600, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <div className="absolute inset-0 opacity-5">
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-valorant-red transform rotate-45 translate-x-32 -translate-y-32"
              animate={{
                rotate: [45, 50, 45],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-48 h-48 bg-valorant-teal transform -rotate-45 -translate-x-24 translate-y-24"
              animate={{
                rotate: [-45, -40, -45],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-start justify-between">
                <div>
                  <motion.h1
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{
                      clipPath: "inset(0 0% 0 0)",
                      textShadow: [
                        "0 0 10px rgba(10, 200, 185, 0.3)",
                        "0 0 15px rgba(10, 200, 185, 0.5)",
                        "0 0 10px rgba(10, 200, 185, 0.3)",
                      ],
                    }}
                    transition={{
                      clipPath: { duration: 1.5, ease: "easeOut", delay: 0.2 },
                      textShadow: {
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                    }}
                    className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-valorant-text mb-2 font-bebas relative"
                    whileHover={{
                      textShadow:
                        "0 0 30px rgba(10, 200, 185, 0.8), 0 0 50px rgba(255, 70, 85, 0.5)", // More intense hover glow
                      scale: 1.03,
                    }}
                  >
                    Asutosh Acharya
                    <motion.span
                      className="absolute inset-0 text-valorant-red"
                      animate={{
                        opacity: [0, 0.6, 0, 0.3, 0],
                        x: [0, 8, -8, 0],
                        y: [0, 4, -4, 0],
                      }}
                      transition={{
                        duration: 0.06,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 0.2,
                      }}
                    >
                      Asutosh Acharya
                    </motion.span>
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4 text-valorant-text/80"
                  >
                    <span className="font-mono text-sm">#DEV117</span>
                    <Badge
                      variant="outline"
                      className="border-valorant-teal text-valorant-teal"
                    >
                      {/* ROLE // */}
                      SOFTWARE ENGINEER
                    </Badge>
                    <div className="flex items-center gap-1 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>Odisha, India</span>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <span className="text-xs font-mono text-valorant-text/60">
                    ONLINE
                  </span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-valorant-bg/50 border border-white/8 p-4 clip-corner relative overflow-hidden group"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(255, 70, 85, 0.5)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-valorant-red/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="relative z-10">
                      <motion.div
                        className="text-2xl font-bold text-valorant-red font-mono"
                        animate={{
                          textShadow: isHovered
                            ? "0 0 10px rgba(255, 70, 85, 0.5)"
                            : "none",
                        }}
                      >
                        {stat.value}
                        {stat.suffix}
                      </motion.div>
                      <div className="text-xs text-valorant-text/60 uppercase tracking-wider">
                        {stat.label}
                        <span className="block text-[10px] text-valorant-text/40 normal-case tracking-normal mt-1">
                          {stat.subtext}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-4">
                  ABILITIES
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {abilities.map((ability, index) => (
                    <motion.div
                      key={ability.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{
                        // scale: 1.1,
                        // rotateY: 10,
                        boxShadow: "0 10px 25px rgba(10, 200, 185, 0.2)",
                      }}
                      className="bg-valorant-bg/30 border border-white/8 p-3 clip-corner cursor-pointer group relative overflow-hidden"
                    >
                      <motion.div
                        className="text-lg mb-1"
                        initial={{ scale: 0.7 }}
                        whileHover={{ scale: 1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {<ability.icon />}
                      </motion.div>
                      {/* <p className="text-xs font-bold text-valorant-text text-center">
                        {ability.name}
                      </p> */}
                      <p className="text-xs text-valorant-text/40 font-mono text-center">
                        {ability.cooldown}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button
                    className="w-full bg-valorant-red hover:bg-valorant-red/80 text-white font-bold uppercase tracking-wider px-8 py-3 clip-corner relative overflow-hidden group"
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <Zap className="w-4 h-4 mr-2" />
                    SEE PROJECTS
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full border-valorant-teal text-valorant-teal hover:bg-valorant-teal hover:text-valorant-bg font-bold uppercase tracking-wider px-8 py-3 clip-corner bg-transparent relative overflow-hidden group"
                    onClick={() =>
                      document
                        .getElementById("experience")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <motion.div
                      className="absolute inset-0 bg-valorant-teal/20"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Users className="w-4 h-4 mr-2" />
                    EXPERIENCE
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {[
          { position: "-top-2 -left-2", borders: "border-l-2 border-t-2" },
          { position: "-top-2 -right-2", borders: "border-r-2 border-t-2" },
          { position: "-bottom-2 -left-2", borders: "border-l-2 border-b-2" },
          { position: "-bottom-2 -right-2", borders: "border-r-2 border-b-2" },
        ].map((bracket, index) => (
          <motion.div
            key={index}
            className={`absolute ${bracket.position} w-8 h-8 ${bracket.borders} border-valorant-teal`}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.5,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
