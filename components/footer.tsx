"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  Keyboard,
  Info,
  Linkedin,
  Youtube,
} from "lucide-react";
import { socialLinks } from "./constants/constant";

const buildInfo = {
  version: "v2.4.1",
  lastDeploy: "2024-01-15",
  commit: "a7b3c9d",
  uptime: "99.9%",
};

export default function Footer() {
  return (
    <footer className="bg-valorant-surface border-t border-white/8 py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-valorant-teal/20 via-transparent to-valorant-red/20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <div className="bg-valorant-bg/30 border border-white/8 p-6 clip-corner">
            <h3 className="text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Info className="w-4 h-4 text-valorant-teal" />
              BUILD INFO
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-valorant-text/40">VERSION:</span>
                <Badge
                  variant="outline"
                  className="text-xs font-mono border-valorant-teal text-valorant-teal"
                >
                  {buildInfo.version}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-valorant-text/40">DEPLOYED:</span>
                <span className="text-xs font-mono text-valorant-text/60">
                  {buildInfo.lastDeploy}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-valorant-text/40">COMMIT:</span>
                <span className="text-xs font-mono text-valorant-text/60">
                  {buildInfo.commit}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-valorant-text/40">UPTIME:</span>
                <span className="text-xs font-mono text-green-400">
                  {buildInfo.uptime}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-valorant-bg/30 border border-white/8 p-6 clip-corner">
            <h3 className="text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-4 flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-valorant-red" />
              SOCIAL CHANNELS
            </h3>
            <div className="flex flex-wrap justify-evenly gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 2 }}
                    className="flex items-center gap-2 bg-valorant-surface/50 border border-white/20 px-4 py-2 clip-corner hover:border-valorant-teal/50 transition-colors group"
                  >
                    <Icon
                      className={`w-4 h-4 ${social.color} group-hover:text-valorant-teal transition-colors`}
                    />
                    <span className="text-sm text-valorant-text/80 group-hover:text-valorant-teal transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* <div className="bg-valorant-bg/30 border border-white/8 p-6 clip-corner">
            <h3 className="text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Keyboard className="w-4 h-4 text-valorant-teal" />
              SHORTCUTS
            </h3>
            <div className="space-y-2">
              {shortcuts.map((shortcut) => (
                <div key={shortcut.key} className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs font-mono border-white/20 text-valorant-text/60">
                    {shortcut.key}
                  </Badge>
                  <span className="text-xs text-valorant-text/40">{shortcut.action}</span>
                </div>
              ))}
            </div>
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-8 pt-8 border-t border-white/8 text-center"
        >
          <p className="text-xs text-valorant-text/40 font-mono">
            © 2025 ASUTOSH ACHARYA // SOFTWARE DEVELOPER // ALL RIGHTS RESERVED
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
