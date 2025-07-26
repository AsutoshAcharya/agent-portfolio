"use client";

import type React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  X,
  Send,
  Github,
  LinkedinIcon,
  Twitter,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    color: "text-white",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://linkedin.com",
    color: "text-blue-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    color: "text-sky-400",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:alex@example.com",
    color: "text-valorant-red",
  },
];

export default function ContactModal({
  open,
  onOpenChange,
}: ContactModalProps) {
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form
  const [isOnline] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback(null);

    if (formRef.current) {
      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        );
        setFeedback({
          type: "success",
          message:
            "Party invite sent successfully! I will get back to you shortly.",
        });
        formRef.current.reset(); // Reset form fields on success
        setTimeout(() => onOpenChange(false), 2000); // Close modal after 2 seconds
      } catch (error) {
        console.error("Failed to send party invite:", error);
        setFeedback({
          type: "error",
          message: "Failed to send party invite. Please try again later.",
        });
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-valorant-surface border border-white/8 p-8 clip-corner-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold uppercase tracking-wider text-valorant-text mb-2 font-bebas">
                  PARTY INVITE
                </h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isOnline ? "bg-green-400 animate-pulse" : "bg-red-400"
                      }`}
                    ></div>
                    <span className="text-xs font-mono text-valorant-text/60">
                      {isOnline ? "ONLINE" : "OFFLINE"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-valorant-text/60">
                    <Clock className="w-3 h-3" />
                    <span>PST</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-valorant-text/60">
                    <MapPin className="w-3 h-3" />
                    <span>San Francisco</span>
                  </div>
                </div>
              </div>

              <Button
                variant="ghost"
                onClick={() => onOpenChange(false)}
                className="text-valorant-text/60 hover:text-valorant-text p-2"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-2"
                  >
                    AGENT NAME
                  </label>
                  <Input
                    id="name"
                    name="user_name" // Name attribute for EmailJS template
                    placeholder="Enter your name"
                    className="bg-valorant-bg/50 border-white/20 text-valorant-text placeholder:text-valorant-text/40 focus:border-valorant-teal"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-2"
                  >
                    CONTACT ID
                  </label>
                  <Input
                    id="email"
                    name="user_email" // Name attribute for EmailJS template
                    type="email"
                    placeholder="your.email@domain.com"
                    className="bg-valorant-bg/50 border-white/20 text-valorant-text placeholder:text-valorant-text/40 focus:border-valorant-teal"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-2"
                >
                  MISSION BRIEF
                </label>
                <Input
                  id="subject"
                  name="subject" // Name attribute for EmailJS template
                  placeholder="Project collaboration, job opportunity, etc."
                  className="bg-valorant-bg/50 border-white/20 text-valorant-text placeholder:text-valorant-text/40 focus:border-valorant-teal"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-2"
                >
                  DETAILED INTEL
                </label>
                <Textarea
                  id="message"
                  name="message" // Name attribute for EmailJS template
                  placeholder="Tell me about your project, requirements, timeline, and any specific details..."
                  rows={5}
                  className="bg-valorant-bg/50 border-white/20 text-valorant-text placeholder:text-valorant-text/40 focus:border-valorant-teal resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSending} // Disable button while sending
                className="w-full bg-valorant-red hover:bg-valorant-red/80 text-white font-bold uppercase tracking-wider py-3 clip-corner"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSending ? "SENDING INVITE..." : "SEND INVITE"}{" "}
                {/* Update button text */}
              </Button>
              {feedback && (
                <p
                  className={`mt-4 text-center text-sm ${
                    feedback.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {feedback.message}
                </p>
              )}
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/8">
              <h3 className="text-sm font-mono text-valorant-text/60 uppercase tracking-wider mb-4">
                ALTERNATIVE CHANNELS
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-valorant-bg/50 border border-white/20 px-4 py-2 clip-corner hover:border-valorant-teal/50 transition-colors group"
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

            {/* Response Time */}
            <div className="mt-6 p-4 bg-valorant-bg/30 border border-white/8 clip-corner">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-valorant-teal rounded-full animate-pulse"></div>
                <span className="text-valorant-text/80">
                  <span className="text-valorant-teal font-mono">
                    RESPONSE TIME:
                  </span>{" "}
                  Usually within 24 hours
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
